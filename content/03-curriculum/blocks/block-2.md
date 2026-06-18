---
title: "MODIFY"
pre: "B2. "
weight: 20
---

**Year 1, Fall · Weeks 9–16 · 8-week block · 3 credits**

> *Working draft for faculty review. Course codes are placeholders. This block is one of eight; it is best read alongside the two-year arc below.*

**Two-year arc:** Read (B1) → **➤ Modify (B2)** → Model (B3) → Structure (B4) → Store (B5) → Build responsibly (B6) → Judge (B7) → Operate (B8)

---

## Purpose

**Cognitive frame:** MODIFY data & state. Computation understood as the act of changing data.

**Essential question:** *What does it mean to change code and data we didn’t write?*

MODIFY data & state. Cognitive frame: computation as the modification of data. Heavy OOP pushed to B3. Code Archaeology (modify broken code) is the centerpiece; data transformation (CSV/JSON as sources and sinks); data-driven web rendering (modify what the user sees as data arrives). Git commit/revert and regression tests introduced together as two safety nets the moment students start changing code.

## Structure

Computer science courses (3):

| Code | Course | Cr | Focus |
|---|---|---|---|
| CS-104 | **Data Transformation & Manipulation** | 1 | Parsing, filtering, reshaping, aggregating data; applies B1 imperative-mutation and functional-transformation skills. CSV/JSON as sources and sinks (file formats used, not taught). Embedded data-minimization: what data, transformed how. |
| CS-105 | **Code Reading & Repair** | 1 | Code Archaeology signature assessment; debugging reframed as modifying data flow. Git commit/revert and regression tests introduced together as two safety nets for changing code. AI-as-explainer, verified empirically. |
| CS-106 | **Web Foundations & Data-Driven Rendering** | 1 | Semantic HTML/CSS + accessibility substrate; emphasis on fetch-and-render (modify the page as data arrives). HCI thread pass 1 + proto-visualization (visual hierarchy) + async/event-loop computational-models pass. Data-minimization in form fields. |

**Block load:** 3 concurrent courses (3 CS + 0 external), 3 credits.

## Threads passing through this block

Competencies are program-level and developed across many blocks; this block is one context in which they are demonstrated. The threads with a pass here:

- **Program Correctness / Comprehension** — Code Archaeology signature assessment formalizes here; “understand it before judging it” (pass 2).
- **Git & Version Control** — Commit/revert as a safety net for repair work (pass 2).
- **Testing & Formal Verification** — Tests for regression — verify a change didn’t break prior function, before the vocabulary exists (pass 2).
- **Computational Models & Error Handling** — Async/event-loop via fetch; failure looks different here than B1’s sequential crash (pass 2).
- **HCI / Accessible Design** — HTML/CSS + accessibility, checklist-compliance level; visual hierarchy as proto-visualization (pass 1).
- **APIs & Networked Systems** — Consume a basic, read-only API (pass 1).
- **Documentation (lens)** — Docstrings/API docs as you build; document a bug fix (what was broken, why, what changed).
- **Security/Privacy/Ethics (lens)** — Data minimization in form fields: why are we asking for this?
- **AI-Assisted Development (bounded)** — AI as explainer continues, supporting Code Archaeology.

## Open questions for faculty review

1. CS-106 (Web Foundations & Data-Driven Rendering) is the weakest fit for the “modifying data” frame — HTML/CSS is fundamentally representation, not modification. It’s kept in by emphasizing the dynamic fetch-and-render side (data → DOM as a transformation) and treating static markup as lightly-taught substrate. If Block 2 should be tight on the frame, CS-106 is the candidate to reconsider; doing so would move the HCI thread’s first pass elsewhere.
2. This reframe pushed heavy OOP out of Block 2 into Block 3, which is the source of Block 3’s load pressure (see Block 3 notes).

---

*Spine position: **Modify**. Builds on Block 1. Leads into Block 3.*
