import { DegreeElement } from "./base-element.js";
import type { DegreePlan, Year } from "../types.js";
/** A year grouping: year name centered above its row of semester columns. */
export declare class DegreeYearElement extends DegreeElement {
    #private;
    set year(value: Year);
    get year(): Year | null;
    set plan(value: DegreePlan);
    get plan(): DegreePlan | null;
}
