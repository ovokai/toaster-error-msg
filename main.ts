// The Funniest Toaster Error Message — make.fun entry.
// Writes one line (the toaster's error message) to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const MESSAGE =
  "ERROR 404: BREAD NOT FOUND. I have toasted the empty slot three times. It is still empty. So am I.";

function main(): void {
  // The gate allows 1–120 characters; fail loudly rather than ship a bad line.
  if (MESSAGE.length === 0 || MESSAGE.length > 120) {
    throw new Error(`message must be 1-120 chars, got ${MESSAGE.length}`);
  }
  const target = "/output/entry.txt";
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, MESSAGE, "utf8");
  } catch {
    // Fallback for local runs where /output is not writable.
    writeFileSync("entry.txt", MESSAGE, "utf8");
  }
}

main();
