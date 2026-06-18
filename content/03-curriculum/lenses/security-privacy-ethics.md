---
title: "Security, Privacy & Ethical Reasoning"
pre: "L1. "
weight: 10
---

> *Working draft for faculty review. A **lens** is a cross-cutting concern that runs across blocks, not a topic taught in one place. It is one of three lenses (Security/Privacy/Ethics, Documentation, Optimization), distinct from the nine spiraling threads and the one bounded practice.*

**In one line:** A standing question — who could be harmed, what should we even collect, what are we trusting — asked wherever relevant content appears, formalized once.

---

## Why this is a lens, not a spiral

Earlier drafts treated security as a spiral with dedicated early/middle/late passes, but that produced vague “light touches” in the later blocks that weren’t real. The better pattern: security/privacy/ethics is not a topic introduced once and revisited at depth — it is a question asked every time other content raises it. It has one place where it is formalized and systematized (Block 6), but it is never confined there. This also avoids the failure mode the program explicitly rejects (security becoming isolated or disappearing from the framework).

## Where it touches the curriculum

Each touch is woven into the host course named — it is not separately credit-bearing. Touches escalate across the two years.

| Block | Host context | The standing question / practice at this point |
|---|---|---|
| B1 (Y1 Fall) | CS-103 Computational Representation | Light, conceptual: how does a representation choice affect what can be hidden or obscured? First exposure to the idea that representation has security consequences. |
| B2 (Y1 Fall) | CS-104 / CS-106 | Privacy-by-design in data collection: why are we asking for this field? Data minimization introduced where students first build forms and transform data. |
| B3 (Y1 Spring) | CS-109 Abstract Data Types | Optional/enrichment: can a structure’s behavior leak information (e.g. timing differences from hash collisions)? Not core. |
| B5 (Y2 Fall) | CS-202 Database Design | Data minimization as a schema decision; access control as a property of the schema itself (who can see what), not bolted on later. |
| B6 (Y2 Fall) | CS-204 Security Fundamentals — FORMALIZED | The systematic treatment: authentication, authorization, threat modeling, applied cryptography (grounded in MATH-103 modular arithmetic). Least privilege extended to least data collection. This is where the scattered threads get named and organized — NOT where the topic starts. The whole Block 6 frame (“Responsible Development”) makes ethics the organizing principle, giving it its strongest home without a siloed ethics course. |
| B7 (Y2 Spring) | CS-207 Document Databases & Data Integration | Re-identification risk from combining datasets — a specific, real privacy question raised exactly when students integrate multiple sources. Defended in Design Review. |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Harden a system before it goes live — a real, assessed task at production stakes, not a mention. Poorly-handled errors as attack surface. |

## Convergences with other threads

- Block 6: converges with the Error Handling thread — errors as attack surface (verbose stack traces leak information).
- Block 6: converges with Boundaries & Contracts — a security trust boundary is a contract about what each side may assume.
- Throughout: the ethical sub-strand (“what should we even collect / how do we represent honestly”) also surfaces in the HCI data-visualization throughline (honest charts, not misleading ones).

## Open questions for faculty review

1. Block 6 is very likely the primary ABET anchor for professional-responsibility and ethical-judgment outcomes. Confirm and map explicitly during accreditation work.
2. Because this lens has no course of its own (by design), confirm faculty reviewing competency evidence will have enough visibility into whether the security/privacy/ethics questions were actually raised in each host course — or whether a lightweight checkpoint is needed.
3. The ethics sub-strand is currently fused with security/privacy. Confirm that’s the intended grouping rather than ethics being tracked as its own concern.

---

*This is a cross-cutting lens. For how it lands in a specific block, see that block’s review file.*
