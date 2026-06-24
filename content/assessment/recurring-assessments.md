+++
title = "Recurring Assessment Types"
weight = 30
ordinal = "2.3"
+++

Recurring assessment types are direct assessment tasks that appear multiple times across the program, deepening in scale, scaffolding, and stakes with each pass. Unlike [signature assessments](./signature-assessments), which are single formal events, recurring types generate a continuous longitudinal evidence trail — the same kind of task, executed with increasing sophistication.

Each recurring type is associated with a primary sub-competency but typically generates evidence for multiple sub-competencies simultaneously.

## Summary

| # | Assessment Type | Primary Sub-competency | Block Span |
|---|----------------|------------------------|------------|
| 1 | Code Archaeology | Analyze Computational Systems | B2 → B8 |
| 2 | Design Brief | Develop Abstractions | B3 → B8 |
| 3 | Formal Analysis | Apply Formal Reasoning | B1 → B8 |
| 4 | Algorithm Evaluation Task | Evaluate Algorithmic Solutions | B3 → B8 |
| 5 | Implementation Task | Implement Software Solutions | B1 → B8 |
| 6 | Verification Task | Verify Software Quality | B2 → B8 |
| 7 | Debugging Challenge | Debug Software Systems | B2 → B8 |
| 8 | Maintenance Task | Maintain Software Systems | B2 → B8 |
| 9 | Data Pipeline Task | Manage Data Resources | B2 → B8 |
| 10 | Data Investigation | Investigate Questions with Data | B5 → B8 |
| 11 | Data Communication Task | Communicate Data Insights | B2 → B8 |
| 12 | System Analysis Task | Analyze System Behavior | B1 → B8 |
| 13 | Environment Configuration Task | Manage Computing Environments | B2 → B8 |
| 14 | Deployment Task | Deploy Operational Systems | B6 → B8 |
| 15 | Requirements Analysis Task | Gather and Analyze Requirements | B2 → B8 |
| 16 | Usability Evaluation | Design Human-Centered Solutions | B2 → B8 |
| 17 | Ethical Evaluation | Evaluate Ethical Implications | B2 → B8 |
| 18 | Technical Explanation Task | Communicate Technical Information | B3 → B8 |
| 19 | Collaboration Task | Collaborate on Software Teams | B1 → B8 |
| 20 | AI-Assisted Practice Task | Utilize AI Responsibly | B1 → B8 |
| 21 | Reflection Assessment | Reflect on Professional Growth | B2 → B8 |

### Cross-domain types

Three types generate substantial evidence for multiple sub-competencies and appear in rubrics for each:

| Type | Primary | Also serves |
|------|---------|-------------|
| Design Brief | Develop Abstractions (CR) | Design Software Systems (SD); Design Human-Centered Solutions (HCP) |
| Algorithm Evaluation Task | Evaluate Algorithmic Solutions (CR) | Represent Information (DI) |
| Code Archaeology | Analyze Computational Systems (CR) | Maintain Software Systems (SD) |

### Level ceiling by evidence tier

| Evidence tier | Ceiling |
|---------------|---------|
| Automated (telemetry, H5P, git, IDE, AI logs) | Application |
| Recurring assessment types (direct, rubric-evaluated) | Adaptation |
| TA/LA role, club leadership, peer mentoring | Leadership |

---

## Computational Reasoning

### Code Archaeology

Students investigate an existing codebase — without prior familiarity — to explain its behavior, structure, and design decisions. Scale and substrate complexity increase with each pass.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-105 | Familiar languages (JS/Python), single module — trace control flow and explain behavior | Function/module |
| B3 | CS-107 | Unfamiliar paradigm (Elixir/Chrysalis) — explain encapsulation across a language boundary | Module boundary |
| B5 | CS-202 | Schema archaeology — read an existing schema and explain the design decisions embedded in it | Data model |
| B6 | CS-205 | Git history archaeology — read a PR or commit history, explain what changed and why | System evolution |
| B7 | CS-206/207 | Integrated system archaeology — trace behavior across multiple components and data stores | Multi-component |
| B8 | CS-208 | Production system archaeology — diagnose a live bottleneck, explain interaction under load | Full system under stress |

*Also generates evidence for: Maintain Software Systems*

---

### Design Brief

Students design an abstraction, interface, or system component to a problem or specification, with scaffolding decreasing and scope increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B3 | CS-107 | Design a module's public interface — specify what's hidden vs. exposed, write a type-annotated contract | Single component, template provided |
| B3 | CS-109 | Design an ADT contract before any implementation — pre/post-conditions, guarantees | Single component, less scaffolding |
| B4 | CS-111 | Design an API across a network boundary — endpoints, request/response shapes, error contracts | Component-to-component |
| B5 | CS-202 | Design a database schema — abstract a messy real-world domain into a formal relational model | Domain model, open-ended |
| B7 | CS-206/207 | Choose and defend the right abstraction tier for the problem (graph vs. relational vs. document) | Multi-option, tradeoff-driven |
| B8 | CS-208/209 | System-level design — compose abstractions across multiple layers for a novel integration problem | Full system, novel context |

