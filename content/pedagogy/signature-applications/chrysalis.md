+++
title = "Chrysalis"
weight = 70
ordinal = "3.7"
+++

> *Working draft for faculty review. Chrysalis is one of three signature applications — large production codebases students study, contribute to, and extend across the two-year spiral. See [Signature Applications](./signature-applications) for the pedagogical framing.*

## What it is

**Chrysalis** is the program's real-time communication and competency assessment platform. It serves two purposes simultaneously:

1. **Student tool:** Real-time messaging between students and between students and instructors, organized by cohort, block, and course. Students use Chrysalis from the first week of Block 1 as their primary in-program communication channel.

2. **Program infrastructure:** The data system that collects, stores, and surfaces competency assessment evidence for the program. Each student's demonstrated competencies — across all 13 threads and all 8 blocks — are recorded in Chrysalis. Students can see their own competency record at any time; instructors use it to identify which threads need more attention at the cohort level.

**Technology:** Elixir/Phoenix with Phoenix Channels for real-time WebSocket communication; OTP (Open Telecom Platform) for fault-tolerant process supervision; Ecto for database access; PostgreSQL for persistent storage (messages, competency records, user accounts, cohort structure); Phoenix LiveView for reactive UI components where applicable.

## Why Elixir/Phoenix

Chrysalis is written in Elixir — a functional, concurrent language built on the Erlang VM — for three reasons:

**Technical fit.** Real-time messaging at educational scale (hundreds of concurrent users, low-latency message delivery) is precisely the problem OTP's actor model was designed for. Phoenix Channels provide a production-grade WebSocket abstraction with built-in presence tracking, message broadcasting, and reconnection semantics. The technical choice is not arbitrary.

**Pedagogical contrast.** The core teaches OOP in B3 (CS-107/108). Chrysalis is a large, functioning production system in a paradigm students are simultaneously studying from the other direction — functional composition, immutable data, pattern matching, and process supervision instead of inheritance and mutation. Students who read Chrysalis code in B1 are encountering functional programming before they have the vocabulary for it; by B3 they can articulate why the Elixir module system differs from a class hierarchy.

**Durability.** OTP-based systems are known for uptime. The Chrysalis application must be available during every class session, assessment, and code review for two years per cohort, across many cohorts. Erlang/OTP's "let it crash" fault-tolerance philosophy — supervised processes restart automatically on failure — is the right operational model for this use case.

## The competency data model

Chrysalis is the technical infrastructure for the Assessment chapter's competency model (see Chapter 2). The Chrysalis data model must be designed in coordination with the ratified competency model — the two cannot be developed independently.

At a high level, the data model tracks:
- The 13 threads (9 spirals, 3 lenses, 1 bounded practice)
- Per-thread passes across the 8 blocks (where each thread is assessed)
- Per-student competency evidence (which assessments provide evidence of which competencies, at what depth)
- Cohort-level aggregate views (which threads show gaps across the cohort in a given block)

This data is sensitive: it contains individual student performance records. Chrysalis's authentication and authorization model must be designed with FERPA compliance in mind from the start — students can see their own record; instructors can see their cohort; neither can see across cohort boundaries without explicit authorization.

## Curriculum mapping — block by block

### B1 — Read (encounter)

