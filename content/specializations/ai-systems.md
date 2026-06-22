+++
title = "A.I. Systems"
weight = 40
ordinal = "5.4"
+++

> *Working draft for faculty review. A proposal for an A.I. Systems specialization built on the shared two-year core, using real K-State courses. The catalog reveals a genuine undergraduate 500-level A.I. suite — the earlier worry that A.I. depth was graduate-only was mistaken. Core course codes are placeholders; CIS/STAT/MATH numbers are actual K-State courses.*

## Premise

Under the specialization model, every degree is the identical two-year core plus a degree-specific upper division. A.I. is the most mathematics-dependent specialization; the core pre-positions students through several on-ramp threads, and K-State has real undergraduate A.I. courses to build the upper division.

## What the core already provides (the on-ramps)

A.I.-bound students arrive having spiraled through Computational Models (the flagship thread — paradigms including the logic/constraint touch), AI-Assisted Development (two years of disciplined, evaluate-don't-delegate practice with A.I. tools), Optimization Reasoning, Algorithmic Thinking (including heuristic search — A* is already in the core at B7), and the core statistics sequence.

## Prerequisite mapping (core → specialization)

| Course prerequisite | Satisfied by |
|---|---|
| CIS 300 (data structures) | Data Structures & Representation thread (B3–B4) |
| CIS 301 (logic) | Absorbed (MATH-101 + Correctness & Verification) |
| CIS 400 (OOP) | The core's B3 OOP |
| CC 210 (Python) | Core language-agnostic foundation + an optional Python certificate |
| MATH 510 (discrete) | The core's MATH-101–104 |

## CS-side specialization stack (real undergraduate courses)

| Course | Role |
|---|---|
| **CIS 530 Introduction to Artificial Intelligence** | Foundations: search, **heuristic search**, knowledge representation, logic, probability, intro ML and NLP |
| **CIS 532 Introduction to Deep Learning** | Modern neural architectures (CNNs, RNNs, transformers) — **an undergraduate deep-learning course** (closes the earlier "ML is graduate-only" gap) |
| **CIS 537 Computer Vision** | Perception; a natural application area |
| **CIS 635 Knowledge Systems** | Knowledge representation / expert systems (symbolic A.I.) |
| Graduate electives (CIS 730/732/810/833/835/836) | Depth: principles of A.I., ML & pattern recognition, logic programming, text mining, neuro-symbolic, knowledge graphs |

## Mathematics & statistics stack (real courses)

| Course | Role |
|---|---|
| **MATH 551 Applied Matrix Theory** | Linear algebra (applied; needs only Calc I; includes linear programming) — preferred over MATH 515 (Calc III). *A custom pre-calculus linear-algebra course off the core progression would fit better and is worth pursuing.* |
| **STAT 510 / STAT 511** | Calculus-based probability and inference (A.I. needs probability) |
| **STAT 760 Optimization for Data Science** | Optimization — directly the ML-optimization the criterion wants |
| **STAT 766 Applied Data Mining / ML** | Optional statistics-side ML complement to CIS 532 |

## ABET Accreditation Mapping (Proposed A.I. Criteria)

ABET's proposed A.I. criteria require **≥42 SCH of A.I. coursework** plus, **separately, ≥9 SCH of mathematics and statistics** (inference and modeling, linear algebra, probability, data visualization, optimization).

### Fundamental A.I. topics

| ABET topic | Coverage | Status |
|---|---|---|
| Foundations: reasoning, **heuristic search**, knowledge representation | CIS 530 (search/KR/logic/probability) + CIS 635 (knowledge systems); A* already in the core | Covered |
| Programming, data structures, algorithms | Core | Covered strongly |
| Data & knowledge engineering | CIS 635; graduate CIS 836 (knowledge graphs); CIS 531 (data engineering) | Covered |
| Machine learning, incl. deep learning | **CIS 532 (Deep Learning, undergraduate)** + graduate CIS 732; STAT 766 | Covered (532 closes the former gap) |
| Design & implementation of A.I. solutions | CIS 530/532/537 projects + capstone | Covered |
| **A.I. system architecture & infrastructure** | Core B8 (general deployment); no A.I.-specific course | **Gap** — MLOps (model serving, pipelines, scaling, vector stores) has no course; the one clear new-course need |
| Ethics & responsible A.I. | Core (AI-Assisted bounded practice + Responsible A.I.) + CIS 533 societal aspects | Covered strongly |

### Mathematics & statistics (≥9 SCH)

Inference & modeling (STAT 510/511, 705), linear algebra (MATH 551), probability (STAT 510/511 + core), data visualization (core + STAT 745), optimization (**STAT 760**). The 9-credit floor is **easily cleared** by the year-3 mathematics block — a lower bar than data science.

### Depth, application area, project

- **Advanced coursework:** CIS 730/732/810/833/835/836.
- **Application area:** name one — **computer vision** (CIS 537), **bioinformatics** (CIS 734), or **NLP/text mining** (CIS 833).
- **Major project:** an A.I. capstone (CIS 598-style); the natural home for the **Agentic A.I.** pinnacle the AI-Assisted bounded practice was designed to protect — likely a new course.

## The two real gaps

1. **A.I. system architecture & infrastructure (MLOps).** Confirmed: no course exists for model serving, ML pipelines, scaling, or vector stores. The clearest new-course need, and the fastest-moving area of the field, so worth deliberate attention.
2. **Agentic A.I. capstone.** The core points toward it; it would be new.

## The calculus-sequencing note

Like data science, A.I.'s calculus-based courses (STAT 510/511 probability, STAT 760 optimization) are gated behind the year-3 calculus. A.I. is the most math-dependent specialization, so **calculus and linear algebra must land early in year 3** or the ML/optimization sequence cannot run on time. This is the hardest scheduling dependency in the specialization and a direct consequence of the defer-calculus decision.

## Bottom line

With the real course suite, A.I. is well-supported: CIS 530/532/537/635 give a genuine undergraduate A.I. core (deep learning included), Statistics supplies optimization and probability (STAT 760/510/511), and the core's responsible-A.I. emphasis is a standout strength while heuristic search arrives for free via A*. Two real obstacles remain: the **A.I. infrastructure/MLOps gap** (a likely new course) and **calculus sequencing** (the math must land early in year 3). The math/stats floor itself is easily met.
