---
title: "OPERATE"
pre: "B8. "
weight: 80
---

**Year 2, Spring · Weeks 9–16 · 8-week block · 3 credits**

> *Working draft for faculty review. Course codes are placeholders. This block is one of eight; it is best read alongside the two-year arc below.*

**Two-year arc:** Read (B1) → Modify (B2) → Model (B3) → Structure (B4) → Store (B5) → Build responsibly (B6) → Judge (B7) → **➤ Operate (B8)**

---

## Purpose

**Cognitive frame:** IN PRODUCTION: delivery, operation & accountability — the system meets the real world. Closes the two-year arc and bridges to the capstone.

**Essential question:** *It’s live and people depend on it — how do we operate it and stay accountable?*

In Production: delivery, operation & accountability — the system meets the real world. Pairs with B6 as the two halves of professional accountability (B6 pre-release, B8 post-release), bracketing B7’s judgment block. Terminal pass for many threads: production concurrency, real-bottleneck performance, comparative fault-tolerance (try/catch vs OTP supervision vs circuit-breaker), security hardening, requirements-driven UX, API versioning (closes the B1 semantic-versioning loop), blameless postmortem. System Integration Project bridges to the capstone. Closes the two-year arc: read → modify → model → structure → store → build-responsibly → judge → operate.

## Structure

Computer science courses (3):

| Code | Course | Cr | Focus |
|---|---|---|---|
| CS-208 | **Deployment & Operations** | 1 | Deploy, monitor, and operate a live system. Performance analysis on a REAL bottleneck (Algorithmic final pass). Production fault-tolerance compared across models — try/catch vs Erlang/OTP supervision trees vs circuit-breakers (Error Handling flagship final pass; conceptual, not implementation). Concurrency at scale; containers as deployment structure; harden-before-live (Security final pass); operational runbooks (Documentation); API versioning as a compatibility contract (Boundaries final pass, closes the B1 semver loop). |
| CS-209 | **Accessible & Human-Centered Design** | 1 | Formal requirements gathering and UX — the HCI final pass, escalating from B2’s accessibility-checklist compliance to requirements-driven design (designing from others’ needs outward). Light design-under-ambiguity (real requirements are messy). The System Integration Project here carries a blameless postmortem (Sociotechnical final pass; the org-culture expression of “errors are normative”). |
| CS-210 | **Data Analysis & Responsible AI** | 1 | Notebook-based data analysis as the CULMINATION of the STAT-101 statistics foundation and the data-visualization throughline (B2/B4/B5/B7) — integrative, not new-from-scratch. Honest visualization and data ethics. The genuinely new skill: high-stakes verification and critique of AI-generated code for correctness and security (AI bounded-practice final pass; prerequisite for the Year 3–4 Agentic AI specialization, which this course precedes but does not duplicate). |

**Block load:** 3 concurrent courses (3 CS + 0 external), 3 credits.

## Threads passing through this block

Competencies are program-level and developed across many blocks; this block is one context in which they are demonstrated. The threads with a pass here:

- **Computational Models & Error Handling** — FLAGSHIP terminal pass: production concurrency at scale; comparative fault-tolerance — try/catch vs Erlang/OTP supervision trees vs circuit-breakers (conceptual). Genuinely distinctive content.
- **Algorithmic Thinking & Complexity** — Performance analysis on a REAL bottleneck, not toy Big-O (terminal pass).
- **Security/Privacy/Ethics (lens)** — Harden a system before it goes live — a real assessed task.
- **HCI / Accessible Design** — Requirements-driven UX — escalation from B2’s checklist compliance to designing from others’ needs (terminal pass).
- **Boundaries & Contracts** — API versioning as a compatibility contract — closes the Block-1 semantic-versioning loop (terminal pass).
- **Sociotechnical Structure** — Blameless postmortem — the org-culture expression of “errors are normative”; converges with the Error-Handling thread (terminal pass).
- **Documentation (lens)** — Operational runbooks — documentation for a future on-call person.
- **AI-Assisted Development (bounded)** — High-stakes verification/critique of AI-generated code for correctness and security — prerequisite skill for the Year 3–4 Agentic AI specialization (terminal pass).

## Open questions for faculty review

1. CS-210 was the most overloaded single unit — it tried to carry notebook data analysis AND AI verification AND data ethics. Resolved by framing data analysis as the CULMINATION of STAT-101 + the data-viz throughline (integrative, not new), leaving AI-verification + ethics as the genuinely new content. Still flagged for the week-by-week check.
2. Pairs with Block 6 as the two halves of professional accountability (B6 pre-release, B8 post-release), bracketing B7’s judgment block.
3. Containers arrive here (the deployment-structure topic foreshadowed in Block 4).

---

*Spine position: **Operate**. Builds on Block 7. *
