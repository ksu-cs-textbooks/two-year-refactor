+++
title = "Algorithmic Thinking & Complexity"
weight = 50
ordinal = "1.2.5"
+++

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral; one of nine spirals (with three lenses and one bounded practice — 13 threads total).*

**In one line:** From Big-O as theory, to graph optimization, to a real bottleneck under load.

---

## Character

Its first pass moved from B3 to B4 so it can answer the question B3's contract-first ADTs raise: how do you choose among implementations of the same contract? Closely shadowed by the Optimization Reasoning lens. Geospatial algorithms ride the graph pass at B7 (road-network routing is graph shortest-path). The B8 pass surfaces a key limit: systems reality (memory hierarchy, paging/thrashing) can invert asymptotic predictions — Big-O is necessary but not sufficient.

## Passes across the two years

| Block | Host context | What's new at this pass |
|---|---|---|
| B4 (Y1 Spring) | CS-112 Algorithmic Complexity | Big-O, sorting/searching as the cost of structural choices; choosing among contract-satisfying implementations. Pairs loosely with MATH-102 counting (B2). |
| B7 (Y2 Spring) | CS-206 Graphs & Network Algorithms | Applied to harder structures; shortest path/MST as explicit optimization. Geospatial algorithms: road-network routing (Dijkstra, A*), spatial joins and nearest-neighbor/range queries using B4 spatial indexes. |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Complexity reasoning meets a real deployed bottleneck. The memory hierarchy (cache misses, and — the dramatic case — virtual memory, paging, THRASHING) can TRUMP Big-O: good locality can beat better asymptotics. Asymptotic analysis is necessary but not sufficient. Requires the virtual-memory grounding. |

## Connections

- The Optimization Reasoning lens names the optimization character of the B7/B8 passes. B8 converges with Computational Models (why slow under concurrent load).

## Open questions for faculty review

1. Recursion is needed informally (B3/B4) before MATH-103 formalizes it (B3 in the new external pacing) — now well-aligned; confirm.

---

*For how this lands in a specific block, see that block's review file.*
