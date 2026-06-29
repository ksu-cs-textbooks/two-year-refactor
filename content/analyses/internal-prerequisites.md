+++
title = "Internal Prerequisite Analysis"
weight = 10
ordinal = "6.1"
+++

> *Working draft for faculty review. This analysis looks **inside** the two-year core — not the upper-division chains — at what the spiral's interconnection means when reality intrudes: a student fails a 1-credit course, drops mid-block, or enters off-sequence. The design is elegant on paper; this is the stress test. Course codes are placeholders.*

{{< mermaid align="center" zoom="true" >}}
flowchart TB
  %% Internal hard prerequisites of the two-year core (arrow = 'is required by')
  subgraph B1["Block 1 - Read"]
    direction LR
    CS101["CS-101<br/>Imperative Prog<br/><b>blocks 20</b>"]
    CS102["CS-102<br/>Functional Prog<br/><b>blocks 16</b>"]
    CS103["CS-103<br/>Computational Rep<br/><b>blocks 12</b>"]
    MATH101["MATH-101<br/>Logic and Sets<br/><b>blocks 4</b>"]
  end
  subgraph B2["Block 2 - Modify"]
    direction LR
    CS104["CS-104<br/>Data Transformation<br/><b>blocks 14</b>"]
    CS105["CS-105<br/>Code Reading/Repair"]
    CS106["CS-106<br/>Web Foundations<br/><b>blocks 3</b>"]
    MATH102["MATH-102<br/>Counting<br/><b>blocks 3</b>"]
  end
  subgraph B3["Block 3 - Model"]
    direction LR
    CS107["CS-107<br/>OOP I<br/><b>blocks 11</b>"]
    CS108["CS-108<br/>OOP II<br/><b>blocks 3</b>"]
    CS109["CS-109<br/>Abstract Data Types<br/><b>blocks 7</b>"]
    MATH103["MATH-103<br/>Recursive/Modular<br/><b>blocks 2</b>"]
  end
  subgraph B4["Block 4 - Structure"]
    direction LR
    CS110["CS-110<br/>Trees/Hashing<br/><b>blocks 2</b>"]
    CS111["CS-111<br/>Systems and APIs<br/><b>blocks 1</b>"]
    CS112["CS-112<br/>Algorithmic Complexity<br/><b>blocks 1</b>"]
    STAT101["STAT-101<br/>Descriptive Stats<br/><b>blocks 4</b>"]
  end
  subgraph B5["Block 5 - Store"]
    direction LR
    CS201["CS-201<br/>SQL Fundamentals<br/><b>blocks 3</b>"]
    CS202["CS-202<br/>Database Design<br/><b>blocks 1</b>"]
    STAT102["STAT-102<br/>Probability<br/><b>blocks 2</b>"]
  end
  subgraph B6["Block 6 - Build Responsibly"]
    direction LR
    CS203["CS-204<br/>Software Testing<br/><b>blocks 2</b>"]
    CS204["CS-205<br/>Security Fund."]
    CS205["CS-206<br/>Collaborative Dev<br/><b>blocks 1</b>"]
    STAT103["STAT-103<br/>Distributions/Sampling<br/><b>blocks 1</b>"]
  end
  subgraph B7["Block 7 - Judge"]
    direction LR
    CS206["CS-207<br/>Graphs and Net Algorithms"]
    CS207["CS-208<br/>Document DBs/Integration"]
    MATH104["MATH-104<br/>Graphs/Trees/Networks"]
  end
  subgraph B8["Block 8 - Operate"]
    direction LR
    CS208["CS-210<br/>Deployment and Ops"]
    CS209["CS-211<br/>Human-Centered Design"]
    CS210["CS-212<br/>Data Analysis/Resp AI"]
    STAT104["STAT-104<br/>Correlation/Regression"]
  end
  CS101 ==> CS102
  CS101 ==> CS103
  CS101 ==> CS104
  CS102 ==> CS104
  CS101 ==> CS105
  CS102 ==> CS105
  CS101 ==> CS106
  CS103 ==> CS107
  CS104 ==> CS107
  CS107 ==> CS108
  CS107 ==> CS109
  CS109 --> CS110
  CS106 -.-> CS111
  CS109 --> CS111
  CS110 --> CS112
  CS104 ==> CS201
  CS201 --> CS202
  CS109 -.-> CS202
  CS108 -.-> CS203
  MATH103 -.-> CS204
  CS203 --> CS205
  CS110 -.-> CS206
  CS112 -.-> CS206
  CS202 -.-> CS207
  CS111 -.-> CS208
  CS205 -.-> CS208
  CS106 -.-> CS209
  CS201 -.-> CS210
  STAT101 -.-> CS210
  MATH101 --> MATH102
  MATH102 --> MATH103
  STAT101 --> STAT102
  STAT102 --> STAT103
  STAT103 -.-> STAT104
  MATH103 -.-> MATH104
  classDef wall fill:#7c2d12,stroke:#fff,stroke-width:2px,color:#fff;
  classDef mid fill:#9a3412,stroke:#fff,color:#fff;
  classDef ext fill:#1e3a5f,stroke:#fff,color:#fff;
  classDef term fill:#14532d,stroke:#fff,color:#fff;
  class CS107,CS104,CS101,CS102,CS103 wall;
  class CS109 mid;
  class MATH101,MATH102,MATH103,STAT101,STAT102,STAT103,MATH104,STAT104 ext;
  class CS105,CS204,CS206,CS207,CS208,CS209,CS210 term;
{{< /mermaid >}}

