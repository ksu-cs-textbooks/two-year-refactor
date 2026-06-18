# Thread: Testing & Formal Verification

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral; one of nine spirals (alongside three lenses and one bounded practice).*

**In one line:** Informal pre/post-condition reasoning → regression discipline → testing AND formal verification, named and contrasted.

---

## Character

Expanded to dual-track testing and formal verification (not collapsed into 'testing'). The two are different skills — testing checks specific cases, verification reasons about all cases. Practice precedes formal naming, as with the rest of the spiral approach.

## Passes across the two years

| Block | Host context | What’s new at this pass |
|---|---|---|
| B1 (Y1 Fall) | CS-101/102 (embedded) | Asserts/logs to explore code; informal pre/post-condition reasoning (“what’s true before this loop? after?”). |
| B2 (Y1 Fall) | CS-105 Code Reading & Repair | Tests for regression — verify a change didn’t break prior function, before the vocabulary exists. |
| B3 (Y1 Spring) | CS-109 Abstract Data Types | Recursion correctness (termination, base cases); contracts as pre/post-conditions made into design. |
| B6 (Y2 Fall) | CS-203 Software Testing & Validation | Testing AND formal verification named and contrasted: “testing shows the presence of bugs; verification can show their absence.” |
| B8 (Y2 Spring) | CS-208 (harder cases) | Both applied to deployed systems. |

## Connections

- Pre/post-condition reasoning (B1) becomes the Boundaries & Contracts thread at B3. Converges with Security at B6.

## Open questions for faculty review

1. Confirm formal verification doesn’t need its own credit-bearing space rather than living inside CS-203.

---

*For how this lands in a specific block, see that block’s review file.*
