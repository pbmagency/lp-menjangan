import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { jsx } from 'react/jsx-runtime';
import ts from 'typescript';

const root = process.cwd();
const source = join(root, 'resources/js/pages/c2-lp.tsx');
const modulePath = join(root, 'resources/js/.c2-prerender.mjs');
const output = join(root, 'resources/generated/c2-content.html');
const tsx = (await readFile(source, 'utf8')).replace(
    /^import ['"]\.\.\/\.\.\/css\/landing\.css['"];?\s*$/m,
    '',
);
const compiled = ts.transpileModule(tsx, {
    compilerOptions: {
        jsx: ts.JsxEmit.ReactJSX,
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
    },
}).outputText;

await writeFile(modulePath, compiled);
try {
    const { default: C2LandingPage } = await import(pathToFileURL(modulePath).href);
    const html = renderToStaticMarkup(jsx(C2LandingPage, {}));
    await mkdir(join(root, 'resources/generated'), { recursive: true });
    await writeFile(output, html);
    console.log(`Pre-rendered c2-lp (${Math.round(html.length / 1024)} KB)`);
} finally {
    await unlink(modulePath);
}
