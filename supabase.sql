-- =====================================================================
-- BâtiPro Académie : base de données Supabase
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
-- Annales : sujets officiels importés par la direction (meta = examen, année, matière, titre, publié ; pages = photos compressées)
create table if not exists public.annales       (id text primary key, meta jsonb not null default '{}'::jsonb, enonce text not null default '', corrige text not null default '', pages jsonb not null default '[]'::jsonb, updated_at timestamptz not null default now());

-- Accès payant : inscription (paiement unique) ou abonnement mensuel, validés par la direction
alter table public.profiles add column if not exists acces     text not null default 'gratuit';  -- gratuit | actif
alter table public.profiles add column if not exists acces_fin timestamptz;                     -- fin de l'abonnement (vide = sans limite)
alter table public.profiles add column if not exists acces_at  timestamptz;                     -- première activation
create table if not exists public.paiements (
  id bigint generated always as identity primary key,
  owner uuid not null default auth.uid() references auth.users(id) on delete cascade,
  at timestamptz not null default now(),
  montant integer not null default 0,
  moyen text not null default '',              -- wave | mtn | orange | moov | djamo | autre
  numero text not null default '',             -- numéro de téléphone utilisé pour payer
  reference text not null default '',          -- identifiant de la transaction (SMS de confirmation)
  formule text not null default 'unique',      -- unique | mensuel
  mois integer not null default 0,
  statut text not null default 'en_attente',   -- en_attente | valide | refuse
  note text not null default '',
  traite_at timestamptz,
  traite_par uuid
);

