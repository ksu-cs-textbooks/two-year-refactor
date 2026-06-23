+++
title = "The Specialization Model"
weight = 10
ordinal = "5.1"
+++

> *Working draft for faculty review. How the common two-year core relates to the specialization degrees (Cybersecurity, Data Science, AI Systems, Software Architecture), using K-State's Fall 2026 B.S. in Cybersecurity as the concrete case. Course codes for the new core are placeholders.*

## The structural reveal

K-State's Cybersecurity degree confirms the project's founding premise rather than merely fitting it. Its first ~23 credits are **identical** to the Computer Science degree's sub-500 CIS block — the same CIS 115, 116, 200, 300, 301, 308, 400, 415, 450. Today, both degrees write out the same foundation separately. The two-year core is therefore not a CS-only replacement; it is the **common foundation both degrees already share**, made explicit and taught once.

The Cybersecurity degree then swaps the CS upper division for a security upper division. That is the entire specialization model, observed in the wild:

> **Every degree = one identical two-year core + a degree-specific upper division.**

## The general structure

| Layer | Content | Common across degrees? |
|---|---|---|
| **Two-year core** (30 cr) | The 8-block spiral; 22 CS + 8 external (discrete + non-calculus stats) | **Identical** across CS, Cyber, Data Science, AI, SW Architecture |
| **Shared upper-division core** | Likely CIS 501, 505, 560, 575 (pending ABET analysis) | Probably common; some specializations may drop some |
| **Specialization stack** | Degree-specific courses (e.g. security courses for Cyber) | **Differs** — this *is* the specialization |
| **Capstone** | Degree-specific project | Differs |
| **Context / gen-ed** | Social science, communications, etc. | Mostly common (institution-set) |

Because the core is **identical**, three institutional advantages follow that are worth stating plainly:

- A student can **defer specialization choice until year 3 with no penalty** — the first two years are the same regardless.
- Students can **transfer between specializations** freely (and the Kansas transfer associate degree maps to one core, not five).
- The department maintains **one foundation, not five** — a large reduction in curricular maintenance and a single target for ABET foundation-outcome mapping.

## Cybersecurity, course by course

| Current Cyber requirement | New structure |
|---|---|
| CIS 115/116/200/300/400 (intro → OOP) | **Common core** (Blocks 1–4) |
| CIS 301 Logical Foundations | **Common core** — absorbed (MATH-101 + Correctness & Verification + Boundaries & Contracts) |
| CIS 450 Computer Architecture | **Common core** — absorbed (stack/heap at B1, cache/memory-hierarchy at B8) |
| CIS 415 Ethics | **Common core** — embedded (Trustworthy Computing lens + B6); standalone uncertain |
| CIS 308 C Language Laboratory | **Language certificate** (C) — micro-credential outside the 120 cr; cyber students need C for systems/security |
| CIS 501/505/560/575 | **Shared upper-division core** (pending ABET analysis; likely common, likely some become elective depth) |
| CIS 525 Network Programming | **Security specialization stack** |
| CIS 551 Fundamentals of Computer & Information Security | **Security specialization stack** |
| CIS 553 Fundamentals of Cryptography | **Security specialization stack** |
| CIS 655 / 755 (restricted elective) | **Security specialization stack** |
| CIS 599 Cybersecurity Project | **Specialization capstone** |
| CRIM 550, SOCIO 211, ECE 241 | **Context / gen-ed** (largely unchanged) |

## The key principle: threads are specialization on-ramps

The core's thirteen threads are not only pedagogy — each is a deliberate **on-ramp** to one or more specializations. A student gravitates toward a specialization by which threads resonated. This is now an explicit design principle.

