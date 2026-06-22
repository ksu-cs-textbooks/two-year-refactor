+++
title = "A.I. Systems"
weight = 40
ordinal = "5.4"
+++

> *Working draft for faculty review. This is a **recommendation for a degree that does not yet exist** \u2014 a proposal for an A.I. Systems specialization built on the shared two-year core, using real K-State courses where they exist and flagging honestly where new courses would be needed. Core course codes are placeholders; CIS course numbers are actual K-State courses.*

## Premise

Under the specialization model, every degree is the **identical two-year core + a degree-specific upper division**. This document proposes the upper division for an A.I. Systems specialization. The core already pre-positions A.I.-bound students through several on-ramp threads; the specialization deepens them.

## What the core already provides (the on-ramps)

A.I.-bound students arrive at the specialization having spiraled through:

- **Computational Models** (the flagship thread) \u2014 imperative, functional, declarative, concurrent, dataflow, and a see-and-explore touch of logic/constraint models. A.I. systems draw on all of these; the breadth is unusually good preparation.
- **AI-Assisted Development** (bounded practice) \u2014 students have spent two years using A.I. tools *under discipline* (explain, critique, verify; never "write it for me"), ending with high-stakes critique of A.I.-generated code. They arrive able to *evaluate* A.I. output, which is exactly the judgment an A.I. specialization must build on rather than install from scratch.
- **Optimization Reasoning** (lens) \u2014 "best under constraints," seeded across the core; the conceptual root of model training.
- **Algorithmic Thinking & Complexity** \u2014 cost reasoning, graph algorithms, real bottlenecks.
- **Statistics sequence** \u2014 descriptive, probability, distributions, regression (non-calculus, intro level).

## Year-3 mathematics prerequisites (hard dependency)

A.I. is the **most math-dependent** specialization, and this is the critical planning constraint. The core's statistics is deliberately *non-calculus*; calculus and linear algebra were moved to year 3. For A.I. that means:

- **Calculus I (and likely II)** \u2014 gradients underpin essentially all model training.
- **Linear Algebra** \u2014 vectors, matrices, decompositions are the native language of machine learning. (The core seeds only adjacency matrices at B4; that is nowhere near sufficient.)
- **Calculus-based probability/statistics** \u2014 the rigorous version of the core's conceptual stats.

These must be solidly in place **before** the machine-learning courses. The specialization cannot proceed without sequencing them in year 3, early.

## Specialization stack \u2014 from available K-State courses

K-State has genuine A.I. depth, but mostly at the **graduate level**. This is the central honest finding: the undergraduate 500-level A.I. offering is thin (essentially CIS 530), while the real sequence lives at 700/800. An undergraduate specialization therefore relies on some combination of accelerated B.S./M.S. access, cross-listed 500-level versions, and **new courses the department would need to create**.

| Course | Status | Role |
|---|---|---|
| **CIS 530 Introduction to Artificial Intelligence** | Exists (undergrad) | Foundational A.I. entry |
| **CIS 732 Machine Learning & Pattern Recognition** | Graduate | The core of the specialization \u2014 needs an undergraduate 500-level version, or accelerated access |
| **CIS 831 Deep Learning** | Graduate (prereq 732) | Modern neural architectures (CNNs, RNNs, transformers) |
| **CIS 833 Information Retrieval & Text Mining** | Graduate (prereq 732) | Elective depth |
| **CIS 835 Neuro-Symbolic A.I.** | Graduate | Elective \u2014 connects to the core's logic/constraint touch |
| **CIS 836 Knowledge Graphs** / **832 Knowledge Representation** | Graduate | Symbolic/representation electives |
| **CIS 810 Logic Programming** | Graduate | Elective \u2014 the deep spiral of the core's B7 logic/constraint see-and-explore |

## Recommended shape

1. **Year-3 math first:** Calculus, Linear Algebra, calculus-based probability/statistics.
2. **Entry:** CIS 530 Introduction to A.I.
3. **Core of the specialization:** a Machine Learning course (CIS 732 or a new 500-level equivalent) \u2014 the load-bearing requirement.
4. **Depth:** Deep Learning (CIS 831) plus electives from text mining, neuro-symbolic, knowledge graphs, logic programming.
5. **Capstone:** an A.I. systems project.
6. **Agentic A.I.:** the core's AI-Assisted Development bounded practice was explicitly designed to protect comprehension *for* a later Agentic A.I. specialization. If that is the intended pinnacle, it is almost certainly a **new course** to create \u2014 there is no existing K-State course for it.

## Honest gaps and flags

1. **Undergraduate ML course.** CIS 732 is graduate. The specialization's central course either needs a new 500-level version or accelerated-program access \u2014 the single biggest curricular gap.
2. **Math sequencing is load-bearing.** If calculus and linear algebra slip in year 3, the ML courses cannot run. This is the hardest scheduling dependency in the whole specialization.
3. **Agentic A.I. course.** The core points toward it, but it does not exist; it would be new.
4. **Graduate-course access.** Relying on 700/800-level courses for an undergraduate degree needs an explicit mechanism (accelerated B.S./M.S., cross-listing, or new 500-levels).
5. **Shared upper-division + ABET.** Which of CIS 501/505/560/575 this specialization requires, and whether the required path satisfies ABET independently, is part of the pending 500-level restructure analysis.

## Bottom line