-- Formules : inscription (avec une période d'essai Premium), puis abonnements Basic ou Premium
alter table public.profiles add column if not exists essai_fin timestamptz;   -- fin des 31 jours tout compris qui suivent l'inscription
alter table public.profiles add column if not exists abo       text;          -- basic | premium (abonnement en cours)
alter table public.profiles add column if not exists abo_fin   timestamptz;   -- fin de l'abonnement
update public.profiles set essai_fin = coalesce(acces_at, now()) + interval '31 days' where acces = 'actif' and essai_fin is null;

-- Parrainage : chaque apprenant a un code ; le filleul est rattaché à son inscription ; récompense automatique
alter table public.profiles add column if not exists code_parrain text;                                          -- code personnel à partager
alter table public.profiles add column if not exists parrain uuid references auth.users(id) on delete set null;  -- qui l'a invité
alter table public.profiles add column if not exists filleul_valide boolean not null default false;              -- le filleul a payé (inscription ou abonnement)
alter table public.profiles add column if not exists parrain_recompenses integer not null default 0;             -- récompenses déjà accordées au parrain
create unique index if not exists profiles_code_parrain_idx on public.profiles (code_parrain) where code_parrain is not null;
create index if not exists profiles_parrain_idx on public.profiles (parrain) where parrain is not null;

-- Paiements en ligne (Chariow : carte bancaire, Mobile Money de tous les pays…) et achats de livres
alter table public.paiements alter column owner drop not null;                                  -- paiement en ligne reçu avant la création du compte
alter table public.paiements add column if not exists objet    text not null default 'acces';  -- acces | livre
alter table public.paiements add column if not exists livre    text;                            -- livre acheté
alter table public.paiements add column if not exists source   text not null default 'manuel'; -- manuel (déclaré par l'apprenant) | chariow (paiement en ligne)
alter table public.paiements add column if not exists email    text;                            -- e-mail de l'acheteur (paiement en ligne)
alter table public.paiements add column if not exists ext_id   text;                            -- identifiant de la vente chez Chariow
alter table public.paiements add column if not exists devise   text not null default 'XOF';     -- devise payée
alter table public.paiements add column if not exists montant_devise numeric;                  -- montant dans cette devise
alter table public.paiements add column if not exists applique boolean not null default false; -- accès ou livre déjà accordé
update public.paiements set applique = true where statut = 'valide' and owner is not null and not applique;  -- paiements validés avant cette mise à jour
create unique index if not exists paiements_ext_idx on public.paiements (source, ext_id);
create index if not exists paiements_email_idx on public.paiements (lower(email)) where owner is null;

-- Livres de la direction : catalogue visible de tous, livre complet remis aux acheteurs seulement
create table if not exists public.livres (
  id text primary key,
  data jsonb not null default '{}'::jsonb,     -- titre, auteur, résumé, couverture, prix, liens d'achat, publié…
  fichier text not null default '',            -- lien du livre complet (PDF…) : lisible par la direction et les acheteurs uniquement
  updated_at timestamptz not null default now()
);
create table if not exists public.livres_achats (
  owner uuid not null references auth.users(id) on delete cascade,
  livre text not null references public.livres(id) on delete cascade,
  at timestamptz not null default now(),
  paiement bigint,
  source text not null default 'paiement',     -- paiement | offert (par la direction)
  primary key (owner, livre)
);

-- Rappels envoyés automatiquement (paiement à faire, fin d'essai ou d'abonnement) : jamais deux fois le même
create table if not exists public.rappels (
  id bigserial primary key,
  owner uuid not null references auth.users(id) on delete cascade,
  kind text not null,                          -- paiement | fin_essai | fin_abo
  ref text not null,                           -- étape (j1, j3, j7) ou date de fin concernée
  canal text not null default 'email',
  at timestamptz not null default now(),
  unique (owner, kind, ref)
);
create index if not exists rappels_at_idx on public.rappels (at desc);

create index if not exists connexions_at_idx    on public.connexions (at desc);
create index if not exists paiements_owner_idx  on public.paiements (owner);
create index if not exists paiements_statut_idx on public.paiements (statut, at desc);
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

-- Niveau d'accès de la personne connectée :
--   aucun   : pas encore inscrite (chapitres gratuits seulement)
--   inscrit : inscription payée, période d'essai terminée (tous les cours, contenus réduits)
--   basic   : abonnement Basic en cours
--   premium : abonnement Premium en cours, période d'essai après l'inscription, direction, ou accès payant désactivé
create or replace function public.niveau_acces() returns text
language sql stable security definer set search_path = public as $$
  select case
    when auth.uid() is null then 'aucun'
    when exists (select 1 from public.admins where uid = auth.uid()) then 'premium'
    when coalesce((select (data->>'paywall')::boolean from public.settings where id = 'main'), true) = false then 'premium'
    else coalesce((select case
      when p.status = 'suspendu' then 'aucun'
      when p.abo = 'premium' and p.abo_fin > now() then 'premium'
      when p.acces = 'actif' and (p.acces_fin is null or p.acces_fin > now()) and p.essai_fin > now() then 'premium'
      when p.abo = 'basic' and p.abo_fin > now() then 'basic'
      when p.acces = 'actif' and (p.acces_fin is null or p.acces_fin > now()) then 'inscrit'
      else 'aucun' end from public.profiles p where p.id = auth.uid()), 'aucun')
  end;
$$;

-- Ce que comprend chaque formule (réglable par la direction : settings.main.offres.inscrit / .basic)
--   exos / quiz : exercices corrigés et questions de quiz par chapitre ; sujets / solveurs : niveau maximal (0 = aucun)
--   banque : bts (exercices BTS sans solveur) | tout ; metres : métrés par mois (-1 = illimité, 0 = aucun)
create or replace function public.offre_droits(p_niv text) returns jsonb
language sql stable security definer set search_path = public as $$
  select case when p_niv = 'premium'
    then '{"exos":99,"quiz":99,"sujets":3,"solveurs":3,"banque":"tout","epreuves":true,"annales":true,"metres":-1,"atelier":true,"ia":true}'::jsonb
    else (case when p_niv = 'basic'
            then '{"exos":4,"quiz":5,"sujets":2,"solveurs":2,"banque":"tout","epreuves":true,"annales":true,"metres":3,"atelier":false,"ia":false}'::jsonb
            else '{"exos":2,"quiz":3,"sujets":1,"solveurs":0,"banque":"bts","epreuves":false,"annales":false,"metres":0,"atelier":false,"ia":false}'::jsonb end)
         || coalesce((select data->'offres'->(case when p_niv = 'basic' then 'basic' else 'inscrit' end) from public.settings where id = 'main'), '{}'::jsonb)
  end;
$$;
create or replace function public.droit(p_cle text) returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((public.offre_droits(public.niveau_acces())->>p_cle)::boolean, false);
$$;

-- Accès aux cours (tous les chapitres) : toute personne inscrite ou abonnée
create or replace function public.has_access() returns boolean
language sql stable security definer set search_path = public as $$
  select public.niveau_acces() <> 'aucun';
$$;

create or replace function public.is_real_user() returns boolean
language sql stable as $$
  select auth.uid() is not null
     and coalesce((auth.jwt()->>'is_anonymous')::boolean, false) = false
     and coalesce(auth.jwt()->>'email', '') <> '';
$$;

-- ---------- Création automatique du profil à l'inscription ----------
-- Code de parrainage : 6 caractères faciles à lire (sans O, 0, I, 1)
create or replace function public.nouveau_code_parrain() returns text
language plpgsql volatile security definer set search_path = public as $$
declare v text; c constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; i int;
begin
  loop
    v := '';
    for i in 1..6 loop v := v || substr(c, 1 + floor(random() * length(c))::int, 1); end loop;
    exit when not exists (select 1 from public.profiles where code_parrain = v);
  end loop;
  return v;
end $$;
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare v_parrain uuid;
begin
  -- code parrain saisi à l'inscription (lien d'invitation) : rattache le filleul à son parrain
  select id into v_parrain from public.profiles
   where code_parrain = upper(trim(coalesce(new.raw_user_meta_data->>'parrain', ''))) and id <> new.id limit 1;
  insert into public.profiles (id, email, data, parrain, code_parrain)
  values (new.id, lower(new.email), coalesce(new.raw_user_meta_data, '{}'::jsonb) - 'email_verified' - 'sub' - 'email' - 'phone_verified' - 'parrain',
          v_parrain, public.nouveau_code_parrain())
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();
-- comptes déjà existants (si le script est lancé après des inscriptions)
insert into public.profiles (id, email, data)
select id, lower(email), coalesce(raw_user_meta_data, '{}'::jsonb) - 'email_verified' - 'sub' - 'email' - 'phone_verified' - 'parrain' from auth.users
on conflict (id) do nothing;
-- un code de parrainage pour chaque compte qui n'en a pas encore
do $$ declare r record; begin
  for r in select id from public.profiles where code_parrain is null loop
    update public.profiles set code_parrain = public.nouveau_code_parrain() where id = r.id;
  end loop;
end $$;

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
alter table public.annales       enable row level security;
alter table public.paiements     enable row level security;
alter table public.livres        enable row level security;
alter table public.livres_achats enable row level security;
alter table public.rappels       enable row level security;

do $$ declare r record; begin
  for r in select policyname, tablename from pg_policies where schemaname = 'public'
    and tablename in ('profiles','admins','admin_invites','settings','contents','annonces','progress','quiz_results','works','connexions','ia_logs','annales','paiements','livres','livres_achats','rappels')
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
create policy contents_read  on public.contents for select using (id not like 'chap:%' or public.has_access());  -- chapitres modifiés : réservés aux accès actifs
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

-- Annales : les apprenants lisent les sujets publiés, la direction gère tout
create policy annales_read  on public.annales for select using ((coalesce((meta->>'pub')::boolean, false) and public.droit('annales')) or public.is_admin());

-- Paiements : chacun voit les siens, la direction voit tout ; écriture uniquement par les fonctions ci-dessous
create policy pay_read on public.paiements for select using (owner = auth.uid() or public.is_admin());
create policy annales_write on public.annales for all using (public.is_admin()) with check (public.is_admin());

-- Livres : les livres publiés sont visibles de tous (sans le lien du fichier complet) ; écriture par les fonctions de la direction
create policy livres_read  on public.livres for select using (coalesce((data->>'publie')::boolean, false) or public.is_admin());
create policy achats_read  on public.livres_achats for select using (owner = auth.uid() or public.is_admin());

-- Rappels : lus par la direction ; écrits uniquement par la fonction planifiée (clé de service)
create policy rappels_read on public.rappels for select using (public.is_admin());

-- ---------- Droits d'accès aux tables ----------
revoke all on public.profiles, public.admins, public.admin_invites, public.settings, public.contents, public.annonces,
              public.progress, public.quiz_results, public.works, public.connexions, public.ia_logs, public.annales, public.paiements,
              public.livres, public.livres_achats, public.rappels from anon, authenticated;
grant usage on schema public to anon, authenticated;
grant select on public.settings, public.contents, public.annonces to anon, authenticated;
grant insert, update, delete on public.settings, public.contents, public.annonces to authenticated;
grant select on public.profiles to authenticated;
grant update (data) on public.profiles to authenticated;           -- le statut ne peut pas être modifié par l'apprenant
grant select, delete on public.admins to authenticated;
grant select, insert, delete on public.admin_invites to authenticated;
grant select, insert, update, delete on public.progress, public.works to authenticated;
grant select, insert, delete on public.quiz_results to authenticated;
grant select on public.annales to anon, authenticated;
grant insert, update, delete on public.annales to authenticated;
grant select, insert, delete on public.connexions to authenticated;
grant select on public.ia_logs to authenticated;
grant select on public.paiements to authenticated;
grant select (id, data, updated_at) on public.livres to anon, authenticated;   -- jamais la colonne « fichier »
grant select on public.livres_achats to authenticated;
grant select on public.rappels to authenticated;
grant select, insert, delete on public.rappels to service_role;   -- fonction planifiée « rappels » (clé de service)
grant usage on sequence public.rappels_id_seq to service_role;
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
    'status', coalesce((select status from public.profiles where id = auth.uid()), 'actif'),
    'acces', coalesce((select acces from public.profiles where id = auth.uid()), 'gratuit'),
    'acces_fin', (select acces_fin from public.profiles where id = auth.uid()),
    'has_access', public.has_access(),
    'niveau', public.niveau_acces());
