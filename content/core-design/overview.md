+++
title = "Program Overview"
weight = 10
ordinal = "1.0"
+++

# First-Two-Year CS Foundation — Program Overview

> *Working draft for faculty review. This is the front door to a set of 22 companion files: 8 block files, 9 thread files, 3 lens files, and 1 bounded-practice file. Course codes throughout are placeholders.*

## What this is

A competency-based, systems-thinking foundation for a B.S. in Computer Science, shared by students who will go on to specialize (Cybersecurity, Data Science, AI Systems, Software Architecture). It is built as a **spiral curriculum**: ideas recur across the two years, each return deepening or generalizing the last, rather than being taught once and left behind.

The structural unit is the **1-credit, 8-week course**. Courses are deliberately small and short so that prerequisite chains stay short and parallel — a topic that would traditionally be one large course (e.g. databases) is split across several 1-credit courses that can be sequenced flexibly. Eight 8-week blocks span two years (two blocks per semester).

## The two-year spine

Each block has one cognitive frame. Read in order, the frames tell a single story — each verb escalates on the one before:

**Read → Modify → Model → Structure → Store → Build responsibly → Judge → Operate**

| Block | Term | Frame |
|---|---|---|
| **B1** | Y1 Fall, Wks 1–8 | **Read** — Read computation (two paradigms) |
| **B2** | Y1 Fall, Wks 9–16 | **Modify** — Modify data & state |
| **B3** | Y1 Spring, Wks 1–8 | **Model** — Model & abstract (contracts, ADTs, OOP) |
| **B4** | Y1 Spring, Wks 9–16 | **Structure** — Structure across scales (data/system/network/human) |
| **B5** | Y2 Fall, Wks 1–8 | **Store** — Information at rest (store, share, query, describe) |
| **B6** | Y2 Fall, Wks 9–16 | **Build responsibly** — Responsible development (correct, safe, collaborative) |
| **B7** | Y2 Spring, Wks 1–8 | **Judge** — Integration & judgment (design under uncertainty) |
| **B8** | Y2 Spring, Wks 9–16 | **Operate** — In production (deliver, operate, stay accountable) |

Year 1 (B1–B4) moves from reading computation to structuring it, and ends at a real **transfer/exit checkpoint**. Year 2 (B5–B8) moves from storing information to operating live systems. Blocks 6 and 8 are the two halves of professional accountability (before release, after release), bracketing Block 7's judgment block.

## The course grid

| Block | CS courses | External (co-designed) |
|---|---|---|
| B1 | CS-101 Imperative Programming; CS-102 Functional Programming; CS-103 Computational Representation | MATH-101 Discrete Math: Logic and Sets |
| B2 | CS-104 Data Transformation & Manipulation; CS-105 Code Reading & Repair; CS-106 Web Foundations & Data-Driven Rendering | MATH-102 Discrete Math: Counting Finite Configurations |
| B3 | CS-107 Object-Oriented Programming I; CS-108 Object-Oriented Programming II; CS-109 Abstract Data Types | MATH-103 Discrete Math: Recursive and Modular Computation |
| B4 | CS-110 Trees, Hashing & Hierarchies; CS-111 Systems & APIs; CS-112 Algorithmic Complexity | STAT-101 Descriptive Statistics & Data Summarization |
| B5 | CS-201 SQL Fundamentals; CS-202 Database Design | STAT-102 Probability |
| B6 | CS-203 Software Testing & Validation; CS-204 Security Fundamentals; CS-205 Collaborative Development | STAT-103 Random Variables, Distributions & Sampling |
| B7 | CS-206 Graphs & Network Algorithms; CS-207 Document Databases & Data Integration | MATH-104 Discrete Math: Graphs, Trees, and Networks |
| B8 | CS-208 Deployment & Operations; CS-209 Human-Centered Design & Validation; CS-210 Data Analysis & Responsible AI | STAT-104 Correlation & Regression |

**Totals:** 22 CS credits + 8 external (co-designed) credits = **30 credits currently allocated.** The original target was 26 (22 CS + 4 discrete math). The external sequence has since grown to eight — four discrete math plus a four-course statistics sequence for ML readiness — paced one per block (math B1–B3 + B7, statistics B4–B6 + B8). A ninth external (linear algebra) and a 2-credit OSI networking unit are agreed-in-principle but unplaced. **The credit budget is deliberately left soft** pending the cross-block optimization pass — see open questions.

## The thirteen threads

Competencies belong to the program, not to individual courses; courses are contexts in which program-level competencies are demonstrated. Thirteen named threads run through the blocks, in three kinds that mature in three different ways.

