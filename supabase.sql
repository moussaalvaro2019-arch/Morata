-- =====================================================================
-- Morata · Académie du bâtiment : base de données Supabase
-- À coller en entier dans Supabase > SQL Editor > New query > Run.
-- Le script peut être relancé sans risque (il ne supprime aucune donnée).
-- =====================================================================

-- ---------- Tables ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  data jsonb not null default '{}'::jsonb,          -- nom, téléphone, ville, profil
  status text not null default 'actif',            -- actif | suspendu (modifiable par la direction seulement)
  created_at timestamptz not null default now(),
  last_seen timestamptz,
  last_page text
);
create table if not exists public.admins        (uid uuid primary key references auth.users(id) on delete cascade, email text, name text, created_at timestamptz not null default now());
create table if not exists public.admin_invites (email text primary key, name text, created_at timestamptz not null default now());
create table if not exists public.settings      (id text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
create table if not exists public.contents      (id text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
create table if not exists public.annonces      (id text primary key, data jsonb not null default '{}'::jsonb, created_at timestamptz not null default now());
create table if not exists public.progress      (id text primary key, owner uuid not null default auth.uid() references auth.users(id) on delete cascade, data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
create table if not exists public.quiz_results  (id text primary key, owner uuid not null default auth.uid() references auth.users(id) on delete cascade, data jsonb not null default '{}'::jsonb, created_at timestamptz not null default now());
create table if not exists public.works         (id text primary key, owner uuid not null default auth.uid() references auth.users(id) on delete cascade, kind text not null default 'dessin', data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
create table if not exists public.connexions    (id bigint generated always as identity primary key, owner uuid not null default auth.uid() references auth.users(id) on delete cascade, at timestamptz not null default now(), data jsonb not null default '{}'::jsonb);
create table if not exists public.ia_logs       (id bigint generated always as identity primary key, owner uuid references auth.users(id) on delete cascade, at timestamptz not null default now(), data jsonb not null default '{}'::jsonb);

create index if not exists connexions_at_idx    on public.connexions (at desc);
create index if not exists connexions_owner_idx on public.connexions (owner);
create index if not exists progress_owner_idx   on public.progress (owner);
create index if not exists quiz_owner_idx       on public.quiz_results (owner);
create index if not exists works_owner_idx      on public.works (owner);
create index if not exists ia_logs_owner_at_idx on public.ia_logs (owner, at desc);

-- ---------- Rôles ----------
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where uid = auth.uid());
$$;

create or replace function public.is_active() returns boolean
language sql stable security definer set search_path = public as $$
  select auth.uid() is not null and coalesce((select status from public.profiles where id = auth.uid()), 'actif') <> 'suspendu';
$$;

create or replace function public.is_real_user() returns boolean
language sql stable as $$
  select auth.uid() is not null
     and coalesce((auth.jwt()->>'is_anonymous')::boolean, false) = false
     and coalesce(auth.jwt()->>'email', '') <> '';
$$;

-- ---------- Création automatique du profil à l'inscription ----------
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, data)
  values (new.id, lower(new.email), coalesce(new.raw_user_meta_data, '{}'::jsonb) - 'email_verified' - 'sub' - 'email' - 'phone_verified')
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();
-- comptes déjà existants (si le script est lancé après des inscriptions)
insert into public.profiles (id, email, data)
select id, lower(email), coalesce(raw_user_meta_data, '{}'::jsonb) - 'email_verified' - 'sub' - 'email' - 'phone_verified' from auth.users
on conflict (id) do nothing;

-- ---------- Sécurité par ligne (RLS) ----------
alter table public.profiles      enable row level security;
alter table public.admins        enable row level security;
alter table public.admin_invites enable row level security;
alter table public.settings      enable row level security;
alter table public.contents      enable row level security;
alter table public.annonces      enable row level security;
alter table public.progress      enable row level security;
alter table public.quiz_results  enable row level security;
alter table public.works         enable row level security;
alter table public.connexions    enable row level security;
alter table public.ia_logs       enable row level security;

do $$ declare r record; begin
  for r in select policyname, tablename from pg_policies where schemaname = 'public'
    and tablename in ('profiles','admins','admin_invites','settings','contents','annonces','progress','quiz_results','works','connexions','ia_logs')
  loop execute format('drop policy if exists %I on public.%I', r.policyname, r.tablename); end loop;
end $$;

-- Profils : chacun voit et modifie le sien (sauf le statut), la direction voit tout
create policy profiles_read   on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy profiles_update on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

-- Administrateurs et invitations
create policy admins_read      on public.admins for select using (public.is_admin() or uid = auth.uid());
create policy admins_delete    on public.admins for delete using (public.is_admin() and uid <> auth.uid());
create policy invites_admin    on public.admin_invites for all using (public.is_admin()) with check (public.is_admin());

-- Paramètres, contenus pédagogiques, annonces : lecture publique, écriture par la direction
create policy settings_read  on public.settings for select using (true);
create policy settings_write on public.settings for all using (public.is_admin()) with check (public.is_admin());
create policy contents_read  on public.contents for select using (true);
create policy contents_write on public.contents for all using (public.is_admin()) with check (public.is_admin());
create policy annonces_read  on public.annonces for select using (true);
create policy annonces_write on public.annonces for all using (public.is_admin()) with check (public.is_admin());

-- Progression, quiz, travaux : chacun gère les siens, la direction voit tout
create policy progress_read   on public.progress for select using (owner = auth.uid() or public.is_admin());
create policy progress_insert on public.progress for insert with check (owner = auth.uid() and public.is_active());
create policy progress_update on public.progress for update using (owner = auth.uid()) with check (owner = auth.uid() and public.is_active());
create policy progress_delete on public.progress for delete using (owner = auth.uid() or public.is_admin());

create policy quiz_read   on public.quiz_results for select using (owner = auth.uid() or public.is_admin());
create policy quiz_insert on public.quiz_results for insert with check (owner = auth.uid() and public.is_active());
create policy quiz_delete on public.quiz_results for delete using (public.is_admin());

create policy works_read   on public.works for select using (owner = auth.uid() or public.is_admin());
create policy works_insert on public.works for insert with check (owner = auth.uid() and public.is_active());
create policy works_update on public.works for update using (owner = auth.uid()) with check (owner = auth.uid() and public.is_active());
create policy works_delete on public.works for delete using (owner = auth.uid() or public.is_admin());

-- Journal des connexions : chacun ajoute les siennes, la direction voit tout
create policy cx_read   on public.connexions for select using (owner = auth.uid() or public.is_admin());
create policy cx_insert on public.connexions for insert with check (owner = auth.uid());
create policy cx_delete on public.connexions for delete using (public.is_admin());

-- Journal de l'IA : écrit uniquement par la fonction ia_check
create policy ia_read on public.ia_logs for select using (owner = auth.uid() or public.is_admin());

-- ---------- Droits d'accès aux tables ----------
revoke all on public.profiles, public.admins, public.admin_invites, public.settings, public.contents, public.annonces,
              public.progress, public.quiz_results, public.works, public.connexions, public.ia_logs from anon, authenticated;
grant usage on schema public to anon, authenticated;
grant select on public.settings, public.contents, public.annonces to anon, authenticated;
grant insert, update, delete on public.settings, public.contents, public.annonces to authenticated;
grant select on public.profiles to authenticated;
grant update (data) on public.profiles to authenticated;           -- le statut ne peut pas être modifié par l'apprenant
grant select, delete on public.admins to authenticated;
grant select, insert, delete on public.admin_invites to authenticated;
grant select, insert, update, delete on public.progress, public.works to authenticated;
grant select, insert, delete on public.quiz_results to authenticated;
grant select, insert, delete on public.connexions to authenticated;
grant select on public.ia_logs to authenticated;
grant usage, select on all sequences in schema public to authenticated;

-- ---------- Fonctions appelées par l'application ----------
create or replace function public.admin_exists() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins);
$$;

create or replace function public.my_roles() returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'is_admin', public.is_admin(),
    'admin_exists', exists (select 1 from public.admins),
    'status', coalesce((select status from public.profiles where id = auth.uid()), 'actif'));
