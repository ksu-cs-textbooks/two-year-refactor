---
title: "Software Development"
pre: "2. "
weight: 20
---

### Design Software Systems

**I can design software systems that satisfy identified requirements and constraints.**

I create and communicate system designs that consider functionality, maintainability, security, usability, and performance.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B3 | CS-107 | Module boundary design — what a component hides vs. exposes; type-annotated interfaces |
| B3 | CS-109 | ADT contract-first design — specifying behavior before implementation |
| B4 | CS-111 | Client-server decomposition; API design across a network boundary; web component architecture |
| B5 | CS-202 | Schema design — modeling a real-world domain with formal relational structure |
| B6 | CS-204 | Designing for testability — testability as a first-class design quality |
| B6 | CS-205 | Security as a design concern — threat modeling, least-privilege, data minimization embedded in design |
| B7 | CS-207/207 | Design Review — defend system design choices including algorithm selection, data model, and tradeoffs |
| B8 | CS-210 | Deployment architecture, fault-tolerance design, API versioning as a compatibility contract |
| B8 | CS-211 | Requirements-driven design — designing from stakeholder needs outward |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Design Brief (constrained) — design a component or API to a given specification |
| Independence | Design Brief (open-ended) — given requirements, produce a complete system design without a template |
| Adaptation | System Integration Project (B8) — novel multi-stakeholder system requiring synthesis of all design concerns |
| Leadership | Design Review critique (TA/LA role) — evaluating whether a peer's design satisfies stated requirements and constraints |

**Recurring type:** Design Brief (shared with Develop Abstractions and Design Human-Centered Solutions) — the rubric criteria here focus on functionality, maintainability, security, usability, and performance tradeoffs rather than abstraction structure.

---

### Implement Software Solutions

**I can construct software solutions that fulfill identified requirements using appropriate technologies and development practices.**

I develop software systems by applying suitable tools, languages, frameworks, and implementation strategies.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B1 | CS-101/102 | First programs — imperative and functional paradigms in JS/Python; heavily scaffolded |
| B2 | CS-104/106 | Data transformation pipelines; fetch-and-render with async/event handling |
| B3 | CS-107/109 | OOP with type-annotated contracts; implementing ADTs to a pre-defined contract |
| B4 | CS-111 | Building a full API — server-side and client-side; web components |
| B6 | CS-206 | Collaborative implementation — team workflows, PR-based development |
| B7 | CS-207 | Graph algorithm implementation in a non-trivial problem context |
| B8 | CS-210/209/210 | Production-grade implementation; human-centered system; data analysis notebook |

Note: automated evidence (IDE telemetry, git commits, H5P exercises) is richer here than anywhere else in the program — this sub-competency is most thoroughly covered by the telemetry tier up to Application. The gap is at Independence and above, which requires direct assessment.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Structured implementation task — requirements and step-by-step specification provided |
| Independence | Open-ended implementation task — requirements given, no scaffolding; student selects tools and approach |
| Adaptation | Team Software Project / System Integration Project — novel, multi-stakeholder, collaborative implementation under real constraints |
| Leadership | TA/LA supporting peers' implementation; leading code review sessions |

**Recurring type:** Implementation Task — deepens from fully-specified single function (B1/B2) through production-quality novel-domain implementation (B8).

---

### Verify Software Quality

**I can evaluate software systems using testing, analysis, and verification techniques to determine whether requirements have been met.**

I apply appropriate methods to establish confidence in the correctness, reliability, and quality of software systems.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B2 | CS-105 | Regression tests introduced as a safety net for code repair — first informal encounter with verification |
| B3 | CS-107 | Type checker as mechanical verifier — type annotations as static verification; linter as formal adequacy check |
| B3 | CS-109 | Pre/post-conditions and class invariants as formal specification; proof obligations for recursive functions |
| B6 | CS-204 | Primary home — automated unit and integration testing; property-based testing; test suite as formal specification |
| B6 | CS-206 | Code review as peer verification — correctness check before merge |
| B7 | CS-207 | Design Review — defending correctness of structural choices, not just "does it work" |
| B8 | CS-210 | Performance validation on a live system — empirical verification against performance requirements |
| B8 | CS-211 | Acceptance testing (fitness-for-purpose with real users) and A/B testing |

