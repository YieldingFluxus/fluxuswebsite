import * as fse from 'fs-extra'
import * as fs from 'fs';
const to = process.argv.pop();
const from = process.argv.pop();
console.log('cp',from,'to',to);
fse.ensureFileSync(to)
fs.copyFileSync(from,to)