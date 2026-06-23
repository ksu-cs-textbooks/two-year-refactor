+++
title = "Service: Computer Engineering"
weight = 30
ordinal = "6.3"
+++

# Service Mapping: Computer Engineering

> *Working draft for faculty review. How Computer Engineering's current 12-credit dependency on our CS courses maps onto the redesigned modular curriculum. Course codes are placeholders.*

## Context

Computer Engineering currently consumes **12 credits** from us, as four traditional 3-credit, 16-week courses:

| Traditional course | Typical content |
|---|---|
| **CS0** | Gentle introduction to programming |
| **CS1** | First real programming: variables, control flow, functions, basic data |
| **Data Structures** | Lists, stacks, queues, trees, hashing; light graph introduction; complexity |
| **OOP** | Encapsulation, inheritance, polymorphism, classes |

Our redesign deliberately **dissolved** these monolithic courses into spiraled 1-credit, 8-week pieces, reorganized by concept and paradigm rather than the traditional sequence. This is the hardest service case we have, because Computer Engineering wants the *recognizable traditional packaging* that the redesign specifically took apart. The good news: the content is nearly all present, the pieces happen to co-locate by semester, and the original three-layer design (transcript courses / developmental experiences / competencies) anticipated exactly this kind of administrative repackaging.

## How the content maps to our pieces

| Traditional course | Our pieces | Fit |
|---|---|---|
| **CS0** (gentle intro) | CS-101 Imperative Programming (gentle on-ramp / early portion); optionally CS-103 Computational Representation for digital foundations | Good — CS0 as a gentle programming intro overlaps CS-101 directly; the earlier "CS0 gap" was only a gap if CS0 meant pseudocode-only pre-programming, which it does not |
| **CS1** (first real programming) | CS-101 Imperative Programming + CS-104 Data Transformation & Manipulation (CS-102 Functional optional) | Good — with a caveat on the CS0/CS1 boundary (below) |
| **Data Structures** | CS-109 Abstract Data Types + CS-110 Trees, Hashing & Hierarchies + CS-112 Algorithmic Complexity | Strong — these three are essentially a distributed data-structures course, and all fall in one semester (Year 1 Spring). Graph content is introduction-only in their DS, which our B3 graph-as-model and B4 represent passes cover without reaching into B7 |
| **OOP** | CS-107 Software Modeling and Design + CS-108 Computational Abstractions | Strong — encapsulation/modeling and higher-order abstractions as a recognizable pair, both in Year 1 Spring |

**Semester coherence (an unplanned benefit):** related pieces cluster in the same term. CS1 material is Year 1 Fall; Data Structures and OOP material are Year 1 Spring. So the traditional one-semester course shape is reconstructable from the timing, not just the content — a CompE "Data Structures" drawing from B3+B4 is genuinely one semester.

## The credit-volume issue (the real crux)

The minimal mapping above sums to roughly **8–9 of our credits** to cover what Computer Engineering currently delivers as **12**. This gap is the central thing to resolve, because it has consequences for ABET contact hours and for Computer Engineering's total degree credit count. Three possible explanations, which are not mutually exclusive:

1. **Our pieces are denser.** Focused 1-credit courses may cover the same competencies in fewer credit-hours. Plausible, but ABET review will want the contact-hour accounting to back it up.
2. **There is genuinely less seat-time.** If so, Computer Engineering would be receiving fewer instructional hours, and their degree would be 3–4 credits short unless backfilled.
3. **The competency develops beyond the minimal pieces.** Our spiral keeps developing data-structures and programming competency in later courses (B5, B7). A traditional-course-equivalent bundle could legitimately roll up *more* of our pieces than the minimal mapping — sizing each bundle to hit both the credit target and the competency target.

Explanation 3 is the most likely resolution and the one that makes the repackaging work: the bundles are *sized* to 12 credits by including the appropriate spiral pieces, not capped at the minimal mapping. But this is a deliberate packaging decision, not an automatic fact, and it must be made explicitly with Computer Engineering's outcomes and ABET requirements in hand.

## Option A — Traditional-Course Repackaging

Expose a **Computer-Engineering-facing transcript view** that bundles our 1-credit pieces under recognizable CS0/CS1/DS/OOP course numbers and names, leveraging the three-layer design (the transcript-course layer is explicitly administrative). The actual learning remains our spiraled pieces; only the packaging adapts.

**Pros:** Computer Engineering keeps its recognizable course structure and existing ABET mapping with minimal disruption. Uses a design feature (the administrative transcript layer) that already exists for this purpose. Semester coherence makes the bundles clean.

**Cons:** Requires careful credit-sizing to reach 12 (see above). A bundle that needs pieces from multiple blocks could span semesters (mostly avoided here, since the relevant pieces co-locate). Creates a maintenance obligation — the transcript view must stay synchronized with the underlying pieces as they evolve.

## Option B — Re-map to the Modular Structure

Computer Engineering adopts our actual 1-credit/8-week structure and re-maps its own degree requirements and ABET documentation onto our competencies and pieces directly.

**Pros:** No artificial repackaging or synchronization burden. Computer Engineering students get our actual (arguably stronger) spiraled pedagogy and the competency framework as-is. Honest one-to-one between what is taught and what is recorded.

**Cons:** More work for Computer Engineering — it changes their degree structure and requires ABET re-mapping on their side. The credit-volume question still applies (they would take ~8–9 of our credits, or more if they choose fuller coverage). Loses the familiar CS0/CS1/DS/OOP labels that may matter for their accreditation narrative and student transfer.

## Open issues

1. **Credit volume (12 vs ~8–9).** The load-bearing question. Resolve by deciding whether bundles are sized up to 12 by including more spiral pieces (Option A) or whether Computer Engineering accepts a different credit count (either option). Needs their ABET contact-hour requirements.
2. **CS0/CS1 boundary.** Both lean on CS-101. The cleanest split treats CS-101 + CS-102 + CS-104 as shared raw material and draws the CS0/CS1 line wherever Computer Engineering's outcomes split — the transcript bundles may source from overlapping pieces.
3. **Graph sufficiency — resolved.** Graphs are introduction-only in their Data Structures; our B3/B4 graph passes suffice, so the DS bundle stays within Year 1 Spring.
4. **ABET contact-hour mapping.** Whichever option, the contact-hour accounting must satisfy ABET for both programs.

## Where this fits the service-course model

Computer Engineering establishes a **third service pattern**, alongside the two already defined:

1. **Topical Unit** — a self-contained subject plus a partner's domain-application course (Relational Databases, OSI Networking).
2. **Curated Foundational Path** — a domain-selected sequence of early courses (Geography/GIS scripting, Communications/digital media).
3. **Traditional-Course Repackaging** — bundling 1-credit pieces into recognizable traditional transcript courses via the three-layer design (Computer Engineering: CS0/CS1/DS/OOP).

All three exploit the same modular, layered architecture. That the design supports three quite different service patterns without altering the pedagogy is a genuine validation of the modular bet.

## What we need from Computer Engineering

- Their CS0, CS1, Data Structures, and OOP **learning outcomes** (to confirm the mappings and set the CS0/CS1 boundary).
- Their **ABET contact-hour requirements** for these courses (to resolve the credit-volume question).
- A preference between **Option A** (repackaging) and **Option B** (re-map), recognizing the credit-volume question must be answered either way.
