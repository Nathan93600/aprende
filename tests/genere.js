#!/usr/bin/env node
// Tests de tools/genere.js « complet » : il doit refuser un génère où il manque quelque chose.
// Chaque cas part d'une liste écrite dans un dossier temporaire ; on lit ce que l'outil affiche.
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'genere-test-'));
const c = {}; vm.createContext(c);
for(const l of ['es', 'en', 'ln']) vm.runInContext(fs.readFileSync(path.join(ROOT, 'courses', l + '.js'), 'utf8').replace(/^const /gm, 'var '), c);
const lastEn = c.COURSE_EN.units[c.COURSE_EN.units.length - 1].w.map(w => w[0]), lastEs = c.COURSE_ES.units[c.COURSE_ES.units.length - 1].w.map(w => w[0]);
let pass = 0, fail = 0;
function run(name, lines, extra, expect) {
  const f = path.join(tmp, '2026-01-02.txt'); fs.writeFileSync(f, lines.join('\n'));
  const r = cp.spawnSync(process.execPath, [path.join(ROOT, 'tools', 'genere.js'), 'complet', f, '--depuis', 'HEAD', ...extra], { cwd: ROOT, encoding: 'utf8' });
  const out = (r.stdout + r.stderr).replace(/\x1b\[[0-9;]*m/g, ''), ok = expect(out, r.status);
  console.log((ok ? '  ✓ ' : '  ✗ ') + name); if(!ok) { console.log(out.split('\n').map(l => '      ' + l).join('\n')); fail++; } else pass++;
}
console.log('\nOutil du génère : contrôle « complet »');
run('un mot absent de l\'appli est refusé', ['en: zzzfake qqq'], [], (o, s) => s === 1 && /zzzfake qqq : manque absent de l'appli/.test(o) && /Génère incomplet/.test(o));
run('un mot complet d\'une unité est accepté (unité, exemple, fiche, équivalents C1)', ['en: ' + lastEn[0], 'es: ' + lastEs[0]], [], o => /2 mot\(s\) sur 2 complets/.test(o) && !/manque/.test(o));
run('un mot laissé de côté sans raison est refusé ; avec raison il est listé', ['en: ' + lastEn[0], 'en: well… !', 'en: hook ! déjà dans l\'appli'], [], (o, s) => s === 1 && /« ! » sans raison/.test(o) && /hook : déjà dans l'appli/.test(o));
run('un mot noté en français doit donner une forme par langue', ['fr: usine', 'fr: usine2 => es: ' + lastEs[0] + ' ; en: ' + lastEn[0]], [], (o, s) => s === 1 && /« usine » est en français/.test(o) && /2 mot\(s\) sur 2 complets/.test(o) && /\(noté : usine2\)/.test(o));
run('une ligne illisible est signalée', ['pay off'], [], (o, s) => s === 1 && /ligne 1 illisible/.test(o));
const bk = path.join(tmp, 'b.json'); fs.writeFileSync(bk, JSON.stringify({ data: { pending_words: [{ w: lastEn[0], l: 'en', t: 1 }, { w: 'oublié dans la liste', l: 'en', t: 2 }, { w: 'usine2', l: 'fr', t: 3 }] } }));
run('un mot noté dans l\'appli mais absent de la liste est refusé', ['en: ' + lastEn[0], 'fr: usine2 => en: ' + lastEn[1]], [bk], (o, s) => s === 1 && /absent de la liste : en: oublié dans la liste/.test(o) && !/absent de la liste : en: (?!oublié)/.test(o) && !/absent de la liste : fr/.test(o));
run('sans changement, le bilan de la semaine non mis à jour est refusé', ['en: ' + lastEn[0]], [], (o, s) => s === 1 && /CRS_WEEK\) n'a pas été mis à jour/.test(o));
run('la forme retenue (=>) est celle qui est contrôlée', ['en: forme notée => ' + lastEn[0]], [], o => /\(noté : forme notée\)/.test(o) && /1 mot\(s\) sur 1 complets/.test(o));
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`\n${pass} réussi(s), ${fail} échoué(s)`);
process.exit(fail ? 1 : 0);
