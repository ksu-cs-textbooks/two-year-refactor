+++
title = "Boundary Crossing"
weight = 40
ordinal = "1.4"
+++

> *Working draft for faculty review. This page describes the general research basis for learning that happens when a student moves between different practices, not just deeper within one. See [Legitimate Peripheral Participation & Communities of Practice](./legitimate-peripheral-participation) for the companion theory about deepening within a single community.*

## What boundary crossing is

Legitimate peripheral participation describes how a newcomer moves toward the center of a *single* community of practice. Boundary crossing addresses the different, harder problem of what happens when a person has to move *between* practices that don't share the same norms, tools, vocabulary, or notion of what counts as good work — a student moving from a CS classroom into a domain-expert's lab, or from the shared two-year core into a specialization with its own conventions ([Akkerman & Bakker, 2011](../../7-references#akkerman-bakker-2011)). Akkerman and Bakker's synthesis treats this as a real cognitive and social achievement, not friction to be minimized: something is actually learned in the act of crossing, precisely because the two sides don't automatically understand each other.

The discontinuity at a boundary is the point, not an obstacle to design around. A student who only ever works within one community never has to make their own assumptions explicit enough for someone outside that community to use them — that work of making the implicit explicit is where boundary-crossing learning happens.

## Four ways learning happens at a boundary

Akkerman and Bakker's review identifies four distinct learning mechanisms that occur at boundaries, not one:

- **Identification** — figuring out what each side actually means by a shared term or goal, which often turns out to differ more than either side assumed. Learning here is realizing the two practices weren't already talking about the same thing.
- **Coordination** — building working procedures and shared artifacts that let the two practices cooperate without either one having to change. This is usually the most common and lowest-friction mechanism, and it is where boundary objects (below) do their work.
- **Reflection** — using the outside perspective to see your own practice's assumptions from the outside. A student explaining a design decision to a domain expert who doesn't share CS's default assumptions often learns more about their own reasoning than the domain expert learns from them.
- **Transformation** — the boundary itself changes both practices, producing a genuinely new, hybrid way of working that didn't exist on either side before.

These are not stages a crossing must move through in order — most real boundary crossings only ever reach coordination, and that is a legitimate, useful outcome, not a failure to reach transformation.

## Boundary objects

Coordination across a boundary is rarely done through shared understanding alone — it is usually mediated by a **boundary object**: an artifact concrete and structured enough to support coordinated work across the boundary, while being flexible enough for each side to interpret it in terms of their own practice ([Star & Griesemer, 1989](../../7-references#star-griesemer-1989)). Star and Griesemer's original example is a natural history museum's shared specimen collection, interpreted differently by amateur collectors, professional taxonomists, and university administrators, yet stable enough to let all three groups coordinate around it.

Software engineering runs on boundary objects: an API contract, a database schema, a shared specification, or an architecture diagram is exactly this kind of artifact — precise enough to coordinate real work, while each side (frontend and backend, engineering and product, this program's students and an external domain-expert stakeholder) reads it against their own practice's concerns. This program already names a related idea from a different intellectual tradition — the Boundaries & Contracts thread in Chapter 4 treats a boundary as a software-design concept (an interface's promise about behavior, independent of what's behind it), grounded in design-by-contract and systems thinking, not in sociocultural learning theory. The two ideas reinforce each other productively — a well-designed software contract *is* a boundary object in Star and Griesemer's sense — but they come from different literatures and answer different questions; this page is about what a student learns by having to build and use one, not about how to specify one correctly.

## Why this fits this curriculum

Two structural features of this program are literal boundary crossings, not just metaphorical ones. First, the cornerstone projects (Chapter 3) put students in contact with real stakeholders and domains outside computer science — a project's value as a *boundary-crossing* experience depends on whether it actually requires students to build something like a boundary object (a spec, a data contract, a shared vocabulary document) for a real outside audience, not just complete a CS assignment that happens to have a non-CS theme. Second, the transition from the shared two-year core into a specialization (Chapter 2) is itself a boundary crossing between the core's practice and each specialization's more specific one — the twelve core threads function as the "identification" and "coordination" work that make that later crossing easier, per the specialization on-ramp framing already used in this program's design (see the Catalog chapter).

The practical design implication is that these crossings should be designed for, not assumed to happen automatically: a course that puts students in front of a real external stakeholder without ever asking them to produce an artifact that stakeholder can actually use is skipping the coordination mechanism that makes the crossing educative in the first place.

## What the evidence actually supports

Akkerman and Bakker's paper is itself a literature review and theoretical synthesis, not a new empirical study — its evidentiary weight comes from the breadth and consistency of the many qualitative case studies it draws together across professional, educational, and workplace-learning settings, not from a single controlled comparison. Star and Griesemer's boundary-objects concept has a similar status: enormously influential and widely applied (well beyond education, into science and technology studies, organizational studies, and software engineering itself), but originating from a single historical case study, not a causal test. Both are best read as well-evidenced *descriptive and analytic* frameworks — they explain what is happening at a boundary and give a vocabulary for designing around it — rather than as interventions with a measured effect size on a learning outcome. A dedicated evidence pass, parallel to the one already run for the spiral curriculum page, has not yet been done for this page.
