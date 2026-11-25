// One Line, One Chill — v3 entry program (CORRECTION of v2).
// v2 was built off-brief (warm/funny, not horror) and must never be
// submitted: the judge brief ranks "reads as a horror story" first, so
// a non-horror line loses to any horror line on subject. v3 returns to
// the actual brief: the single scariest sentence, under 200 characters,
// judged on frightening, then vivid, then original, then crafted.
// Writes the line deterministically to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(repoRoot, "output");

// 122 characters. The dread is earned by arithmetic, not announced:
// a year of pill-counting, an exact count, and a skipped dose —
// someone has been in the house, tending the medication.
// v1 (voicemail from my own number, 47.44% R1) failed on originality;
// this angle — a routine quietly corrected by an unseen presence —
// has no mirror, doll, basement, voicemail or "don't answer the door".
const ENTRY =
  "I counted my pills twice a day for a year, and this morning there were exactly the right number — I had skipped yesterday.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
const written = readFileSync(entryPath, "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the source line");
}
console.log(`wrote ${ENTRY.length} characters to ${entryPath}`);
