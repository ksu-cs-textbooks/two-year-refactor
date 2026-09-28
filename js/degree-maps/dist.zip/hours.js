export function toRange(hours) {
    return typeof hours === "number" ? { min: hours, max: hours } : hours;
}
/** e.g. "3" or "1-2" */
export function formatHours(hours) {
    const { min, max } = toRange(hours);
    return min === max ? String(min) : `${min}-${max}`;
}
export function sumHours(entries) {
    return entries.reduce((acc, entry) => {
        const { min, max } = toRange(entry.hours);
        return { min: acc.min + min, max: acc.max + max };
    }, { min: 0, max: 0 });
}
/** e.g. "14 credit hours" or "13-15 credit hours" */
export function formatCreditHours(total) {
    return total.min === total.max
        ? `${total.min} credit hours`
        : `${total.min}-${total.max} credit hours`;
}