$$;

-- Cours protégés : la fonction Netlify /api/cours demande ici si le contenu complet peut être envoyé
create or replace function public.cours_acces() returns json
language sql stable security definer set search_path = public as $$
  select json_build_object('full', public.has_access(),
    'preview', coalesce(nullif((select data->>'preview' from public.settings where id = 'main'), '')::int, 1),
    'niveau', public.niveau_acces(), 'lim', public.offre_droits(public.niveau_acces()));
$$;

-- Accorder ce qu'un paiement validé a payé : accès à la plateforme (prolongé d'un mois pour un abonnement) ou livre.
-- Fonction interne : appelée par la validation de la direction, par le paiement en ligne et au rattachement d'un compte.
create or replace function public.appliquer_paiement(p_id bigint) returns boolean
language plpgsql security definer set search_path = public as $$
declare v_p public.paiements; v_fin timestamptz; v_set jsonb; v_pr public.profiles; v_debut timestamptz;
begin
  select * into v_p from public.paiements where id = p_id for update;
  if not found or v_p.owner is null or v_p.statut <> 'valide' or v_p.applique then return false; end if;
  if v_p.objet = 'livre' then
    if v_p.livre is null or not exists (select 1 from public.livres where id = v_p.livre) then return false; end if;
    insert into public.livres_achats (owner, livre, paiement, source) values (v_p.owner, v_p.livre, v_p.id, 'paiement') on conflict (owner, livre) do nothing;
  elsif v_p.objet = 'abo' then   -- abonnement Basic ou Premium : 31 jours (réglable), à la suite de l'essai ou du même abonnement en cours
    if v_p.formule not in ('basic', 'premium') then return false; end if;
    select data into v_set from public.settings where id = 'main';
    select * into v_pr from public.profiles where id = v_p.owner;
    if not found then return false; end if;
    v_debut := greatest(now(), case when v_pr.acces = 'actif' and v_pr.essai_fin > now() then v_pr.essai_fin else now() end,
                        case when v_pr.abo = v_p.formule and v_pr.abo_fin > now() then v_pr.abo_fin else now() end);
    update public.profiles set abo = v_p.formule,
      abo_fin = v_debut + make_interval(days => coalesce(nullif(v_set->>'aboJours', '')::int, 31) * greatest(1, v_p.mois))
    where id = v_p.owner;
  else
    if v_p.formule = 'mensuel' then   -- un mois de plus, sauf pour un accès déjà actif sans limite de durée
      select case when acces = 'actif' and acces_fin is null then null else greatest(now(), coalesce(acces_fin, now())) + make_interval(months => greatest(1, v_p.mois)) end
        into v_fin from public.profiles where id = v_p.owner;
    else v_fin := null; end if;
    select data into v_set from public.settings where id = 'main';
    update public.profiles set acces = 'actif', acces_fin = v_fin, acces_at = coalesce(acces_at, now()),
      essai_fin = coalesce(essai_fin, now() + make_interval(days => coalesce(nullif(v_set->>'essaiJours', '')::int, 31)))
    where id = v_p.owner;
  end if;
  update public.paiements set applique = true where id = p_id;
  if v_p.objet in ('acces', 'abo') then perform public.parrainage_valider(v_p.owner); end if;
  return true;
end $$;

