+++
title = "Signature Applications"
weight = 40
ordinal = "3.4"
+++

> *Working draft for faculty review. The signature application concept is a pedagogical design decision — not yet ratified. This document describes the intent; the three companion pages describe each application.*

## The concept

The two-year core is built around a spiral: the same ideas return, each time deeper. Signature applications make that spiral concrete — students revisit the same three production codebases across all eight blocks, each time with more tools and more responsibility.

The applications are chosen, and pre-built before the program begins, to serve three purposes simultaneously:

1. **Code before code.** In Block 1, students have not yet written much. They read a real, working, production-scale system instead — tracing how data becomes a map, how a sensor reading becomes a database row, how a message becomes a persistent record. Reading at scale is harder and more honest than reading toy examples, and it establishes from the first week that the program expects engagement with complexity.

2. **A continuous reference point.** As students gain capability — ADTs, databases, testing, graph algorithms — they apply each new idea to the same codebases they already know. The cognitive load of learning new syntax is separated from the cognitive load of understanding new problems, because the problems are already familiar.

3. **A stake in the outcome.** Each application is live and used by real people, including the students themselves. Chrysalis tracks their own competency assessments and carries their messages. Rhizome sensors are in their physical classroom. Tallgrass is about their own state. The work is not hypothetical.

## The three applications

| Application | Domain | Primary tech | Student stake |
|---|---|---|---|
| **Tallgrass** | Kansas history and geography | Web components (or Vue) + D3.js frontend; TypeScript + PostgreSQL + Neo4j pipeline | Their state's history; data they may contribute |
| **Rhizome** | Environmental sensing + data science | IoT sensors, PostgreSQL time-series, REST APIs; Kansas Mesonet; Beocat HPC | Sensors in their classroom; data generated while they learn |
| **Chrysalis** | Competency assessment + real-time messaging | Elixir/Phoenix/OTP, WebSockets, PostgreSQL | The tool they use every day; their own competency data |

Together the three applications represent a range of technical styles — declarative web with data visualization (Tallgrass), event-driven data pipelines and scientific computing (Rhizome), and functional/concurrent real-time systems (Chrysalis). Students who complete the two-year core have read and contributed to codebases in all three styles.

## How they are used across the spiral

Each block has a characteristic engagement mode. The same applications are always present, but the student's relationship to the code deepens:

| Block | Mode | Nature of engagement |
|---|---|---|
| **B1 — Read** | Encounter | Read and trace each codebase as a reader; understand data flow without writing much |
| **B2 — Modify** | Diagnose & repair | Code Archaeology assessment on a real bug or data-transformation task in the application |
| **B3 — Model** | Abstract | Model a subsystem as ADTs/OOP; contrast paradigms (Chrysalis as a functional counterpoint) |
| **B4 — Structure** | Build a component | Add a new web component to Tallgrass; consume the Rhizome API; examine Phoenix channel structure |
| **B5 — Store** | Query & design | Write SQL against the application's real database; propose a schema extension for new data |
| **B6 — Build responsibly** | Test, secure, collaborate | Write automated tests, harden an endpoint, and contribute via a PR with code review |
| **B7 — Judge** | Integrate & defend | Graph-based analysis, multi-source integration, tradeoff defense in the Design Review |
| **B8 — Operate** | Deploy & monitor | Deploy, monitor, and optimize; measure production behavior; run HPC analysis (Rhizome/Beocat) |

## Connection to signature assessments

The applications are the substrate for the program's four signature assessments:

- **Code Archaeology (B2):** The diagnosed codebase is drawn from one of the three applications. Students trace a real bug or data anomaly in a production system rather than a constructed exercise.
- **Data Investigation (B5):** Students query Tallgrass's historical archive or Rhizome's time-series data to answer a real geospatial or environmental question.
- **Design Review (B7):** Students design and defend a new feature or integration for one of the applications, with judges playing the role of stakeholders.
- **Team Software Project (B6):** Teams contribute a real feature to one of the applications via the standard PR/code-review workflow.

## The land grant connection

K-State's land grant mission — to serve Kansas through education, research, and outreach — is structural in these applications, not ornamental:

- **Tallgrass** collects and visualizes Kansas history with input from local historians and schools. The crowdsourcing model specifically invites communities to contribute and correct their own history.
- **Rhizome** deploys sensing technology in classrooms and connects to the Kansas Mesonet, a statewide environmental monitoring network. Data that students analyze in assignments is data that matters to Kansas agriculture, hydrology, and climate response.
- **Chrysalis** was designed for this program but is built to be shareable. The competency model it tracks could eventually serve other K-State programs or Kansas community colleges building spiral curricula.

## Open questions for faculty review

1. **Build ownership.** Who builds and maintains these applications initially? They must exist as functioning production systems before the first cohort arrives. The program needs a technical lead (likely a senior graduate student or staff developer) for each application's pre-launch development. This is the largest implementation dependency in the pedagogy design.
2. **Scope of student contribution.** At what block should contributions graduate from "read and suggest" to "write and merge"? B6 is the natural threshold (testing and collaborative development), but earlier blocks could allow contributions to documentation or data.
3. **Application stability vs. exercise fidelity.** Production bugs may make teaching points, but broken applications disrupt assignments. A policy for freezing application state during assessment windows may be needed.
4. **Mesonet data access.** The Kansas Mesonet data is publicly available, but a stable, course-controlled API layer (mirror or wrapper) would protect assignment fidelity from upstream changes to the Mesonet's data formats or endpoint structure. Confirm whether this wrapper is part of Rhizome's scope.
5. **Chrysalis and the Assessment chapter.** The Chrysalis application is the technical infrastructure for the competency model described in Chapter 2 (Assessment). The two chapters should be developed in coordination — the data model Chrysalis uses must match the competency model faculty ratify.