*Also generates evidence for: Design Software Systems; Design Human-Centered Solutions*

---

### Formal Analysis

Students construct a formal argument — a proof, specification, complexity bound, or correctness argument — with the form and scope escalating across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B1 | MATH-101 / CS-103 | Truth tables, predicate logic exercises, set proofs | Single proposition/expression, template provided |
| B3 | CS-109 / MATH-103 | Pre/post-condition specification; recursive correctness argument | Single function, less scaffolding |
| B4 | CS-112 / MATH-104 | Big-O analysis of sorting/searching algorithms; formal graph properties | Algorithm-scale, student constructs the bound |
| B6 | CS-203 | Test suite as formal specification — what does this test formally guarantee, and what does it leave unverified? | System behavior, open-ended adequacy argument |
| B7 | CS-206 | Correctness argument for a graph algorithm; evaluate a peer's formal argument in Design Review | Multi-step, peer-facing |
| B8 | CS-208 | Formal + empirical reconciliation — construct the argument for why Big-O prediction diverges from observed behavior | Real system, formal model boundary case |

---

### Algorithm Evaluation Task

Students compare alternative algorithms, data structures, or data models and justify a selection for a specific context using formal and/or empirical evidence.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B3 | CS-109 | Compare two implementations of the same ADT contract — same interface, different performance | Single structure, implementations provided |
| B4 | CS-112 | Compare sorting/searching algorithms by complexity for a specified scenario; adjacency list vs. matrix | Algorithm-scale, student constructs the analysis |
| B5 | CS-201/202 | Justify index strategy or schema design choice; compare relational vs. graph model for a given domain | Data model scale, open-ended |
| B7 | CS-206/207 | Multi-objective tradeoff — Dijkstra vs. A\*, data store selection with competing constraints | Multi-algorithm, defended in Design Review |
| B8 | CS-208 | Production system — evaluate choices where formal and empirical evidence must both be brought to bear | Real system, novel context |

*Also generates evidence for: Represent Information*

---

## Software Development

### Implementation Task

Students implement a software solution to a specification, with scaffolding removed and scope expanded across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B1/B2 | CS-101/102/104 | Single function or module — requirements fully specified, familiar languages, no design decisions | Function/module |
| B3 | CS-107/109 | Multi-function component implementing a pre-defined ADT contract | Component |
| B4 | CS-111 | Full API — student selects tools and approach within a requirements document | System boundary |
| B6/B7 | CS-205/206 | Feature implementation in a collaborative codebase — professional workflows, team-defined specs | Shared system |
| B8 | CS-208/209 | Production-quality implementation — novel domain, real constraints, no scaffolding | Full production system |

---

### Verification Task

Students design and implement a verification strategy for a software system, with the balance shifting toward strategy design at higher levels.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-105 | Write a regression test for a specific code repair — verification as a safety net | Single function, guided |
| B3 | CS-109 | Write pre/post-conditions and test cases that exercise them; type annotations as static verification | Single function, formal spec |
| B6 | CS-203 | Design and implement a test suite including property-based tests — argue adequacy of coverage | System, open-ended strategy |
| B8 | CS-208 | Acceptance testing plan and performance validation for a production system | Novel multi-component, real users |

---

### Debugging Challenge

Students diagnose and fix defects in given code, with scaffolding removed and system complexity increased across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-105 | Single-function bug in familiar language, guided hints | Function, guided |
| B3 | CS-107 | Bug at an encapsulation boundary — trace exception across module boundary | Component boundary |
| B6 | CS-203 | Write a failing test that exposes the bug, then fix it — test-first diagnosis | System, no hints |
| B6 | CS-205 | Code review — find latent bugs in a peer's code before they manifest | Peer codebase |
| B8 | CS-208 | Diagnose from logs and monitoring data; no direct code access | Production system |

---

### Maintenance Task

Students modify an existing codebase to meet a changed requirement, without breaking existing behavior.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-105 | Repair a bug using commit/revert safely — small, guided modification | Single function, scaffolded |
| B3 | CS-107 | Add a method to an existing class while preserving encapsulation | Component boundary |
| B5 | CS-202 | Schema migration — evolve a data model without breaking existing records | Data layer, high stakes |
| B6 | CS-205 | Feature branch PR — implement a change in a shared codebase, pass code review | Shared codebase |
| B8 | CS-208 | API versioning — evolve a public interface while maintaining backward compatibility | Production system |

---

## Data and Information

### Data Pipeline Task

