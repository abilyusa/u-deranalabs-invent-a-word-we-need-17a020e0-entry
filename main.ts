import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Invent a Word We Need — one coined word, one clear line (69 chars, gate 1-140).
const entry =
  "Cancelight (n.): the secret relief you feel when plans are cancelled.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Self-check the gate: the entry must be 1-140 characters, no trailing newline.
const chars = [...entry].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, outside the 1-140 gate`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
