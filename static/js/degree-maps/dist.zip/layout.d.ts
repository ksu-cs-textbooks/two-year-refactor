import type { SlotEntry } from "./types.js";
/**
 * Groups a semester's entries into display rows. A `dur < 1` entry marked
 * `place: "start"` is paired with the immediately following `place: "end"`
 * entry into one shared-slot row; everything else gets its own row.
 */
export declare function groupIntoRows(entries: SlotEntry[]): SlotEntry[][];
