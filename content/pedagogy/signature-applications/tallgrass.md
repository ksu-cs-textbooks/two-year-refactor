+++
title = "Tallgrass"
weight = 50
ordinal = "3.5"
+++

> *Working draft for faculty review. Tallgrass is one of three signature applications — large production codebases students study, contribute to, and extend across the two-year spiral. See [Signature Applications](./signature-applications) for the pedagogical framing.*

## What it is

**Tallgrass** is a Kansas historical visualization and archival data system. It has two tightly coupled sub-systems:

### Sub-system 1 — Visualization frontend

A primarily static web application that renders interactive visualizations of Kansas changing over time: population by county, highway networks, lakes and waterways, railroads, schools, hospitals, and other civic infrastructure. The application consumes pre-built static JSON and GeoJSON files and requires no server-side rendering at runtime.

**Technology:** Web components (or Vue.js) for the UI component layer; D3.js for data-driven geographic and temporal visualization; GeoJSON for geographic geometry; standard static hosting.

> *Design decision open: web components vs. Vue. Web components align with CS-111's curriculum content (component architecture, shadow DOM, custom elements) and have no framework dependency. Vue provides a more ergonomic developer experience. Either choice should be made before the application enters development, as it affects what students read in B1 and build in B4.*

### Sub-system 2 — Archival data pipeline

A TypeScript application that serves as both a historical data archive and a crowdsourcing platform. Local historians, county historical societies, schools, and community members can submit archival data, documents, photographs, and media; submissions are reviewed, geolinked to counties and communities, and verified before entering the archive. The pipeline then produces the static JSON and GeoJSON files consumed by the frontend, and may additionally serve those files directly.

**Technology:** TypeScript (Node.js); PostgreSQL for relational archival data (records, submissions, provenance metadata, media references); Neo4j for the graph of relationships between communities, historical events, people, and institutions; a static file generation pipeline; a submission/review API for crowdsourced contributions.

## Why Kansas, why this data

Kansas has a rich and underdigitized local history. County historical societies hold records that are not accessible online. Schools in rural communities have documents, photographs, and institutional memories that are at risk of loss. The Tallgrass application creates infrastructure for that material to be collected, verified, and made visible in geographic and temporal context.

For students, this means:
- The data they query in B5 is real historical data about real places, some of which they may have personal connections to.
- The bugs they diagnose in B2 affect real information that real communities care about.
- The features they design in B7 could genuinely serve local historians who are future users of the system.

The application embodies K-State's land grant outreach mission: CS serves Kansas not just by training engineers but by building infrastructure that benefits communities the university was created to serve.

## Curriculum mapping — block by block

### B1 — Read (encounter)

**What students do:** Read the Tallgrass frontend codebase. Trace the data flow from a GeoJSON file through the D3.js data-join to the rendered SVG map. Identify the component structure. Read `git log` to understand how the application developed.

**Why this block:** B1's cognitive frame is "READ computation." A static web application with declarative HTML/CSS structure and a clear data-to-rendering pipeline is an ideal first large-codebase encounter. Students see immediately that production code has structure they can reason about before writing a line.

**Threads engaged:** Code Comprehension (pass 1 — make sense of unfamiliar code), Data Structures & Representation (GeoJSON as a tree of geographic features), Professional Practices — version control (reading git history as documentation).

---

### B2 — Modify (diagnose and repair)

**What students do:** Code Archaeology assessment rooted in Tallgrass. Students are given a real or realistic bug in the data transformation pipeline — e.g., a county record that fails to geocode, a CSV parser that silently drops malformed rows, a GeoJSON polygon with a coordinate winding-order error. They trace the bug through the pipeline, diagnose the root cause, write a regression test, and fix it.

**Why this block:** The pipeline's transformation structure (CSV/archival data → normalized records → GeoJSON) is a natural host for the "Modify data & state" cognitive frame. Data transformation bugs are concrete, diagnosable, and consequential.

**Threads engaged:** Code Comprehension (pass 2 — Code Archaeology assessment), Correctness & Verification (regression test before fix), Professional Practices — version control (commit/revert as safety net).

---

### B3 — Model (abstract)

**What students do:** Model the core Tallgrass domain entities as Abstract Data Types: a `HistoricalRecord` ADT (submitted datum with provenance metadata, verification status, and geographic binding), a `CountyGraph` ADT (a graph of county-to-county relationships over time). OOP: build a `SubmissionValidator` class that checks incoming crowdsourced submissions against a set of rules, using inheritance for different submission types (text, image, dataset).

**Why this block:** B3's cognitive frame is "Model & abstract." The Tallgrass domain is rich with entities that have clear contracts (a submission must have a source, a geographic reference, and a date range) and clear hierarchies (different submission types).

**Threads engaged:** Data Structures & Representation (ADTs for geographic and archival entities), Boundaries & Contracts (validation as a contract about what a submission must contain), APIs & Networked Systems (the submission API as a Boundary).

---

### B4 — Structure (build a component)

**What students do:** Add a new web component to the Tallgrass visualization frontend. Example: a `<timeline-scrubber>` component that lets users drag through years to animate how a county statistic changes over time. Students implement the component using the web components standard (custom element, shadow DOM, slots interface), wire it to D3's data-join, and write a specification for its public API.

Also: analyze the complexity (CS-112) of the GeoJSON spatial query algorithm — for example, a county-containment check for a clicked map coordinate.

