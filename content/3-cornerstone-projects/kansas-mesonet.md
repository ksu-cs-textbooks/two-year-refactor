+++
title = "Kansas Mesonet"
weight = 30
ordinal = "3.3"
+++

> **Living document.** This page will change as development continues. *Last updated: September 28, 2026.*

## What it is

The [Kansas Mesonet](https://mesonet.k-state.edu) is a statewide network of automated weather and soil-monitoring stations, operated by K-State's Weather Data Library, reporting precipitation, air and soil temperature, humidity, wind, solar radiation, and soil moisture in near-real time.

## Why we're using it

Unlike Konza Code, the Kansas Historical Data project, and the classroom plant-sensor network, this isn't something the department is building — it's established, live, external infrastructure with its own operational priorities, independent of this program's schedule. K-State is pursuing a collaboration with the Mesonet team to expand its API for classroom use, rather than building a new system from scratch.

## Who uses it, and for what

Mesonet's actual user base is agricultural producers, K-State Research and Extension agents, and emergency management personnel across Kansas, alongside K-State's own agronomy and agricultural-research programs. In practice, its data drives decisions like when to irrigate (using evapotranspiration data to schedule watering efficiently), when a frost or freeze warning changes a planting or harvest decision, and how drought conditions are tracked across the state. It is also a public-facing resource — Kansans and media outlets check it directly for local conditions.

## Role in the undergraduate curriculum

This is a **cornerstone project** in the redesigned B.S. in Computer Science, but unlike this chapter's built systems, students integrate with Mesonet rather than developing or operating it themselves.

It offers direct experience with:

- **A genuine external stakeholder with real constraints.** Mesonet's usage policy explicitly prohibits automated data-ingestion without written consent — precisely the situation a full class of students making repeated automated calls creates. Working within that constraint, rather than around it, is a real instance of what this program's [Boundary Crossing](../1-approach/theoretical-grounding/boundary-crossing) page describes: a real limit imposed by a practice outside the classroom, not a contrived one.
- **A land-grant mission connection.** K-State's land-grant mission — serving Kansas through education, research, and outreach — is structural to this asset choice, not incidental. Mesonet is Kansas agricultural and emergency-management infrastructure; using it connects student work to a real public service rather than an arbitrary dataset.
- **A deliberate data-format contrast.** Mesonet's public API returns CSV, not JSON — unlike the classroom plant-sensor network and the "Where Did They Go?" visualization tool, both JSON-based. That's a genuine, unforced opportunity to teach that "the network boundary" doesn't imply one data format, rather than smoothing every asset into the same shape before students see it.

*No course is confirmed to use Mesonet yet — see open items below.*

## Interface

| Capability | Status | Notes |
|---|---|---|
| Station list (name, county, lat/lon) | confirmed (public documentation) | `http://mesonet.k-state.edu/rest/stationnames/` |
| Station data by date range/variables | confirmed (public documentation); **classroom use pending authorization** | Returns CSV, not JSON — up to 3,000 records per request |
| JSON response option | requested | No committed course/sequence point yet |

## Status

Established, live, external platform — not owned or built by this department. 

## Open items

- **No course is confirmed to use Mesonet yet.** Given its statewide-data and applied-statistics character, CIS 141 (AI/Data Science) and STAT 410 (Statistics for Computing) are plausible hosts, but that's an inference, not a decision — `course-designer`'s call.
- **Anticipated tech stack for consuming the API — not yet defined, flagging rather than guessing.** No course/assignment design exists yet that specifies what students would use to call Mesonet's API (language, HTTP client, CSV-parsing approach). An earlier draft of this page speculated well beyond what was actually real or requested here (see `resources/design-log.md`'s note on the retired "Rhizome" framing) and was rewritten specifically to stop doing that — so this page doesn't guess at one now.
- **Classroom-use written authorization from the Mesonet director** — pending, expected favorable given an existing working relationship, but anything scheduled to actually reach students needs this double-checked close to delivery.
