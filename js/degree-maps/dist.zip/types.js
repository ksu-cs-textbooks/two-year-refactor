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
export {};
