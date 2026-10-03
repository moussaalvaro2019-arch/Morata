// Écrit un objet JavaScript lisible : textes multilignes en `gabarits`, clés sans guillemets
const ID = /^[A-Za-z_$][\w$]*$/;
const tpl = s => '`' + s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
export function ser(v, ind = '', key = '') {
  if (typeof v === 'string') return v.includes('\n') ? tpl(v) : JSON.stringify(v);
  if (v == null || typeof v !== 'object') return JSON.stringify(v);
  const i2 = ind + ' ';
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    const flat = v.every(x => x == null || typeof x !== 'object');
    if (flat) { const s = '[' + v.map(x => ser(x)).join(', ') + ']'; if (s.length < 160 && !s.includes('\n')) return s; }
    return '[\n' + v.map(x => i2 + ser(x, i2)).join(',\n') + '\n' + ind + ']';
  }
  const ks = Object.keys(v).filter(k => v[k] !== undefined);
  const parts = ks.map(k => (ID.test(k) ? k : JSON.stringify(k)) + ':' + ser(v[k], i2, k));
  const one = '{' + parts.join(', ') + '}';
  if (one.length < 160 && !one.includes('\n')) return one;
  return '{' + parts.join(', ').replace(/\n/g, '\n') + '}';
}
