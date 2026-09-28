import { DegreeElement } from "./base-element.js";
import type { SlotEntry } from "../types.js";
/**
 * A single course/elective box: a colored band on top showing the
 * identifier + hours, and the name below.
 */
export declare class DegreeCourseElement extends DegreeElement {
    #private;
    set entry(value: SlotEntry);
    get entry(): SlotEntry | null;
    set color(value: string);
    get color(): string;
}