-- Parrainage : le filleul a payé → compté une fois ; tous les N filleuls payants, le parrain reçoit J jours d'abonnement
-- (réglages de la direction : settings.main.parrainage = {actif, filleuls, jours, formule})
create or replace function public.parrainage_valider(p_filleul uuid) returns void
language plpgsql security definer set search_path = public as $$
declare v_par uuid; v_set jsonb; v_req int; v_jours int; v_plan text; v_eff text; v_ok int; v_dues int; v_pr public.profiles; v_debut timestamptz;
begin
  update public.profiles set filleul_valide = true where id = p_filleul and parrain is not null and not filleul_valide returning parrain into v_par;
  if v_par is null then return; end if;
  select data->'parrainage' into v_set from public.settings where id = 'main';
  if not coalesce((v_set->>'actif')::boolean, true) then return; end if;
  v_req := greatest(1, coalesce(nullif(v_set->>'filleuls', '')::int, 3));
  v_jours := greatest(1, coalesce(nullif(v_set->>'jours', '')::int, 31));
  v_plan := case when v_set->>'formule' = 'basic' then 'basic' else 'premium' end;
  select * into v_pr from public.profiles where id = v_par for update;
  if not found then return; end if;
  select count(*) into v_ok from public.profiles where parrain = v_par and filleul_valide;
  v_dues := v_ok / v_req - v_pr.parrain_recompenses;
  while v_dues > 0 loop
    select * into v_pr from public.profiles where id = v_par;
    v_eff := case when v_pr.abo = 'premium' and v_pr.abo_fin > now() then 'premium' else v_plan end;   -- jamais de Premium remplacé par Basic
    v_debut := greatest(now(), case when v_pr.acces = 'actif' and v_pr.essai_fin > now() then v_pr.essai_fin else now() end,
                        case when v_pr.abo = v_eff and v_pr.abo_fin > now() then v_pr.abo_fin else now() end);
    update public.profiles set abo = v_eff, abo_fin = v_debut + make_interval(days => v_jours), parrain_recompenses = parrain_recompenses + 1 where id = v_par;
    insert into public.paiements (owner, montant, moyen, numero, reference, formule, mois, statut, note, traite_at, objet, source, applique)
    values (v_par, 0, 'parrainage', '', 'PARRAINAGE-' || (v_pr.parrain_recompenses + 1), v_eff, 1, 'valide',
            'Récompense de parrainage : ' || v_req || ' filleuls inscrits, ' || v_jours || ' jours offerts', now(), 'abo', 'parrainage', true);
    v_dues := v_dues - 1;
  end loop;
end $$;

-- Apprenant : mon code, mes filleuls et ma progression vers la prochaine récompense
create or replace function public.mon_parrainage() returns json
language plpgsql security definer set search_path = public as $$
declare v_code text; v_rec int; v_par uuid; v_set jsonb; v_n int; v_ok int; v_nom text;
begin
  if auth.uid() is null then raise exception 'Connectez-vous d''abord'; end if;
  select code_parrain, parrain_recompenses, parrain into v_code, v_rec, v_par from public.profiles where id = auth.uid();
  if not found then raise exception 'Profil introuvable'; end if;
  if v_code is null then v_code := public.nouveau_code_parrain(); update public.profiles set code_parrain = v_code where id = auth.uid(); end if;
  select data->'parrainage' into v_set from public.settings where id = 'main';
  select count(*), count(*) filter (where filleul_valide) into v_n, v_ok from public.profiles where parrain = auth.uid();
  if v_par is not null then select coalesce(nullif(data->>'name', ''), 'un ami') into v_nom from public.profiles where id = v_par; end if;
  return json_build_object('code', v_code, 'inscrits', v_n, 'payants', v_ok, 'recompenses', v_rec,
    'requis', greatest(1, coalesce(nullif(v_set->>'filleuls', '')::int, 3)), 'jours', greatest(1, coalesce(nullif(v_set->>'jours', '')::int, 31)),
    'formule', case when v_set->>'formule' = 'basic' then 'basic' else 'premium' end, 'actif', coalesce((v_set->>'actif')::boolean, true),
    'parrain', v_par is not null, 'parrain_nom', v_nom,
    'peut_saisir', v_par is null and not exists (select 1 from public.paiements where owner = auth.uid() and statut = 'valide' and objet in ('acces', 'abo')));
end $$;

-- Apprenant inscrit sans le lien : saisir le code de son parrain, avant son premier paiement
create or replace function public.definir_parrain(p_code text) returns text
language plpgsql security definer set search_path = public as $$
declare v_par uuid; v_nom text;
begin
  if auth.uid() is null or not public.is_real_user() then raise exception 'Connectez-vous d''abord'; end if;
  if exists (select 1 from public.profiles where id = auth.uid() and parrain is not null) then raise exception 'Vous avez déjà un parrain'; end if;
  if exists (select 1 from public.paiements where owner = auth.uid() and statut = 'valide' and objet in ('acces', 'abo')) then
    raise exception 'Le code parrain se saisit avant le premier paiement'; end if;
  select id, coalesce(nullif(data->>'name', ''), 'votre parrain') into v_par, v_nom from public.profiles where code_parrain = upper(trim(coalesce(p_code, '')));
  if v_par is null then raise exception 'Code parrain introuvable'; end if;
  if v_par = auth.uid() then raise exception 'Vous ne pouvez pas être votre propre parrain'; end if;
  if exists (select 1 from public.profiles where id = v_par and parrain = auth.uid()) then raise exception 'Cette personne est déjà votre filleul'; end if;
  update public.profiles set parrain = v_par where id = auth.uid();
  return v_nom;
end $$;