### Spirals (9) — depth increases through the topic's own escalation
1. **Data Structures & Representation** — primitive → sequence → hierarchy → relational → document; graphs spiral as a strand within (model → represent → persist → algorithms). The cleanest spiral.
2. **Code Comprehension** — make it work → understand others' → organize → reason about → defend.
3. **APIs & Networked Systems** — consume → build → integrate → operate.
4. **Human-Centered Computing** — design FOR, communicate TO, validate WITH people; carries accessibility + data-visualization throughlines and owns acceptance/A-B testing (fitness-for-purpose).
5. **Algorithmic Thinking & Complexity** — theory → graph optimization → real bottleneck.
6. **Computational Models** *(flagship)* — the landscape of ways to express computation (imperative, functional, declarative, concurrent), with failure-handling woven through as a property of each.
7. **Correctness & Verification** — informal reasoning → regression → testing and verification, contrasted. Code-correctness only ('is it correct,' vs Human-Centered Computing's 'is it what they needed').
8. **Boundaries & Contracts** *(meta-thread)* — a promise at a boundary; unifies ADTs, APIs, schemas, trust boundaries, and versioning. The strongest expression of the systems-thinking ethos.
9. **Sociotechnical Structure** — systems mirror the orgs that build them (Conway's Law); the collective/team dimension (teamwork, code review as coordination, team reflection).

### Lenses (3) — a standing question/practice applied wherever relevant; scope grows with capability
- **Trustworthy Computing** — can people trust this system and its builders? Security, privacy, ethics; asked wherever content raises it, formalized once (B6, the likely ABET ethics anchor).
- **Optimization Reasoning** — "best under constraints," named where it already arises; on-ramp to the AI degree.
- **Professional Practices** — the individual craft bundle: documentation, version control, code style, code review, communication, self-reflection, estimation, continued learning.

### Bounded practice (1) — scope stays flat; only judgment deepens
- **AI-Assisted Development** — explain/discuss/quiz/critique only, never "write it for me." Deliberately does NOT grow more autonomous, to protect comprehension before the Year 3–4 Agentic AI specialization.

*Individual vs collective: Professional Practices (lens) holds individual craft; Sociotechnical Structure (spiral) holds the team/collective dimension. They meet at a deliberate seam in B6 (git mechanics + self-reflection here; team coordination + team reflection there).*

## Convergence points

Threads are designed to meet at certain blocks, which is the sign they're integrated rather than scattered:

- **B1** — four "reading" tools converge (git history, asserts/logs, documentation, computational-model naming), all feeding the B2 Code Archaeology assessment.
- **B2** — two safety nets (git revert, regression tests) land together as students first modify code.
- **B6** — testing, security, collaboration, team-facing documentation, and errors-as-attack-surface all formalize at once, unified by the "responsible development" frame.
- **B8** — production concurrency, real-bottleneck performance, fault-tolerance comparison, hardening, versioning (closing the B1 semver loop), and the blameless postmortem all land as terminal passes.

## The service-course model

Some courses are offered to other departments. The pattern: **we own a domain-neutral foundational unit; the partner department owns the domain-application course; together they form the visiting student's one-semester progression.**

- **Relational Databases** (SQL Fundamentals + Database Design, B5) — a 2-credit foundation, followed by e.g. a business data-applications course.
- **OSI Networking Fundamentals** (a 2-block theoretical unit, placement TBD) — followed by network administration (business), low-level implementation (computer engineering), etc.

This bounds our development cost (no domain-specific variants) and defines a good service-course candidate: domain-neutral, foundational, recognizable, prerequisite-light.

## How to read the companion files

- **Block files** (8) — the "what happens when" view: each block's frame, courses, threads passing through, and open questions.
- **Thread files** (9) and the **bounded-practice file** (1) — the "how each idea develops" view: pass-by-pass escalation across blocks.
- **Lens files** (3) — cross-cutting concerns: where each touches the curriculum and how it escalates.

The two views cross-reference each other: a block file names the threads passing through it; a thread file names the host course at each pass.

## Open questions — program level

These are the decisions that don't belong to any single block or thread:

1. **Credit budget.** Allocation now stands at 30 credits vs. an original 26 target, and agreed-in-principle additions (rest of the stats sequence, linear algebra, OSI networking) will push it higher. A cross-block optimization pass is needed to reconcile — grow the total, displace content, or move items outside the required core.
2. **Thread legibility.** Thirteen threads is a lot for a faculty member teaching one 1-credit course to hold. The threads interconnect (the convergence points above are evidence they're integrated, not fragmented), but the program needs a deliberate answer to "how does a course owner see which threads run through their course, and what each expects, without a decoder ring?" The block files are a first attempt; a per-course thread-tag scheme may be needed.
3. **OSI Networking placement and credits** — conceptual host is B4 (network structure), but placement and its 2 credits are deferred.
4. **Statistics sequence & ML prerequisites.** All four statistics courses are now placed (Descriptive @ B4, Probability @ B5, Distributions/Sampling @ B6, Regression @ B8). The AI degree also needs statistical inference, linear algebra, probability, data visualization, and optimization — data visualization lives in the Human-Centered Computing thread, optimization in the Optimization lens, probability ownership is below, and linear algebra is the unplaced ninth external (see #6).
5. **Probability ownership** — the discrete-math draft already covers finite/counting-based probability; the stats sequence wants continuous probability. Likely split (discrete owns finite, stats owns continuous), but this is for the cross-department co-design meeting.
6. **Linear algebra** — confirmed missing from the math sequence; placed as a 5th math course (placeholder) but flagged as likely needing a different approach (it is not discrete, and one 1-credit/8-week course is tight).
7. **Assessment visibility for lenses** — Security, Documentation, and Optimization have no dedicated courses by design; confirm faculty can see/assess that each was actually exercised in its host courses.
8. **Week-by-week load checks** — B1, B6, and CS-210 (B8) are the density risks; their frames are coherent but a mechanical schedule check is still owed.
9. **Document reconciliation** — the earlier full architecture document and spiral map predate the block reframes and are now stale; they should be regenerated from the current source before external review.

## Status

All eight blocks are framed and the two-year arc is complete and internally consistent in the source of record. The work now pending is cross-block optimization (chiefly the credit budget and external-course placement), the week-by-week schedules, and regenerating the two early polished documents from the current design.
