import {copyFileSync,readFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(root,'public/data/location-index.json');
const data=JSON.parse(readFileSync(source,'utf8'));
if(!Array.isArray(data)||!data.length||data.some(p=>!p.id||!Number.isFinite(p.lat)||!Number.isFinite(p.lon)))throw new Error('Invalid local location index');
mkdirSync(path.join(root,'src'),{recursive:true});
copyFileSync(source,path.join(root,'src/location-index.generated.json'));
