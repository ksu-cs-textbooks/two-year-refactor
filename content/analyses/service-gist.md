+++
title = "Service: Geographic Information Systems & Technology"
weight = 40
ordinal = "6.4"
+++

> *Working draft for faculty review. Maps the B.S. in Geographic Information Systems & Technology Computational Core requirement onto the redesigned modular curriculum. Based on syllabi for CC 110, 210, 310, 315, 410, and 520 on file in `resources/syllabai/`. Course codes for the new core are placeholders.*

## Context

The B.S. in Geographic Information Systems & Technology (GIST) requires a **Computational Core (CC)** as its computing foundation — seven courses from K-State's Computational Core sequence, plus a web fundamentals course:

| CC course | Title | Credits |
|---|---|---|
| CC 110 | Introduction to Computing | not stated in syllabus |
| CC 210 | Fundamental Computer Programming Concepts | 4 |
| CC 310 | Data Structures & Algorithms I | 3 |
| CC 315 | Data Structures & Algorithms II | 3 |
| CC 410 | Advanced Programming | 3 |
| CC 520 | Database Essentials | 3 |
| (web fundamentals course) | course not specified | unknown |

**Estimated total:** approximately 17–20 credits, depending on CC 110's credit count and the web course. The exact credit count for CC 110 is not stated in its syllabus and should be confirmed with the Geography department.

The CC sequence is Python-based, online, and modular. It runs from a broad computing survey (CC 110) through object-oriented software development (CC 410), with a parallel database track (CC 520). GIS-specific domain courses — spatial analysis, remote sensing, cartography, ArcGIS/QGIS workflows — layer on top of this foundation.

## The CC sequence, summarized

| Course | Core content |
|---|---|
| **CC 110** | History of computing; binary, Boolean logic, data encoding; computational thinking; AI/HCI/cybersecurity breadth survey; brief programming exposure |
| **CC 210** | Variables, types, operators, conditionals, loops, functions, file I/O, collections, programmer-defined objects, MVC pattern; Python 3 |
| **CC 310** | Lists, stacks, queues, trees, graphs (basic); searching, sorting, hashing; recursion; complexity analysis; Python |
| **CC 315** | Advanced trees, graphs (deep), heaps; graph searching, shortest path, MST; requirements analysis; domain application; Python |
| **CC 410** | Software engineering methodologies; design patterns; computer security; advanced OOP; **GUI programming**; **event-driven programming**; professional communication and collaboration; iterative milestone project |
| **CC 520** | SQL; NoSQL and its relation to SQL; DBMS design; programming with databases; database system architecture; database efficiency; practical applications |
| **web fund.** | Not specified — likely web technologies, HTML/CSS/JavaScript, or web-mapping frameworks |

## Course-by-course mapping

### CC 110 — Introduction to Computing

**Content:** History of computing, binary representation, Boolean logic, data encoding and encryption, computational thinking, internet technology, AI/HCI/cybersecurity/data science breadth survey, basic programming exposure. No prerequisites; online self-paced.

**Maps to:** B1 — CS-101 Imperative Programming (first programming contact) + CS-103 Computational Representation (binary, Boolean logic, data encoding, encryption). The broad "CS fields" framing of the course aligns with the reading-first orientation of Block 1.

**Fit:** Good for representation content (CS-103 is a dedicated, deeper pass through bits, Boolean algebra, and data encoding). The breadth survey of CS fields (AI, robotics, HCI) has no single equivalent in the new core — these are distributed across threads (Trustworthy Computing, Human-Centered Computing, Computational Models). The historical/contextual survey content is genuinely absent as a standalone topic, which is not a programming competency gap; it could be addressed by the GIS program's own orientation materials.

---

### CC 210 — Fundamental Computer Programming Concepts

**Content:** Values/types/variables, conditionals/loops, functions, file I/O (stdin/stdout/text files), collections, programmer-defined objects, Model-View-Controller pattern. Python 3, 4-credit course.

**Maps to:** B1 — CS-101 Imperative Programming (variables, control flow, functions), CS-102 Functional Programming (a view CC 210 does not take), CS-104 Data Transformation & Manipulation (collections, file I/O, data pipelines). B3 — CS-107 Software Modeling and Design + CS-108 Computational Abstractions (programmer-defined objects, MVC).

