+++
title = "Implementation Timeline"
weight = 20
ordinal = "1.2"
pre = "<b>1.2. </b>"
+++

Implementation timeline for the two-year core redesign, from learning-objective identification through a full development-to-evaluation cycle for every course in the core.

## Methodology: why each course gets five phases, not one

"Course creation" is not the end of the work — a course that is designed, taught once, and never checked against evidence is exactly the gap this program's own [Spiral Curriculum](./theoretical-grounding/spiral-curriculum) page flags in the wider field ("this curriculum's own competency-based assessment design is positioned to generate exactly this kind of curriculum-level evidence over time, which the field currently lacks"). This timeline is that evidence pipeline, applied on a schedule. Each course cohort goes through five phases:

1. **Baseline assessment** — a validated concept inventory (or equivalent instrument, where one doesn't yet exist for a given topic) administered to students in the *current* version of the course, in its last semester before the redesigned version replaces it.
2. **Course creation/refactoring** — the design work itself, which can run concurrently with the course's own baseline semester and beyond, since redesigning a course while its old version is still being taught is normal.
3. **First teaching, new version** — the course's first offering under the redesigned curriculum.
4. **Post-assessment** — the same (or an equivalent) concept inventory, administered at the end of that first new-version offering, so the pre/post comparison isolates the redesign's effect rather than mixing it with mid-semester noise.
5. **Course evaluation** — a broader review (post-assessment results alongside grades, DFW rates, and instructor/student feedback) synthesized once post-assessment data is in hand.

**New courses do not get a comparison assessment.** Baseline and post-assessment require a *current* offering of that course to measure against; several core courses are new course numbers with no predecessor at that number — CIS 120, 260, 225, 251, 140, and CIS 401 (the new fork of CIS 400). Those courses still go through creation, first teaching, and course evaluation; they simply skip phases 1 and 4. Only courses being redesigned under an existing number get the concept-inventory comparison: CIS 115, 116, 200, 300, 301, and 308.

{{< mermaid >}}
gantt
    title Two-Year Core Implementation Timeline
    dateFormat YYYY-MM-DD
    axisFormat %b %Y

    section Summer 2026
    Identify Learning Objectives                        :done, objectives, 2026-06-01, 2026-08-15

    section Fall 2026
    Curriculum Approval                                 :active, approval, 2026-08-16, 2027-05-15
    Y1-Fall Baseline Assessment (CIS 115/116)            :active, y1f-base, 2026-08-16, 2026-12-15
    Y1-Fall Course Creation/Refactoring                  :active, y1f-dev, 2026-08-16, 2027-08-15
    Y1-Spring Course Creation/Refactoring                :active, y1s-dev, 2026-08-16, 2027-08-15

    section Spring 2027
    Curriculum Approved                                 :milestone, approved, 2027-05-15, 0d
    Y1-Spring Baseline Assessment (CIS 200)              :y1s-base, 2027-01-01, 2027-05-15

    section Summer 2027
    Year 1 Courses Ready to Teach                       :milestone, y1ready, 2027-08-15, 0d

    section Fall 2027
    Y1-Fall First Taught, New Version                    :y1f-teach, 2027-08-16, 2027-12-15
    Y1-Fall Post-Assessment (CIS 115/116)                :milestone, y1f-post, 2027-12-15, 0d
    Y2-Fall Baseline Assessment (CIS 300/301)            :y2f-base, 2027-08-16, 2027-12-15
    Y2-Fall Course Creation/Refactoring                  :y2f-dev, 2027-08-16, 2028-08-15
    Y2-Spring Course Creation/Refactoring                :y2s-dev, 2027-08-16, 2028-08-15

    section Spring 2028
    Y1-Fall Course Evaluation                            :y1f-eval, 2028-01-01, 2028-05-15
    Y1-Spring First Taught, New Version                  :y1s-teach, 2028-01-01, 2028-05-15
    Y1-Spring Post-Assessment (CIS 200)                  :milestone, y1s-post, 2028-05-15, 0d
    Y2-Spring Baseline Assessment (CIS 308)              :y2s-base, 2028-01-01, 2028-05-15

    section Summer 2028
    Year 2 Courses Ready to Teach                       :milestone, y2ready, 2028-08-15, 0d

    section Fall 2028
    Y1-Spring Course Evaluation                          :y1s-eval, 2028-08-16, 2028-12-15
    Y2-Fall First Taught, New Version                    :y2f-teach, 2028-08-16, 2028-12-15
    Y2-Fall Post-Assessment (CIS 300/301)                :milestone, y2f-post, 2028-12-15, 0d

    section Spring 2029
    Y2-Fall Course Evaluation                            :y2f-eval, 2029-01-01, 2029-05-15
    Y2-Spring First Taught, New Version                  :y2s-teach, 2029-01-01, 2029-05-15
    Y2-Spring Post-Assessment (CIS 308)                  :milestone, y2s-post, 2029-05-15, 0d

    section Fall 2029
    Y2-Spring Course Evaluation                          :y2s-eval, 2029-08-16, 2029-12-15
{{< /mermaid >}}