**What students do:** Use Chrysalis from day one. They send messages, receive announcements, and see their initial (empty) competency record. A structured reading exercise: trace a single HTTP request through Chrysalis — from the browser to a Phoenix Router, through a Controller, into an Ecto query, and back as JSON. Identify the plug pipeline (Phoenix's middleware chain). Read `git log` on the Chrysalis repository.

**Why this block:** Chrysalis is alive and in use before students open it as a codebase. They already know what it does — they used it to message a classmate an hour ago. B1's "Read" encounter is therefore grounded: students trace code they already have operational intuitions about.

**Threads engaged:** Code Comprehension (pass 1 — make sense of unfamiliar code at production scale), Computational Models (the Phoenix plug pipeline as a first encounter with a PIPELINE computational model — a request flows through a sequence of transformations), APIs & Networked Systems (Chrysalis as a client-server system consuming a REST + WebSocket API).

---

### B2 — Modify (diagnose and repair)

**What students do:** Code Archaeology assessment in a Chrysalis Phoenix controller or template. Example: a message timestamp is displayed in UTC instead of the user's local timezone — a bug that is visible to students in the UI they use daily. Students trace the timezone handling from the database (UTC storage) through the Ecto query to the Phoenix template, diagnose where the conversion should happen, fix it, and write a test.

**Why this block:** A UI bug in a system students use every day is maximally motivating. The fix is non-trivial (timezone handling is a real problem) but tractable at B2.

**Threads engaged:** Code Comprehension (Code Archaeology in a Phoenix controller), Computational Models (the plug pipeline as a transformation chain — modify one transformation in the chain), Professional Practices — version control (commit/revert pattern in a production codebase they care about).

---

### B3 — Model (paradigm contrast)

**What students do:** While building OOP class hierarchies in CS-107/108, students examine Chrysalis as a contrasting case study. Elixir has no classes — it has modules (collections of functions) and protocols (ad-hoc polymorphism via dispatch). Compare: a Phoenix context module (a collection of functions that operate on a data schema) vs. a Python/Java class (state + methods bundled together). Pattern matching in Elixir vs. method dispatch in OOP. Immutability in Elixir vs. mutation in imperative code (studied in B1/B2).

This is not an Elixir programming assignment — students are not writing Elixir. It is a reading and reasoning exercise: given what you are building in CS-107/108, what would this look like if the language were different, and why?

**Why this block:** B3's cognitive frame is "Model and abstract." The Computational Models thread's "more than one model" idea (seeded in B1) deepens here: OOP and functional programming are two models of how to organize computation around data. Chrysalis is the living proof that one of them is in production.

**Threads engaged:** Computational Models (OOP vs. functional as two named models — deepest pass so far), Code Comprehension (read Elixir code with B3 vocabulary), Boundaries & Contracts (Elixir protocols as interface contracts).

---

### B4 — Structure (examine the channel architecture)

**What students do:** CS-111 (Systems & APIs) — examine Chrysalis's Phoenix channel architecture as a case study in structured real-time communication. A Phoenix Channel is a structured API over a WebSocket: it has a topic (the "address"), a join event (the connection contract), and a set of named events (the message types). Students map this onto the web component model from CS-111: the channel is the server-side boundary unit; the client-side channel subscription is the consumer. Implement a toy Phoenix channel subscriber (in JavaScript) that listens for competency-update events and reflects them in a simple LiveView widget.

**Why this block:** B4's "Structure" cognitive frame applies to system structure. Phoenix Channels are the server-side expression of the same boundary-and-contract idea that web components express on the client — a named interface with a defined message protocol. The two are the server and client halves of the same architecture.

**Threads engaged:** APIs & Networked Systems (Phoenix channels as a structured real-time API — pass 2), Boundaries & Contracts (the channel topic and event protocol as a contract), Computational Models (the actor model — each channel is an Elixir process — as a named concurrent model), Human-Centered Computing (the competency widget as a data visualization — student sees their own competency status in real time).

---

### B5 — Store (query and design)

**What students do:** CS-201/202 SQL assignments using the Chrysalis PostgreSQL database (anonymized or test data). Query tasks: find all competency evidence submitted by a student in a given block; compute the distribution of thread coverage across a cohort at the end of Block 3; identify threads with the highest inter-student variance (where some students show deep evidence and others show none). Schema extension: design a new table for a new type of competency evidence (e.g., a self-assessment form tied to a specific assessment event).

**FERPA note:** Assignments use either the student's own record (with their consent and in a private context) or a fully anonymized synthetic dataset. This policy must be established before B5 assignments are designed.

**Threads engaged:** Data Structures & Representation (relational competency data as a queryable model), Boundaries & Contracts (schema as a contract about what a competency record must contain), Trustworthy Computing (FERPA compliance as a data minimization and access-control problem), Professional Practices — documentation (document the schema decision: why this normalization, why these indexes).

---

### B6 — Build responsibly (test, secure, collaborate)

**What students do:** Team Software Project: implement a new Chrysalis feature. Example options: a cohort-level dashboard that shows thread coverage heat-maps (which threads are well-evidenced, which are thin); a notification system that alerts students when a new competency assessment is recorded; an export feature that produces a structured PDF competency report for a student's portfolio. The team writes ExUnit tests for the new feature, implements Phoenix session authentication for the relevant routes (ensuring students can only access their own records), and delivers via PR with code review on the Chrysalis repository.

**Why this block:** Students are contributing to the system that tracks their own learning. The authentication requirement (students must not be able to access other students' competency data) is a real FERPA-motivated security constraint, not a constructed scenario.

**Threads engaged:** Correctness & Verification (ExUnit tests for the new feature), Trustworthy Computing (Phoenix authentication and authorization for FERPA compliance), Sociotechnical Structure (contributing to infrastructure the whole cohort depends on), Professional Practices — version control (PR + code review on a production system).

---

### B7 — Judge (graph and integrate)

**What students do:** Model the competency dependency graph — which competencies must be demonstrated before others are accessible (e.g., the B3 Data Structures pass must precede the B5 relational data pass). Use graph algorithms (CS-206) to answer: which competencies are on the critical path to graduation? Which thread gaps at B4 propagate into the most downstream competencies? 

**Data Integration:** Design and defend a Chrysalis integration with an external assessment tool — e.g., Codio grade exports, a GitHub commit analysis, or a peer-review scoring rubric. Defend the data model (how does an external score become a competency evidence record?), the privacy model (what data from the external tool does Chrysalis actually store?), and the tradeoffs (automated vs. instructor-verified evidence).

**Why this block:** The competency graph is a real graph with real structure — some threads genuinely depend on prior passes of other threads, and this dependency can be made explicit and queryable. The Design Review forces students to own a design decision about the program's own data infrastructure.

**Threads engaged:** Data Structures & Representation (the competency dependency graph as a directed graph), Algorithmic Thinking & Complexity (critical path as a graph algorithm problem), Trustworthy Computing (data minimization in external integrations — what do we actually need to store?), Boundaries & Contracts (the integration API as a contract about evidence provenance).

---

### B8 — Operate (deploy and monitor)

**What students do:** Examine the Chrysalis OTP supervision tree as a production deployment architecture. Map the supervision strategy (`:one_for_one`, `:one_for_all`, `:rest_for_one`) to the fault-tolerance decisions it encodes: if the message broadcasting process crashes, should the competency assessment process also restart, or not? This is the "blameless postmortem" framing applied to a fault-tolerance architecture: instead of blaming the developer when a process crashes, OTP assumes crashes happen and designs the recovery.

Set up monitoring: Chrysalis should emit metrics for message delivery latency, channel join rate, and competency record write throughput. Define what "Chrysalis is healthy" means in observable, measurable terms.

**Why this block:** B8's cognitive frame is "Operate." OTP's supervision trees are the production fault-tolerance architecture — not an academic concept but the design pattern that has kept Erlang/Elixir telecom systems running for decades. Students who understand supervision trees have a concrete model for fault-tolerant distributed systems before they study distributed systems formally in upper-division coursework.

**Threads engaged:** Computational Models (the OTP actor model as a named concurrent model — terminal pass), Correctness & Verification (fault-tolerance as a form of correctness — the system recovers from failures correctly), APIs & Networked Systems (Chrysalis as production infrastructure for the program — terminal operations pass), Professional Practices (postmortem: what failed, why, and what does the supervision tree do about it).

## Open questions

1. **Competency data model coordination.** Chrysalis's database schema is the technical expression of the program's competency model. The Assessment chapter (Chapter 2) must be developed and ratified before Chrysalis's schema is finalized. The two cannot be developed in isolation — schema changes after data collection begins are expensive.
2. **FERPA compliance design.** The competency records are educational records subject to FERPA. Confirm with K-State's Office of General Counsel that the data model, access controls, and student consent framework satisfy FERPA requirements before the application goes live.
3. **Build ownership and pre-launch timeline.** Chrysalis must exist as a functioning production system on the first day of Block 1. Who builds it initially — a graduate student developer, a staff developer, the faculty team? What is the minimum viable feature set for launch, and what can be added in later blocks?
4. **Messaging scope.** Is Chrysalis the program's sole messaging channel, or does it supplement existing K-State tools (Canvas discussions, Microsoft Teams)? If Chrysalis is authoritative, it must be reliable enough to replace existing tools. If it supplements them, students have two channels to monitor.
5. **Elixir reading prerequisites.** B1 asks students to read Elixir code without having studied Elixir. This is intentional — reading unfamiliar syntax in a production context is a genuine skill — but the exercise needs careful scaffolding to ensure students know what to look for and what to ignore. A "reading guide" for B1 Chrysalis code should be developed as part of the B1 curriculum.
6. **LiveView scope.** Phoenix LiveView provides server-side reactive UI without JavaScript. The scope of LiveView use in Chrysalis (vs. plain Phoenix templates + JavaScript) should be decided during development, as it affects what students see and interact with in B4 and B6.
