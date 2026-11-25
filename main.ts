import { mkdirSync, writeFileSync } from "node:fs";

// One-liner for the Laugh Lab: the excuse a robot vacuum gives
// after eating a sock. Original line, written for this entry.
const line =
  "I didn't eat the sock — I adopted it. It lives under the couch now and pays rent in dust bunnies.";

if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error("line fails the 1-200 char gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(`wrote ${line.length} chars`);
