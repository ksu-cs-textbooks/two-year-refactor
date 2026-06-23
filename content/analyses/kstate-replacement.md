+++
title = "K-State Sub-500 CIS Replacement"
weight = 20
ordinal = "6.2"
+++

> *Working draft for faculty review. Maps the proposed replacement of all sub-500 CIS courses in the K-State B.S. in Computer Science (Fall 2026 requirements) with the redesigned two-year core. Surfaces gaps, overlaps, and the decisions needed. Course codes for the new core are placeholders.*

## What is being replaced

The current degree's CS Requirements block is 41 credits. Of that, the **sub-500 CIS courses total 23 credits**:

| Course | Cr | Nature |
|---|---|---|
| CIS 115 Introduction to Computing Science | 2 | Intro |
| CIS 116 Introduction to Programming | 1 | Intro programming |
| CIS 200 Programming Fundamentals | 4 | Programming |
| CIS 300 Data and Program Structures | 3 | Data structures |
| CIS 301 Logical Foundations of Programming | 3 | **Formal logic** |
| CIS 308 C/C++ Programming Laboratory | 1 | **Language-specific** |
| CIS 400 Object-Oriented Design, Implementation and Testing | 3 | OOP |
| CIS 415 Ethics and Conduct for Computing Professionals | 3 | **Ethics (standalone)** |
| CIS 450 Computer Architecture and Operations | 3 | **Architecture** |

The bolded four are the crux: they are **not** intro programming, and the two-year core was scoped around programming, data structures, and OOP. They need explicit decisions.

For reference, what **stays** (500-level CIS and the non-CIS requirement): CIS 501 Software Architecture, CIS 505 Programming Languages, CIS 560 Database System Concepts, CIS 575 Algorithm Analysis, the capstone, ECE 241 Intro to Computer Engineering, and the restricted/technical electives.

## The headline finding: this is not a 1:1 replacement

The two-year core is a **different shape** than the 23 credits it would replace. Three things are true at once:

1. **It cleanly covers the programming spine.** CIS 115/116/200 (intro + programming) map to our Blocks 1–2; CIS 300 (data structures) maps to Blocks 3–4; CIS 400 (OOP) maps to Block 3. This is the clean part.

2. **It leaves four gaps** — content in sub-500 CIS that the core does not fully cover:
   - **Computer architecture (CIS 450)** — largely *not* in the core. We have CS-103 Computational Representation (boolean logic, number systems, bits) but not computer organization, assembly, or memory hierarchy. We also deliberately cut HDL/FPGA earlier in the redesign. This is the biggest gap.
   - **Formal logic (CIS 301)** — partially covered. Our external MATH-101 (Logic & Sets), the Correctness & Verification thread (pre/post-conditions, verification), and Boundaries & Contracts touch this, but CIS 301 is a dedicated logic-of-programming course and ours is distributed.
   - **Ethics (CIS 415)** — covered *differently*. Our Trustworthy Computing lens and the Block 6 "Responsible Development" frame weave ethics throughout, by design. CIS 415 is a standalone 3-credit ethics course. Replacing a dedicated course with embedded treatment is a genuine pedagogical/philosophical choice, not an automatic substitution.
   - **C/C++ specifics (CIS 308)** — not covered. Our core is deliberately language-agnostic; CIS 308 is a specific C/C++ lab.

3. **It reaches *upward* into current 500-level content.** Our core teaches database design, algorithmic complexity, software/systems design, testing, security, and human-centered computing — material K-State currently places at 500-level (CIS 560 Databases, CIS 575 Algorithm Analysis, CIS 501 Software Architecture). So the core not only replaces sub-500 CIS, it **overlaps several 500-level courses that are supposed to stay.**

## Credit reconciliation

| | Credits |
|---|---|
| Sub-500 CIS being removed | 23 |
| Our core — CS courses | 22 |
| Our core — embedded external (discrete math + statistics) | 8 |
| Our core — total | 30 |

Two reconciliation problems sit in these numbers:

**A. CS credits are roughly even (22 vs 23), but coverage differs.** The 22 CS credits replace 23 sub-500 CIS credits at near-parity, *but* they cover a different content set (gaining databases/testing/security/HCI, missing architecture/C++/standalone-logic/standalone-ethics). Near-even credit totals mask a real content shift.

