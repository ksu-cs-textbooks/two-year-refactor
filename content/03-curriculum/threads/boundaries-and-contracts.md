---
title: "Boundaries & Contracts"
pre: "T6. "
weight: 60
---

# Thread: Boundaries & Contracts

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral (meta-thread); one of nine spirals (alongside three lenses and one bounded practice).*

**In one line:** A promise about behavior at a boundary, independent of what’s hidden behind it — escalating by the KIND of boundary the contract spans.

---

## Character

Both a spiral and a META-thread: it names the common structure beneath APIs, schemas, trust boundaries, versioning, and verification. Arguably the strongest expression of the program’s systems-thinking ethos. Each pass introduces a new kind of boundary.

## Passes across the two years

| Block | Host context | What’s new at this pass |
|---|---|---|
| B3 (Y1 Spring) | CS-107/109 (INTRODUCED) | The boundary is an interface within one program: ADT contracts, class encapsulation, function pre/post-conditions. Names B1’s informal verification reasoning. |
| B4 (Y1 Spring) | CS-111 Systems & APIs | The boundary becomes a process/network boundary: an API contract (request shape → response shape), the other side unseen. |
| B5 (Y2 Fall) | CS-202 Database Design | The boundary becomes a data/persistence boundary: schema as contract; transaction as an all-or-nothing contract. |
| B6 (Y2 Fall) | CS-203/204 | Contracts meet verification and security: testing checks a contract is honored; a trust boundary is a contract about what each side may assume. |
| B7 (Y2 Spring) | CS-206/207 Design Review | Defend the boundaries and contracts you designed (why this interface, why this much hidden). |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Contracts over TIME: API/semantic versioning as a compatibility contract — closes the loop opened by semver in B1. |

## Connections

- Unifies Git/semver (B1), Verification (B1 seed), APIs (B4), Databases (B5), Testing+Security (B6), and versioning (B8). Cross-references should be explicit in the map.

## Open questions for faculty review

1. As a meta-thread it adds tracking overhead (the 9th spiral). Part of the broader 'are 14 threads legible to faculty' question.

---

*For how this lands in a specific block, see that block’s review file.*
