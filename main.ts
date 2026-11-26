// The GPS Swears It Was a Shortcut
// The GPS's one-line excuse for sending the driver down the wrong road,
// written to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
// No setup, no dialogue tags: just the excuse itself, in the GPS's own voice.
// The turn is the itemised list — river, fence, goat-that-now-owns-the-car —
// each one more damning than the last, delivered as if none of them counted.
import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the road really was shorter — on paper.
const setup =
  "On the map that road was shorter, and technically it still is —";
// Punchline: the small print the GPS left out.
const punch = "if you don't count the river, the fence, or the goat that now owns the car.";
const entry = `${setup} ${punch}`;

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 200) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
