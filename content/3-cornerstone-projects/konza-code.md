+++
title = "Konza Code"
weight = 40
ordinal = "3.4"
+++

> **Living document.** This page will change as development continues. *Last updated: September 27, 2026.*

## What it is

Konza Code is a block-based programming environment for K-12 students. It is a new project in the K-State Computer Science department, forked from MIT's Scratch. We renamed it to avoid Scratch trademark issues. The name also reflects the feature that sets it apart: a **switchable text panel**. Students can view and edit the same program as blocks or as text.

The text form uses **Scratch's own syntax**, so it reads like the blocks themselves. Current Scratch users will find it familiar right away. Students can move to text-based programming without learning a new language at the same moment. That keeps the cognitive load of the transition low.

## Why we're building it

Scratch is excellent for novices, but it falls short of what we need:

- **School use.** Konza Code runs on its own server, not the public Scratch community. It will better support classroom management and parent controls.
- **Data.** It will offer stronger support for working with datasets and a set of **curated web APIs**. These will include links to the department's Kansas history archive and precision agriculture data.
- **Bridging to text.** The text panel shows students that the blocks were always code.

Its primary users are K-12 students and teachers. Many of them are in the rural Kansas schools served by the department's statewide outreach program.

## Role in the undergraduate curriculum

Konza Code is a **cornerstone project** in the redesigned B.S. in Computer Science. K-State undergraduates are its **developers**, not its learners. They will build, extend, maintain, and operate it.

Cornerstone projects give students a long-lived, production codebase with real users. Students return to that codebase at increasing depth as they move through the program. It replaces disposable course projects. Konza Code gives students hands-on experience with several threads that run through the curriculum:

- **Language implementation and notional machines.** Keeping blocks and text synchronized requires parsing, pretty-printing, and a shared program representation. The Scratch VM is an easy-to-read example of an execution model.
- **Concurrency.** Scratch programs run many sprite scripts at once. The VM schedules them cooperatively. The Phoenix server provides a separate, contrasting model based on actors and message passing.
- **The actor model in production.** Elixir is part of the two-year core. Here students use it in a system that must stay up for real users.
- **Operations.** Students run a service used by schools. That includes deployment, monitoring, and reliability.
- **Security and privacy.** Protecting accounts and data for a service used by minors, and building parent controls, provides grounded material for the Cybersecurity track.
- **Data.** Students curate datasets and APIs and connect them to other department projects, which supports the Data Science track.
- **Open source.** Students maintain an AGPL fork of a major open-source project.

*Which courses touch Konza Code, and at what depth, will be filled in as the course sequence is finalized.*

## Tech stack

| Component | Technology |
|---|---|
| Editor (client) | Fork of Scratch 3.0: JavaScript/React (`scratch-gui`, `scratch-vm`, `scratch-blocks`, `scratch-render`) plus a new text panel |
| Hosting app (server) | Elixir / Phoenix, chosen for its scalable reliability and for exposure to the actor model |
| Hosting | Cloud or departmental servers (to be decided) |
| License | Editor: AGPL-3.0. Website: likely AGPL-3.0 |

## Status

New project in early development. This section will track milestones.

## Open items

- Course mapping: which courses, which competencies, and what depth
- Hosting decision
- Website license
- Selection of the curated APIs and datasets
- Parsing approach and file format for the text panel