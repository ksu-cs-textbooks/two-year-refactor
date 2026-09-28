+++
title = "Program Overview"
weight = 10
ordinal = "1.0"
+++

> *Working draft for faculty review. This is the front door to a set of 12 companion files: 8 thread files, 3 lens files, and 1 bounded-practice file. Course numbers reflect the current proposed degree map (`resources/reference/degree-maps/cs.md`), pending final department approval.*

## What this is

A competency-based, systems-thinking foundation for a B.S. in Computer Science, shared by students who will go on to specialize (Cybersecurity, Data Science, AI Systems, Software Architecture). It is built as a **spiral curriculum**: ideas recur across the two years, each return deepening or generalizing the last, rather than being taught once and left behind.

What's novel here isn't the courses — course-based structure is the familiar unit every CS faculty member already works in. What's novel is the **system underneath the courses**: a small set of threads and lenses that deliberately recur across many courses at increasing depth, and a competency model that treats those courses as evidence of program-level outcomes rather than as isolated, self-contained units. The rest of this chapter describes that system; Chapter 4 (Course Designs) describes the courses that carry it.

## The two-year core

The core spans four 16-week semesters (Years 1–2) and is **identical across every degree** — specialization happens entirely in the upper division. It combines CIS/MATH/STAT courses with K-State Core general-education requirements:

{{< degree-map style="min-width: 1200px">}}
<script type="module">
  const plan = {
    name: "Computer Science Two-Year Core",
    version: "Draft",
    theme: {
      color: "#512888",
      typeColors: { elective: "#6b6b6b" },
    },
    years: [
      {
        name: "Year 1",
        semesters: [
          {
            name: "Fall",
            courses: [
              { subject: "CIS", number: 115, name: "Introduction to Computing Science", hours: 2 },
              { subject: "CIS", number: 116, name: "Introduction to Programming", hours: 1 },
              { subject: "DEN", number: 161, name: "Engineering Problem Solving", hours: 1 },
              { subject: "CIS", number: 120, name: "Web Foundations", hours: 1 },
              { subject: "MATH", number: "XXX", name: "Logic and Sets", hours: 1, dur: 0.5, place: "start" },
              {
                subject: "MATH",
                number: "XXX",
                name: "Counting Finite Configurations",
                hours: 1,
                dur: 0.5,
                place: "end",
              },
              { subject: "ENGL", number: 100, name: "Expository Writing I", hours: 3 },
              { type: "elective", name: "Core Communication Requirement", hours: 3 },
              { type: "elective", name: "Social & Behavioral Sciences Requirement", hours: 3 },
            ],
          },
          {
            name: "Spring",
            courses: [
              { subject: "CIS", number: 260, name: "Foundations of Relational Databases", hours: 1 },
              { subject: "CIS", number: 200, name: "Programming Fundamentals", hours: 4 },
              { type: "elective", name: "Calculus (choose I, II, or III)", hours: 4 },
              {
                subject: "MATH",
                number: "XXX",
                name: "Recursive and Modular Computation",
                hours: 1,
                dur: 0.5,
                place: "start",
              },
              { subject: "MATH", number: "XXX", name: "Graphs, Trees, and Maps", hours: 1, dur: 0.5, place: "end" },
              { subject: "ENGL", number: 200, name: "Expository Writing II", hours: 3 },
            ],
          },
        ],
      },
      {
        name: "Year 2",
        semesters: [
          {
            name: "Fall",
            courses: [
              { subject: "CIS", number: 300, name: "Data and Program Structures", hours: 3 },
              { subject: "CIS", number: 301, name: "Logical Foundations of Programming", hours: 3 },
              { type: "elective", name: "Linear Algebra (MATH 350, 515, or 551)", hours: 3 },
              { subject: "CIS", number: 225, name: "Foundations of Computer Networks", hours: 1, dur: 0.5, place: "start" },
              { subject: "CIS", number: 251, name: "Foundations of Cybersecurity", hours: 1, dur: 0.5, place: "end" },
              { type: "elective", name: "Natural & Physical Sciences Requirement (with Lab)", hours: 4 },
            ],
          },
          {
            name: "Spring",
            courses: [
              { subject: "CIS", number: 140, name: "Foundations of Artificial Intelligence", hours: 1 },
              { subject: "CIS", number: 308, name: "C Language Laboratory", hours: 1 },
              {
                subject: "CIS",
                number: 401,
                name: "Software Design, Implementation, and Testing",
                hours: 3,
              },
              { subject: "ECE", number: 241, name: "Introduction to Electrical and Computer Engineering", hours: 3 },
              { subject: "STAT", number: "XXX", name: "Computational Statistics", hours: 4 },
              { type: "elective", name: "Required Communicaitons Elective", hours: 3 }
            ],
          },
        ],
      },
    ],
  };
  document.querySelector("degree-map").plan = plan;
</script>

60 credits across the two years (16/14/15/15), against a 120-credit degree total. Year 1 moves from reading and writing programs to structuring and querying data; Year 2 moves through networks, security, formal reasoning, and applied statistics, and ends at **CIS 401** — a team-based, ambiguous-requirements capstone-of-the-core built around a real historical-archive project, which validates everything the core taught before a student specializes. See `content/course-designs/` for the per-course detail (outcomes, week maps, assessments) as it's built out.

