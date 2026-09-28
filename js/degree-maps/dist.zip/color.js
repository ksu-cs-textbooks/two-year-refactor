const DEFAULT_COLOR = "#333333";
/**
 * Resolves a box's outline/band color: per-box override, then per-type
 * theme color, then the plan's default theme color.
 */
export function resolveColor(entry, plan) {
    if (entry.color)
        return entry.color;
    const type = entry.type ?? "course";
    const typeColor = plan.theme?.typeColors?.[type];
    if (typeColor)
        return typeColor;
    return resolveThemeColor(plan);
}
/** Resolves the plan's default theme color, e.g. for the header band and rule. */
export function resolveThemeColor(plan) {
    return plan.theme?.color ?? DEFAULT_COLOR;
}