Students acquire, transform, and prepare data for a stated purpose, with source complexity and ethical constraints increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-104 | Parse and reshape a single CSV/JSON source to a specified output format | Single source, specified transformation |
| B4/B5 | CS-111/201 | API-backed and SQL query pipeline — multi-step transformation chain | Multi-step, student designs the chain |
| B7 | CS-207 | Integrate multiple heterogeneous sources; identify and mitigate re-identification risk | Multi-source, ethical constraint |
| B8 | CS-210 | Notebook pipeline with data provenance and ethical documentation | Full lifecycle, novel domain |

---

### Data Investigation

Students investigate a question using data and statistical methods, with the question openness and methodological rigor increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B5 | STAT-101 | Describe a dataset — compute and interpret summary statistics, identify distribution shape | Single dataset, guided methods |
| B5 | CS-202 | Data Investigation (signature) — investigate a student-driven question with a novel dataset | Open-ended, no template |
| B6 | STAT-102 | Probability-based investigation — compute likelihoods, reason formally about uncertainty | Inference under uncertainty |
| B7 | STAT-103 | Sampling investigation — design a sampling strategy, evaluate whether evidence supports a conclusion | Methodology design |
| B8 | CS-210 | Full notebook investigation with visualization, ethical framing, and honest uncertainty reporting | Novel domain, public-facing conclusions |

---

### Data Communication Task

Students create visualizations or explanations that communicate data-driven findings to a specified audience, with audience complexity and ethical stakes increasing across passes.

| Block | Course | Pass | Audience & Challenge |
|-------|--------|------|----------------------|
| B2 | CS-106 | Visual hierarchy and accessibility — is this information legible and accessible to all readers? | Any reader; accessibility compliance |
| B4 | CS-111 | D3 data-join — implement an interactive/dynamic chart that updates as data changes | Technical context; implementation fidelity |
| B5 | STAT-101 | Statistical chart selection — choose and create the right chart type for the data's distributional properties | Analytical audience; appropriateness of form |
| B8 | CS-210 | Honest visualization with ethical documentation — what does this chart claim, is the claim justified? | Public/mixed audience; ethical accountability |

---

## Systems and Infrastructure

### System Analysis Task

Students trace behavior through a computing system using observation and measurement, with system complexity and the gap between formal models and empirical reality increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B1 | CS-103 | Trace stack/heap state through a function call sequence | Memory model, guided |
| B2 | CS-106 | Trace an async fetch through the event loop — explain callback ordering | Concurrency model, guided |
| B4 | CS-111 | Trace a request through the full server pipeline — explain behavior at each stage | Multi-stage system |
| B8 | CS-208 | Diagnose a production bottleneck using monitoring data — explain why empirical behavior diverges from Big-O prediction | Real system under load |

*Complementary to Code Archaeology: Code Archaeology traces behavior through code; System Analysis Task traces behavior through operational signals and system interactions.*

---

### Environment Configuration Task

Students configure a computing environment to support a specified development or operational purpose, with scope and coordination complexity increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-105 | Configure git — username, email, .gitignore, initial repository setup | Single tool, personal toolchain |
| B3 | CS-107 | Configure type checker and linter — tsconfig.json or mypy + eslint/pylint integrated into the workflow | Static analysis toolchain |
| B6 | CS-203 | Configure a test pipeline — test runner, coverage thresholds, CI trigger on push | Integrated automation |
| B6 | CS-205 | Configure a shared team environment — branch protection, PR templates, shared linting config | Collaborative toolchain |
| B8 | CS-208 | Configure a production environment — containers, environment variables, secrets, monitoring, hardening | Production-grade, real constraints |

---

### Deployment Task

Students deploy, validate, and monitor a software system in an operational environment.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B6 | CS-203/205 | Tag a release — ensure tests pass, cut a semantic version tag, document what changed | Single service, staging environment |
| B8 | CS-208 | Deploy a containerized service — configure, deploy, monitor, and respond to an operational issue | Production environment, real constraints |
| B8 | CS-209 | System Integration Project deployment — multi-component system for real user acceptance; postmortem on what broke | Novel multi-component, live users |

---

## Human-Centered Practice

### Requirements Analysis Task

Students identify stakeholder needs and translate them into system requirements, with method formality and stakeholder complexity increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-106 | Identify user needs informally — who is this for, what accessibility requirements follow from their context? | Single user type, guided |
| B5 | STAT-101 | Survey design — design a valid instrument for a specified research question; critique a given survey for bias | Research design, data collection |
| B6 | CS-205 | Stakeholder interview + requirements brief — conduct an interview, produce a documented requirements artifact with acceptance criteria | Real human, formal output |
| B8 | CS-209 | Full multi-method investigation — interviews, surveys, and observation with conflicting stakeholders | Novel context, real users, ambiguous needs |

---

### Usability Evaluation

