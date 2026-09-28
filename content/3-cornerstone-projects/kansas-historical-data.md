+++
title = "Kansas Historical Data"
weight = 10
ordinal = "1.0"
+++

> **Living document.** This page will change as development continues. *Last updated: September 27, 2026.*
>
> *Working title. The codebase and the hosted platform may end up with different names.*

## What it is

The Kansas Historical Data Project has three parts:

1. **An open-source platform** for collecting, curating, and publishing crowdsourced historical data.
2. **A digital archive** of oral histories, scanned documents, and photographs. Contributors can upload these materials, and anyone can search and retrieve them.
3. **An interactive data visualization tool** for exploring the data through maps, timelines, and charts.

Everything on the platform, including data and archive items, can be searched and organized by **place** and **time**.

The software is open source and designed to be hosted by anyone, including other states. The department's hosted instance covers **Kansas only**.

## Why we're building it

Kansas history is scattered across many places: county museums, local historical societies, archives, government records, and community memory. That makes it hard to find, compare, or visualize. This project gives these contributors a shared place to submit historical data. The data is then validated and curated, and anyone can explore the results.

A central story the data can tell is **rural change**. One explanation for rural outmigration is that advances in agricultural technology reduced the need for farm labor. Transportation and institutions also shaped which towns grew and which declined. These include where the railroads ran, where the interstates went, and which schools consolidated. The project brings these data sources together so users can explore how these forces relate over time and across places.

## Core data sources

| Source | What it adds |
|---|---|
| USDA Census of Agriculture | Farm numbers, farm size, and agricultural production over time |
| U.S. Census | Population change at the county and town level |
| Railroads | Rail lines and their construction and abandonment over time |
| Interstate highways | Highway routes and when they opened |
| School consolidations | Closures and mergers of school districts over time |

Crowdsourced contributions add local detail on top of these core sources.

## The archive

The archive preserves the human side of this history alongside the data:

- **Oral histories**, recorded as audio, video, or both
- **Scanned documents**, such as records, letters, newspapers, and maps
- **Photographs**

Each item is tied to places and dates. That lets people browse it on a map or a timeline and find it alongside the data. For example, a user could see an oral history about a school closing next to the consolidation record and the population trend for the same town.

The project also supplies data to other department efforts. For example, it feeds the curated data APIs in [Konza Code](./konza-code), which let K-12 students program with real Kansas history.

## Contributors and audience

The project is built for people who both **produce** and **consume** history:

- **Professional historians**
- **Amateur and hobby historians**
- **County and town history museums, historical societies, and archives**
- **County and city officials**
- **K-12 teachers and students**, who both use and contribute data and archive materials
- **K-State students.** K-State already engages undergraduates in this kind of work through history courses and the Chapman Center for Rural Studies.
- **Researchers and the public**

## Partners

- Chapman Center for Rural Studies, K-State
- Rural Education Center, K-State

## Role in the undergraduate curriculum

This is a **cornerstone project** in the redesigned B.S. in Computer Science. Undergraduates build, extend, maintain, and operate it. They work on a long-lived codebase with real users instead of disposable course projects. Its curated datasets can also serve as **real-world data sources** for coursework.

It offers direct experience with:

- **Enterprise application development.** The back end uses ASP.NET Core, Entity Framework Core, and PostgreSQL. Many of our graduates' employers use this stack.
- **Contrast with Konza Code.** The Konza Code site uses Elixir/Phoenix, where state and failure are handled by actors and supervision. This project uses conventional object-oriented, layered enterprise architecture. Students see two different answers to the same kinds of problems.
- **Polyglot systems.** The project combines C#, Python, SQL, and JavaScript/Vue. Each language is used where it fits, and the parts are joined by clear data contracts.
- **Data engineering.** Students build ingestion, validation, and a Python transformation pipeline that turns raw submissions into published datasets.
- **Data quality and provenance.** Crowdsourced data from contributors with very different levels of expertise needs sourcing, review, and ways to resolve conflicting records. This is core material for the Data Science track.
- **Geospatial and temporal data.** Students work with spatial databases, GeoJSON, historical boundaries that shift over time, and uncertain or approximate dates.
- **Media and digital archives.** Students handle large uploads, storage of audio, video, and images, streaming and retrieval, metadata, and long-term preservation.
- **Search.** Students build search that combines text, place, and time.
- **Visualization.** Students design clear, honest interactive visuals with D3.js.
- **Web architecture tradeoffs.** A static-file front end sits beside a dynamic curation back end. Students study when static publishing is the better design.
- **Security and trust.** Open contributions require roles and permissions, moderation, and protection against vandalism and data poisoning. The archive adds concerns about uploaded files and personal content in oral histories. The project also involves K-12 contributors. This work suits the Cybersecurity track.
- **Interdisciplinary work.** Students work with historians, the Chapman Center, K-12 educators, and Statistics.
- **Open source.** Students maintain a public codebase meant for other states to adopt.

*Which courses touch the project, and at what depth, will be filled in as the course sequence is finalized.*

## Architecture

The system has three stages:

1. **Raw data repository.** Stores original submissions, source material, and archive media unchanged.
2. **Curation and validation workflow.** Contributors and reviewers check, correct, describe, and approve data and archive items.
3. **Transformation pipeline.** Regenerates the static JSON/GeoJSON files that the visualization tool reads.

The visualization tool runs entirely in the browser and reads only static files. This keeps it fast and cheap to host, and it is decoupled from the back end. The archive's upload, search, and retrieval features are served by the ASP.NET Core application.

## Tech stack

| Component | Technology |
|---|---|
| Visualization tool (client) | Vue + D3.js, reading static JSON/GeoJSON (already built) |
| Web app, curation, and archive back end | C# / ASP.NET Core |
| Data access | Entity Framework Core |
| Database | PostgreSQL with PostGIS |
| Media storage | To be decided |
| Transformation pipeline | Python and its geospatial libraries |
| Hosting | To be decided |
| License | Permissive, either Apache 2.0 or MIT, so other states have wide latitude in how they host and adapt it |

## Status

The client-side visualization tool exists. The repository, curation workflow, archive, and pipeline are actively being built.

## Open items

- Names for the codebase and the hosted platform
- Final license choice between Apache 2.0 and MIT
- Hosting and media storage
- Contribution and review model, including roles for each contributor group and safeguards for K-12 participants
- Oral history consent, release forms, and rights for uploaded materials
- Accessibility of archive media, such as transcripts and captions
- Metadata standards for archive items
- Specific datasets and archival sources for each core data source
- Course mapping: which courses, which competencies, and at what depth