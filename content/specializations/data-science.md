+++
title = "Data Science"
weight = 30
ordinal = "5.3"
+++

> *Working draft for faculty review. This is a **recommendation for a degree that does not yet exist** \u2014 a proposal for a Data Science specialization built on the shared two-year core, using real K-State courses where they exist and flagging honestly where new courses or cross-department coordination would be needed. Core course codes are placeholders; CIS course numbers are actual K-State courses.*

## Premise

Under the specialization model, every degree is the **identical two-year core + a degree-specific upper division**. This document proposes the upper division for a Data Science specialization. Of the four specializations, Data Science has arguably the **strongest core on-ramp** \u2014 the foundation already does a great deal of the data-science groundwork \u2014 but it is also the most **cross-department dependent**, leaning heavily on Statistics and Mathematics.

## What the core already provides (the on-ramps)

Data-science-bound students arrive having spiraled through more relevant threads than any other specialization:

- **Data Structures & Representation** \u2014 including the graph sub-spiral and the geospatial sub-theme (vector/raster representation, spatial indexing). Real breadth in how data is shaped.
- **The full statistics sequence** \u2014 descriptive statistics, probability, distributions & sampling, and regression. Four courses, one per relevant block (non-calculus, intro level). This is the spine of data science and it is *already in the core*.
- **Human-Centered Computing** \u2014 the data-visualization throughline (honest charts; visualization as investigation, not just output) and the validation/fitness emphasis. Communicating and validating with data is core to the discipline.
- **Computational Models** \u2014 declarative querying (SQL named explicitly) and dataflow (transformation pipelines, D3). The data-pipeline mental model is established.
- **Optimization Reasoning** \u2014 "best under constraints," including multi-objective tradeoffs.
- **AI-Assisted Development** \u2014 culminating in notebook-based data analysis plus responsible-A.I. judgment (CS-210).

The core's B5 (databases, the Data Investigation assessment) and the embedded statistics make data-science students unusually well-prepared *before* the specialization begins. This should be stated as a selling point: much of a traditional data-science first year is already in the common core.

## Year-3 mathematics prerequisites

Lighter than A.I., but real:

- **Linear Algebra** \u2014 for dimensionality reduction, matrix methods, and the linear-algebra view of regression and ML.
- **Calculus-based probability/statistics** \u2014 the rigorous successor to the core's conceptual stats (e.g. STAT 511 Introductory Probability and Statistics II exists as a feeder).
- **Calculus** \u2014 needed for the above and for optimization in ML, though data science leans less heavily on it than A.I.

## Specialization stack \u2014 from available K-State courses

As with A.I., K-State's data depth is largely **graduate-level**; the undergraduate offering is thin and would need new 500-level courses or accelerated access. K-State does have a Data Analytics M.S. and a strong data-mining/KDD research group to draw faculty from.

