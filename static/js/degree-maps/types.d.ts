/**
 * Data model for a degree plan, per CLAUDE.md's schema.
 *
 * NOTE on deviations from the CLAUDE.md example JSON:
 * - The example's year object isn't wrapped in a `years` array (invalid JSON
 *   as written) — this type assumes `years: Year[]`.
 * - `hours: "2"` (string) in the example is treated as a documentation typo;
 *   `hours` is number | HoursRange only.
 * - The example uses both `dur` and `duration` for the same field; this type
 *   standardizes on `dur`.
 * - `theme` (map-wide default color, per-type color overrides) and a
 *   per-entry `color` override are additions not in the original CLAUDE.md
 *   schema, needed to satisfy the color rules the user specified.
 */
export interface HoursRange {
    min: number;
    max: number;
}
export type Hours = number | HoursRange;
export interface ThemeSpec {
    /** Default box outline/band color, and header band color. */
    color: string;
    /** Per-type color overrides, e.g. { elective: "#38761d" }. */
    typeColors?: Record<string, string>;
}
export interface Prerequisite {
    /** PR = required beforehand; PR/CO = required beforehand or concurrently. */
    type: "PR" | "PR/CO";
    /** Free-form requirement text, e.g. "MATH 220 ≥ C" or "JR Standing". */
    text: string;
}
interface EntryBase {
    name: string;
    hours: Hours;
    /** Overrides theme/type color for this box specifically. */
    color?: string;
    /** Fraction of a semester this box spans (e.g. 0.5 for a half-semester course). */
    dur?: number;
    /** When dur < 1, pairs this box with an adjacent one sharing a slot. */
    place?: "start" | "end";
    prerequisites?: Prerequisite[];
}
export interface CourseEntry extends EntryBase {
    type?: "course";
    subject: string;
    number: number | string;
}
export interface ElectiveEntry extends EntryBase {
    type: "elective";
    /** Reference to an external list of allowed courses; not resolved for display. */
    options?: string;
}
export type SlotEntry = CourseEntry | ElectiveEntry;
export interface Semester {
    name: string;
    courses: SlotEntry[];
}
export interface Year {
    name: string;
    semesters: Semester[];
}
export interface DegreePlan {
    name: string;
    version: string;
    theme?: ThemeSpec;
    years: Year[];
}
export {};