## The central tension

The spiral's strength — every idea connects to and builds on the others — is also its structural fragility. Tight interconnection means **early courses carry enormous downstream weight**. The same property that makes the curriculum coherent makes a single early failure potentially cascade across two years.

This is not an argument against the design. It is an argument for building the **policies and the competency mechanics** that absorb messiness *before* launch, because the block structure is less forgiving than the 16-week courses it replaces.

## The dependency facts

The core contains roughly **35 hard internal prerequisite edges** (where a later course genuinely cannot be done without an earlier one), plus many softer spiral-continuity links. Sorted by how many blocks apart the two courses sit:

| Block gap | Edges | Nature |
|---|---|---|
| 0 (same block) | 7 | Really **corequisites** taught in one 8-week block (e.g. OOP I → OOP II) |
| 1 | 12 | Adjacent-block dependencies — the normal spiral step |
| 2–3 | 12 | Medium-range (e.g. data transformation → SQL; OOP II → testing) |
| 4–6 | 4 | Long-range (e.g. web foundations → human-centered design, six blocks later) |


![Core Internal Prerequisites](/images/core_internal_prerequisites.svg)

## Blast radius — the load-bearing walls

The decisive measure is **blast radius**: if a course is failed or skipped, how many later courses are hard-blocked (transitively)?

| Course | Downstream courses blocked |
|---|---|
| CS-101 Imperative Programming | **20** of the remaining 29 |
| CS-102 Functional Programming | 16 |
| CS-104 Data Transformation | 14 |
| CS-103 Computational Representation | 12 |
| CS-107 OOP I | 11 |
| CS-109 Abstract Data Types | 7 |

These six are the **load-bearing walls**. Failing CS-101 in week 8 of the first block can, in principle, block two-thirds of the entire CS spine. By contrast, the **terminal courses carry zero downstream risk** — CS-105, CS-205, CS-207, CS-208, CS-210, CS-211, CS-212, MATH-104, and STAT-104 hard-block nothing, so they can be repeated or deferred without cascade.

The **mathematics and statistics chains are linear and self-contained**: each course blocks only its own successors plus, at the seams, the two CS courses with external-chain dependencies — CS-205 (needs MATH-103 for applied cryptography) and CS-212 (needs STAT-101 for data analysis). A broken math/stats chain delays those two CS courses but does not touch the rest of the CS spine.


## The messy scenarios

### 1. A student fails a high-radius course (e.g. CS-101)

This is the scenario that decides whether the structure is humane. The severity depends entirely on **re-offering cadence**:

- If foundational blocks run **only annually**, a failed CS-101 means the next attempt is a year away — and because CS-101 gates 20 courses, the student is effectively **a year behind on the whole spine**.
- If foundational blocks run **every 8 weeks**, the student retakes almost immediately and loses one block, not one year.