## Cross-cutting norms

Two practices don't get their own thread because confining them to one would misrepresent how they actually work: **concurrency** and **networked-computing** are paired to concept-introduction points across many courses from the very start (CIS 116 onward), rather than escalating through a single dedicated arc.

## The twelve threads

Competencies belong to the program, not to individual courses; courses are contexts in which program-level competencies are demonstrated. Twelve named threads run through the core (beyond the two cross-cutting norms above), in three kinds that mature in three different ways.

### Spirals (8) — depth increases through the topic's own escalation
1. **Data Structures & Representation** — primitive → sequence → hierarchy → relational → document; graphs spiral as a strand within (model → represent → persist → algorithms).
2. **Code Comprehension** — make it work → understand others' → organize → reason about → defend.
3. **Human-Centered Computing** — design FOR, communicate TO, validate WITH people; carries accessibility + data-visualization throughlines and owns acceptance/A-B testing (fitness-for-purpose).
4. **Algorithmic Thinking & Complexity** — theory → graph optimization → real bottleneck.
5. **Computational Models** — the landscape of ways to express computation (imperative, functional, declarative, concurrent), with failure-handling woven through as a property of each.
6. **Correctness & Verification** — informal reasoning → regression → testing and verification, contrasted. Code-correctness only ('is it correct,' vs Human-Centered Computing's 'is it what they needed').
7. **Boundaries & Contracts** — a promise at a boundary; unifies ADTs, APIs, schemas, trust boundaries, and versioning. The strongest expression of the systems-thinking ethos.
8. **Sociotechnical Structure** — systems mirror the orgs that build them (Conway's Law); the collective/team dimension (teamwork, code review as coordination, team reflection). Lands at full expression in CIS 400, the core's team-project host.

### Lenses (3) — a standing question/practice applied wherever relevant; scope grows with capability
- **Trustworthy Computing** — can people trust this system and its builders? Security, privacy, ethics; asked wherever content raises it, formalized in CIS 251 (Foundations of Cybersecurity) and revisited in-depth in CIS 415 (Ethics and Conduct for Computing Professionals).
- **Optimization Reasoning** — "best under constraints," named where it already arises; on-ramp to the AI specialization.
- **Professional Practices** — the individual craft bundle: documentation, version control, code style, code review, communication, self-reflection, estimation, continued learning.

### Bounded practice (1) — scope stays flat; only judgment deepens
- **AI-Assisted Development** — explain/discuss/quiz/critique only, never "write it for me." Deliberately does NOT grow more autonomous, to protect comprehension before the Year 3–4 Agentic AI specialization.

## The service-course model

Some courses are offered to other departments. The pattern: **we own a domain-neutral foundational unit; the partner department owns the domain-application course; together they form the visiting student's one-semester progression.**

- **CIS 260 (Foundations of Relational Databases)** — a 1-credit foundation, followed by e.g. a business data-applications course.
- **CIS 225 (Foundations of Computer Networks)** — followed by network administration (business), low-level implementation (computer engineering), etc. Physical and Data Link layers are conceptual-only; depth deferred to Computer Engineering. This bounds what we own: the shared theoretical trunk (layers 3–7 with full depth, layers 1–2 as orientation).

This bounds our development cost (no domain-specific variants) and defines a good service-course candidate: domain-neutral, foundational, recognizable, prerequisite-light.

## How to read the companion files

- **Thread files** (8) and the **bounded-practice file** (1) — the "how each idea develops" view: pass-by-pass escalation across courses.
- **Lens files** (3) — cross-cutting concerns: where each touches the curriculum and how it escalates.

A thread file names the host course at each pass; the course-design pages (Chapter 4) name the threads passing through a given course. Both views are being reconciled against the real course sequence above — see Status, below.

## Open questions — program level

These are the decisions that don't belong to any single course or thread:

1. **Thread legibility.** Twelve threads plus two cross-cutting norms is a lot for a faculty member teaching one course to hold. The threads interconnect deliberately, but the program needs a clear answer to "how does a course owner see which threads run through their course, and what each expects, without a decoder ring?" A per-course thread-tag scheme is the likely answer; not yet built.
2. **Assessment visibility for lenses.** Security, Documentation, and Optimization have no dedicated courses by design (Security now has CIS 251, but Documentation and Optimization remain lens-only); confirm faculty can see/assess that each lens was actually exercised in its host courses.
3. **Per-course density.** `cs.md` already flags specific density risks worth watching as courses are built out — CIS 115 (absorbing former computer-architecture content on top of its existing history/overview scope) and CIS 260 (holding what was previously two courses' worth of database content at 1 credit). CIS 300 carries a deliberately large share of thread content (data structures, graphs, algorithmic design patterns) by user decision — controlled through scaffolding and coverage depth rather than redistribution, but worth watching as it's built out.
4. **Non-relational (NoSQL) database scope reduction.** Confirmed intentional (2026-07-15): NoSQL content no longer appears anywhere in the required core, only in the CIS 560 elective. Every CS student previously saw this; now only students who choose that elective do. Flagged here so it's visible to reviewers, not just buried in the design log.

## Status

The two-year course structure is largely settled. Current work is fleshing out new courses and incorporated updates into existing ones, working from the proposed sprial threads, lenses, and pedaogigcal approaches.
