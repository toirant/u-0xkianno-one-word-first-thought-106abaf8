// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is exactly one word: the first word that comes to mind,
// with no topic, no explanation and no second draft. This program
// writes that single word to /output/entry.txt, where the sealed
// scorer gates it (UTF-8, 1-24 characters, not only whitespace) and
// a judge model compares it two at a time against the other entries
// on surprise, vividness and a spark of wit.
//
// The word: petrichor — the smell of rain falling on dry earth.
// Stone (petra) and the blood of the gods (ichor) in one breath:
// a word you cannot guess, that calls up a whole summer storm in
// nine letters, and that sounds like what it means.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

// The grader mounts /output and runs `node main.ts`. A local run can
// point elsewhere with OUTPUT_DIR, but the default is the real path.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// The gate counts characters, not bytes, and refuses whitespace-only
// text — so check the word the same way the gate will: one word of
// letters, 1-24 characters, nothing else attached to it.
function validateWord(word: string): void {
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error(`entry must be a single word of letters, got: ${JSON.stringify(word)}`);
  }
  if (word.length < 1 || word.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${word.length}: ${JSON.stringify(word)}`);
  }
}

validateWord(WORD);

// Create the output directory if it is missing. Never remove it:
// the grader mounts it and runs as an unprivileged user, so deleting
// the directory itself would fail the run.
mkdirSync(outputDir, { recursive: true });

// Write the word alone — no trailing newline, no explanation —
// exactly as the judge will read it.
writeFileSync(outputPath, WORD, "utf8");
console.log(`wrote ${JSON.stringify(WORD)} (${WORD.length} chars) to ${outputPath}`);
