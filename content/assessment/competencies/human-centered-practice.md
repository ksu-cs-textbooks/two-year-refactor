---
title: "Human-Centered Practice"
pre: "5. "
weight: 50
---

### Gather and Analyze Requirements

**I can identify stakeholder needs and translate them into actionable system requirements.**

I use appropriate methods to understand problems, clarify expectations, and define criteria for successful solutions.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B2 | CS-106 | Accessibility and data-minimization as non-functional requirements — first encounter with requirements imposed by human needs rather than technical constraints |
| B5 | STAT-101 | Survey design as a data collection methodology — constructing valid survey instruments, question bias, Likert scales, sampling considerations |
| B6 | CS-206 | Team Software Project scoping — assessed requirements artifact: conduct a stakeholder interview and produce a functional/non-functional requirements brief before implementation begins |
| B7 | CS-207/207 | Design Review — defending choices against stated requirements; requirements surface through critique |
| B8 | CS-211 | Primary home — formal requirements gathering methods; stakeholder interviews; qualitative and quantitative investigation; translating ambiguous needs into acceptance criteria |

Note: the STAT-101 survey design addition requires coordination with the statistics department — survey design is within scope for a statistics course (sampling, instrument validity, response bias) but the extension needs their buy-in.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Structured requirements analysis — given a stakeholder description, identify and categorize functional and non-functional requirements |
| Independence | Requirements brief — conduct a requirements analysis for a specified system; define acceptance criteria without a template |
| Adaptation | System Integration Project (B8) — gather requirements from real stakeholders with ambiguous or conflicting needs |
| Leadership | TA/LA facilitating requirements workshops; leading stakeholder interviews for a team project |

**Recurring type:** Requirements Analysis Task — deepens from informal user needs identification (B2) through full multi-method investigation with real stakeholders (B8).

---

### Design Human-Centered Solutions

**I can design computational solutions that account for human needs, accessibility, usability, and context.**

I evaluate design decisions based on their impact on the people and communities who interact with the system.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B2 | CS-106 | First pass — semantic HTML, accessibility substrate, data-minimization in forms; designing for all users as a baseline constraint |
| B4 | CS-111 | D3 data-join visualization and web component architecture — designing data-driven and component-based interfaces |
| B7 | CS-207/207 | Design Review — defending human-centered design choices under peer scrutiny; usability as a named dimension of the critique |
| B8 | CS-211 | Primary home — requirements-driven design; UX research methods; validation with real users; escalation from accessibility-checklist compliance to fitness-for-purpose |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Design Brief (human-centered lens) — design an accessible interface or experience for a specified user and scenario |
| Independence | Open-ended Design Brief — given a problem and a user population, design a human-centered solution without a template |
| Adaptation | System Integration Project (B8) — design for real users with ambiguous needs; iterate based on actual user validation results |
| Leadership | Design Review critique (TA/LA role) — evaluating whether a peer's design genuinely serves human needs; leading UX evaluation sessions |

**Recurring types:** Design Brief (creating a human-centered solution) and Usability Evaluation (assessing an existing design against human-centered criteria) — see below.

**Second recurring type — Usability Evaluation:**

| Block | Course | Pass | Scale & Challenge |
|-------|--------|------|-------------------|
| B2 | CS-106 | Accessibility audit — evaluate an existing page against accessibility criteria (contrast, keyboard navigation, screen reader) | Checklist-guided, single page |
| B4 | CS-111 | Component usability evaluation — does this web component's interface make sense from the user's perspective? | Interface design, less scaffolding |
| B7 | CS-207 | Design Review — peers evaluate each other's system designs for human-centeredness and usability fit | Peer-facing, multi-dimension |
| B8 | CS-211 | Full usability evaluation — heuristic evaluation, user testing sessions, A/B analysis against acceptance criteria | Real users, novel system |

---

### Evaluate Ethical Implications

**I can evaluate the ethical, social, and professional implications of computational decisions and actions.**