-- Apprenant : déclarer un paiement Wave / Mobile Money (montant fixé par les réglages de la direction ou par le prix du livre)
drop function if exists public.declarer_paiement(text, text, text);
drop function if exists public.declarer_paiement(text, text, text, text, text);
create or replace function public.declarer_paiement(p_moyen text, p_numero text, p_reference text, p_objet text default 'acces', p_livre text default null, p_plan text default null) returns bigint
language plpgsql security definer set search_path = public as $$
declare v_set jsonb; v_formule text; v_montant int; v_id bigint; v_livre jsonb;
begin
  if auth.uid() is null or not public.is_real_user() then raise exception 'Connectez-vous d''abord'; end if;
  if length(regexp_replace(coalesce(p_numero, ''), '\D', '', 'g')) < 8 then raise exception 'Numéro de téléphone incomplet'; end if;
  if length(trim(coalesce(p_reference, ''))) < 4 then raise exception 'Référence de la transaction incomplète'; end if;
  if (select count(*) from public.paiements where owner = auth.uid() and statut = 'en_attente') >= 3 then
    raise exception 'Vous avez déjà des paiements en attente de validation : patientez ou contactez la direction'; end if;
  if coalesce(p_objet, 'acces') = 'livre' then
    select data into v_livre from public.livres where id = p_livre and coalesce((data->>'publie')::boolean, false);
    if not found then raise exception 'Livre introuvable'; end if;
    v_montant := round(coalesce(nullif(v_livre->>'prix', '')::numeric, 0))::int;
    if v_montant <= 0 then raise exception 'Ce livre est gratuit : aucun paiement n''est nécessaire'; end if;
    if exists (select 1 from public.livres_achats where owner = auth.uid() and livre = p_livre) then raise exception 'Vous avez déjà ce livre'; end if;
    insert into public.paiements (owner, montant, moyen, numero, reference, formule, mois, objet, livre)
    values (auth.uid(), v_montant, left(lower(coalesce(p_moyen, '')), 20), left(trim(p_numero), 30), left(trim(p_reference), 60), 'unique', 0, 'livre', p_livre)
    returning id into v_id;
    return v_id;
  end if;
  select data into v_set from public.settings where id = 'main';
  if coalesce(p_objet, 'acces') = 'abo' then
    if coalesce(p_plan, '') not in ('basic', 'premium') then raise exception 'Abonnement inconnu'; end if;
    v_montant := case when p_plan = 'premium' then coalesce(nullif(v_set->>'prixPremium', '')::int, 5000) else coalesce(nullif(v_set->>'prixBasic', '')::int, 2000) end;
    insert into public.paiements (owner, montant, moyen, numero, reference, formule, mois, objet)
    values (auth.uid(), v_montant, left(lower(coalesce(p_moyen, '')), 20), left(trim(p_numero), 30), left(trim(p_reference), 60), p_plan, 1, 'abo')
    returning id into v_id;
    return v_id;
  end if;
  v_formule := coalesce(nullif(v_set->>'formule', ''), 'unique');
  v_montant := case when v_formule = 'mensuel' then coalesce(nullif(v_set->>'prixMois', '')::int, 2000) else coalesce(nullif(v_set->>'prixAcces', '')::int, 4000) end;
  insert into public.paiements (owner, montant, moyen, numero, reference, formule, mois)
  values (auth.uid(), v_montant, left(lower(coalesce(p_moyen, '')), 20), left(trim(p_numero), 30), left(trim(p_reference), 60), v_formule, case when v_formule = 'mensuel' then 1 else 0 end)
  returning id into v_id;
  return v_id;
end $$;

