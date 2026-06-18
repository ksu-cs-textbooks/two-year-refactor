---
title: "Documentaiton Practice"
pre: "L3. "
weight: 30
---

# Lens: Documentation Practice

> *Working draft for faculty review. A **lens** is a cross-cutting concern that runs across blocks, not a topic taught in one place. It is one of three lenses (Security/Privacy/Ethics, Documentation, Optimization), distinct from the nine spiraling threads and the one bounded practice.*

**In one line:** A standing expectation that whenever students read, modify, or write code, they document it — with the register changing as the audience and purpose change.

---

## Why this is a lens, not a spiral

Documentation is the literal first example competency in the program’s original framework (“I can produce technical documentation that supports development, operation, and maintenance”), yet it appeared nowhere in the original 8-block design. It is treated as a lens, not a spiral, because there is no single “documentation course” to point to — and that is the design intent. If documentation lived in one block it would read as an add-on; as a standing practice it signals that documentation is core to computer science, not a last-minute addition. The escalation is in AUDIENCE and PURPOSE (self → reviewer → teammate → operator), not in difficulty.

## Where it touches the curriculum

Each touch is woven into the host course named — it is not separately credit-bearing. Touches escalate across the two years.

| Block | Host context | The standing question / practice at this point |
|---|---|---|
| B1 (Y1 Fall) | Reading unfamiliar code | Two registers introduced together: inline comments AND a standalone explanatory document. Students don’t just read code, they explain it in writing. |
| B2 (Y1 Fall) | CS-104 / CS-105 | Docstrings and API-documentation conventions as you build; bug-fix documentation (what was broken, why, what changed). |
| B3 (Y1 Spring) | CS-109 Abstract Data Types | Documentation-as-justification: why this structure and not that one — a new register (justifying a decision, not explaining existing code). |
| B5 (Y2 Fall) | CS-202 Database Design | Documenting schema decisions — ties directly to the data-minimization justification required by the Security lens in the same course. |
| B6 (Y2 Fall) | CS-205 Collaborative Development | Documentation FOR TEAMMATES specifically: PR descriptions, code-review comments as a documentation form. A different audience than self- or grader-facing docs. |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Operational documentation: runbooks, “how do I bring this back up if it goes down.” Written for a future on-call person at 3am, not a code reviewer. |

## Convergences with other threads

- Block 5: the schema-decision documentation IS the data-minimization justification — the Documentation and Security lenses do the same work in the same course.
- Block 3: documentation-as-justification pairs with the Boundaries & Contracts introduction (a contract is itself a kind of documentation of a promise).
- Verification thread: the Block 1 informal pre/post-condition reasoning is documentation of intent that later formalizes into contracts and tests.

## Open questions for faculty review

1. Like Security, this lens has no dedicated course. Confirm faculty can see/assess that documentation actually happened in each host course without a standalone checkpoint.
2. The register progression (inline → explanatory doc → justification → API doc → team-facing → operational) is deliberate. Confirm each host course’s assessments actually require the register assigned to it.

---

*This is a cross-cutting lens. For how it lands in a specific block, see that block’s review file.*