**Fit:** Strong. The new core covers all CC 210 content and adds functional programming (CS-102), which CC 210 omits entirely. MVC appears in CS-107 (Software Modeling and Design) in B3, after two full blocks of programming foundation; CC 210 introduces it within a single four-credit course. This is a sequencing difference, not a content gap — the concept arrives at approximately the same developmental stage.

**Credit note:** CC 210 is 4 credits; the equivalent new-core slice spans CS-101 + CS-102 + CS-104 (B1) + CS-107 + CS-108 (B3) = 5 credits of 1-credit courses. The new core is therefore denser on this material, not thinner.

---

### CC 310 — Data Structures & Algorithms I

**Content:** Lists, stacks, queues, trees, graphs (basic traversal), searching, sorting, hashing, recursion, complexity analysis. Python, 3-credit course. Prerequisites: CC 210, Math 100.

**Maps to:** B3 — CS-109 Abstract Data Types (linear structures as ADTs — lists, stacks, queues — contract-first; graph spiral begins: graphs as a model). B4 — CS-110 Trees, Hashing & Hierarchies (trees, hashing, basic graph representation and traversal), CS-112 Algorithmic Complexity (Big-O, searching/sorting, cost of structural choices).

**Fit:** Excellent. These three new-core courses are essentially a distributed data-structures course. Basic graph content is introduction-only in CC 310, which matches our B3 graph-as-model and B4 basic-traversal passes — no overshoot. **Semester coherence holds:** CS-109, CS-110, and CS-112 all fall in Year 1 Spring (same semester), so the traditional one-semester course shape is reconstructable from timing alone.

---

### CC 315 — Data Structures & Algorithms II

**Content:** Advanced trees, graphs (deep pass), heaps; graph searching, shortest path, Minimal Spanning Tree; requirements analysis; application to domain areas. Python, 3-credit course. Prerequisite: CC 310.

**Maps to:** B4 — CS-110 (advanced tree structures, continued from B3). B7 — CS-207 Graphs & Network Algorithms (Dijkstra, A*, MST — named explicitly as optimization), CS-208 Document Databases & Data Integration (requirements analysis framing, domain application, multi-source integration).

**Fit:** Good for graph algorithms; strong for domain application framing. **One content gap: heaps.** Heaps are named explicitly in CC 315 but have no dedicated home in the new core. They may be appropriately embedded in CS-110 (as a tree variant) or CS-112 (as a data structure with Big-O implications) — but this is not explicit in current course designs and should be confirmed.

**Timing difference:** CC 310 and CC 315 are taken sequentially in consecutive semesters. The new-core equivalent spans B3 (CS-109) through B7 (CS-207/207) — material distributed across both years of the two-year core rather than two back-to-back semesters. This is pedagogically intentional (spiral deepening, with graph content returning at increasing depth), but is a structural change the GIS department needs to understand and accept.

---

### CC 410 — Advanced Programming

**Content:** Software engineering methodologies, design patterns and architectures, computer security, advanced OOP (inheritance, polymorphism), **GUI programming**, **event-driven programming**, professional communication and collaboration, iterative milestone project that serves as a capstone for the CC program. 3-credit course. Prerequisite: CC 315.

**Maps to:** B3 — CS-107 Software Modeling and Design + CS-108 Computational Abstractions (advanced OOP, design patterns, higher-order abstractions). B6 — CS-204 Software Testing & Validation (automated tests, unit and integration testing), CS-205 Security Fundamentals (threat identification, authentication, authorization), CS-206 Collaborative Development (collaborative Git, team project, professional communication). The iterative milestone project maps to the Team Software Project in CS-206.

**Fit:** Strong, including the GUI and event-driven content. What CC 410 calls "GUI programming" and "event-driven programming" is addressed in the new core through a progressive web GUI trajectory rather than a single course:

| Block | Course | Web GUI pass |
|---|---|---|
| B1 | CS-101 | HTML and CSS introduced as the initial reading substrate — trace a web document (DOM tree, browser rendering pipeline) before writing Python or JavaScript |
| B2 | CS-106 | Semantic HTML/CSS deepened; JavaScript + async/event-loop via fetch; the event loop as a QUEUE of callbacks introduced explicitly; the browser framed as a mini-OS scheduling your code |
| B4 | CS-111 | **Component-based GUI architecture (web components):** custom elements, shadow DOM, slots — the B4 "structure" pass applied to user interfaces; event-driven programming formalized as a structural pattern (register → dispatch → handle), not just an async detail |

