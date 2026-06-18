---
title: "Optimizaton Reasoning"
pre: "L2. "
weight: 20
---

# Lens: Optimization Reasoning

> *Working draft for faculty review. A **lens** is a cross-cutting concern that runs across blocks, not a topic taught in one place. It is one of three lenses (Security/Privacy/Ethics, Documentation, Optimization), distinct from the nine spiraling threads and the one bounded practice.*

**In one line:** The recurring pattern “find the best option under constraints,” named explicitly wherever it already arises, so students reach the AI specialization already thinking in optimization terms.

---

## Why this is a lens, not a spiral

Optimization is an explicit need of the downstream AI degree (alongside statistical inference, linear algebra, probability). It is treated as a lightweight lens rather than a new spiral because “find the best X under constraints” already occurs organically at several existing points — it needs naming, not new content. Mathematical optimization proper (gradient descent, convex optimization) is deferred to the specialization; the foundation seeds the REASONING PATTERN so it isn’t met cold later. It spans the Algorithmic Thinking spiral, the data thread, and design tradeoffs, which is why it reads best as a cross-cutting lens that surfaces a common pattern rather than as a strand of any one thread.

## Where it touches the curriculum

Each touch is woven into the host course named — it is not separately credit-bearing. Touches escalate across the two years.

| Block | Host context | The standing question / practice at this point |
|---|---|---|
| B4 (Y1 Spring) | CS-112 Algorithmic Complexity | Seed: choosing among implementations that satisfy the same contract is an optimization — optimize for which operation (lookup vs insertion vs memory)? Complexity is the tool for choosing. Also: algorithmic efficiency as “can this be done faster.” |
| B5 (Y2 Fall) | CS-201 SQL Fundamentals | Query optimization — indexes, query plans. (Anticipated in the original SQL progression’s “later: performance, indexes, query plans.”) Light. |
| B7 (Y2 Spring) | CS-206 Graphs & Network Algorithms | STRONGEST organic point: shortest path and minimum spanning trees ARE classic optimization problems, already in the content (and in MATH-104). Named explicitly as optimization. Plus multi-objective tradeoff reasoning (CS-207): integrate for speed vs completeness vs privacy — you can’t maximize everything. |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Applied: performance optimization of a real deployed system — make it faster/cheaper under real constraints, against an actual bottleneck. |

## Convergences with other threads

- Rides the Algorithmic Thinking & Complexity spiral (B4 → B7 → B8) closely — the lens names the optimization character of passes that thread already makes.
- Block 7: multi-objective tradeoff reasoning converges with the Integration & Judgment frame — optimizing across competing objectives is the heart of “design under uncertainty.”
- Forward link: this lens is the explicit on-ramp to the AI degree’s optimization requirement.

## Open questions for faculty review

1. The lightest of the three lenses — only four touchpoints, mostly naming rather than new content. Confirm that’s sufficient preparation for the AI specialization, or whether one touchpoint should carry more weight.
2. Mathematical optimization (gradient descent, convex methods) is deliberately deferred to the specialization. Confirm the foundation only needs the reasoning pattern, not the math.
3. Block 6 has essentially no optimization touch (it’s a B4/B5/B7/B8 lens). That’s fine, but noted for completeness.

---

*This is a cross-cutting lens. For how it lands in a specific block, see that block’s review file.*
