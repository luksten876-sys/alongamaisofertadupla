import { cpSync, existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

// Nitro uses `.output` for the default build and `.netlify` when Netlify's
// preset is active. Keep the post-build step compatible with both targets so
// a ZIP uploaded to Netlify can build without changing the Sites bundle.
const isNetlifyBuild = process.env.NETLIFY === "true";

const serverSource = isNetlifyBuild ? ".netlify/functions-internal/server" : ".output/server";

// Netlify writes the freshly built static files to `dist` before this script
// runs. The default Nitro build writes them to `.output/public` instead.
const publicSource = isNetlifyBuild ? "dist" : ".output/public";

if (!existsSync(serverSource)) {
  throw new Error(`Missing server build output: ${serverSource}`);
}

if (!existsSync(publicSource)) {
  throw new Error(`Missing public build output: ${publicSource}`);
}

// When the public source is already `dist`, stage it before recreating the
// Sites layout (`dist/client` + `dist/server`).
let stagedPublicSource = publicSource;
let temporaryPublicDirectory;
if (publicSource === "dist") {
  temporaryPublicDirectory = mkdtempSync(join(tmpdir(), "alonga-public-"));
  cpSync(publicSource, temporaryPublicDirectory, { recursive: true });
  stagedPublicSource = temporaryPublicDirectory;
}

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync(serverSource, "dist/server", { recursive: true });
cpSync(stagedPublicSource, "dist/client", { recursive: true });

// The Sites runtime expects this small Node entrypoint for the standard
// Nitro output. Netlify's function bundle has `main.mjs`/`server.mjs` instead,
// so do not create a broken wrapper there.
if (existsSync("dist/server/index.mjs")) {
  writeFileSync("dist/server/index.js", 'export { default } from "./index.mjs";\n');
}

if (temporaryPublicDirectory) {
  rmSync(temporaryPublicDirectory, { recursive: true, force: true });
}