| Specialization | Core threads that pre-position the student |
|---|---|
| **Cybersecurity** | Trustworthy Computing (primary); Correctness & Verification (secure code); Boundaries & Contracts (trust boundaries); Computational Models (error handling as attack surface); APIs & Networked Systems |
| **Data Science** | Data Structures & Representation (incl. geospatial); Human-Centered Computing (data-visualization throughline); the statistics sequence; Optimization Reasoning; Computational Models (declarative SQL, dataflow) |
| **AI Systems** | Computational Models (flagship); AI-Assisted Development (bounded → deepens in the specialization); Optimization Reasoning; Algorithmic Thinking & Complexity; (+ year-3 calculus & linear algebra) |
| **Software Architecture** | Boundaries & Contracts (primary meta-thread); Sociotechnical Structure; APIs & Networked Systems; Correctness & Verification; Human-Centered Computing (UX/requirements) |

Threads deliberately serve **multiple** specializations (Optimization Reasoning feeds both Data Science and AI; Computational Models feeds AI, Data Science, and Cyber). The core is genuinely common; a specialization is defined by which threads it *deepens*, not by which were taught.

## Seed → deep spiral: what the core lets the cyber upper division assume

Because the core seeds security thoroughly (the Trustworthy Computing lens throughout, plus a dedicated Block 6 doing authentication, authorization, threat modeling, least privilege, trust boundaries, and applied cryptography grounded in MATH-103 modular arithmetic), the cyber specialization courses can **start from a higher baseline** and go deeper rather than re-teaching fundamentals:

- **CIS 551 Fundamentals of Computer & Information Security** — can assume authn/authz, threat modeling, least privilege, and trust boundaries from Block 6, and move directly to security architecture, defense-in-depth, and advanced threat modeling. The core raises the floor.
- **CIS 553 Fundamentals of Cryptography** — can assume the conceptual public-key treatment and modular arithmetic from MATH-103 → B6, and proceed to formal schemes, protocols, and attacks. This is a clean three-stage spiral: MATH-103 (modular arithmetic) → B6 (applied/conceptual crypto) → CIS 553 (cryptographic rigor). **Caveat:** full cryptography needs more number theory than MATH-103 provides; the year-3 MATH 506 (Number Theory) elective is the natural feeder, so there is a math dependency to plan.
- **CIS 525 Network Programming** — can assume the APIs & Networked Systems thread (consume → build → integrate → operate) and, if adopted, the OSI Networking Fundamentals unit, and focus on the security and programming of networks rather than networking basics.
- **CIS 655 / 755 Systems Security** — can assume the programming-centric architecture absorbed into the core (stack/heap at B1, memory hierarchy at B8) as a base for systems-level security.

A fuller per-course redesign (what each security course can now drop and what depth it can add) is worth a dedicated pass with the security faculty.

## Open questions

1. **Shared upper-division core.** Are CIS 501/505/560/575 common across *all* specializations, or do some specializations drop some? Cyber requires all four; Data Science or AI may not. This is part of the larger 500-level/ABET restructure analysis already flagged in the CS replacement document.
2. **Number theory for cryptography.** CIS 553 likely needs more number theory than the core's MATH-103 modular arithmetic. Plan the MATH 506 (Number Theory) feeder, or strengthen the relevant math, before finalizing the crypto sequence.
3. **C for cyber.** CIS 308 is specifically a C lab here (systems/security need C). Confirm the **C language certificate** (micro-credential) satisfies this for cyber students.
4. **Per-security-course redesign.** A deeper pass with security faculty on exactly what 551/553/525/655 can assume and how much further they can go, given the core's raised security floor.
5. **ABET.** Whichever upper-division courses become required vs elective, the *required* path for each specialization must independently satisfy ABET outcomes — the binding constraint for the whole restructure.

## Why this matters beyond Cybersecurity

Cyber is the worked example, but the model generalizes: **Data Science = core + data upper-division; AI Systems = core + AI upper-division; Software Architecture = core + architecture upper-division.** Each reuses the identical core and the threads that pre-position students for it. The next step is to run the same analysis for the other three specializations — confirming the shared upper-division, identifying each specialization stack, and verifying the on-ramp threads are strong enough for what each specialization will assume.
