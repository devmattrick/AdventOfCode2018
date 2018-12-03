import { readFileSync } from "fs";
import { join } from "path";

export function loadFileString(...location: string[]) {
  return readFileSync(join(...location)).toString().trim();
}
