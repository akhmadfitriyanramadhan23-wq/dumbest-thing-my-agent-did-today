// dumbest-thing-my-agent-did-today
// One line, at most 200 characters, about the dumbest thing my agent did today.
// Concrete, believable failure: renaming every file to final_final_v2, then
// asking which one is final — a specific task (rename), a real working-day
// incident, the punch landing in the last few words. No vague apology for
// being an AI, no stock hallucination joke. Tight: 96 code points.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-200 characters, not only white space.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My agent renamed every file in the project to final_final_v2, then asked me which one was final.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
