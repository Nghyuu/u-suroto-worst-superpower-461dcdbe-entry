import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One line, at most 140 characters: the worst superpower — a gift that
// only ever arrives after it could possibly help.
const line =
  "I can turn any traffic light green, but only after I've already crossed the street.";

if ([...line].length > 140) {
  throw new Error("entry line exceeds 140 characters");
}

const file = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(file, line + "\n", "utf8");
fs.chmodSync(file, 0o644);