Note: three formal verification techniques are explicitly present: type checking as mechanical verification (CS-107), property-based testing (CS-204), and class/loop invariants (CS-109). These complement the empirical testing emphasis.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Implement a test suite for a given specification — write unit and integration tests to a provided requirements document |
| Independence | Design and implement a complete verification strategy — given a system, determine independently what to test, at what level, and argue adequacy |
| Adaptation | Acceptance testing and performance validation for the System Integration Project — novel multi-component system, no template, real users |
| Leadership | TA/LA reviewing test suites and teaching testing practice; leading code review sessions with a correctness lens |

**Recurring type:** Verification Task — deepens from regression test as safety net (B2) through acceptance testing with real users (B8).

---

### Debug Software Systems

**I can diagnose and correct defects in software systems using systematic investigation and evidence.**

I identify the causes of unexpected behavior and implement effective solutions while validating the results of my changes.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B2 | CS-105 | Primary home — debugging reframed as systematic data flow investigation; git revert and regression tests as diagnostic safety nets; AI-as-explainer verified empirically |
| B3 | CS-107 | Debugging across encapsulation boundaries — exceptions as signals that a contract was violated; try/catch as a diagnostic tool |
| B6 | CS-204 | Test-isolated debugging — failing tests as precise diagnostic instruments |
| B6 | CS-206 | Code review as pre-production defect detection |
| B8 | CS-210 | Production debugging — diagnosing live system failures from monitoring data and logs |
| B8 | CS-211 | Blameless postmortem — diagnosing what went wrong at the system/team level |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Guided debugging challenge — bug symptom given, scaffolded hints about where to look |
| Independence | Unscaffolded debugging challenge — unfamiliar codebase, no hints, systematic investigation required |
| Adaptation | Production debugging — diagnose a live system failure from operational signals (logs, monitoring), no direct test harness |
| Leadership | TA/LA mentoring debugging sessions; leading blameless postmortems |

**Recurring type:** Debugging Challenge — deepens from single-function guided diagnosis (B2) through production system diagnosis from logs (B8). Code Archaeology and Debugging Challenge naturally pair — reading the code to understand it is the prerequisite for diagnosing it.

---

### Maintain Software Systems

**I can modify and evolve existing software systems while preserving functionality, reliability, and data integrity.**

I analyze existing codebases, implement changes, and manage software evolution without introducing unintended consequences.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B1 | CS-103 | Git as history/archaeology tool — semantic versioning seeds the idea of software as something that evolves over time |
| B2 | CS-105 | Primary home — Code Reading & Repair; git commit/revert and regression tests introduced explicitly as safety nets for modifying code |
| B3 | CS-107 | Type annotations as maintenance affordance — explicit contracts protect future maintainers |
| B5 | CS-202 | Schema migration — evolving a database schema without breaking existing data |
| B6 | CS-204 | Regression tests as the foundation for safe modification |
| B6 | CS-206 | Branch/PR/code review workflow — professional mechanism for modifying a shared codebase |
| B8 | CS-210 | Operational maintenance — runbooks, monitoring, API versioning as backward-compatibility contract |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Guided maintenance task — modify an existing codebase to a specified change, with tests and documentation provided |
| Independence | Open-ended maintenance task — given a codebase and a change requirement, determine what needs to change without guidance |
| Adaptation | Team Software Project — maintaining a shared evolving codebase with real coordination overhead; schema migration on a live database |
| Leadership | TA/LA managing code review for a team; leading retrospectives on a system's evolution |

**Recurring type:** Maintenance Task — deepens from guided bug repair with commit/revert (B2) through API versioning on a production system (B8). Code Archaeology, Debugging Challenge, and Maintenance Task naturally appear in sequence: read → diagnose → repair safely.
