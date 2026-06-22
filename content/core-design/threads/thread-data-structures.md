+++
title = "Data Structures & Representation"
weight = 10
ordinal = "1.2.1"
+++

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the spiral; one of nine spirals (with three lenses and one bounded practice — 13 threads total).*

**In one line:** From the most primitive representation to the most general, each pass a genuine generalization — with graphs spiraling as a strand within.

---

## Character

The strongest spiral in the design. Each pass is a real generalization, not a harder repeat. After B3 it is taught contract-first (ADT interface before implementation), which lets B4 ask 'how do we choose among implementations of the same contract?' Graphs are a deliberate sub-spiral inside this thread (B3 model → B4 represent → B5 persist → B7 algorithms+theory) rather than a single terminal pass. Geospatial data rides the thread as an applied representation sub-theme (B3 vector/raster representation → B4 spatial indexing via trees/hashing), which also deepens the GIS service relationship.

## Passes across the two years

| Block | Host context | What's new at this pass |
|---|---|---|
| B1 (Y1 Fall) | CS-103 Computational Representation | Bits, booleans, numbers — the most primitive representation. |
| B3 (Y1 Spring) | CS-109 Abstract Data Types | Linear structures (lists, stacks, queues) as ADTs — contract first, implementation hidden. Graph sub-spiral begins: graphs as a MODEL for relationship-structured data. Geospatial representation seed: points/lines/polygons (vector) and rasters (grids). |
| B4 (Y1 Spring) | CS-110 Trees, Hashing & Hierarchies | Hierarchical/associative structure; contracts continue. Graph sub-spiral: representing and building graphs (adjacency list/matrix — the matrix also seeds basic linear algebra), basic traversal. Spatial indexing as applied trees/hashing: quadtrees, R-trees, geohashing. |
| B5 (Y2 Fall) | CS-201/202 + graph DB | Relational data as a formal, queryable model. Graph sub-spiral: a brief touch of a graph database (Neo4j/Cypher) as another persistent store alongside relational. |
| B7 (Y2 Spring) | CS-206/207 | Graph sub-spiral capstone: graph algorithms + MATH-104 graph theory, landing on four blocks of prior graph use. Document/NoSQL: representation when the relational model doesn't fit — closes the loop. |

## Connections

- Hands off to Algorithmic Thinking at B4 (same contract, different cost). Carries Boundaries & Contracts from B3. The graph sub-spiral is paced against the external graph-theory course (MATH-104, B7).

## Open questions for faculty review

1. Confirm contract-first ADT teaching is acceptable as the thread's style.
2. The graph database (Neo4j) touch at B5 is genuinely new content — small, embedded, but an addition to a lean block.

---

*For how this lands in a specific block, see that block's review file.*