This is a web-platform GUI model rather than a desktop/toolkit GUI model (e.g. Java Swing, PyQt). GIS students building web-facing tools, interactive maps, or web-based dashboards are well-served. GIS students targeting desktop GIS add-ins (ArcGIS Pro Python toolboxes, QGIS C++ plugins) would still need a platform-specific supplement — see open questions.

The iterative milestone project structure in CC 410 (building a non-trivial software project across the semester in weekly milestones) maps well to our Team Software Project in B6 — same spirit, same purpose.

---

### CC 520 — Database Essentials

**Content:** SQL language, NoSQL and its relation to SQL, DBMS design, programming with databases, database system architecture, database efficiency, practical applications. Uses MS SQL Server. Prerequisites: CC 315, CC 410 (concurrent or prior).

**Maps to:** B5 — CS-201 SQL Fundamentals (SELECT/INSERT/UPDATE/DELETE/JOIN, query optimization seed, declarative model), CS-202 Database Design (schema design, normalization, integrity, security, transactions). B7 — CS-208 Document Databases & Data Integration (NoSQL data models, combining disparate sources).

**Fit:** Strong for SQL and NoSQL. The new core deliberately sequences SQL fundamentals before database design, which matches CC 520's internal progression. **One gap: DBMS internals and system architecture.** CC 520 explicitly covers database system architecture and efficiency; the new core's B5 teaches schema design and query optimization conceptually (index awareness, query plans) but does not reach storage engines, buffer management, or DBMS architecture at the same depth. Given the foundational posture of the new core, this gap is appropriate — a GIS spatial databases elective (PostGIS, spatial SQL) would be the natural next step.

---

### Web fundamentals course

**Content:** Not specified in the GIST program materials provided.

**Maps to:** B2 — CS-106 Web Foundations & Data-Driven Rendering (HTML, CSS, JavaScript, data-driven rendering via D3 data joins, web as a computational platform, the web-server request pipeline).

**Fit:** Direct, assuming the GIS web fundamentals requirement is a general web technologies course. If the requirement is specifically a **web mapping** course (Leaflet, OpenLayers, Mapbox GL) rather than a general web foundations course, that would be a partner-department course beyond the new core — a domain application layer, not a foundational computing layer.

---

## Summary table

| GIS Computational Core requirement | New core equivalent | Fit |
|---|---|---|
| CC 110 Introduction to Computing | CS-101 + CS-103 (B1) | Adequate — breadth survey distributed across threads |
| CC 210 Programming Fundamentals | CS-101 + CS-102 + CS-104 (B1) + CS-107 Software Modeling and Design + CS-108 Computational Abstractions (B3) | Strong — adds functional programming |
| CC 310 Data Structures I | CS-109 (B3) + CS-110 + CS-112 (B4) | Excellent — same semester, Year 1 Spring |
| CC 315 Data Structures II | CS-110 (B4) + CS-207 + CS-208 (B7) | Good — heaps gap; Year 2 timing |
| CC 410 Advanced Programming | CS-107 Software Modeling and Design + CS-108 Computational Abstractions (B3) + CS-204 + CS-205 + CS-206 (B6) + web GUI trajectory B1→B2→B4 | Strong — web platform covers GUI/event-driven; desktop add-in tools may need supplement |
| CC 520 Database Essentials | CS-201 + CS-202 (B5) + CS-208 (B7) | Strong — DBMS internals gap |
| Web fundamentals course | CS-106 (B2) | Direct (if general web; see note above) |

## What the new core adds beyond the CC

Several new-core additions are particularly well-suited to GIS students:

- **Spatial data structures** — CS-110 explicitly names quadtrees, R-trees, and geohashing as applied trees/hashing, directly relevant to spatial indexing. This content is absent from the CC sequence.
- **Geospatial graph algorithms** — CS-207 uses road-network routing (Dijkstra, A\* as geospatially-motivated heuristic search) and spatial joins/nearest-neighbor queries as primary motivators. GIS students will recognize these as core GIS operations.
- **Web GUI trajectory** — HTML+CSS (B1) → event-loop/data-driven rendering (B2/CS-106) → component-based GUI architecture via web components (B4/CS-111) forms a complete GUI and event-driven programming pathway. The CC sequence addresses GUI with a single desktop-model course (CC 410); the new core distributes it across the web platform, which is increasingly where GIS tools live.
- **Data visualization as a throughline** — SVG data visualization is embedded in CS-111 and carried through the Human-Centered Computing thread, directly supporting cartographic and geovisualization work. The CC sequence has no equivalent throughline.
- **Statistics sequence (STAT-101–104)** — The embedded statistics sequence (descriptive statistics, probability, distributions, regression) provides the quantitative foundation GIS students need for spatial statistics; the CC sequence has no math/statistics component.
- **Data analysis** — CS-212 (Data Analysis & Responsible AI) covers notebook-based data analysis and honest visualization, directly serving GIS's quantitative workflows.
- **Security and data ethics** — GIS increasingly handles sensitive location data (tracking, surveillance, sensitive facility locations). CS-205 and the Trustworthy Computing thread address data minimization and privacy in a way the CC sequence does not.
- **Functional programming (CS-102)** — Not in the CC sequence; useful for GIS scripting where data pipelines and transformation chains are common.

