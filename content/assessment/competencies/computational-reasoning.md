---
title: "Computational Reasoning"
pre: "1. "
weight: 10
---

### Analyze Computational Systems

**I can explain the behavior of computational systems by investigating their components, interactions, and execution.**

I analyze software and computing systems to determine how they operate, identify sources of behavior, and predict outcomes under varying conditions.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B1 | CS-103 | Memory model, process model, boolean/number representation — first named encounter with how a running system works |
| B2 | CS-105 | Code Archaeology (signature) — structured investigation of unfamiliar code to explain behavior |
| B2 | CS-106 | Browser as mini-OS (event loop, origin isolation, web workers, postMessage) — analyzing a concrete computational system |
| B3 | CS-107 | Analyzing component interactions through the encapsulation/contract lens |
| B4 | CS-111 | Client-server dataflow; API as system structure |
| B8 | CS-210 | Performance analysis on a real deployed bottleneck; OS/concurrency model analysis |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Code reading — trace execution and explain behavior with guided prompts |
| Independence | Code Archaeology — unscaffolded, unfamiliar codebase, student explains without hints |
| Adaptation | Performance investigation (CS-210) — analyze real system behavior where empirical results diverge from theory |
| Leadership | TA-led code reading sessions; mentoring peers through code archaeology in LA role |

**Recurring type:** Code Archaeology — deepens from single-module familiar code (B2) through production system diagnosis (B8). Also: System Analysis Task for behavior traced through operational signals rather than code.

---

### Develop Abstractions

**I can create and apply abstractions that reduce complexity while preserving essential characteristics of a problem or system.**

I organize information, processes, and system components into meaningful models that support understanding, communication, and solution development.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B1 | CS-102 | Functions as values and composition — first encounter with abstraction as a mechanism |
| B3 | CS-107 | Encapsulation as boundary-drawing — first time students design an interface vs. internals |
| B3 | CS-108 | HOF, iterator protocol — formalizing abstraction over behavior and traversal |
| B3 | CS-109 | ADT contract-first design — the abstraction IS the contract, designed before any implementation |
| B4 | CS-111 | API as system-level abstraction across a network boundary; web components as encapsulated UI units |
| B5 | CS-202 | Schema design — abstracting a messy real-world domain into a formal relational model |
| B7 | CS-207/207 | Choosing the right abstraction for the shape of the problem (graph vs. relational vs. document) |
| B8 | CS-210 | Actor model and containers as deployment abstractions; API versioning as compatibility abstraction |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Design Brief (constrained) — design a module/ADT that hides X and exposes Y, given a contract template |
| Independence | Design Brief (open-ended) — given a problem description, design an appropriate abstraction without a template |
| Adaptation | System Integration Project (B8) — novel multi-component problem requiring student to invent and compose abstractions |
| Leadership | Design Review (B7) — defending abstraction choices under peer and faculty scrutiny; TA mentoring in design sessions |

**Recurring type:** Design Brief — deepens from single-component interface design (B3) through system-level abstraction composition (B8). Also generates evidence for Design Software Systems and Design Human-Centered Solutions.

---

### Apply Formal Reasoning

**I can use logical, mathematical, and formal methods to analyze computational problems and justify conclusions.**

I construct and evaluate arguments, proofs, and formal representations to reason about the correctness and behavior of computational systems.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B1 | MATH-101 | Propositional/predicate logic, formal proof, set operations |
| B1 | CS-103 | Boolean logic as applied counterpart — truth tables, bitwise operations applied to computation |
| B2 | MATH-102 | Combinatorial reasoning — formal counting as precursor to algorithmic analysis |
| B3 | MATH-103 | Recursive structures, modular arithmetic — formal reasoning about computation's mathematical substrate |
| B3 | CS-109 | Pre/post-conditions and class invariants — first application of formal specification directly to code |
| B4 | CS-112 | Big-O analysis — constructing and comparing asymptotic bounds as formal argument |
| B4 | MATH-104 | Graph theory — formal proofs about graph properties |
| B6 | CS-204 | Testing as formal verification; property-based testing; test suite as formal specification |
| B7 | CS-207 | Algorithm correctness arguments; constraint/logic model (Prolog-style) |
| B8 | CS-210 | Formal + empirical reconciliation — construct the argument for why Big-O prediction diverges from observed behavior |

Note: MATH and STAT courses feed Crystalis evidence directly via LTI — formal reasoning demonstrated in the mathematics sequence counts as competency evidence.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Structured formal analysis — construct a truth table, analyze complexity of a given algorithm, write pre/post-conditions from a template |
| Independence | Unscaffolded formal analysis — specify pre/post-conditions for a novel function, analyze an unseen algorithm's correctness and complexity without hints |
| Adaptation | Formal + empirical reconciliation (CS-210) — apply formal reasoning where the textbook model breaks down; construct the argument for why it breaks down |
| Leadership | TA/LA leading algorithm analysis or proof sessions; formal critique in Design Review — evaluating whether a peer's formal argument actually holds |

**Recurring type:** Formal Analysis — deepens from structured logic exercises (B1) through formal + empirical reconciliation on a production system (B8).

---

### Evaluate Algorithmic Solutions

**I can evaluate alternative algorithms and representations by analyzing their correctness, performance, and tradeoffs.**

I select and justify computational approaches using theoretical and empirical evidence appropriate to the problem context.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B3 | CS-109 | Same contract, multiple implementations — seeds the idea that valid alternatives exist with different tradeoff profiles |
| B4 | CS-110 | Adjacency list vs. matrix — choosing the right graph representation for a problem |
| B4 | CS-112 | Big-O comparison of sorting/searching; selecting among implementations satisfying the same ADT contract |
| B5 | CS-201/202 | Index choice, query optimization, schema design tradeoffs; relational vs. graph model selection |
| B7 | CS-207 | Dijkstra vs. A\*, BFS vs. DFS, Kruskal vs. Prim — multiple algorithms for the same problem with different applicability conditions |
| B7 | CS-207/207 | Design Review — defend algorithm and data model choices to peers and faculty |
| B8 | CS-210 | Production bottleneck — evaluate algorithm choices where formal analysis and empirical behavior diverge; concurrency model selection |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Structured comparison — given two algorithms/representations, analyze complexity and identify which is better for a specified scenario |
| Independence | Open-ended justification — given a problem, select and defend an algorithm/data model choice without a comparison template |
| Adaptation | Design Review (B7) — defend choices to peers and faculty in a novel system context; production bottleneck evaluation (B8) where formal analysis alone is insufficient |
| Leadership | Leading Design Review critique sessions as TA/LA — evaluating whether a peer's justification argument is complete and sound |

**Recurring type:** Algorithm Evaluation Task — deepens from single-structure comparison (B3) through production system evaluation with formal + empirical evidence (B8). Also generates evidence for Represent Information.
