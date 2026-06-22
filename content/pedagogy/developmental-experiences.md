+++
title = "Recurring Developmental Experiences"
weight = 20
ordinal = "3.2"
+++

> *Working draft for faculty review. This page describes the within-block experiential cycle that grows across the two years. For the signature applications that serve as its substrate, see the Tallgrass, Rhizome, and Chrysalis pages in this chapter.*

## The premise: systems-level thinking before programming skill

Traditional CS instruction begins with programming skill: write a loop, write a function, write a class. The ability to read and reason about existing code — to navigate a large unfamiliar codebase, diagnose where something is wrong, and extend it without breaking what works — is treated as an advanced skill developed later, after programming foundations are established.

This curriculum inverts that priority.

Reading and reasoning about existing systems is not an advanced skill that emerges after programming. It is a foundational skill that programming skill can only partially substitute. A student who can write code from scratch but cannot read others' code is not prepared for professional practice — in an era of large open-source codebases, AI-generated code, and million-line legacy systems, the ability to understand what already exists is more economically valuable than the ability to produce new code from a blank page.

More importantly, engaging with large existing systems from the beginning develops **systems-level thinking** — the capacity to reason about how components relate, where responsibilities lie, and how data flows across boundaries — far earlier than a write-first pedagogy permits. A student reading a production authentication system in Block 1 is confronting questions of trust, separation of concerns, and contract design before they have formal vocabulary for any of it. That early exposure changes how they think when the formal vocabulary arrives.

The three [Signature Applications](./signature-applications) — Tallgrass, Rhizome, and Chrysalis — are the substrate for this approach. They are pre-built, production-scale codebases that students encounter before they have written much code of their own.

## The growing cycle

Each block introduces one new mode of engagement with existing code, added on top of all the modes from prior blocks. The cycle always ends in reflection — and reflection begins from the very first block, not at the end of the program.

| Block | New mode added | Full cycle at this block |
|---|---|---|
| B1 — Read | **Read** | Read → Reflect |
| B2 — Modify | **Repair** | Read → Repair → Reflect |
| B3 — Model | **Model** | Read → Repair → Model → Reflect |
| B4 — Structure | **Build** | Read → Repair → Model → Build → Reflect |
| B5 — Store | **Query** | Read → Repair → Model → Build → Query → Reflect |
| B6 — Build Responsibly | **Test** | Read → Repair → Model → Build → Query → Test → Reflect |
| B7 — Judge | **Integrate** | Read → Repair → Model → Build → Query → Test → Integrate → Reflect |
| B8 — Operate | **Operate** | Read → Repair → Model → Build → Query → Test → Integrate → Operate → Reflect |

By Block 8, every block-level engagement with a signature application involves all eight action modes, followed by reflection. A student working in Block 8 is not doing something entirely new — they are doing everything they have done before, plus deploying and monitoring the production system, plus reflecting on what they observe.

## What each mode means

**Read.** Read code you did not write. Trace data flow across files and modules. Understand the entry point. Read the commit history to understand how the system evolved. Ask: what does this do, and how can I tell? This is the foundational mode — every subsequent mode depends on being able to read accurately before acting.

**Repair.** Identify something that is wrong and fix it without breaking anything that was right. This is the Code Archaeology signature assessment: trace a bug, form a hypothesis about its cause, verify the hypothesis, write a regression test, apply the fix, and confirm the test passes. Repair requires reading but goes further — it requires forming a model of how the system is supposed to behave, comparing it to how the system actually behaves, and making a targeted change. The regression test discipline is load-bearing: repair without a test is not repair, it is a guess.

**Model.** Take a part of the system and express it more abstractly — as an ADT, a class hierarchy, a formal contract, or a data model. This is not reverse-engineering for its own sake; it is the process by which students develop the ability to articulate what a piece of code *is responsible for*, independent of how it implements that responsibility. Modeling exposes the seams of a system — the boundaries where one responsibility ends and another begins.

**Build.** Add something new to the system. Not from scratch — the existing architecture must be respected, the existing tests must continue to pass, and the new addition must integrate with the existing component model. The B4 web component assignment is the canonical expression: students add a new `<timeline-scrubber>` or equivalent component to Tallgrass, following the component API pattern already established in the codebase. Building within a system is harder than building from scratch, because the constraints are real and visible.

