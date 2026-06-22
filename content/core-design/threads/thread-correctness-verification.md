+++
title = "Correctness & Verification"
weight = 70
ordinal = "1.2.7"
+++

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral; one of nine spirals (with three lenses and one bounded practice — 13 threads total).*

**In one line:** Does the code do what it's specified to do? — informal reasoning → regression → testing and verification, named and contrasted.

---

## Character

Sharpened to CODE-CORRECTNESS only. Acceptance/fitness testing moved to Human-Centered Computing; this thread answers 'is it correct,' that one answers 'is it what they needed.' Testing and verification are dual-tracked (testing checks specific cases; verification reasons about all cases). Practice precedes formal naming.

## Passes across the two years

| Block | Host context | What's new at this pass |
|---|---|---|
| B1 (Y1 Fall) | CS-101/102 (embedded) | Asserts/logs to explore code; informal pre/post-condition reasoning. |
| B2 (Y1 Fall) | CS-105 Code Reading & Repair | Tests for regression — verify a change didn't break prior function. |
| B3 (Y1 Spring) | CS-109 Abstract Data Types | Recursion correctness (termination, base cases); contracts as pre/post-conditions made into design. |
| B6 (Y2 Fall) | CS-203 (correctness work) | Testing AND verification named and contrasted: "testing shows the presence of bugs; verification can show their absence." |
| B8 (Y2 Spring) | CS-208 (harder cases) | Both applied to deployed systems (still code-correctness; fitness lives in Human-Centered Computing). |

## Connections

- Pre/post-condition reasoning (B1) becomes Boundaries & Contracts at B3. Converges with Trustworthy Computing at B6. At B8, sits beside Human-Centered Computing's acceptance/A-B testing — correctness vs fitness.

## Open questions for faculty review

1. Confirm verification doesn't need its own credit-bearing space rather than living inside the B6 correctness work.

---

*For how this lands in a specific block, see that block's review file.*
