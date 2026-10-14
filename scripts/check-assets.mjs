import {existsSync, readFileSync} from 'node:fs';
const expected = ['ativacao.png','desafios.png','mobilidade.png','mep-abertura.png','alimentos.png','recuperacao.png','gabriela-mello.png','garantia.png'];
for (const filename of expected) {
 const source=readFileSync(`public/media/${filename}`);
 const built=readFileSync(`dist/client/media/${filename}`);
 if(!source.equals(built)) throw Error(`Deployment image differs: ${filename}`);
 if(!built.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) throw Error(`Not a valid PNG: ${filename}`);
}
if(!existsSync('dist/client/fonts/anton-latin.ttf'))throw Error('Anton font missing from deployment');
console.log('Verified: 8 image files and Anton font are present in the deployment output.');