**B. The embedded external courses collide with existing requirements.**
K-State's Math block *already* requires **MATH 510 Discrete Mathematics (3)**
and **STAT 510 Introductory Probability and Statistics I (3)**, separate from
the CS Requirements. Our core embeds its *own* discrete-math sequence (4 × 1cr)
	and statistics sequence (4 × 1cr). These **duplicate or must replace** MATH
	510 and STAT 510. This needs explicit reconciliation — otherwise students
	take discrete math and statistics twice, in two different forms.

**C. Upward overlap may or may not let students skip 500-levels.** If the core covers CIS 560 (databases) and CIS 575 (algorithm analysis) content, do students still take those 500-level courses (reinforcement, with the core as prerequisite depth) or place out of them (changing the total degree credit count)? This directly affects the 41-credit CS Requirements total.

## Course-by-course mapping

| Current sub-500 CIS | Maps to (new core) | Assessment |
|---|---|---|
| CIS 115 Intro to Computing Science (2) | B1 reading-first framing + CS-101/103 | Covered |
| CIS 116 Intro to Programming (1) | CS-101 Imperative Programming | Covered |
| CIS 200 Programming Fundamentals (4) | CS-101 + CS-102 + CS-104 | Covered (and broader — adds functional + data transformation) |
| CIS 300 Data and Program Structures (3) | CS-109 + CS-110 + CS-112 | Covered |
| CIS 301 Logical Foundations of Programming (3) | MATH-101 + Correctness & Verification thread + Boundaries & Contracts | **Partial — distributed, not a dedicated course** |
| CIS 308 C/C++ Lab (1) | — | **Gap — core is language-agnostic** |
| CIS 400 OOD, Implementation & Testing (3) | CS-107 Software Modeling and Design + CS-108 Computational Abstractions (+ Correctness & Verification) | Covered |
| CIS 415 Ethics & Conduct (3) | Trustworthy Computing lens + B6 Responsible Development | **Covered differently — embedded, not standalone** |
| CIS 450 Computer Architecture & Operations (3) | CS-103 (partial) | **Gap — architecture largely absent** |

## Decisions needed

The replacement can't be finalized without these. Grouped by urgency:

**The four gap courses:**
1. **Computer architecture (CIS 450).** The core does not cover it. Options: keep CIS 450 as a separate surviving requirement; move architecture to a 500-level course; add an architecture unit to the core; or rely on ECE 241 (Intro to Computer Engineering, which stays) to carry it. Which?
2. **Ethics (CIS 415).** Replace the standalone 3-credit ethics course with the core's embedded ethics (Trustworthy Computing + B6), or keep a dedicated ethics course alongside the core? This is a philosophy decision with ABET professional-responsibility implications.
3. **Formal logic (CIS 301).** Is the core's distributed coverage (MATH-101 + verification + contracts) sufficient, or is a dedicated logic-of-programming course still required?
4. **C/C++ (CIS 308).** Does the program need specific C/C++ exposure (systems-adjacent, CompE-adjacent), or is the language-agnostic core acceptable here?

**The external-course collision:**
5. **MATH 510 / STAT 510.** Do the core's embedded discrete-math and statistics sequences *replace* MATH 510 and STAT 510, or do those remain separate requirements (creating duplication)? If they replace, the Math block (currently 17–18 cr) changes and the reconciliation must satisfy KBOR/K-State Core quantitative-literacy requirements.

**The upward overlap:**
6. **500-level overlap.** The core covers content currently at CIS 560 (databases) and CIS 575 (algorithm analysis). Do students still take those, or place out? This sets the new CS Requirements credit total.

**Scope confirmation:**
7. **Confirm the replacement set.** Does "all CIS under 500" mean all nine courses (23 cr), including the four non-programming ones — or only the programming sequence (CIS 115/116/200/300/400 = 13 cr), leaving logic/ethics/architecture/C++ as separate survivors?

## What I need from you to finalize

- **Answers to decisions 1–7 above** — especially #7 (scope), since it
  determines whether this is a 23-credit or a 13-credit replacement, and #1
  (architecture) and #5 (MATH 510/STAT 510), which are the two hardest
  reconciliations.
- A **target credit count** for the new CS Requirements block (currently 41), so the core + surviving 500-levels + any retained gap courses can be sized to it.
- Whether the **specialization degrees** (Cybersecurity, Data Science, AI Systems, Software Architecture) we designed the core to feed are intended to map onto K-State's existing restricted/technical-elective and capstone structure, or to replace it.


