---
title: "Data Structures & Representation"
pre: "T2. "
weight: 20
---

# Thread: Data Structures & Representation

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral; one of nine spirals (alongside three lenses and one bounded practice).*

**In one line:** From the most primitive representation to the most general, each pass a genuine generalization of the last.

---

## Character

The strongest spiral in the design. Each pass is a real generalization, not a harder repeat. After B3 it is taught contract-first (ADT interface before implementation), which is what lets B4 ask 'how do we choose among implementations of the same contract?'

## Passes across the two years

| Block | Host context | What’s new at this pass |
|---|---|---|
| B1 (Y1 Fall) | CS-103 Computational Representation | Bits, booleans, numbers — the most primitive representation. |
| B3 (Y1 Spring) | CS-109 Abstract Data Types | Linear structures (lists, stacks, queues) as ADTs — contract first, implementation hidden behind the boundary. |
| B4 (Y1 Spring) | CS-110 Trees, Hashing & Hierarchies | Hierarchical and associative structure; the contract idea continues (a tree/map has a contract too). |
| B4 (Y1 Spring) | CS-112 / file formats | Persistence as representation that outlives the program (files/CSV/JSON appear as representation, not taught). |
| B5 (Y2 Fall) | CS-201/202 Relational data | Representation as a formal, queryable model (schema). |
| B7 (Y2 Spring) | CS-206 Graphs | Representation as arbitrary relationship — the most general case (trees are graphs with a constraint removed). |
| B7 (Y2 Spring) | CS-207 Document/NoSQL | Representation when the formal relational model doesn’t fit — closes the loop by showing a case the relational default handles poorly. |

## Connections

- Hands off to Algorithmic Complexity at B4 (same contract, different cost). Carries the Boundaries & Contracts idea from B3 onward.

## Open questions for faculty review

1. Confirm the contract-first ADT approach (decided for B3) is acceptable to faculty as the teaching style for the whole thread.

---

*For how this lands in a specific block, see that block’s review file.*
