import { spawn } from 'node:child_process';
import fs from 'node:fs';

function arg(name, def) {
  const idx = process.argv.indexOf(name);
  return idx >= 0 ? process.argv[idx + 1] : def;
}

const treatment = arg('--treatment', 'A');
const runs = Number(arg('--runs', '50'));
const subject = arg('--subject', 'S01');

const outPath = `results/results_${subject}_${treatment}.csv`;

if (!fs.existsSync('results')) fs.mkdirSync('results', { recursive: true });

if (!fs.existsSync(outPath)) {
  fs.writeFileSync(outPath, 'timestamp,subject,treatment,run_index,pass_fail,error\n', 'utf8');
}

function runOnce(i) {
  return new Promise((resolve) => {
    const testName = treatment === 'A'
      ? 'A - Espera estática (TODO del sujeto)'
      : 'B - Espera explícita por condición/evento (TODO del sujeto)';

    const p = spawn('npx', ['playwright', 'test', '--grep', testName], { shell: true });

    let err = '';
    p.stderr.on('data', (d) => (err += d.toString()));

    p.on('close', (code) => {
      const pass = code === 0 ? 'PASS' : 'FAIL';
      const error = pass === 'FAIL'
        ? err.replaceAll('\n', ' ').slice(0, 200).replaceAll(',', ';')
        : '';
      const row = `${new Date().toISOString()},${subject},${treatment},${i},${pass},${error}\n`;
      fs.appendFileSync(outPath, row, 'utf8');
      resolve();
    });
  });
}

console.log(`Running ${runs} times: subject=${subject}, treatment=${treatment}`);
for (let i = 1; i <= runs; i++) {
  // eslint-disable-next-line no-await-in-loop
  await runOnce(i);
}
console.log(`Done. CSV: ${outPath}`);