**This re-offering cadence is the single pivotal feasibility question for the whole model**, and it is a scheduling and faculty-load decision, not a curricular one. The curriculum cannot answer it; the department's capacity to staff repeated sections does.

The structural escape hatch is the **competency model**. Because competencies belong to the program rather than to courses, a student who fails the *course* but can later *demonstrate the competency* could clear the downstream prerequisite without a full re-sit. This is where the competency-based design earns its keep — but only if the assessment system is explicitly built to allow re-demonstration. That places a **concrete requirement on the (currently under-specified) assessment chapter**: it must define how a competency is re-demonstrated outside its home course.

### 2. A student drops mid-block (illness in week 4)

Eight-week blocks are **less forgiving of disruption** than 16-week courses: missing two weeks is 25% of an 8-week course's contact time, versus ~12% of a 16-week course. A three-week illness that a traditional course would survive with an incomplete can sink an 8-week block.

Two things cut the other way. The **1-credit granularity helps** — the student loses one credit, not a four-credit course. And **per-course (not per-block) incompletes** would let a student finish one 1-credit piece later while keeping the rest. The recommendation: allow incompletes at the course, not block, level, and avoid making intra-block courses strictly sequential within the eight weeks where the dependency allows parallelism.

### 3. Off-sequence entry (spring transfer, or a major change after year 1)

The core is **sequential and fall-started**, which collides with a promise the design made elsewhere. "Identical core across degrees → easy transfer" is true for movement *between our own specializations* after the core. But transfer *into* the core mid-sequence — a spring transfer student, or someone switching into CS in year 2 — is made **harder** by the sequencing: if blocks only start in fall, a spring entrant can face up to a year of bench time before the spine even begins.

Mitigations exist but each has a cost: a **spring-start cohort** (doubles section count), **summer blocks** (faculty load), or **competency placement** (test out of early blocks — again leaning on the assessment system). This deserves explicit attention because transfer-friendliness was a stated selling point, and sequencing quietly undercuts it.

### 4. Intra-block coupling and block integrity

Seven of the hard edges are *within* a single block (CS-101 → CS-102/103, CS-107 → CS-108/109, CS-201 → CS-202). Taught in the same eight weeks, these are really **coordinated corequisites**, not prerequisites — fine when the block is taught as an integrated whole, but a real risk if different instructors teach the coupled 1-credit pieces without coordination (OOP II assumes OOP I; if the two sections drift, the dependency breaks). **Block integrity therefore requires intra-block instructor coordination** — a faculty-load and scheduling constraint that the curriculum diagram doesn't show but the schedule must.

## Recommendations

1. **Protect the six load-bearing walls** (CS-101, 102, 103, 104, 107, 109): offer them most frequently, give them priority tutoring/support, and make them the first courses for which competency re-demonstration is available.
2. **Resolve the re-offering cadence** for foundational blocks before launch — it is the pivotal feasibility unknown and determines whether a single failure costs a block or a year.
3. **Specify competency re-demonstration** in the assessment chapter — it is the structural escape hatch for failure, repeat, and placement, and it is currently unspecified.
4. **Allow course-level (not block-level) incompletes**, and avoid strict intra-block sequencing where the dependency permits parallel teaching.
5. **Plan an off-sequence entry path** (spring cohort, summer blocks, or placement) so the sequencing doesn't undercut the transfer-friendliness the design promises.
6. **Treat block integrity as a staffing constraint**: coupled intra-block courses need coordinated instruction, not just a shared time slot.

## Bottom line

The internal prerequisite structure is **steep early and flat late**: the first two blocks are load-bearing walls with blast radius up to 20, while year-2 courses mostly block nothing. That shape concentrates risk exactly where students are newest and most likely to stumble. The block-and-spiral design doesn't remove that risk — it sharpens it, because 8-week units are less forgiving than 16-week ones. The mitigations are real but they nearly all route through two things the project has flagged as unfinished: **the re-offering cadence (a feasibility/staffing decision)** and **the competency-re-demonstration mechanics (an assessment-chapter decision)**. The elegant spiral is sound; what it needs now is the unglamorous machinery that catches the student who falls off it.