The core is a genuinely strong A.I. on-ramp \u2014 the Computational Models breadth, the disciplined AI-Assisted practice, and Optimization Reasoning are better preparation than a traditional sequence provides. The two real obstacles are **mathematics sequencing** (calculus + linear algebra must land early in year 3) and the **thin undergraduate A.I. course inventory** (the ML core and an Agentic A.I. capstone likely need to be created, since K-State's A.I. depth is currently graduate-level).

---

# ABET Accreditation Mapping (Proposed A.I. Criteria)

The proposed ABET artificial-intelligence criteria require **at least 42 semester credit hours of A.I. coursework** covering a set of fundamental topics, plus advanced depth, an application area, and a major project \u2014 and **separately, at least 9 semester credit hours of mathematics and statistics** (inference and modeling, linear algebra, probability, data visualization, optimization). The fit is good, with two notable strengths, one clear gap, and the same coursework-accounting discipline the data-science mapping needs.

## Fundamental A.I. topics

| ABET fundamental topic | Where it lives | Status |
|---|---|---|
| A.I. foundations: reasoning, heuristic search, knowledge representation | **Heuristic search:** A* is already in the core (B7 geospatial routing / graph algorithms). **Reasoning/KR:** core logic/constraint see-and-explore (B7) seeds it; CIS 530/730, 832 (KR for semantic web), 835 (neuro-symbolic), 836 (knowledge graphs) deepen | **Covered** \u2014 and symbolic A.I. is a K-State strength (knowledge graphs, neuro-symbolic). Note: heuristic search is already seeded in the *common core* |
| Programming, data structures, algorithms | Core: Data Structures & Representation + Algorithmic Thinking & Complexity threads | **Covered strongly** \u2014 home turf |
| Data & knowledge engineering | CIS 864 (data engineering), 832/836 (knowledge graphs) | Covered via specialization |
| Machine learning, including deep learning | CIS 732 (ML) + CIS 831 (Deep Learning) | Covered \u2014 pending undergraduate-level availability (both currently graduate) |
| Design & implementation of A.I. solutions | Specialization project courses + capstone | Covered |
| **A.I. system architecture & infrastructure** | Core B8 (general deployment/operations) touches infrastructure; the Computational Models actor/distributed pass (B8) touches distribution | **Gap** \u2014 *A.I.-specific* infrastructure (MLOps, model serving, ML pipelines, vector stores, GPU/compute scaling) is not in the core and has no obvious K-State course. The clearest new-course need |
| Ethics & responsible A.I. | Core: Trustworthy Computing lens + CS-210 Responsible A.I. + the **AI-Assisted Development bounded practice** (responsible A.I. use is literally its two-year through-line) | **Covered strongly** \u2014 a standout strength; the bounded practice was designed for exactly this |

## Advanced topics, application area, and project

- **Advanced A.I. coursework (depth):** CIS 730, 831, 833, 834, 835, 836, 810 \u2014 covered, pending undergraduate-level access to currently-graduate courses.
- **Application area using A.I.:** a new explicit requirement. The readiest option is **bioinformatics** (CIS 834 Machine Learning for Bioinformatics already exists); other candidates are NLP/text mining (CIS 833), knowledge graphs/semantic web, or robotics (a K-State research strength). One must be named and a path built.
- **Major project:** an A.I. capstone \u2014 covered; this is also the natural home for the **Agentic A.I.** pinnacle the core's AI-Assisted Development was designed to protect (likely a new course).

## Mathematics & statistics (\u22659 SCH)

| ABET math/stats topic | Where it lives | Status |
|---|---|---|
| Statistical inference & modeling | Year-3 calculus-based statistics (inference); regression (STAT-104); ML modeling | Covered \u2014 inference is year-3 (the core stats is descriptive/non-calculus); sequence deliberately |
| Linear algebra | Year-3 | Covered |
| Probability | STAT-102 (core, conceptual) + year-3 calculus-based | Covered |
| Data visualization | Core: Human-Centered Computing visualization throughline | Covered \u2014 notable that the A.I. criteria explicitly want visualization, which the core already provides |
| Optimization | Optimization Reasoning lens + year-3 | Covered |

The 9-credit math/stats floor is **easily cleared** by the year-3 mathematics block (calculus, linear algebra, calculus-based statistics) plus the core's statistics and Optimization Reasoning. This is a lower bar than data science's mathematics expectation.

## The 42-credit floor \u2014 accounting note

As with data science, not all of the core counts as "A.I. coursework." But more of it counts than one might expect: A.I. foundations (heuristic search via A*, the logic/constraint touch), data structures and algorithms, and ethics/responsible A.I. are all genuine A.I.-coursework contributions from the core. The specialization stack plus the math block must still carry the bulk of the 42, and the required (not merely available) credits must be sized to clear the floor.

## Gaps to close for ABET

1. **A.I. system architecture & infrastructure (MLOps)** \u2014 the standout gap. No core coverage and no obvious K-State course; almost certainly a new course (model serving, ML pipelines, scaling, vector stores).
2. **Application area** \u2014 name at least one (bioinformatics via CIS 834 is the readiest) and build the path.
3. **Statistical inference sequencing** \u2014 confirm the year-3 calculus-based statistics delivers inference, since the core stats is descriptive/non-calculus.
4. **Undergraduate ML availability** \u2014 the ML and Deep Learning courses are graduate-level (carried over from the main recommendation above).
5. **42-SCH accounting** \u2014 size required specialization + math credits to clear the floor.

## Bottom line on ABET

The A.I. fit has two real strengths the data-science mapping does not: **ethics/responsible A.I. is exceptionally well-served** (the AI-Assisted Development bounded practice and the Responsible A.I. course map almost directly onto the criterion), and **heuristic search is already seeded in the common core** via A*. The mathematics floor is easily met. The one clear structural gap is **A.I. system architecture / infrastructure (MLOps)** \u2014 a likely new course \u2014 alongside the shared challenges already noted: naming an application area, confirming inference is delivered in year 3, and the undergraduate-availability of the machine-learning courses.
