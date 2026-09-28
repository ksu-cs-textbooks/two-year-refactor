import type { DegreePlan, SlotEntry } from "./types.js";
/**
 * Resolves a box's outline/band color: per-box override, then per-type
 * theme color, then the plan's default theme color.
 */
export declare function resolveColor(entry: SlotEntry, plan: DegreePlan): string;
/** Resolves the plan's default theme color, e.g. for the header band and rule. */
export declare function resolveThemeColor(plan: DegreePlan): string;