$$;

-- Premier compte PDG : possible uniquement tant qu'aucun administrateur n'existe
create or replace function public.claim_first_admin(p_name text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_real_user() then raise exception 'Compte e-mail requis'; end if;
  lock table public.admins in exclusive mode;
  if exists (select 1 from public.admins) then return false; end if;
  insert into public.admins (uid, email, name) values (auth.uid(), lower(auth.jwt()->>'email'), coalesce(nullif(trim(p_name), ''), 'PDG'));
  update public.profiles set data = data || jsonb_build_object('name', coalesce(nullif(trim(p_name), ''), 'PDG'), 'profil', 'PDG') where id = auth.uid();
  return true;
end $$;

-- Administrateur invité par le PDG : devient admin à sa connexion
create or replace function public.claim_admin_invite() returns boolean
language plpgsql security definer set search_path = public as $$
declare v_inv public.admin_invites;
begin
  if not public.is_real_user() then return false; end if;
  select * into v_inv from public.admin_invites where email = lower(auth.jwt()->>'email');
  if not found then return false; end if;
  insert into public.admins (uid, email, name) values (auth.uid(), v_inv.email, v_inv.name) on conflict (uid) do nothing;
  delete from public.admin_invites where email = v_inv.email;
  return true;
end $$;

-- Présence en ligne : dernière activité et page consultée
create or replace function public.touch(p_page text) returns void
language sql security definer set search_path = public as $$
  update public.profiles set last_seen = now(), last_page = left(coalesce(p_page, ''), 200) where id = auth.uid();
$$;

-- Direction : suspendre / réactiver un compte
create or replace function public.admin_set_status(p_uid uuid, p_status text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if p_status not in ('actif', 'suspendu') then raise exception 'Statut inconnu'; end if;
  if exists (select 1 from public.admins where uid = p_uid) then raise exception 'Impossible de suspendre un administrateur'; end if;
  update public.profiles set status = p_status where id = p_uid;
  return true;
end $$;

-- Direction : supprimer définitivement un compte et toutes ses données
create or replace function public.admin_delete_user(p_uid uuid) returns boolean
language plpgsql security definer set search_path = public, auth as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if p_uid = auth.uid() then raise exception 'Impossible de supprimer votre propre compte'; end if;
  if exists (select 1 from public.admins where uid = p_uid) then raise exception 'Retirez d''abord ses droits d''administrateur'; end if;
  delete from auth.users where id = p_uid;   -- les profils, progressions, quiz, travaux et journaux sont supprimés en cascade
  return true;
end $$;

-- Assistant IA : contrôle du compte, du quota quotidien et du modèle (appelé par la fonction Netlify)
create or replace function public.ia_check(p_kind text, p_ref text) returns json
language plpgsql security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_set jsonb; v_admin boolean; v_quota int; v_used int;
begin
  if v_uid is null then return json_build_object('ok', false, 'code', 'auth', 'msg', 'Connectez-vous pour utiliser l''assistant IA.'); end if;
  select data into v_set from public.settings where id = 'main';
  v_set := coalesce(v_set, '{}'::jsonb);
  v_admin := public.is_admin();
  if not public.is_active() then return json_build_object('ok', false, 'code', 'suspendu', 'msg', 'Votre compte est suspendu.'); end if;
  if not v_admin and coalesce(v_set->>'iaActive', 'true') = 'false' then
    return json_build_object('ok', false, 'code', 'off', 'msg', 'L''assistant IA est momentanément désactivé par la direction.');
  end if;
  if not v_admin then
    v_quota := coalesce(nullif(v_set->>'iaQuota', '')::int, 30);
    select count(*) into v_used from public.ia_logs where owner = v_uid and at >= date_trunc('day', now());
    if v_used >= v_quota then
      return json_build_object('ok', false, 'code', 'quota', 'msg', format('Vous avez atteint la limite de %s questions pour aujourd''hui. Revenez demain !', v_quota));
    end if;
  end if;
  insert into public.ia_logs (owner, data) values (v_uid, jsonb_build_object('kind', left(coalesce(p_kind, ''), 20), 'ref', left(coalesce(p_ref, ''), 80)));
  return json_build_object('ok', true, 'admin', v_admin,
    'model', coalesce(nullif(v_set->>'iaModel', ''), 'claude-opus-5-5'),
    'platform', trim(coalesce(nullif(v_set->>'name1', ''), 'Morata') || coalesce(v_set->>'name2', '')));
end $$;

revoke execute on function public.ia_check(text, text), public.touch(text), public.admin_set_status(uuid, text), public.admin_delete_user(uuid),
  public.claim_first_admin(text), public.claim_admin_invite(), public.my_roles() from public, anon;
grant execute on function public.admin_exists(), public.is_admin(), public.is_active(), public.is_real_user() to anon, authenticated;
grant execute on function public.ia_check(text, text), public.touch(text), public.admin_set_status(uuid, text), public.admin_delete_user(uuid),
  public.claim_first_admin(text), public.claim_admin_invite(), public.my_roles() to authenticated;

-- ---------- Paramètres de départ ----------
-- Insérés seulement s'ils n'existent pas : vos réglages ne sont jamais écrasés.
insert into public.settings (id, data) values ('main', '{"name1":"Morata","tagline":"Académie du bâtiment","ceo":"DOUMBIA Moussa","iaActive":true,"iaModel":"claude-opus-5-5","iaQuota":30,"openSignup":true,"preview":1,"tva":18,"devise":"FCFA"}'::jsonb)
on conflict (id) do nothing;
insert into public.annonces (id, data) values ('bienvenue', jsonb_build_object('titre', 'Bienvenue sur la plateforme', 'texte', 'Commencez par la Construction de A à Z pour voir comment toutes les matières s''enchaînent sur un vrai chantier.', 'at', (extract(epoch from now()) * 1000)::bigint))
on conflict (id) do nothing;
