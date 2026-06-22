+++
title = "Rhizome"
weight = 60
ordinal = "3.6"
+++

> *Working draft for faculty review. Rhizome is one of three signature applications — large production codebases students study, contribute to, and extend across the two-year spiral. See [Signature Applications](./signature-applications) for the pedagogical framing.*

## What it is

**Rhizome** is an environmental sensing and data science platform with three coupled sub-systems operating at different scales — from the classroom to the state.

### Sub-system 1 — Classroom sensor network

A real-time sensor network monitoring the environmental conditions of plants growing in the classrooms where the program is taught. Sensors measure air temperature, relative humidity, soil moisture, light intensity, CO₂ concentration, and growth metrics relevant to plant health, including Normalized Difference Vegetation Index (NDVI) as a proxy for photosynthetic activity.

The sensors feed a data collection service that stores readings in a PostgreSQL time-series database (likely using TimescaleDB or equivalent time-series tooling). The service exposes a REST API that students use as a live data source throughout the curriculum — the data being generated while they learn.

**Technology:** IoT sensor hardware (specific platform TBD); Python or TypeScript data collection service; PostgreSQL with time-series extension; REST API for student consumption.

### Sub-system 2 — Kansas Mesonet integration

The [Kansas Mesonet](https://mesonet.k-state.edu) is a statewide network of weather observation platforms operated by K-State that collects and provides environmental data across Kansas — precipitation, temperature, humidity, wind, solar radiation, soil conditions, and more. The Mesonet is a production system with a public data API.

Rhizome integrates Kansas Mesonet data as the statewide-scale counterpart to the classroom sensor network. Where the classroom sensors provide dense, fine-grained, immediately visible data, the Mesonet provides sparse, authoritative, statewide coverage. Together they give students two scales of the same environmental questions.

**Technology:** Kansas Mesonet public API (existing external system); a Rhizome-controlled API layer or mirror for pedagogical stability (course-controlled access point that insulates assignments from upstream format changes — see open questions).

### Sub-system 3 — High-performance computing via Beocat

[Beocat](https://beocat.ksu.edu) is K-State's Beowulf-class high-performance computing cluster, available for research and instruction. Rhizome's data — particularly the multi-year Mesonet archive and aggregated classroom sensor history — provides the dataset for HPC-scale computation in Block 8.

Students who have spent two years working with sensor data at REST-API scale encounter, in their final block, computation at a scale where single-machine Python is inadequate and parallel computing is necessary.

**Technology:** Beocat access via SLURM job scheduler; Python (NumPy, Pandas, Dask, or equivalent); parallel data processing across Mesonet historical archive.

## Why plants in the classroom, and why Mesonet

The classroom plants make the sensor network immediate. Students can walk to the sensor, observe the plant it is monitoring, and see their own readings in the API response within seconds. Abstract data structures assignments suddenly have a physical referent. When a student writes a query to find the hour of maximum soil moisture, the answer corresponds to a specific watering event in a classroom they physically occupy.

The Kansas Mesonet scales that immediacy to the state. Kansas agriculture, which underpins the K-State land grant mission, depends on exactly the kind of environmental monitoring the Mesonet performs. A student who learns data structures using classroom soil sensors and then analyzes statewide drought indices using the Mesonet has moved from the observable to the consequential.

The NDVI measurement bridges both scales — NDVI is the standard satellite-derived index for monitoring crop health across Kansas; by measuring it directly on classroom plants, students understand the quantity before they encounter it in Mesonet and agricultural datasets.

## Curriculum mapping — block by block

### B1 — Read (encounter)

**What students do:** Their classroom has live sensors. From day one, the Rhizome API is available and returning data. Students read an API response — the raw JSON of a sensor reading — and trace how a physical measurement (voltage from a soil probe) becomes a structured JSON record. They read the data collection service's main loop without yet understanding all of it.

**Why this block:** The Rhizome data is always present — it is being generated while students are in the room. B1's "Read" encounter is not just reading code but reading a live system that is running in their physical environment.

**Threads engaged:** Data Structures & Representation (JSON as a structured representation of a physical measurement), Computational Models (a running process generating data continuously — the first encounter with an event-driven producer), APIs & Networked Systems (consume a basic read-only API — pass 1).

---

### B2 — Modify (diagnose and repair)

**What students do:** Data Transformation & Manipulation (CS-104) assignment using Rhizome data. Students receive a script that processes sensor readings — filtering out anomalous values, resampling from minute-level to hourly averages, and appending a computed field (e.g., heat index from temperature and humidity). The script has a bug: it drops readings at midnight due to an off-by-one in the timestamp window. Students diagnose, fix, and write a regression test.

Code Archaeology variant: trace through the data collection service to understand how a sensor reading moves from hardware interrupt to database row.

**Why this block:** Sensor data transformation — filtering, resampling, computing derived quantities — is a natural "Modify data & state" domain. The off-by-one bug in a time-series window is a canonical, consequential data bug.

**Threads engaged:** Code Comprehension (trace the data collection pipeline), Data Structures & Representation (time-series as a sequence with a time dimension), Correctness & Verification (regression test before fix), Computational Models (the event loop receiving sensor events).

---

### B3 — Model (abstract)

**What students do:** Model the Rhizome sensor hierarchy as ADTs and OOP. A `SensorReading` ADT with a contract (value, unit, timestamp, sensor ID, quality flag). A `Sensor` class hierarchy: `EnvironmentalSensor` as the abstract base; `TemperatureSensor`, `HumiditySensor`, `SoilMoistureSensor`, `NDVISensor` as concrete subclasses, each with their own unit and valid-range contract. A `SensorNetwork` class that owns a collection of sensors and can answer aggregate queries (which sensors are currently reporting anomalous values?).

**Why this block:** The sensor hierarchy is a clean OOP case study — different sensor types share a common interface (a reading has a value and a timestamp) but differ in valid range, unit, and calibration behavior. The ADT contract (a reading must have a quality flag) makes the Correctness & Verification thread visible at the design level.

**Threads engaged:** Data Structures & Representation (ADTs for physical measurements), Boundaries & Contracts (the Sensor ADT contract — what every reading must satisfy), Correctness & Verification (quality flags as built-in assertion).

---

### B4 — Structure (consume the API, examine the architecture)

**What students do:** CS-111 (Systems & APIs) assignment: consume the Rhizome REST API from a client application. Build a simple data dashboard that fetches sensor readings on a schedule and renders current conditions for the classroom plants. The sensor tree (campus → building → room → plant → sensor) maps onto the tree data structures of CS-110: implement a `SensorTree` with hierarchical queries (find all sensors under a given room, find the path from a sensor to the campus root).

Also: examine the Rhizome data collection service architecture — how does the service handle a sensor that stops reporting? What happens to database writes during a network partition? This is an early encounter with fault-tolerance questions without yet having the vocabulary to fully answer them.

**Why this block:** CS-111's web component and event-driven programming content applies directly: the student dashboard is a web component (using the pattern introduced in CS-111) that responds to timer events and API responses. The sensor tree maps onto CS-110's tree structures with spatial indexing by physical location.

**Threads engaged:** Data Structures & Representation (sensor tree structure, spatial hierarchy), APIs & Networked Systems (consume a REST API with a real data source), Human-Centered Computing (the dashboard as a data visualization — the data-viz throughline), Computational Models (the event loop in the data collection service named but not yet analyzed).

---

### B5 — Store (query time-series data)

**What students do:** CS-201/202 SQL assignments using the Rhizome PostgreSQL database. Query tasks: find the highest soil moisture reading for a specific plant in the last 30 days; compute the daily average NDVI over a growing season; find the hour of the day with the highest variance in air temperature (across all classrooms). Schema extension: design a table for a new sensor type (e.g., a CO₂ sensor that wasn't in the original schema), including the unit, valid range, calibration parameters, and the foreign key relationship to the sensor hierarchy.

**Mesonet connection:** Query Mesonet data (via the Rhizome API layer) to answer a statewide question, and compare it to classroom sensor data — e.g., compare Manhattan, KS classroom temperature anomalies to the nearest Mesonet station's readings on the same days.

**Threads engaged:** Data Structures & Representation (relational time-series data as a queryable model), Boundaries & Contracts (schema as a contract about what a reading must contain), Optimization (query plans and indexes for time-range queries), Human-Centered Computing (visualize query results for the Data Investigation assessment).

---

### B6 — Build responsibly (test, secure, collaborate)

**What students do:** Team Software Project: implement a new feature for the Rhizome data collection service or API. Example: add support for a new sensor type (the CO₂ sensor designed in B5). The team must write automated tests that simulate sensor failure, network interruption, and malformed input; secure the API endpoint that receives sensor data (rate limiting, authentication for trusted sensor hardware); and deliver via PR with code review.

**Why this block:** The sensor ingestion endpoint accepts data from hardware devices — it is a constrained, security-relevant surface. Devices can malfunction, produce out-of-range values, or be spoofed. Testing for failure modes and securing the endpoint is motivated by real operational concern, not a constructed scenario.

**Threads engaged:** Correctness & Verification (tests for sensor failure, malformed data), Trustworthy Computing (endpoint security for sensor data ingestion), Sociotechnical Structure (team structure maps onto sensor subsystem ownership), Professional Practices — version control (PR + code review as the contribution model).

---

### B7 — Judge (integrate and defend)

**What students do:** Graph algorithms (CS-206) applied to the Rhizome sensor network topology. Model the sensor network as a weighted graph where edges are communication paths between sensor nodes; apply shortest-path algorithms to determine optimal data routing when a node fails. Multi-objective tradeoff reasoning (CS-207): defend a sensor sampling strategy that balances data resolution (sample every second) against bandwidth cost, battery life, and storage volume — the first block where there is no single right answer.

**Design Review:** Design and defend a new Rhizome data integration — e.g., incorporating publicly available satellite NDVI imagery from USGS or NASA to compare with classroom NDVI sensor readings. Defend the data provenance, the schema design, the update cadence, and the tradeoffs in coverage vs. resolution.

**Threads engaged:** Data Structures & Representation (graphs as sensor network topology), Algorithmic Thinking & Complexity (shortest path as optimization under failure constraint), Trustworthy Computing (data provenance — where does this satellite data come from, and how reliable is it), Boundaries & Contracts (the integration API as a contract about data freshness and format).

---

### B8 — Operate (deploy, monitor, HPC)

**What students do:** Deploy the Rhizome data collection service and monitor it in production. Set up alerting for sensor gaps (a sensor that stops reporting) and data quality anomalies (NDVI readings outside physiologically plausible range). 

**Beocat HPC assignment (CS-210 / Data Analysis & Responsible AI context):** Download several years of Kansas Mesonet data and run a large-scale statistical analysis that cannot complete in reasonable time on a single machine — e.g., correlating multi-year soil moisture trends across all Mesonet stations with crop yield data from USDA. Submit a SLURM job, monitor its queue position, interpret the output, and compare the result to the classroom sensor data. This is the program's primary encounter with high-performance computing — students who have spent two years with sensor APIs and SQL now encounter data at a scale where different tools are required.

**Why this block:** B8's cognitive frame is "Operate." Rhizome is always-on infrastructure — sensors do not stop generating data during finals week. Monitoring, fault tolerance, and recovery are not theoretical.

**Threads engaged:** APIs & Networked Systems (the data collection service as production infrastructure), Computational Models (concurrent sensor ingestion, SLURM job scheduling as an OS-level scheduler analog), Optimization (HPC as the performance thread's terminal pass), Data Structures & Representation (large-scale Mesonet data — the terminal data analysis pass).

## Open questions

1. **Sensor hardware platform.** The specific sensor hardware has not been selected. Candidates range from low-cost hobbyist platforms (Raspberry Pi + sensor breakouts) to research-grade IoT platforms. The choice affects data quality, calibration overhead, and the software interface students read in B1.
2. **Mesonet API stability.** The Kansas Mesonet API is an external system. A Rhizome-controlled mirror or wrapper is recommended to protect assignment fidelity from upstream API changes. Confirm whether this wrapper is in scope for Rhizome's initial development.
3. **Beocat undergraduate access.** Confirm that Beocat is accessible to undergraduates enrolled in this program and that an instructor-managed allocation is available for B8 HPC assignments.
4. **NDVI measurement method.** Classroom NDVI can be measured with a near-infrared sensor (e.g., AS7265x spectral sensor) but calibration is non-trivial. Confirm the measurement method and acceptable accuracy range for educational use before specifying sensor hardware.
5. **Plant species and care.** The classroom plants must survive across a two-year cohort and multiple cohorts. Identify plant species, care responsibilities (watering schedule, lighting), and who is responsible for maintaining them outside of class hours.
6. **External course connections.** STAT-101–104 (descriptive statistics through regression) map directly onto Rhizome's time-series data at B5–B8. MATH-104 (Discrete Math: Graphs, Trees, and Networks) maps onto the sensor network graph at B7. Confirm with external course co-designers that Rhizome data is available and documented for their use.