**Query.** Ask the system's data layer a question it was not asked before. Write SQL against the Rhizome time-series database, or the Tallgrass archive, or the Chrysalis competency store. Propose a schema extension for a new data category that the current schema cannot express. Query requires understanding both what data exists and how it is organized — gaps and normalization decisions become visible only through the act of trying to answer a real question with the existing schema.

**Test.** Write automated tests for the system, including for the code you added in Build. Unit and integration tests. Tests for failure modes: what happens when sensor data is missing, when a submission is malformed, when a network request times out? Test mode formalizes the contract discipline from Model: a test is an executable specification of what a module is supposed to do. A student who cannot write tests for their own code cannot reliably extend a system over time.

**Integrate.** Connect the system to something external — a new data source, a new partner API, a new output format. Defend the integration design: what is the data provenance? What does the system store and why? What happens when the external source changes format or goes offline? Integration mode is where multi-objective tradeoff reasoning becomes unavoidable: coverage vs. accuracy, freshness vs. stability, completeness vs. privacy.

**Operate.** Deploy, monitor, and maintain the system under real conditions. Set up alerting. Respond to a failure. Write a blameless postmortem. Optimize a bottleneck. Operate mode reveals that a system that passes all its tests can still misbehave in production — and that the appropriate response is not blame but structured inquiry into root cause and systemic improvement.

**Reflect** (constant). After every mode, students articulate what they observed, what surprised them, what they would do differently, and what questions they now have. Reflection is not a terminal phase — it accompanies each action mode throughout the program. Early in the program, reflection is informal (a Chrysalis message to a peer or instructor). Later, it takes the form of structured postmortems, design review presentations, and competency self-assessments. The reflection record accumulated in Chrysalis over two years becomes evidence of learning — of the student's developing judgment, not just their developing output.

## How this differs from the traditional model

| Traditional CS pedagogy | This program |
|---|---|
| Write from scratch first | Read at scale first |
| Programming skill is the foundation | Systems-level thinking is the foundation |
| Large codebases are an advanced topic | Large codebases are the starting point |
| Each assignment is self-contained | Assignments build on a shared production codebase |
| Reading others' code is a supplementary skill | Reading others' code is a primary skill, assessed from B1 |
| Complexity is introduced gradually via toy problems | Complexity is immediately visible; the student's role in it grows |

The traditional model is not wrong — it produces capable programmers. But it produces programmers who are well-prepared for the first job that involves building greenfield systems, and less well-prepared for the far more common first job that involves extending, maintaining, and reasoning about systems that already exist, that were written by other people, and that must continue to work while being changed.

## Connection to the signature assessments

The four signature assessments are direct expressions of the deepest cycle modes:

- **Code Archaeology (B2):** The Repair mode, formalized as an assessed exercise with a real bug in a production codebase.
- **Data Investigation (B5):** The Query mode, extended to a full research question with visualization and presentation.
- **Team Software Project (B6):** The Build + Test modes, performed collaboratively on a real codebase with real code review.
- **Design Review (B7):** The Integrate mode, formalized as a presentation-and-defense exercise with faculty as stakeholders.

Reflection mode underlies all four assessments: each requires students to articulate not just what they did but why, and what they would do differently given what they now know.

## Open questions for faculty review

1. **Naming the modes.** The eight action modes named here (Read, Repair, Model, Build, Query, Test, Integrate, Operate) are this document's names, developed to match the block cognitive frames. They should be confirmed and ratified before being used with students — the names are visible in the curriculum and students will learn to use them.
2. **Reflection instrumentation.** How is reflection collected and assessed? Chrysalis is the natural venue (a structured reflection post in the relevant channel, prompted by the instructor), but the format and rubric need to be designed. A reflection that is too open-ended becomes a performance of reflection; one that is too structured becomes a checklist.
3. **Cycle depth per block.** In early blocks, the cycle is short (Read → Reflect). In later blocks, it is long (all eight modes). The time required to run the full cycle in B8 is significant. Confirm that the block schedule allows students to meaningfully engage with all eight modes within the 8-week block, alongside the regular course content.
4. **Cycle and external courses.** The cycle, as described, focuses on the CS courses and signature applications. How do the external co-designed courses (MATH-101–104, STAT-101–104) participate in the developmental cycle? Their content informs specific passes (MATH-104 informs the B4 graph structures in Tallgrass; STAT-101 informs the B5 data investigation), but whether external course instructors are expected to engage with the cycle language is an open question.
