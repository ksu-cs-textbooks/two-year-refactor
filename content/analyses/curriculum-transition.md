+++
title = "Five-Year Transition: Old Curriculum Support"
weight = 40
ordinal = "6.4"
+++

> *Working draft for faculty review. Maps the old sub-500 CIS courses and ECE 241 to new core equivalents so that students on the old B.S. in Computer Science curriculum can be supported for five years without running parallel old-course sections. Course codes for the new core are placeholders.*

## The problem

When the two-year core is adopted, students who enrolled under the old curriculum must still be able to complete their degree. The old curriculum requires courses that the department will no longer run. The solution is course substitution: identify which old courses are fully covered by new core courses and establish official equivalencies, so that old-track students take new courses that satisfy their old requirements.

This document answers: *which old courses need to keep running, and which can be retired on day one?*

## Scope

The courses being retired or restructured are:

| Course | Cr | Disposition |
|---|---|---|
| CIS 115 Introduction to Computing Science | 2 | Replaced by new core |
| CIS 116 Introduction to Programming | 1 | **Standalone — redesigned as Python course** |
| CIS 200 Programming Fundamentals | 4 | Replaced by new core |
| CIS 300 Data and Program Structures | 3 | Replaced by new core |
| CIS 301 Logical Foundations of Programming | 3 | Replaced by new core |
| CIS 308 C Language Laboratory | 1 | **Standalone — continues unchanged** |
| CIS 400 Object-Oriented Design, Implementation and Testing | 3 | Replaced by new core |
| CIS 415 Ethics and Conduct for Computing Professionals | 3 | Replaced by new core + new CIS 3xx |
| CIS 450 Computer Architecture and Operations | 3 | Replaced by new core |
| ECE 241 Introduction to Computer Engineering | 3 | **Dropped — no longer required for CS students** |

**CIS 116** is being redesigned as a dedicated Python course and will continue to run as a standalone entry-point course for both tracks. **CIS 308** continues as a standalone C language course. Both serve old-track students directly and require no substitution mapping. **ECE 241** is taught by the ECE department, continues for ECE students, but is dropped as a CS requirement; its CS-relevant content is absorbed into the new core.

The remaining eight courses require substitution mapping.

---

## Course-by-course substitution map

### CIS 115 → CS-101 + CS-103 (2 cr for 2 cr; grouped in Block 1)

CIS 115 is a survey course covering computing history, paradigms, tools, web technologies, security, simulation, and data science. The new core replaces the survey by having students *do* the breadth rather than observe it. The two closest individual courses are:

- **CS-101 Imperative Programming** — introduces the imperative and declarative computational models using JavaScript/Python acting on the DOM; covers the theories-and-tools orientation of CIS 115
- **CS-103 Computational Representation** — covers number systems, Boolean logic, bitwise operations, and the programmer-facing memory model; covers the hardware/representation literacy piece of CIS 115

Other survey topics (web technologies, security, data science) are covered in greater depth in CS-106, CS-205, and CS-212 later in the core.

*Credit: 2 old → 2 new. Even.*

---

### CIS 200 → CS-102 + CS-104 + CS-105 + CS-106 (4 cr for 4 cr; grouped in Blocks 1 & 2)

CIS 200 covers algorithm design and procedural programming (state, control structures, methods), testing, arrays, classes, and objects. Since CIS 116 (now Python) remains as the entry point and satisfies the prior programming baseline, CIS 200's remaining content maps across Block 2 of the new core:

- **CS-102 Functional Programming** — functions as values, composition, recursion; the "methods and functions" abstraction
- **CS-104 Data Transformation & Manipulation** — parsing, filtering, reshaping arrays and collections; data manipulation algorithms
- **CS-105 Code Reading & Repair** — debugging reframed as tracing data flow; git and regression tests as safety nets; Big-O introduced conceptually as a diagnostic tool for slow code
- **CS-106 Web Foundations & Data-Driven Rendering** — async/event-loop, fetch-and-render; provides the programming-in-context framing CIS 200 uses for its projects

Classes and objects are treated more deeply in CS-107 (B3) than CIS 200's introduction; old-track students will exceed what CIS 200 required in this area.

*Credit: 4 old → 4 new. Even.*

---

### CIS 301 → MATH-101 + MATH-103 + CS-109 (3 cr for 3 cr; grouped in Blocks 1 & 3)

CIS 301 covers propositional and predicate logic, proof theory, soundness and completeness, mathematical induction, and program verification (invariants, program logics, pre/post-conditions).

- **MATH-101 Discrete Math: Logic and Sets** — propositional and predicate logic, syntax, semantics, soundness and completeness; the formal logic core of CIS 301
- **MATH-103 Discrete Math: Recursive and Modular Computation** — mathematical induction; direct counterpart to CIS 301's induction content
- **CS-109 Abstract Data Types** — contract-first pedagogy; function pre/post-conditions named and used explicitly; the program-verification reasoning of CIS 301 applied to ADT contracts