-- Direction : valider (accès activé ou livre remis) ou refuser un paiement
create or replace function public.admin_traiter_paiement(p_id bigint, p_ok boolean, p_note text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if not exists (select 1 from public.paiements where id = p_id) then raise exception 'Paiement introuvable'; end if;
  update public.paiements set statut = case when p_ok then 'valide' else 'refuse' end, note = left(coalesce(p_note, ''), 300), traite_at = now(), traite_par = auth.uid() where id = p_id;
  if p_ok then perform public.appliquer_paiement(p_id); end if;   -- sans compte encore créé : accordé à son inscription
  return true;
end $$;

-- Apprenant (à chaque connexion) : rattacher les paiements en ligne faits avec son adresse e-mail avant la création du compte
create or replace function public.rattacher_paiements() returns int
language plpgsql security definer set search_path = public as $$
declare v_email text := lower(coalesce(auth.jwt()->>'email', '')); r record; n int := 0;
begin
  if not public.is_real_user() or v_email = '' then return 0; end if;
  update public.paiements set owner = auth.uid() where owner is null and lower(email) = v_email;
  for r in select id from public.paiements where owner = auth.uid() and statut = 'valide' and not applique loop
    if public.appliquer_paiement(r.id) then n := n + 1; end if;
  end loop;
  return n;
end $$;

-- Livres : enregistrer, supprimer, offrir (direction) ; lien du livre complet (direction, acheteurs, livres gratuits)
create or replace function public.admin_livre_save(p_id text, p_data jsonb, p_fichier text) returns text
language plpgsql security definer set search_path = public as $$
declare v_id text := coalesce(nullif(trim(coalesce(p_id, '')), ''), 'lv_' || substr(md5(random()::text || clock_timestamp()::text), 1, 12));
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if length(coalesce(p_data::text, '')) > 2500000 then raise exception 'Fiche trop lourde : utilisez une image de couverture plus petite'; end if;
  insert into public.livres (id, data, fichier, updated_at) values (v_id, coalesce(p_data, '{}'::jsonb), coalesce(p_fichier, ''), now())
  on conflict (id) do update set data = excluded.data, fichier = coalesce(p_fichier, public.livres.fichier), updated_at = now();
  return v_id;
end $$;

create or replace function public.admin_livre_delete(p_id text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if exists (select 1 from public.livres_achats where livre = p_id) then raise exception 'Ce livre a déjà des acheteurs : masquez-le plutôt (ils le gardent)'; end if;
  delete from public.livres where id = p_id;
  return true;
end $$;

create or replace function public.admin_offrir_livre(p_uid uuid, p_livre text, p_ok boolean) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if p_ok then insert into public.livres_achats (owner, livre, source) values (p_uid, p_livre, 'offert') on conflict (owner, livre) do nothing;
  else delete from public.livres_achats where owner = p_uid and livre = p_livre; end if;
  return true;
end $$;

create or replace function public.livre_fichier(p_id text) returns text
language sql stable security definer set search_path = public as $$
  select l.fichier from public.livres l where l.id = p_id and (
    public.is_admin()
    or exists (select 1 from public.livres_achats a where a.livre = l.id and a.owner = auth.uid())
    or (auth.uid() is not null and coalesce((l.data->>'publie')::boolean, false) and coalesce(nullif(l.data->>'prix', '')::numeric, 0) = 0));
$$;

-- Paiement en ligne (Chariow) : ce que l'apprenant achète, pour la fonction Netlify /api/chariow/checkout
drop function if exists public.chariow_offre(text, text);
create or replace function public.chariow_offre(p_objet text, p_livre text, p_plan text default null) returns json
language plpgsql stable security definer set search_path = public as $$
declare v_set jsonb; v_ch jsonb; v_prod text; v_prix numeric; v_titre text; v_l jsonb; v_data jsonb; v_mens boolean;
begin
  if not public.is_real_user() then raise exception 'Connectez-vous d''abord'; end if;
  select data into v_set from public.settings where id = 'main';
  v_set := coalesce(v_set, '{}'::jsonb); v_ch := coalesce(v_set->'chariow', '{}'::jsonb);
  select data into v_data from public.profiles where id = auth.uid();
  if coalesce(p_objet, 'acces') = 'livre' then
    select data into v_l from public.livres where id = p_livre and coalesce((data->>'publie')::boolean, false);
    if not found then raise exception 'Livre introuvable'; end if;
    if exists (select 1 from public.livres_achats where owner = auth.uid() and livre = p_livre) then return json_build_object('deja', true); end if;
    v_prod := nullif(trim(coalesce(v_l->>'prdChariow', '')), ''); v_prix := coalesce(nullif(v_l->>'prix', '')::numeric, 0); v_titre := v_l->>'titre';
  elsif coalesce(p_objet, 'acces') = 'abo' then
    if coalesce(p_plan, '') not in ('basic', 'premium') then raise exception 'Abonnement inconnu'; end if;
    v_prod := nullif(trim(coalesce(v_ch->>(case when p_plan = 'premium' then 'prdPremium' else 'prdBasic' end), '')), '');
    v_prix := case when p_plan = 'premium' then coalesce(nullif(v_set->>'prixPremium', '')::numeric, 5000) else coalesce(nullif(v_set->>'prixBasic', '')::numeric, 2000) end;
    v_titre := 'Abonnement ' || initcap(p_plan);
  else
    v_mens := coalesce(v_set->>'formule', 'unique') = 'mensuel';
    if public.has_access() and not v_mens then return json_build_object('deja', true); end if;
    v_prod := nullif(trim(coalesce(case when v_mens then v_ch->>'prdMois' else v_ch->>'prdAcces' end, '')), '');
    v_prix := case when v_mens then coalesce(nullif(v_set->>'prixMois', '')::numeric, 2000) else coalesce(nullif(v_set->>'prixAcces', '')::numeric, 4000) end;
  end if;
  return json_build_object('produit', v_prod, 'prix', v_prix, 'titre', v_titre, 'objet', coalesce(p_objet, 'acces'), 'livre', p_livre, 'plan', p_plan,
    'uid', auth.uid(), 'email', lower(auth.jwt()->>'email'), 'nom', coalesce(v_data->>'name', ''), 'tel', coalesce(v_data->>'phone', ''),
    'plateforme', coalesce(nullif(trim(v_set->>'nom'), ''), 'BâtiPro Académie'));
end $$;

-- Paiement en ligne (Chariow) reçu : appelée UNIQUEMENT par la fonction Netlify /api/chariow/webhook (clé service_role),
-- après vérification de la signature de Chariow. Enregistre la vente une seule fois et accorde l'accès ou le livre aussitôt.
create or replace function public.chariow_vente(p jsonb) returns json
language plpgsql security definer set search_path = public as $$
declare
  v_ext text := left(nullif(trim(coalesce(p->>'ext_id', '')), ''), 120);
  v_email text := lower(nullif(trim(coalesce(p->>'email', '')), ''));
  v_prod text := nullif(trim(coalesce(p->>'produit', '')), '');
  v_dev text := upper(left(coalesce(nullif(trim(p->>'devise'), ''), 'XOF'), 8));
  v_mt numeric := case when coalesce(p->>'montant', '') ~ '^-?[0-9]+(\.[0-9]+)?$' then (p->>'montant')::numeric end;
  v_set jsonb; v_ch jsonb; v_taux jsonb; v_old public.paiements;
  v_objet text; v_livre text; v_titre text; v_formule text := 'unique'; v_mois int := 0; v_prix numeric;
  v_owner uuid; v_id bigint; v_montant int; v_statut text; v_note text;
begin
  if v_ext is null then raise exception 'Vente sans identifiant'; end if;
  perform pg_advisory_xact_lock(hashtext('chariow:' || v_ext));
  select * into v_old from public.paiements where source = 'chariow' and ext_id = v_ext;
  if coalesce(p->>'type', 'vente') = 'remboursement' then
    if found then update public.paiements set statut = 'rembourse', note = 'Remboursé sur Chariow : retirez l''accès si nécessaire', traite_at = now() where id = v_old.id; end if;
    return json_build_object('ok', true, 'rembourse', found);
  end if;
  if found then return json_build_object('ok', true, 'doublon', true, 'id', v_old.id, 'statut', v_old.statut); end if;

  select data into v_set from public.settings where id = 'main';
  v_set := coalesce(v_set, '{}'::jsonb); v_ch := coalesce(v_set->'chariow', '{}'::jsonb);
  -- 1. le produit Chariow vendu : accès (inscription ou mois d'abonnement) ou livre
  if v_prod is not null and v_prod = nullif(trim(coalesce(v_ch->>'prdAcces', '')), '') then
    v_objet := 'acces'; v_prix := coalesce(nullif(v_set->>'prixAcces', '')::numeric, 4000);
  elsif v_prod is not null and v_prod = nullif(trim(coalesce(v_ch->>'prdBasic', '')), '') then
    v_objet := 'abo'; v_formule := 'basic'; v_mois := 1; v_prix := coalesce(nullif(v_set->>'prixBasic', '')::numeric, 2000);
  elsif v_prod is not null and v_prod = nullif(trim(coalesce(v_ch->>'prdPremium', '')), '') then
    v_objet := 'abo'; v_formule := 'premium'; v_mois := 1; v_prix := coalesce(nullif(v_set->>'prixPremium', '')::numeric, 5000);
  elsif v_prod is not null and v_prod = nullif(trim(coalesce(v_ch->>'prdMois', '')), '') then
    v_objet := 'acces'; v_formule := 'mensuel'; v_mois := 1; v_prix := coalesce(nullif(v_set->>'prixMois', '')::numeric, 2000);
  elsif v_prod is not null then
    select id, data->>'titre', coalesce(nullif(data->>'prix', '')::numeric, 0) into v_livre, v_titre, v_prix
      from public.livres where trim(coalesce(data->>'prdChariow', '')) = v_prod limit 1;
    if v_livre is not null then v_objet := 'livre'; end if;
  end if;
  -- 2. le compte de l'acheteur : identifiant transmis par la plateforme, sinon son adresse e-mail
  if coalesce(p->>'uid', '') ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
    select id into v_owner from public.profiles where id = (p->>'uid')::uuid;
  end if;
  if v_owner is null and v_email is not null then select id into v_owner from public.profiles where lower(email) = v_email order by created_at limit 1; end if;
  -- 3. montant en FCFA (taux de la direction ; FCFA d'Afrique de l'Ouest et du Centre à parité)
  v_taux := '{"XOF":1,"XAF":1,"FCFA":1,"CFA":1,"EUR":655.957,"USD":565,"CAD":410,"GBP":755,"GHS":52,"NGN":0.37,"GNF":0.065,"SLE":24.8,"LRD":2.83,"GMD":7.8,"MRU":14.2,"CVE":5.949}'::jsonb || coalesce(v_set->'devises', '{}'::jsonb);
  if v_mt is not null and v_taux ? v_dev and coalesce(v_taux->>v_dev, '') ~ '^[0-9]+(\.[0-9]+)?$' then v_montant := round(v_mt * (v_taux->>v_dev)::numeric)::int; end if;
  if v_prix is not null and v_prix > 0 and (v_montant is null or v_montant > v_prix * 20 or v_montant < v_prix / 20) then v_montant := v_prix::int; end if;
  v_montant := coalesce(v_montant, 0);

  v_statut := case when v_objet is not null and coalesce(v_ch->>'auto', 'true') <> 'false' then 'valide' else 'en_attente' end;
  v_note := case when v_objet is null then 'Paiement en ligne reçu pour un produit Chariow non relié à une offre (' || coalesce(v_prod, 'produit inconnu') || ') : vérifiez puis validez'
                 when v_statut = 'en_attente' then 'Paiement en ligne reçu (Chariow) : à confirmer'
                 else 'Paiement en ligne Chariow : accordé automatiquement' end;
  if v_objet is null then  -- produit non relié : on garde ce que la plateforme avait demandé, la direction décide
    v_objet := case when p->>'objet' = 'livre' and exists (select 1 from public.livres where id = p->>'livre') then 'livre'
                    when p->>'objet' = 'abo' and p->>'plan' in ('basic', 'premium') then 'abo' else 'acces' end;
    if v_objet = 'livre' then v_livre := p->>'livre'; end if;
    if v_objet = 'abo' then v_formule := p->>'plan'; v_mois := 1; end if;
  end if;
  insert into public.paiements (owner, montant, moyen, numero, reference, formule, mois, statut, note, objet, livre, source, email, ext_id, devise, montant_devise, traite_at)
  values (v_owner, v_montant, 'chariow', left(coalesce(p->>'telephone', ''), 30), v_ext, v_formule, v_mois, v_statut, v_note, v_objet, v_livre,
          'chariow', v_email, v_ext, v_dev, v_mt, case when v_statut = 'valide' then now() end)
  returning id into v_id;
  if v_statut = 'valide' and v_owner is not null then perform public.appliquer_paiement(v_id); end if;
  return json_build_object('ok', true, 'id', v_id, 'statut', v_statut, 'objet', v_objet, 'formule', v_formule, 'compte', v_owner is not null,
    'email', coalesce(v_email, (select email from public.profiles where id = v_owner)), 'nom', (select data->>'name' from public.profiles where id = v_owner),
    'livre', v_titre, 'fin', (select acces_fin from public.profiles where id = v_owner), 'abo_fin', (select abo_fin from public.profiles where id = v_owner),
    'plateforme', coalesce(nullif(trim(v_set->>'nom'), ''), 'BâtiPro Académie'));
end $$;

-- Direction : activer ou désactiver l'accès d'un apprenant (p_fin vide = sans limite de durée)
create or replace function public.admin_set_acces(p_uid uuid, p_acces text, p_fin timestamptz) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if p_acces not in ('gratuit', 'actif') then raise exception 'Accès inconnu'; end if;
  update public.profiles set acces = p_acces,
    acces_fin = case when p_acces = 'actif' then p_fin else acces_fin end,
    acces_at = case when p_acces = 'actif' then coalesce(acces_at, now()) else acces_at end,
    essai_fin = case when p_acces = 'actif' then coalesce(essai_fin, now() + make_interval(days => coalesce(nullif((select data->>'essaiJours' from public.settings where id = 'main'), '')::int, 31))) else essai_fin end
  where id = p_uid;
  return true;
end $$;

-- Direction : donner, prolonger ou retirer un abonnement Basic / Premium (p_plan vide = retirer)
create or replace function public.admin_set_abo(p_uid uuid, p_plan text, p_fin timestamptz) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'Réservé à la direction'; end if;
  if coalesce(p_plan, '') = '' then update public.profiles set abo = null, abo_fin = null where id = p_uid; return true; end if;
  if p_plan not in ('basic', 'premium') then raise exception 'Abonnement inconnu'; end if;
  update public.profiles set abo = p_plan, abo_fin = coalesce(p_fin, now() + interval '31 days') where id = p_uid;
  return true;
end $$;

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
  if not v_admin and not public.droit('ia') then
    if not public.has_access() then return json_build_object('ok', false, 'code', 'acces', 'msg', 'Activez votre accès (inscription) pour utiliser l''assistant IA.'); end if;
    return json_build_object('ok', false, 'code', 'premium', 'msg', 'L''assistant IA est réservé à l''abonnement Premium.');
  end if;
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
    'platform', coalesce(nullif(trim(v_set->>'nom'), ''), nullif(trim(coalesce(v_set->>'name1', '') || coalesce(v_set->>'name2', '')), ''), 'BâtiPro Académie'));
end $$;

revoke execute on function public.ia_check(text, text), public.touch(text), public.admin_set_status(uuid, text), public.admin_delete_user(uuid),
  public.claim_first_admin(text), public.claim_admin_invite(), public.my_roles(),
  public.declarer_paiement(text, text, text, text, text, text), public.admin_traiter_paiement(bigint, boolean, text), public.admin_set_acces(uuid, text, timestamptz),
  public.rattacher_paiements(), public.admin_livre_save(text, jsonb, text), public.admin_livre_delete(text), public.admin_offrir_livre(uuid, text, boolean),
  public.livre_fichier(text), public.chariow_offre(text, text, text) from public, anon;
-- fonctions internes : jamais appelables depuis le navigateur
revoke execute on function public.appliquer_paiement(bigint), public.chariow_vente(jsonb) from public, anon, authenticated;
revoke execute on function public.parrainage_valider(uuid), public.nouveau_code_parrain() from public, anon, authenticated;
revoke execute on function public.mon_parrainage(), public.definir_parrain(text) from public, anon;
grant execute on function public.mon_parrainage(), public.definir_parrain(text) to authenticated;
grant execute on function public.chariow_vente(jsonb) to service_role;
grant execute on function public.admin_exists(), public.is_admin(), public.is_active(), public.is_real_user(), public.has_access(), public.cours_acces(),
  public.niveau_acces(), public.offre_droits(text), public.droit(text) to anon, authenticated;
revoke execute on function public.admin_set_abo(uuid, text, timestamptz) from public, anon;
grant execute on function public.admin_set_abo(uuid, text, timestamptz) to authenticated;
grant execute on function public.ia_check(text, text), public.touch(text), public.admin_set_status(uuid, text), public.admin_delete_user(uuid),
  public.claim_first_admin(text), public.claim_admin_invite(), public.my_roles(),
  public.declarer_paiement(text, text, text, text, text, text), public.admin_traiter_paiement(bigint, boolean, text), public.admin_set_acces(uuid, text, timestamptz),
  public.rattacher_paiements(), public.admin_livre_save(text, jsonb, text), public.admin_livre_delete(text), public.admin_offrir_livre(uuid, text, boolean),
  public.livre_fichier(text), public.chariow_offre(text, text, text) to authenticated;

-- ---------- Paramètres de départ ----------
-- Insérés seulement s'ils n'existent pas : vos réglages ne sont jamais écrasés.
insert into public.settings (id, data) values ('main', '{"nom":"BâtiPro Académie","name1":"Bâti","name2":"Pro","tagline":"Académie du bâtiment","ceo":"DOUMBIA Moussa","iaActive":true,"iaModel":"claude-opus-5-5","iaQuota":30,"openSignup":true,"preview":1,"tva":18,"devise":"FCFA"}'::jsonb)
on conflict (id) do nothing;
-- Accès payant (une seule fois) : inscription 4 000 FCFA, premier chapitre de chaque matière gratuit,
-- paiement Wave / MTN Mobile Money au 05 44 17 63 59. Vos réglages existants sont conservés.
update public.settings
   set data = '{"paywall":true,"prixAcces":4000,"formule":"unique","prixMois":2000,"preview":1,"whatsapp":"0544176359","pay":{"wave":"0544176359","mtn":"0544176359","orange":"","moov":"","djamo":"","titulaire":"DOUMBIA Moussa"}}'::jsonb || data,
       updated_at = now()
 where id = 'main' and not (data ? 'paywall');
-- Paiement en ligne (une seule fois) : boutique Chariow de la direction et produit « BâtiPro Académie : accès complet ».
-- Modifiable ensuite dans Espace PDG › Abonnements & paiements › Réglages.
update public.settings
   set data = jsonb_set(data, '{chariow}', '{"boutique":"https://smart-digital.mychariow.com","lienAcces":"https://smart-digital.mychariow.shop/prd_7prkaptk","prdAcces":"prd_7prkaptk","lienMois":"","prdMois":"","auto":true}'::jsonb),
       updated_at = now()
 where id = 'main' and not (data ? 'chariow');
-- Formules (une seule fois) : 31 jours tout compris après l'inscription, abonnements Basic et Premium de 31 jours.
-- Prix modifiables dans Espace PDG › Abonnements & paiements › Réglages (mettez les mêmes que sur Chariow).
update public.settings
   set data = '{"essaiJours":31,"aboJours":31,"prixBasic":2000,"prixPremium":5000}'::jsonb || data, updated_at = now()
 where id = 'main' and not (data ? 'prixBasic');
-- Rappels par e-mail (une seule fois) : inscrits qui n'ont pas payé, fins d'essai et d'abonnement (réglable dans Relances)
update public.settings
   set data = '{"rappels":{"actif":true,"impayes":true,"fins":true}}'::jsonb || data, updated_at = now()
 where id = 'main' and not (data ? 'rappels');
-- Parrainage (une seule fois) : 3 filleuls payants = 31 jours de Premium offerts au parrain (réglable dans Réglages)
update public.settings
   set data = '{"parrainage":{"actif":true,"filleuls":3,"jours":31,"formule":"premium"}}'::jsonb || data, updated_at = now()
 where id = 'main' and not (data ? 'parrainage');
update public.settings
   set data = jsonb_set(data, '{chariow}', '{"lienBasic":"https://smart-digital.mychariow.shop/prd_dk1qojwp","prdBasic":"prd_dk1qojwp","lienPremium":"https://smart-digital.mychariow.shop/prd_8eq7b1ed","prdPremium":"prd_8eq7b1ed"}'::jsonb || coalesce(data->'chariow', '{}'::jsonb)),
       updated_at = now()
 where id = 'main' and not coalesce((data->'chariow') ? 'prdBasic', false);
-- Livre « Le prisonnier du doute » relié à son produit Chariow (masqué : complétez prix, couverture et résumé puis publiez-le)
insert into public.livres (id, data) values ('lv_prisonnier_du_doute', '{"titre":"Le prisonnier du doute","auteur":"DOUMBIA Moussa","resume":"","description":"","prix":0,"format":"PDF","langue":"Français","publie":false,"ordre":1,"lienAchat":"https://smart-digital.mychariow.shop/prd_i8fzh9cq","prdChariow":"prd_i8fzh9cq"}'::jsonb)
on conflict (id) do nothing;
-- Changement de nom : Morata → BâtiPro Académie (une seule fois, tant que l'ancien nom est encore en place)
update public.settings
   set data = (replace(data::text, 'Morata', 'BâtiPro Académie'))::jsonb || '{"nom":"BâtiPro Académie","name1":"Bâti","name2":"Pro"}'::jsonb,
       updated_at = now()
 where id = 'main' and data->>'name1' = 'Morata';
insert into public.annonces (id, data) values ('bienvenue', jsonb_build_object('titre', 'Bienvenue sur la plateforme', 'texte', 'Commencez par la Construction de A à Z pour voir comment toutes les matières s''enchaînent sur un vrai chantier.', 'at', (extract(epoch from now()) * 1000)::bigint))
on conflict (id) do nothing;
