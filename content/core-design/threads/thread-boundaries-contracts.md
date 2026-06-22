+++
title = "Boundaries & Contracts"
weight = 80
ordinal = "1.2.8"
+++

# Thread: Boundaries & Contracts

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral (meta-thread); one of nine spirals (with three lenses and one bounded practice — 13 threads total).*

**In one line:** A promise about behavior at a boundary, independent of what's hidden behind it — escalating by the KIND of boundary the contract spans.

---

## Character

Both a spiral and a META-thread: it names the common structure beneath ADTs, APIs, schemas, trust boundaries, versioning, and verification. Arguably the strongest expression of the program's systems-thinking ethos.

## Passes across the two years

| Block | Host context | What's new at this pass |
|---|---|---|
| B3 (Y1 Spring) | CS-107/109 (INTRODUCED) | Boundary = an interface within one program: ADT contracts, class encapsulation, function pre/post-conditions (names B1's informal verification reasoning). |
| B4 (Y1 Spring) | CS-111 Systems & APIs | Boundary becomes a process/network boundary: an API contract (request → response), the other side unseen. |
| B5 (Y2 Fall) | CS-202 Database Design | Boundary becomes a data/persistence boundary: schema as contract; transaction as all-or-nothing contract. |
| B6 (Y2 Fall) | CS-203/204 | Contracts meet verification and trust: testing checks a contract is honored; a trust boundary is a contract about what each side may assume. |
| B7 (Y2 Spring) | CS-206/207 Design Review | Defend the boundaries and contracts you designed. |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Contracts over TIME: API/semantic versioning as a compatibility contract — closes the loop opened by semver in B1. |

## Connections

- Unifies semantic versioning (Professional Practices, B1), Correctness & Verification (B1 seed), APIs (B4), Data Structures (schemas/ADTs), Trustworthy Computing (trust boundaries, B6), and versioning (B8).

## Open questions for faculty review

1. As a meta-thread it adds tracking overhead. Part of the broader thread-legibility question.

---

*For how this lands in a specific block, see that block's review file.*