Note: this omits Math-102; need to verify this ommission is acceptable.

*Credit: 3 old → 3 new. Even.*

---

### CIS 300 → CS-108 + CS-110 + CS-112 (3 cr for 3 cr; grouped in Blocks 3 & 4)

CIS 300 covers interfaces, design patterns, stacks, queues, lists, trees, hash tables, recursion, binary search, and tree traversals, with explicit attention to performance tradeoffs.

- **CS-108 Computational Abstractions** — higher-order patterns (map, filter, reduce), iterator protocol; covers the design-patterns and interface-abstraction content of CIS 300
- **CS-110 Trees, Hashing & Hierarchies** — trees, hash tables, sorting, searching; Big-O formalized as the cost of structural choices; the performance-tradeoffs discussion CIS 300 emphasizes
- **CS-112 Algorithmic Design Patterns** — divide-and-conquer, greedy algorithms, introduction to dynamic programming; covers recursion and binary search as exemplars

Note: stacks, queues, and lists are taught in CS-109 (mapped to CIS 301 above). CS-109 is a prerequisite for CS-110, so the CIS 300 content is available to students in the correct order.

*Credit: 3 old → 3 new. Even.*

---

### CIS 400 → CS-107 + CS-204 + CS-206 (3 cr for 3 cr; grouped in Blocks 3 & 6)

CIS 400 covers object-oriented concepts, models, execution environments, design techniques, and testing, with extensive application to non-trivial software development.

- **CS-107 Software Modeling and Design** — encapsulation as boundary-drawing, OOP in Python and JavaScript, type annotations as interface specifications, inheritance tradeoffs, exceptions as contract violations; the design concepts of CIS 400
- **CS-204 Software Testing & Validation** — automated tests, unit and integration testing; the testing component of CIS 400
- **CS-206 Collaborative Development** — collaborative git, pull requests, code review, conflict resolution, team practices; the "non-trivial software development" context CIS 400 emphasizes

*Credit: 3 old → 3 new. Even.*

---

### CIS 415 → CS-205 + CS-212 + New CIS 3xx Ethics (3 cr for 3 cr; Block 6 & 8, plus out-of-core professional ethics course)

CIS 415 covers ethical issues raised by computing technologies, societal impact, professional codes of conduct, ethics of software development, and intellectual property.

- **CS-205 Security Fundamentals** — threat identification, authentication, authorization; principle of least privilege extended to principle of least data collection; covers CIS 415's privacy and information-security ethics content
- **CS-212 Data Analysis & Responsible AI** — honest visualization, data ethics, high-stakes verification of AI-generated code; covers CIS 415's AI ethics and ethics of software development content
- **New CIS 3xx Ethics (1 cr, Year 3)** — a new 1-credit course to be authored, covering professional codes of conduct (ACM/IEEE), intellectual property and licensing in software, and the ethics of software development as a professional practice; fills the content gap not addressed by the two embedded courses above

The embedded ethics distributed through the Trustworthy Computing lens and the Block 6 Responsible Development frame covers societal impact throughout. The new CIS 3xx formalizes professional conduct and IP — content that is genuinely standalone in character and maps poorly to any single existing new core course.

Aternatively, we could retain CIS 415 and drop it back to a 1-credit offering.

*Credit: 3 old → 3 new. Even.*

---

### CIS 450 → CS-103 + CS-209 + CS-210 (3 cr for 3 cr; Grouped in Blocks 1, 7, & 8)

CIS 450 covers computer architectures (register transfer, addressing modes, data transfer, arithmetic/logic, and control operations), basic OS concepts and operations, relationships of higher-level constructs to assembly, and interrupts and low-level I/O.

The new core covers the *operations* half of CIS 450 thoroughly and the *architecture* half at the programmer-model level only — consistent with the new curriculum's deliberate decision to abstract above the ISA.

- **CS-103 Computational Representation** — Boolean logic, number systems, bitwise operations; the programmer-facing memory model (stack, heap, process); the representation foundation CIS 450 built on
- **CS-209 OSI Networking Fundamentals** — the full network stack from physical through application layer; covers the I/O and communications aspects of CIS 450; routing as the concrete realization of shortest-path algorithms (bridging CS-207)
- **CS-210 Deployment & Operations** — OS concepts at the programmer-facing level: processes vs. threads, preemptive vs. cooperative scheduling, kernel/user space, IPC; the full memory hierarchy including cache misses, locality, virtual memory, and paging

**Known scope shift:** register transfer abstraction, addressing modes, assembly language, compiler output, and hardware interrupts are not covered in the new core. CIS 450's old prerequisites (ECE 241 + CIS 308) gave students the background for this content; the new curriculum draws its boundary above the ISA and treats those topics as belonging to computer engineering rather than computer science.

*Credit: 3 old → 3 new. Even.*

---

### ECE 241 → CS-103 (1 cr — scope reduction, intentional)

