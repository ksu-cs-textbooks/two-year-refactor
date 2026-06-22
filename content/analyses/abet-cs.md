+++
title = "ABET CS Criteria Analysis"
weight = 10
ordinal = "6.1"
+++

> *Working draft for faculty review. Checks the redesigned B.S. in Computer Science against ABET's computer-science program criteria. The binding question: does the **required** path (common core + capstone + whatever stays required) independently satisfy ABET, with former-required 500-levels as elective depth? Core course codes are placeholders; CIS numbers are actual K-State courses.*

## Why this is the binding analysis

The project's scope escalated from "replace sub-500 CIS" to "restructure the entire required CS core," with courses like CIS 560 and 575 migrating to elective status. ABET is the constraint that makes this safe or not: the **required** path must satisfy every CS criterion on its own, with electives providing genuine depth rather than load-bearing coverage. This analysis maps the criteria against the core and identifies exactly which gaps force a course to remain required.

## Computer science (≥40 SCH)

### Substantial-coverage requirements

| Requirement | Coverage | Status |
|---|---|---|
| Algorithms & complexity | Algorithmic Thinking thread (B4 complexity, B7 graph algorithms, B8 real bottleneck) + Data Structures | **Likely substantial** for the floor; CIS 575 becomes elective depth. Faculty judgment on "substantial" advised |
| **Computer science theory** | Core has complexity (Big-O), computational models (paradigms), logic/verification — but **not** automata, computability, or formal languages | **GAP** — the core is deliberately applied and light on classical CS theory. The most significant finding |
| Concepts of programming languages | Computational Models thread (imperative, functional, declarative, concurrent, dataflow, logic) | **Covered strongly** — the flagship thread *is* programming-language concepts; arguably better than a traditional course |
| Software development | Code Comprehension, Correctness & Verification, Professional Practices, Sociotechnical Structure, B6 team project, B8 deployment | **Covered strongly** |
| **Substantial coverage of ≥1 general-purpose language** | Core is deliberately language-*agnostic*; deep single-language work lives in **certificates outside the 120-credit degree** | **GAP / philosophy collision** — out-of-degree certificates likely do not count for ABET |

### Exposure requirements (lower bar)

| Requirement | Coverage | Status |
|---|---|---|
| Computer architecture & organization | Programming-centric architecture absorbed into the core (stack/heap at B1, cache/memory-hierarchy at B8) | Exposure likely met; verify whether ABET wants ISA/organization depth we lack |
| Information management | Core B5 (databases, SQL, schema design) | Covered — arguably substantial, not just exposure |
| Networking & communication | APIs & Networked Systems thread + the (deferred) OSI Networking unit | Covered |
| Operating systems | Core now includes programmer-facing OS grounding: the process/execution model (seeded B1), and processes vs threads, preemptive vs cooperative scheduling, kernel/user space, plus virtual memory and paging/thrashing (B8) | **Covered** at the exposure level ABET asks for — surfaced to ground the concurrent computational models and the memory-hierarchy-trumps-Big-O lesson; not a full classical-OS course, but genuine exposure to the core OS concepts |
| Parallel & distributed computing | Computational Models (concurrent, actor model at B8) + B8 fault tolerance | Covered |

### Other CS requirements

- **Computing-based systems at varying levels of abstraction:** the core is *built* on this — the representation spiral (primitive \u2192 graph), the Boundaries & Contracts meta-thread, the abstraction progression. **Covered strongly** — a core philosophy, not just a checkbox.
- **Major project:** the capstone, plus the B6 Team Software Project and B8 System Integration Project. Covered.

## Mathematics & statistics (≥15 SCH, rigor ≥ introductory calculus)

| Requirement | Coverage | Status |
|---|---|---|
| Discrete mathematics | Core MATH-101–104 (4 cr) | Covered |
| Probability | STAT-102 (core, conceptual) + year-3 calculus-based | Covered |
| Statistics | Core STAT-101–104 (4 cr) | Covered |
| Rigor ≥ introductory calculus | Year-3 calculus + linear algebra sit within the 15-SCH block | **Met at the block level** — see tension below |

**The rigor tension.** The foundation statistics is deliberately *non-calculus* (calculus was moved to year 3). ABET wants the math/stats block to carry calculus-level rigor. The resolution: the 15-SCH block *includes* year-3 calculus and linear algebra, so the **block** clears the rigor bar even though the foundation stats within it is conceptual. Two consequences to confirm: (1) year-3 calculus must be counted within the 15 SCH, and (2) the 15-SCH math/stats requirement therefore formally spans into year 3 — acceptable for a four-year degree, but it should be explicit.