I apply ethical reasoning to identify risks, responsibilities, and consequences when designing and using computational systems.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B2 | CS-104/106 | First pass — data minimization as an embedded constraint: what data should this pipeline collect, and why? Accessibility as ethical obligation |
| B4 | CS-111 | Conway's Law seed — organizational structure shapes what gets built and who it serves; sociotechnical awareness |
| B5 | CS-202 | Schema ethics — access control and data minimization decisions documented and justified; least-privilege at the data layer |
| B6 | CS-205 | Threat identification, authentication, authorization; least data collection as a security and ethical principle |
| B6 | CS-206 | Responsibility retrospective — Team Software Project includes an assessed ethical accountability reflection |
| B7 | CS-208 | Re-identification risk — combining individually innocuous datasets creates privacy harms neither dataset posed alone |
| B8 | CS-210 | Harden-before-live as ethical practice; blameless postmortem as systemic rather than blame-based accountability |
| B8 | CS-212 | Data ethics, honest visualization, AI-generated code critique for correctness, security, and responsible use |

Note: ethical reasoning in this program is grounded in concrete technical decisions — data minimization, access control, re-identification risk, honest visualization — rather than abstract philosophical frameworks. The escalation is from single-decision ethics (B2) through AI-assisted development ethics (B8).

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Structured ethical analysis — given a system and context, identify ethical risks and responsibilities using a provided framework |
| Independence | Open-ended ethical evaluation — given a design decision, independently construct an ethical argument without a framework |
| Adaptation | Responsibility retrospective (B6) and blameless postmortem (B8) — evaluate ethical responsibilities in a real collaborative project with genuine consequences |
| Leadership | Leading responsibility retrospectives; TA/LA facilitating ethical discussion in Design Review; leading blameless postmortems |

**Recurring type:** Ethical Evaluation — deepens from data minimization analysis (B2) through AI-assisted analysis critique (B8). Escalates from single-decision ethics → design ethics → system ethics → integration ethics → AI ethics.

---

### Communicate Technical Information

**I can communicate technical concepts, decisions, and results to technical and non-technical audiences.**

I create documentation, presentations, visualizations, and explanations that support understanding and informed decision-making.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B3 | CS-107 | Type annotations and interface specifications — the type signature communicates a contract to peer developers; first explicit technical documentation |
| B5 | CS-202 | Schema-decision documentation — documenting design choices and their rationale for future maintainers |
| B6 | CS-204 | Test naming and documentation — what does this test guarantee, and for whom? |
| B6 | CS-206 | PR descriptions, commit messages, code review comments — professional asynchronous technical communication |
| B7 | CS-207/207 | Design Review — present and defend technical decisions to a critical peer and faculty audience; highest-stakes synchronous technical communication in the program |
| B8 | CS-210 | Operational runbooks and API documentation — technical communication that outlives the author and must be read under pressure |
| B8 | CS-211 | Stakeholder communication — translate technical constraints and design decisions for non-technical decision-makers |

Note: automated evidence (git telemetry) captures the presence of commit messages and PR descriptions but not their quality — this sub-competency requires rubric-based direct assessment at every touchpoint.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Technical documentation task — write API documentation, a PR description, or a test name for a specified audience and purpose |
| Independence | Audience-appropriate explanation — given a technical concept or decision, produce documentation appropriate for a specified audience without a template |
| Adaptation | Design Review (B7) — defend technical decisions under live critique; CS-211 stakeholder translation — communicate technical constraints to non-technical users with real decision-making consequences |
| Leadership | TA/LA creating learning materials for students; writing runbooks adopted by a team; leading documentation sprints |

**Recurring type:** Technical Explanation Task — deepens from type-annotated interface docs for a peer developer (B3) through translation of technical constraints for non-technical decision-makers (B8). Audience escalates: peer developer → future maintainer → team → critical panel → non-technical stakeholders.