| Course | Status | Role |
|---|---|---|
| **CIS 560 Database System Concepts** | Exists | Database depth (the core's B5 is the foundation; 560 is the deeper spiral) |
| **CIS 732 Machine Learning & Pattern Recognition** | Graduate | Shared with A.I.; predictive modeling \u2014 needs a 500-level version or accelerated access |
| **CIS 861 Data Science in Practice** | Graduate | A practicum \u2014 strong capstone candidate |
| **CIS 864 Data Engineering** | Graduate (prereq 761/764) | Pipelines and data systems at scale |
| **CIS 860 Advanced Database Systems** | Graduate | Data mining, warehousing, OLAP |
| **CIS 833 Information Retrieval & Text Mining** | Graduate | Unstructured-data elective |
| **Statistics Department courses** | Exist (STAT) | STAT 511+ and regression/applied courses \u2014 data science is statistics-heavy and this is essential cross-department territory |

## Recommended shape

1. **Year-3 math:** Linear Algebra and calculus-based statistics (with calculus as needed).
2. **Database depth:** CIS 560 (building on the core's B5).
3. **Predictive modeling:** a Machine Learning course (CIS 732 or a new 500-level equivalent) \u2014 shared with A.I.
4. **Data engineering / mining:** CIS 864 and/or CIS 860 (pipelines, warehousing, mining).
5. **Statistics depth:** STAT-department courses beyond the core's sequence \u2014 the cross-department spine.
6. **Capstone:** a data-science practicum in the spirit of CIS 861.
7. **Optional electives:** text mining (833), advanced databases, visualization.

## Honest gaps and flags

1. **Cross-department dependency is the defining feature.** Data science is as much Statistics as Computer Science. This specialization cannot be designed by C.S. alone \u2014 it requires genuine co-design with the Statistics department for the upper-division statistics courses, and the core's *non-calculus* statistics constraint must be reconciled with the calculus-based statistics the specialization needs in year 3.
2. **Thin undergraduate data-science inventory.** CIS 861/864/860 are graduate courses. Undergraduate-accessible versions, accelerated access, or new 500-levels are needed.
3. **Dedicated visualization course.** The core carries a data-visualization throughline but not a full course; a dedicated viz course may be wanted at the specialization level given its centrality to data science.
4. **Shared ML course with A.I.** A single Machine Learning course can likely serve both specializations \u2014 an efficiency worth planning deliberately.
5. **Shared upper-division + ABET.** Which of CIS 501/505/560/575 this specialization requires, and ABET sufficiency of the required path, is part of the pending 500-level restructure analysis.

## Bottom line

Data Science is the specialization the core most naturally feeds \u2014 the four-course statistics sequence, the data-structures and geospatial representation work, the visualization throughline, declarative SQL and dataflow, and the notebook data-analysis capstone mean students arrive substantially prepared. The two real challenges are **cross-department co-design with Statistics** (including reconciling the non-calculus core stats with the calculus-based year-3 statistics) and, as with A.I., the **thin undergraduate course inventory** (the practicum, data-engineering, and mining courses are currently graduate-level and would need undergraduate equivalents or accelerated access).

---

# ABET Accreditation Mapping

ABET's data-science program criteria require **at least 45 semester credit hours of data science coursework** covering a defined set of lifecycle topics and spanning concepts, plus advanced depth, an application area, and a major integrative project. The criteria map unusually well onto the core + proposed specialization \u2014 a useful validation that the core's data-science on-ramp was well-aimed \u2014 but several specific gaps and one structural constraint need explicit attention.

## Lifecycle topics

| ABET lifecycle topic | Where it lives | Status |
|---|---|---|
| Data acquisition & representativeness | Core: data transformation (CS-104), API data (B4), Data Investigation (B5); sampling in STAT-103 | **Partial** \u2014 acquisition covered; *representativeness/sampling bias* is a data-science-specific concept that needs explicit naming |
| Data management | Core B5 (SQL + database design); CIS 560 depth; CIS 864 data engineering | Covered |
| Data preparation & integration | Core: CS-104 transformation, CS-207 data integration (B7) | Covered |
| Data analysis | Core: CS-210 notebook analysis (B8); the statistics sequence | Covered |
| Model development & deployment | Specialization ML course; **deployment maps to core B8 (CS-208 Deployment & Operations)** | Covered \u2014 a nice reuse of the core's operations work |
| Visualization & communication | Core: Human-Centered Computing visualization throughline + Professional Practices communication | Covered \u2014 a genuine core strength; a dedicated visualization course would add depth |

## Spanning concepts

| ABET spanning concept | Where it lives | Status |
|---|---|---|
| Data ethics (legitimate use, **algorithmic fairness**) | Core: Trustworthy Computing lens; CS-210 Responsible A.I.; honest-visualization ethics | **Partial** \u2014 ethics and legitimate use covered; *algorithmic fairness* as a named topic needs explicit specialization coverage |
| Governance (privacy, security, **stewardship**) | Core: Trustworthy Computing (privacy, security, data minimization); B5 access control | **Partial** \u2014 privacy/security strong; *data stewardship / lifecycle governance* needs strengthening |
| Applied statistics & math: **inference**, modeling, linear algebra, probability, optimization | Core stats sequence (descriptive, non-calculus); year-3 calculus-based statistics, linear algebra; Optimization Reasoning lens; regression (STAT-104); ML modeling | **Mostly covered, with a sequencing note** \u2014 *statistical inference* (hypothesis testing, confidence intervals) requires the year-3 calculus-based statistics, not the core's descriptive/non-calculus stats. Linear algebra and optimization are year-3. The dependency must be sequenced deliberately |
| Computing (data structures & algorithms) | Core: Data Structures & Representation thread; Algorithmic Thinking & Complexity thread | **Covered strongly** \u2014 home turf |

## Advanced coursework, application area, and project

- **Advanced data science coursework (depth):** the specialization stack (ML, data engineering, advanced databases, text mining, practicum) \u2014 covered, pending undergraduate-level availability of currently-graduate courses.
- **Application area (context):** **a new explicit requirement.** ABET wants data science applied to a domain. Options that fit existing strengths: **geospatial** (the core's geospatial representation + algorithms, and the Geography/GIS relationship); **bioinformatics** (CIS 834 Machine Learning for Bioinformatics exists); or **business analytics**. An application area must be named and a path built.
- **Major project (integrative capstone):** CIS 861 Data Science in Practice, or a new capstone \u2014 covered.

## The 45-credit floor \u2014 careful accounting needed

This is the structural constraint. ABET requires \u226545 SCH of *data science* coursework, and not all of the core counts. Statistics, data structures, databases, data transformation/integration, visualization, and the analysis course clearly count (~12\u201315 core credits); but general-CS portions of the core (imperative/functional programming, OOP, security, systems) likely do **not** count as "data science coursework." So the effective core contribution to the 45 is **less than the total core credits**, which means the specialization stack plus the year-3 mathematics must be sized to carry the remainder. A rough accounting:

- Core, DS-counting portion: ~12\u201315 SCH
- Specialization stack: ~15\u201321 SCH
- Year-3 math (linear algebra, calculus-based probability/statistics, optimization): ~9\u201312 SCH

That sums to roughly 36\u201348 SCH \u2014 it **can** clear 45, but only with deliberate sizing. The 45-credit floor is a real design constraint that sets how many specialization and math credits must be *required* (not merely available).

## Gaps to close for ABET

1. **Representativeness / sampling bias** \u2014 name and cover it explicitly (data-science-specific, currently only implicit).
2. **Algorithmic fairness** \u2014 add as a named topic in the specialization (the core does responsible A.I. but not fairness by name).
3. **Data stewardship / lifecycle governance** \u2014 strengthen beyond the core's privacy/security.
4. **Statistical inference sequencing** \u2014 confirm the year-3 calculus-based statistics delivers inference, since the core stats is deliberately descriptive/non-calculus.
5. **Application area** \u2014 name at least one (geospatial, bioinformatics, or business) and build the path.
6. **45-SCH accounting** \u2014 size the required specialization + math credits so the data-science-counting total clears 45, recognizing that general-CS core credits may not count.

## Bottom line on ABET

The fit is strong: the lifecycle and spanning concepts are nearly all present across the core and proposed specialization, and computing/data-structures (often a weak point for data-science programs housed outside CS) is a core strength here. The work to be accreditation-ready is **targeted, not structural** \u2014 name a few currently-implicit topics (representativeness, algorithmic fairness, stewardship), confirm the year-3 statistics delivers inference, choose an application area, and do the 45-credit accounting carefully so the required (not just available) data-science credits clear the floor.