## Science

Coursework applying the scientific method in a non-computing area — a science/gen-ed requirement K-State already satisfies, outside CS coursework and unaffected by this redesign. Noted only for completeness.

## The three real gaps — and how they decide required vs. elective

The value of this analysis: the ABET gaps **determine which 500-level courses must stay required**. Courses whose *foundations* the core already covers can become electives; courses that fill a core gap must stay required.

1. **Computer science theory** (automata, computability, formal languages). The core does not cover it. **Implication:** a formal-theory course (e.g. CIS 570/770) likely **stays required**, or the core is strengthened to add theory. This is the clearest "must stay required" consequence.
2. **General-purpose language, substantial coverage.** The language-agnostic core plus out-of-degree certificates likely does not satisfy ABET. **Implication — one of:** (a) a language course stays required in the degree; (b) one core course takes a language deep (in tension with the multi-paradigm design); or (c) the certificate model is restructured so a certificate counts toward degree credit for ABET. This is a genuine collision between the design philosophy and the criterion, and it must be resolved deliberately.
3. **Operating systems exposure — now addressed.** Programmer-facing OS grounding (process/execution model at B1; processes/threads/scheduling and virtual memory/paging/thrashing at B8) is woven into the Computational Models and Algorithmic Thinking threads, where it grounds the concurrent-model distinctions and the systems-reality-trumps-Big-O lesson. This provides genuine OS *exposure* without a dedicated OS course.

By contrast, the courses the restructure *wanted* to make elective are safe to: **CIS 560 (databases)** and **CIS 575 (algorithm analysis)** — the core covers their foundations (B5 databases; B4/B7 algorithms), so they become legitimate elective depth rather than required coverage.

## Recommended required-vs-elective shape (subject to faculty judgment)

| Course | Likely status | Reason |
|---|---|---|
| Two-year core (30 cr) | **Required** | Covers most ABET CS criteria |
| CIS 570/770 Formal Languages / Theory | **Likely required** | Fills the CS-theory gap |
| A general-purpose language course *or* restructured certificate | **Likely required** (form TBD) | Fills the language-coverage gap |
| An OS course | **Not required on ABET grounds** | OS exposure now covered by the woven programmer-facing grounding (B1 + B8) |
| CIS 560 Databases | **Elective** | Core covers the foundation |
| CIS 575 Algorithm Analysis | **Elective** | Core covers the foundation |
| CIS 501 Software Architecture, CIS 505 Programming Languages | **Likely elective** | Core threads (Boundaries/Sociotechnical/HCI; Computational Models) cover the foundations — confirm |
| Capstone | **Required** | ABET major-project requirement |

## Open questions

1. **CS theory.** Add a required theory course, or strengthen the core to cover automata/computability? (The core's applied orientation was deliberate; adding theory is a real change.)
2. **Language coverage.** Which resolution — required language course, a language-deep core course, or certificates restructured to count? This decides the fate of the language-agnostic philosophy *within the accredited degree*.
3. **Operating systems — resolved.** The woven programmer-facing OS grounding (process model, threads/scheduling, virtual memory/paging/thrashing) provides the exposure ABET asks for; confirm faculty agree it clears the bar.
4. **"Substantial" thresholds.** Faculty judgment on whether core algorithms and architecture coverage clears "substantial"/"exposure" without the former depth courses.
5. **Math rigor accounting.** Confirm year-3 calculus counts within the 15-SCH math/stats block, making the non-calculus foundation stats acceptable.

## Bottom line

The redesigned core satisfies the **majority** of ABET CS criteria, several of them strongly (programming-language concepts, software development, abstraction, information management). The accreditation work is now concentrated in **two gaps** — CS theory and substantial single-language coverage (operating-systems exposure having been closed by weaving programmer-facing OS grounding into the Computational Models and Algorithmic threads) — and those gaps are *productive*, because they convert the open "which 500-levels stay required" question into a principled answer: the courses that fill the core's ABET gaps stay required; the courses whose foundations the core already covers (560, 575, likely 501 and 505) become elective depth. The one genuine philosophical decision forced by ABET is the **general-purpose-language requirement**, which collides with the language-agnostic core and the out-of-degree certificate model and must be resolved explicitly.
