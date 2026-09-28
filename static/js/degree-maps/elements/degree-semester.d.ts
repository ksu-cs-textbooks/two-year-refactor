import { DegreeElement } from "./base-element.js";
import type { DegreePlan, Semester } from "../types.js";
/**
 * A semester column: name and stacked course boxes. On wide screens the
 * rule + credit-hour total live in <degree-map> instead, as one shared row
 * spanning every column, so the line reads as continuous rather than
 * per-column segments. On mobile, where everything collapses to a single
 * column anyway, this component renders its own rule + total right after
 * its own courses instead (hidden here otherwise).
 */
export declare class DegreeSemesterElement extends DegreeElement {
    #private;
    set semester(value: Semester);
    get semester(): Semester | null;
    set plan(value: DegreePlan);
    get plan(): DegreePlan | null;
}