## Credit comparison

| | Credits |
|---|---|
| GIS Computational Core (estimated) | ~17–20 |
| New core — full 8-block sequence | 30 (22 CS + 8 external) |

The GIS program would not take all 30 credits. A curated path covering the CC equivalent draws from:

**Minimum slice:** B1 (CS-101–104) + CS-106 (B2) + B3 (CS-107–109) + CS-110 + CS-112 (B4) + CS-201 + CS-202 (B5) + CS-204 + CS-206 (B6) + CS-207 + CS-208 (B7) = **15 CS credits** plus relevant external courses.

Whether the GIS program selects this slice, a fuller cut that includes B4 external (MATH-104 graph theory, which directly supports GIS graph work), or adds the statistics sequence, is a decision for the Geography department.

## The GIS service pattern

This is a clean instance of the **Curated Foundational Path** service pattern: the GIS department selects a domain-matched subset of the modular core, choosing pieces where the spatial and geospatial context is already built in.

What makes this pattern particularly clean for GIST: the new core's data structures, graph algorithms, and data visualization content was co-designed with geospatial application explicitly in mind. A GIS student following the selected path is not working around a generic CS course — they are taking content where road networks, spatial indexes, and map-based data visualization are the primary examples. The domain alignment is structural, not cosmetic.

This mirrors the Computer Engineering service case (see `service-computer-engineering.md`) but with a better content fit from the start: while CompE needed repackaging to recover familiar traditional-course shapes, GIST gets the content it needs without repackaging, because the core's spiral structure already escalates geospatial content through the data-structures thread.

## Open questions

1. **Desktop GIS add-ins (residual GUI question).** The web GUI pathway (B1→B2→B4) covers web-based GUI and event-driven programming. GIS students targeting desktop add-ins (ArcGIS Pro Python toolboxes using arcpy, QGIS C++ plugin framework) work in a platform-specific environment the core does not address. Options: (a) treat this as covered by the GIS domain courses where those tools are actually used; (b) a Python language certificate (see #3) provides arcpy fluency alongside the core's platform-agnostic foundation. **This is narrower than the original GUI gap and likely resolvable at the domain-course level.**

2. **Heaps.** CC 315 covers heaps explicitly; the new core does not name them. Confirm whether heaps should be embedded in CS-110 (as a priority-queue variant on trees) or CS-112 (as a data structure with Big-O implications) for this use case. This affects whether CC 315 maps cleanly or leaves a content gap.

3. **Python specifically.** The CC sequence uses Python throughout; the new core is language-agnostic. GIS students need Python fluency (arcpy, geopandas, shapely, rasterio). A Python language certificate (per the certificate model adopted for C/C++ in the K-State CS replacement analysis) would address this without locking the core to a single language.

4. **Web fundamentals specifics.** The "web fundamentals course" in the GIST program was not identified by name. Confirm whether it is a general web technologies course (maps cleanly to CS-106) or a GIS-specific web-mapping course (Leaflet, OpenLayers, Mapbox GL). If the latter, CS-106 provides the foundation and the web-mapping course becomes the partner-department domain application — a clean instance of the Topical Unit service model.

5. **Statistics.** The GIST program likely requires spatial statistics in its GIS-specific coursework. Confirm whether the Geography department wants the STAT-101–104 sequence embedded in the computing foundation, or prefers their own statistics requirement. If the former, this is a strong argument for GIST students taking the full new core rather than the minimum slice.

6. **Credit count for CC 110.** The CC 110 syllabus on file does not state credit hours. Confirm with the Geography department before completing the credit reconciliation.
