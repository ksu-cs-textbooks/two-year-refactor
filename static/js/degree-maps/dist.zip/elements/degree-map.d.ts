import { DegreeElement } from "./base-element.js";
import type { DegreePlan } from "../types.js";
/** Root element: header band (name + total hours) and the years grid. */
export declare class DegreeMapElement extends DegreeElement {
    #private;
    set plan(value: DegreePlan);
    get plan(): DegreePlan | null;
}