ECE 241 covers embedded systems (C programming, number systems, data/logical operations) and DC circuitry (voltage, current, Ohm's law, basic components), with laboratory work using multimeters and oscilloscopes.

- **CS-103 Computational Representation** — covers ECE 241's number systems and data/logical operations content
- C programming from ECE 241 is served by CIS 308 (standalone)
- DC circuitry, circuit theory, and lab work with test equipment are **out of scope for a CS degree** — this is the deliberate scoping decision

The 2-credit reduction from 3 to 1 reflects removal of EE content, not a content gap. ECE 241 continues for ECE students; CS students no longer need it because neither the ISA layer nor electrical engineering is part of the new curriculum's scope.

*Credit: 3 old → 1 new. 2-credit reduction is intentional scope reduction.*

---

## Consolidated substitution table

| Old course | Cr | Standalone? | Substitution | Cr | Credit balance |
|---|---|---|---|---|---|
| CIS 115 | 2 | No | CS-101 + CS-103 | 2 | Even |
| CIS 116 | 1 | **Yes (Python)** | — | — | — |
| CIS 200 | 4 | No | CS-102 + CS-104 + CS-105 + CS-106 | 4 | Even |
| CIS 301 | 3 | No | MATH-101 + MATH-103 + CS-109 | 3 | Even |
| CIS 300 | 3 | No | CS-108 + CS-110 + CS-112 | 3 | Even |
| CIS 308 | 1 | **Yes (C)** | — | — | — |
| CIS 400 | 3 | No | CS-107 + CS-204 + CS-206 | 3 | Even |
| CIS 415 | 3 | No | CS-205 + CS-212 + New CIS 3xx | 3 | Even |
| CIS 450 | 3 | No | CS-103 + CS-209 + CS-210 | 3 | Even |
| ECE 241 | 3 | **Dropped** | CS-103 | 1 | −2 cr (scope reduction) |

All substituted courses are credit-exact. The ECE 241 reduction is intentional and reflects a boundary decision about the CS degree's scope, not missing content.

---

## Prerequisite sequencing for old-track students

Old-track students take the new core in block sequence. The following table shows how the old prerequisite chain is satisfied at each stage.

| After completing | Old prerequisites satisfied |
|---|---|
| CIS 116 (standalone Python) | Entry to new core |
| Block 1 (CS-101 + CS-103) | CIS 115 requirement |
| Block 2 (CS-102 + CS-104 + CS-105 + CS-106) | CIS 200 requirement |
| Block 3 (CS-107 + CS-108 + CS-109 + MATH-101 + MATH-103) | CIS 301 requirement; partial CIS 300 |
| Block 4 (CS-110 + CS-111 + CS-112) | CIS 300 requirement → unlocks CIS 308 (standalone C); clears the prerequisite for CIS 308 since CS-108 + CS-110 + CS-112 substitute for CIS 300 |
| CIS 308 (standalone C, taken after Block 4) | CIS 308 requirement satisfied |
| Block 6 (CS-107 + CS-204 + CS-206) | CIS 400 requirement |
| Block 7 (CS-209) + Block 8 (CS-210) with Block 1 (CS-103) | CIS 450 requirement; unlocks former CIS 450-gated upper-division courses |
| Block 6 (CS-205) + Block 8 (CS-212) + New CIS 3xx | CIS 415 requirement |

**Timing note:** CIS 450 in the old curriculum was typically taken in the third or fourth semester (after ECE 241 + CIS 308). In the new sequence, its substitution (CS-103 + CS-209 + CS-210) is not complete until the end of Year 2. This is later than the old placement. Upper-division courses that gated on CIS 450 will need their prerequisite statements reviewed to determine whether an earlier-in-the-core substitution can be accepted (e.g., CS-103 alone for courses that only needed the architecture foundation), or whether core completion is the right gate.

---

## Remaining action items

1. **Author New CIS 3xx Ethics (1 cr, Year 3).** Content scope: professional codes of conduct (ACM/IEEE Code of Ethics), intellectual property and software licensing, ethics of software development as professional practice. This course serves both old-track students satisfying the CIS 415 requirement and new-track students as a 3rd-year complement to the embedded ethics in the core.

2. **Upper-division prerequisite audit.** Every 500-level course that lists CIS 450, ECE 241, CIS 300, CIS 301, CIS 400, or CIS 415 as a prerequisite needs an updated prerequisite statement for the transition period. The substitution table above is the mapping basis.

3. **CIS 308 prerequisite clarification for new-track students.** CIS 308 remains standalone and is still required for old-track students. For new-track students it is neither required nor mapped. Upper-division courses that depended on C language knowledge (particularly those that formerly gated on CIS 450 + CIS 308) should clarify whether C exposure is still expected.

4. **ECE 241 catalog language.** ECE 241 should be removed from the CS major requirements in the catalog for new-track students. The course description for CIS 450 (while it remains in the catalog for old-track completions) should note the substitution.
