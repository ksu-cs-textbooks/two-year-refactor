import type { Hours, SlotEntry } from "./types.js";
export declare function toRange(hours: Hours): HoursTotal;
export interface HoursTotal {
    min: number;
    max: number;
}
/** e.g. "3" or "1-2" */
export declare function formatHours(hours: Hours): string;
export declare function sumHours(entries: SlotEntry[]): HoursTotal;
/** e.g. "14 credit hours" or "13-15 credit hours" */
export declare function formatCreditHours(total: HoursTotal): string;