**Why this block:** B4's cognitive frame is "Structure." CS-111 (Systems & APIs) introduces web components as the "structure" applied to user interfaces — the Tallgrass extension is the direct application of that lesson to a real codebase students already know. MATH-104 (Discrete Math: Graphs, Trees, and Networks), now in B4, pairs with the county graph structure in Neo4j.

**Threads engaged:** Data Structures & Representation (GeoJSON tree/graph structure), APIs & Networked Systems (web component as a structured, bounded interface), Human-Centered Computing (data visualization throughline — the scrubber is a visualization control), Boundaries & Contracts (component public API as a contract).

---

### B5 — Store (query and design)

**What students do:** Write SQL queries against the Tallgrass PostgreSQL archive. Example tasks: find all hospitals documented in a specific county between 1880 and 1920; compute which decade saw the largest population growth in a selected county; identify submissions that lack geographic binding. Schema extension: design a new table for a new data category not currently in the archive (e.g., one-room schoolhouses, grain elevators, county fairs).

**Data Investigation signature assessment:** Tallgrass is a primary substrate for the Data Investigation assessment. Students formulate a question about Kansas history, write SQL (and optionally Cypher for Neo4j) to answer it, and present the results with appropriate visualization.

**Why this block:** The archive database is a real relational schema with real normalization decisions. Students encounter the gap between "data as submitted" and "data as stored" — the schema design choices that make queries possible or impossible.

**Threads engaged:** Data Structures & Representation (relational data as a formal queryable model), Boundaries & Contracts (schema as a contract about data shape), Trustworthy Computing (data provenance and verification as a form of trust), Human-Centered Computing (visualize query results for the Data Investigation assessment).

---

### B6 — Build responsibly (test, secure, collaborate)

**What students do:** As a team (Team Software Project), select a Tallgrass feature to implement — e.g., a new data category, an improved crowdsourcing submission form, or a new pipeline output format. The team writes automated tests for the feature (unit + integration), secures the submission endpoint against common injection and forgery attacks, and delivers the feature via the full PR/code-review workflow.

**Why this block:** B6's cognitive frame is "Build responsibly." The crowdsourcing submission endpoint is a real security surface — it accepts user-supplied text, URLs, and file references from the public internet. Testing and securing it is not a toy exercise.

**Threads engaged:** Correctness & Verification (automated tests for the new feature), Trustworthy Computing (submission endpoint security — input validation, authentication, data minimization), Sociotechnical Structure (Conway's Law enacted — team structure affects which parts of Tallgrass each subteam owns), Professional Practices — version control (PR + code review workflow).

---

### B7 — Judge (integrate and defend)

**What students do:** Work with the Neo4j graph of community and county relationships. Use graph algorithms (graph search, shortest path, minimum spanning tree via CS-206) to answer questions such as: which communities share the most documented historical events, which county is most central in the railroad network at a given decade, which path through county adjacency has the highest concentration of documented schoolhouses.

Design Review: Design and defend a new data integration for Tallgrass — e.g., linking to a specific external data source (U.S. Census Bureau historical records, Kansas State Historical Society digital collections). Defend the schema design, the API contract, the de-duplication strategy, and the tradeoffs (completeness vs. accuracy, coverage vs. effort).

**Why this block:** B7's cognitive frame is "Integration and judgment." The Neo4j graph makes Tallgrass's relationships explicit and queryable. The Design Review forces students to own a design decision and defend it.

**Threads engaged:** Data Structures & Representation (graphs as the most general representation — terminal pass), Algorithmic Thinking & Complexity (graph algorithms as optimization under a metric), Boundaries & Contracts (defending the integration's API contract), Human-Centered Computing (who uses this data, and how does the design serve them).

---

### B8 — Operate (deploy and monitor)

**What students do:** Deploy the Tallgrass pipeline to a production-like environment. Set up monitoring for the crowdsourcing submission API (error rates, submission volume, response times). Profile the GeoJSON generation step for large datasets (many counties, many years) and optimize the bottleneck. Consider fault handling: what happens if the pipeline fails mid-run?

**Why this block:** B8's cognitive frame is "Operate." The Tallgrass pipeline is batch-processing infrastructure — it runs on a schedule, can fail silently, and produces outputs that downstream systems (the frontend) depend on. Monitoring and fault-handling are not optional.

**Threads engaged:** APIs & Networked Systems (the pipeline as a production system under real load), Correctness & Verification (production failure modes vs. test failure modes), Professional Practices (documentation: a runbook for the pipeline operator).

## Open questions

1. **Web components vs. Vue.** Resolve before development begins. Web components are the pedagogically motivated choice (direct curriculum alignment with CS-111); Vue reduces frontend development cost but adds a framework abstraction between students and the underlying platform.
2. **Neo4j scope.** The graph database serves the community/county relationship model well, but is it justified by the complexity students need for B7 assignments? Confirm the graph queries required at B7 genuinely need a graph database vs. a recursive SQL CTE.
3. **Crowdsourcing pipeline and review workflow.** Who reviews crowdsourced submissions before they enter the archive? Faculty? Graduate students? Community partners? The review workflow must exist before the application is live, and its operational cost is not zero.
4. **GeoJSON sources.** What are the authoritative sources for Kansas county boundaries, highway routes, lake/watershed geometry, and railroad routes across different historical periods? Boundary changes over time make this non-trivial. The Geography department is the natural partner for this.
5. **External course connections.** MATH-104 (Discrete Math: Graphs, Trees, and Networks, B4) maps directly onto the Neo4j graph structure. STAT-101 (Descriptive Statistics, B5) maps onto aggregate queries of archive data. Confirm with external course co-designers that they are aware of and can reference Tallgrass data.
