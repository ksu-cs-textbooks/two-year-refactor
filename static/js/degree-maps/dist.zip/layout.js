/**
 * Groups a semester's entries into display rows. A `dur < 1` entry marked
 * `place: "start"` is paired with the immediately following `place: "end"`
 * entry into one shared-slot row; everything else gets its own row.
 */
export function groupIntoRows(entries) {
    const rows = [];
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const next = entries[i + 1];
        const isSplitStart = entry.dur !== undefined && entry.dur < 1 && entry.place === "start";
        const nextIsSplitEnd = next && next.dur !== undefined && next.dur < 1 && next.place === "end";
        if (isSplitStart && nextIsSplitEnd) {
            rows.push([entry, next]);
            i++;
            continue;
        }
        rows.push([entry]);
    }
    return rows;
}
