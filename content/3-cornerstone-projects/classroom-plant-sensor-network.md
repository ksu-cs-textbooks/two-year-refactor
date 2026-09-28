+++
title = "Classroom Plant-Sensor Network"
weight = 20
ordinal = "3.2"
+++

> **Living document.** This page will change as development continues. *Last updated: September 28, 2026.*

## What it is

Raspberry Pi sensors installed in classrooms where this program's courses are taught, publishing live readings through a JSON API. It is under active development — curriculum needs can inform its design, not just consume whatever already exists. Right now that means a single unauthenticated GET endpoint returning the room's temperature; additional sensor readings (humidity, light, soil moisture), authenticated write access, historical/time-series data, and real-time streaming are all planned but not yet built. Computer vision is a likely further direction down the road.

## Why we're building it

This asset is reflexive in a way the others aren't: its subject is the room the students are sitting in. That makes it a low-stakes, immediate way to introduce a live network boundary and a JSON response — a real GET request against a real, physically-present system — without the setup cost of an external API or a fictional example. Its minimal, unauthenticated design is deliberate and temporary: a single open read endpoint is a natural, concrete setup for a later question — "why would you not leave a write endpoint open the way this read endpoint is" — once the core reaches its security/auth content.

## Role in the undergraduate curriculum

This is a **cornerstone project** in the redesigned B.S. in Computer Science, but student involvement deepens in stages rather than starting at full ownership — the same trajectory this program's [Legitimate Peripheral Participation](../1-approach/theoretical-grounding/legitimate-peripheral-participation) page describes, and a live instance of the [Spiral Curriculum](../1-approach/theoretical-grounding/spiral-curriculum)'s design logic: the same system revisited at increasing depth, not a repeat of the first pass.

It offers direct experience with:

- **Consuming a live API (early courses).** Students read from it as a data source — the networking norm's early convergence point, and a flagged future pairing point for the core's security/auth content once that lands (CIS 251).
- **Embedded systems (ECE 241).** Students build and deploy their own example sensor units, hands-on.
- **Systems ownership (higher-level courses).** Students extend the Go consolidation pipeline, the Python/FastAPI access layer, and implement new sensor types themselves, taking on real ownership of a production system's evolution.
- **Polyglot systems, contrasted with this chapter's other two projects.** C or Rust on the sensors, Go for the consolidation pipeline, Python/FastAPI for the access layer — a third distinct architectural voice alongside Konza Code's Elixir/Phoenix actor model and the Kansas Historical Data project's C#/ASP.NET Core layered enterprise architecture. Each project takes a different approach to the same class of networking/API problems, by design, not by accident.
- **Security and trust.** The deliberately temporary no-auth design is a concrete setup for the core's security/auth content — this work suits the Cybersecurity track.

*Beyond ECE 241, which courses touch the project, and at what depth, will be filled in as the course sequence is finalized.*

## Tech stack

| Component | Technology |
|---|---|
| Sensor firmware (Pi) | C or Rust — deliberately varied across deployments |
| Data consolidation/ingestion pipeline | Go |
| API access layer | Python (FastAPI) |
| Hosting | To be decided |
| License | To be decided |

## Status

Early development, led by Ruth. One capability (`GET room temperature`) is requested; none is yet marked `confirmed`.

## Open items

- Hosting and license are still undecided.
- Selection and scheduling of the deferred capabilities (additional sensors, auth, historical data, streaming, eventual computer vision) and which course/sequence point each would pair with.
- The specific ECE 241 assignment design (what students build, how it's assessed) isn't drafted yet.
- Ownership/governance of pipeline and API code once higher-level courses start extending it — how contributions from a rotating set of student cohorts get reviewed and maintained long-term.