Students evaluate an existing design or interface against human-centered criteria, with the complexity of the system and the evaluation method increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-106 | Accessibility audit — evaluate an existing page against accessibility criteria (contrast, keyboard navigation, screen reader) | Checklist-guided, single page |
| B4 | CS-111 | Component usability evaluation — does this web component's interface make sense from the user's perspective? | Interface design, less scaffolding |
| B7 | CS-206 | Design Review — peers evaluate each other's system designs for human-centeredness and usability fit | Peer-facing, multi-dimension critique |
| B8 | CS-209 | Full usability evaluation — heuristic evaluation, user testing sessions, A/B analysis against acceptance criteria | Real users, novel system |

---

### Ethical Evaluation

Students identify and reason about the ethical implications of a computational decision or system, with the scope of harm and the novelty of the context increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-104/106 | Data minimization analysis — given a pipeline or form, identify what data is collected and argue for what should be removed | Single decision, guided framework |
| B5 | CS-202 | Schema ethics documentation — justify access control and data minimization decisions in a schema design | Design-level, formal documentation |
| B6 | CS-204/205 | Security threat analysis + responsibility retrospective — identify system threats and team ethical responsibilities | System-level, collaborative accountability |
| B7 | CS-207 | Re-identification risk analysis — identify risks from dataset combination and propose mitigations | Integration-level, emergent harm |
| B8 | CS-210 | AI-assisted analysis critique — evaluate an AI-generated artifact for correctness, bias, security risk, and responsible use | Novel context, high stakes |

---

### Technical Explanation Task

Students communicate technical information to a specified audience, with audience diversity and communication stakes increasing across passes.

| Block | Course | Pass | Audience & Stakes |
|-------|--------|------|-------------------|
| B3 | CS-107 | Type-annotated interface documentation — document a component's contract for a peer developer | Peer developer; asynchronous, low stakes |
| B5 | CS-202 | Schema-decision documentation — explain design choices to a future maintainer without your context | Future maintainer; asynchronous, medium stakes |
| B6 | CS-205 | PR description and code review — communicate what changed, why, and what to look for | Team; professional, collaborative |
| B7 | CS-206 | Design Review presentation — defend technical decisions to critical peers and faculty | Critical audience; synchronous, high stakes |
| B8 | CS-209 | Stakeholder translation — communicate technical constraints and tradeoffs to non-technical decision-makers | Non-technical; consequential, novel context |

---

## Professional Practice

### Collaboration Task

Students coordinate work in a shared version-controlled codebase, with the collaborative complexity and team accountability increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B1 | CS-103 | Git history exploration — read a repo's log, diff, and blame to reconstruct what a collaborator changed and why | Read-only, solo |
| B2 | CS-105 | Commit/revert safety net — use git to checkpoint and recover during a repair task | Write, solo |
| B5 | CS-202 | Solo feature branch — implement a schema change on a branch, merge cleanly | Branch/merge, solo |
| B6 | CS-205 | Full collaborative PR cycle — branch, implement, open PR, respond to review, merge | Team, professional workflow |
| B8 | CS-208/209 | Sustained team collaboration across a multi-block project with postmortem accountability | Multi-block, real product, team |

---

### AI-Assisted Practice Task

Students use AI tools for a specified purpose and are assessed on their evaluation, verification, and responsible use of AI outputs, with stakes and verification complexity increasing across passes.

| Block | Course | Pass | Stakes & Verification Challenge |
|-------|--------|------|----------------------------------|
| B1/B2 | CS-105 | AI-as-explainer — use AI to explain unfamiliar code; verify the explanation against actual runtime behavior | Low stakes; verification by empirical observation |
| B4/B5 | CS-111/202 | AI design brainstorm — generate alternatives with AI, select and justify one, document where AI reasoning was flawed | Medium stakes; verification by design argument |
| B6 | CS-203 | AI-generated tests — evaluate coverage, find gaps, verify test correctness and adequacy | Medium stakes; verification by coverage analysis |
| B8 | CS-210 | AI code critique — evaluate AI-generated code for correctness, security vulnerabilities, and bias | High stakes; verification by security and correctness analysis |

---

### Reflection Assessment

Students reflect on their own practice, identify growth areas, and plan improvements, with the accountability dimension and the evidence base for reflection increasing across passes.

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-105 | Post-Code Archaeology debrief — what strategies worked and what would you do differently? | Individual, prompted, low stakes |
| B4/B5 | CS-112/202 | Backward reflection with new tools — revisit an earlier decision and argue what you'd change now | Individual, cross-temporal, no prompts |
| B6 | CS-205 | Responsibility retrospective — team reflection on ethical and professional practice | Team, structured, accountability dimension |
| B8 | CS-208/209 | Blameless postmortem + employer-facing competency report — systemic failure analysis and curated growth narrative | Real consequences; public-facing artifact |