---

# Resolutions (current state — updated after faculty input)

The analysis above captured the *initial* mapping. The following decisions have since been made, closing most gaps:

## Resolved

- **Discrete math + statistics — the core's embedded sequences replace MATH 510 and STAT 510.** No duplication. The foundation math footprint is exactly 8 one-credit courses: four discrete (MATH-101–104) and four **non-calculus** statistics (STAT-101–104), one external per block.
- **Computer architecture (CIS 450) — absorbed.** Its content is programming-centric (stack/heap, cache misses, memory model from the programmer's view), not digital-logic/hardware design. Now named explicitly in the core: the stack/heap memory model at CS-103 (B1), and cache misses / memory-hierarchy / locality in the B8 performance pass (CS-208).
- **Formal logic (CIS 301) — absorbed.** The distributed coverage (MATH-101 Logic & Sets + the Correctness & Verification thread + Boundaries & Contracts) is accepted as sufficient.
- **C/C++ (CIS 308) — handled by a language certificate.** Rather than forcing a specific language into the deliberately language-agnostic core, the program will offer **language certificates** (~1 credit each, a single language taught deeply) as **supplementary micro-credentials outside the 120-credit degree**. The core teaches paradigms and the ability to read any language (Code Comprehension thread); a certificate adds deep single-language fluency. This also serves other departments (e.g. a Computer Engineering student takes a C/C++ certificate).
- **Databases (CIS 560) — narrows to an elective.** The core's B5 (SQL Fundamentals + Database Design) is the foundation; CIS 560 spirals deeper on relational algebra and relational theory as **elective depth**, likely no longer required. The core feeds it rather than replacing it.
- **Algorithm analysis (CIS 575) — likely narrows to an elective**, same pattern: the core's B4 complexity + B7 graph algorithms are the foundation; 575 becomes optional deeper analysis.
- **Calculus — moved to year 3** (Calc 2 possibly not required). Never part of the two-year core. Its move confirms the statistics sequence must be **non-calculus / intro-level** in the foundation, with calculus-based statistical rigor deferred to year 3+.
- **Linear algebra — moved to year 3** with calculus (both ML prerequisites). The foundation keeps only the adjacency-matrix seed at CS-110 (B4). This resolves the long-open "ninth external" question — the foundation has exactly 8 externals, one per block.

## Soft-resolved

- **Ethics (CIS 415).** The plan is **embedded ethics** (the Trustworthy Computing lens + the Block 6 "Responsible Development" frame) as the primary and load-bearing treatment. A standalone year-3 ethics course *may* be retained but is uncertain (the ethics faculty member is retiring). **Design implication:** the embedded ethics must be strong enough to carry the ABET professional-responsibility outcome on its own, since the standalone course cannot be relied upon.

## The emerging structural pattern

Several currently-required 500-level courses (560, 575, and likely 501 Software Architecture and 505 Programming Languages) are becoming **elective depth that the core feeds** rather than required courses. This is the spiral philosophy extended across the whole degree: the core spirals *broadly* (years 1–2); electives spiral *deeper* on chosen topics (years 3–4).

**This escalates the scope of the project.** What began as "replace sub-500 CIS with the two-year core" is becoming a **restructuring of the entire required CS core**, with required courses migrating to elective status. That requires its own dedicated analysis with **ABET student outcomes as the binding constraint**: the *required* path (core + whatever 500-levels remain required + capstone) must satisfy every ABET outcome on its own, with electives as genuine depth, not load-bearing coverage. This is the recommended next analysis.

## Updated credit picture

The core (22 CS + 8 external = 30 cr) replaces roughly **29 K-State credits**: 23 of sub-500 CIS plus the 6 credits of MATH 510 + STAT 510 that the embedded sequences now cover. The replacement is **nearly credit-neutral** — the earlier "over budget" concern was an artifact of not counting the discrete/stats requirements the core absorbs from the math block.

## Remaining genuinely open

- **The full 500-level analysis** (501, 505, and any others) against ABET — the recommended next step, and now the largest open piece.
- **Total CS Requirements credit count** after the restructure (currently 41) — depends on which 500-levels remain required.
- **Specialization-degree mapping** onto K-State's restricted-elective and capstone structure.
