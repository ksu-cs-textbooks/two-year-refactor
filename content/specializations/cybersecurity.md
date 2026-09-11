+++
title = "Cybersecurity"
weight = 20
ordinal = "5.2"
+++

> *Working draft for faculty review.*

## Premise

The B.S. in Cybersecurity shares its first two years in full with the B.S. in Computer Science — the same core, course for course. The upper division is where the two degrees diverge: Cybersecurity adds a security-specific sequence (network programming, information security, cryptography, a security elective, a criminology/society course, and a specialized capstone) in place of the general CS electives.

Because a Cybersecurity student completes essentially the entire Computer Science core plus a full security specialization, this degree map is built to independently satisfy **both** ABET's Computer Science criteria and its Cybersecurity criteria — a graduate of this program should be eligible to have both accreditations recognized, not just the one named on the diploma.

The degree includes two capstone experiences with distinct purposes: **CIS 400**, taken at the midpoint of the program, is a substantial team-based systems project that validates the two-year core before a student moves into specialization coursework. **CIS 599 (Cybersecurity Project)**, taken in the final semester, is the specialization's own capstone. Together they satisfy the major-project requirement in both degrees' ABET criteria.

## Degree Map

{{< degree-map >}}
<script type="module">
  const plan = {
  name: "Bachelor of Science in Cybersecurity",
  version: "Draft",
  theme: {
    color: "#512888",
    typeColors: { elective: "#6b6b6b" },
  },
  years: [
    {
      name: "Year 1",
      semesters: [
        {
          name: "Fall",
          courses: [
            { subject: "CIS", number: 115, name: "Introduction to Computing Science", hours: 2 },
            { subject: "CIS", number: 116, name: "Introduction to Programming", hours: 1 },
            { subject: "DEN", number: 161, name: "Engineering Problem Solving", hours: 1 },
            { subject: "CIS", number: 120, name: "Web Foundations", hours: 1 },
            { subject: "MATH", number: "XXX", name: "Logic and Sets", hours: 1, dur: 0.5, place: "start" },
            {
              subject: "MATH",
              number: "XXX",
              name: "Counting Finite Configurations",
              hours: 1,
              dur: 0.5,
              place: "end",
            },
            { subject: "ENGL", number: 100, name: "Expository Writing I", hours: 3 },
            { type: "elective", name: "Core Communication Requirement", hours: 3 },
            { type: "elective", name: "Social & Behavioral Sciences Requirement", hours: 3 },
          ],
        },
        {
          name: "Spring",
          courses: [
            { subject: "CIS", number: 260, name: "Foundations of Relational Databases", hours: 1 },
            { subject: "CIS", number: 200, name: "Programming Fundamentals", hours: 4 },
            { type: "elective", name: "Calculus (choose I, II, or III)", hours: 4 },
            {
              subject: "MATH",
              number: "XXX",
              name: "Recursive and Modular Computation",
              hours: 1,
              dur: 0.5,
              place: "start",
            },
            { subject: "MATH", number: "XXX", name: "Graphs, Trees, and Maps", hours: 1, dur: 0.5, place: "end" },
            { subject: "ENGL", number: 200, name: "Expository Writing II", hours: 3 },
          ],
        },
      ],
    },
    {
      name: "Year 2",
      semesters: [
        {
          name: "Fall",
          courses: [
            { subject: "CIS", number: 300, name: "Data and Program Structures", hours: 3 },
            { subject: "CIS", number: 301, name: "Logical Foundations of Programming", hours: 3 },
            { type: "elective", name: "Linear Algebra (MATH 350, 515, or 551)", hours: 3 },
            { subject: "CIS", number: 225, name: "Foundations of Computer Networks", hours: 1, dur: 0.5, place: "start" },
            { subject: "CIS", number: 251, name: "Foundations of Cybersecurity", hours: 1, dur: 0.5, place: "end" },
            { type: "elective", name: "Natural & Physical Sciences Requirement (with Lab)", hours: 4 },
          ],
        },
        {
          name: "Spring",
          courses: [
            { subject: "CIS", number: 140, name: "Foundations of Artificial Intelligence", hours: 1 },
            { subject: "CIS", number: 308, name: "C Language Laboratory", hours: 1 },
            {
              subject: "CIS",
              number: 401,
              name: "Software Design, Implementation, and Testing",
              hours: 3,
            },
            { subject: "ECE", number: 241, name: "Introduction to Electrical and Computer Engineering", hours: 3 },            
            { subject: "STAT", number: "XXX", name: "Computational Statistics", hours: 4 },
            { subject: "SOCIO", number: 211, name: "Introduction to Sociology", hours: 3 }
          ],
        },
      ],
    },
    {
      name: "Year 3",
      semesters: [
        {
          name: "Fall",
          courses: [
            { subject: "CIS", number: 450, name: "Computer Architecture and Operations", hours: 3 },
            { subject: "CIS", number: 501, name: "Software Architecture and Design", hours: 3 },
            { subject: "CIS", number: 505, name: "Introduction to Programming Languages", hours: 3 },
            { type: "elective", name: "Technical Writing (ENGL 415 or 516)", hours: 3 },
            { type: "elective", name: "Arts & Humanities Requirement", hours: 3 },
          ],
        },
        {
          name: "Spring",
          courses: [
            { subject: "CIS", number: 560, name: "Database System Concepts", hours: 3 },
            { subject: "CIS", number: 553, name: "Fundamentals of Cryptography", hours: 3 },
            { subject: "CIS", number: 575, name: "Introduction to Algorithm Analysis", hours: 3 },
            { subject: "CIS", number: 415, name: "Ethics and Conduct for Computing Professionals", hours: 3 },
            { subject: "CRIM", number: 550, name: "Cybercrime, Security, and Society", hours: 3 }
          ],
        },
      ],
    },
    {
      name: "Year 4",
      semesters: [
        {
          name: "Fall",
          courses: [
            { subject: "CIS", number: 551, name: "Fundamentals of Computer and Information Security", hours: 3 },
            { subject: "CIS", number: 525, name: "Introduction to Network Programming", hours: 3 },
            { subject: "CIS", number: "XXX", name: "Agentic Software Development", hours: 3 },
            { type: "elective", name: "Arts & Humanities Requirement", hours: 3 },
            { type: "elective", name: "Free Elective", hours: 3 },
          ],
        },
        {
          name: "Spring",
          courses: [
            { subject: "CIS", number: 599, name: "Cybersecurity Project", hours: 3 },
            { type: "elective", name: "Cybersecurity Elective", hours: 3 },
            { type: "elective", name: "Free Elective", hours: 3 },
            { type: "elective", name: "Required Communication Elective", hours: 3 },
            { type: "elective", name: "Unrestricted Elective", hours: 3 },
          ],
        },
      ],
    },
  ],
};
document.querySelector("degree-map").plan = plan;
</script>

**Math elective note**: choosing MATH 515 or 551 for the Year 2 math slot satisfies both the shared core's linear-algebra requirement and Cybersecurity's own math-elective requirement with a single course.

## ABET Cybersecurity Requirement Fulfillment

ABET's Cybersecurity criteria require at least 45 semester credit hours of computing and cybersecurity coursework, applying six crosscutting concepts across eight fundamental knowledge areas, plus at least 6 semester credit hours of mathematics covering discrete math and statistics.

**Re-checked against CIS 251's real, drafted learning objectives, 2026-08-04.** Every CIS 251 citation below was checked against its actual 7 SLOs and 8-week schedule (`content/course-designs/cis-251.md`) — see `specialization-model.md`'s "seed → deep spiral" section for the same check. CIS 251 is a broad, intro-level survey course — CIA triad, common threats/attackers, defensive best practices, risk/incident response, ethics/privacy/law, emerging tech/careers — not a course with explicit threat-modeling methodology, named least-privilege/trust-boundary concepts, or applied cryptography tied to the core's modular-arithmetic content. That changes which rows below it genuinely supports.

**Crosscutting concepts**

| Concept | Where it's applied |
|---|---|
| Confidentiality, Integrity, Availability | CIS 251 (SLO 2, the CIA triad by name), CIS 260 (access control), CIS 551 |
| Risk | CIS 251 (SLO 4, Week 6 risk management), CIS 551 |
| Adversarial thinking | CIS 251 (SLO 3, Week 4 threats/attackers — survey-level, not formal adversarial modeling), CIS 551, CIS 553 |
| Systems thinking | Woven throughout the core's data-structures, networking, and systems coursework (CIS 300, 225, 400, 450) |

**Eight fundamental areas**

| Area | Coverage |
|---|---|
| Data Security | CIS 260, CIS 251 (Week 2 authn/authz, Week 5 encryption/backups — generic, intro-level), CIS 553 |
| Software Security | CIS 400, CIS 551. **CIS 251 removed 2026-08-04** — its real content has no software-security material (no secure coding, no vulnerability classes like injection/buffer overflow); the earlier citation overclaimed |
| Component Security | CIS 300 (interfaces, contracts), CIS 501 — see faculty concerns below |
| Connection Security | CIS 225, CIS 525. (CIS 251's Week 3 — IP addresses, DNS, packets — touches this lightly, but CIS 225 already owns the depth here.) |
| System Security | CIS 400, CIS 450, CIS 551 |
| Human Security | CRIM 550, **CIS 251** (Week 4 — phishing, social engineering, insider threats is a direct, well-supported match; strengthened from "see faculty concerns below," this is one of CIS 251's strongest fits, not a thin one) |
| Organizational Security | CRIM 550, **CIS 251** (Week 6 — risk assessment and incident-response planning is org-level activity; a light but real contribution) — still the thinnest area even with this, see faculty concerns below |
| Societal Security | CRIM 550, SOCIO 211, CIS 415, **CIS 251** (Week 7 — ethics, privacy, regulations, responsible behavior is a strong, direct match; added 2026-08-04, previously missing from this row despite being one of CIS 251's clearest fits) |

**Advanced depth**: CIS 551, CIS 553, CIS 525, and the CIS 655/755 elective provide advanced cybersecurity coursework building on the crosscutting concepts and fundamentals above.

**Computing and cybersecurity credit hours**: the CIS-prefixed coursework in this map (shared core plus specialization) totals well over 50 semester credit hours, clearing the 45-hour floor with room to spare.

**Mathematics**: the discrete-math sequence (4 credits) and statistics course (4 credits) total 8 semester credit hours, clearing the 6-hour floor.

## ABET Computer Science Requirement Fulfillment

ABET's Computer Science criteria require at least 30 semester credit hours of computing coursework (including techniques and tools for computing practice, security and privacy principles, and the societal impacts of computing), of which at least 40 semester credit hours must be CS-specific — covering algorithms and complexity, computer science theory, programming language concepts, and software development in substantial depth; substantial depth in at least one general-purpose language; exposure to computer architecture, information management, networking, operating systems, and parallel and distributed computing; the study of computing systems at varying levels of abstraction; and a major project. Separately, at least 15 semester credit hours of mathematics and statistics are required, including discrete mathematics, probability, and statistics, at a rigor at least equivalent to introductory calculus.

**Algorithms, theory, languages, and software development**: CIS 300 and CIS 575 (algorithms and complexity); CIS 115, CIS 301, CIS 505, and CIS 220/225 (computer science theory — computability, formal languages, automata); CIS 505 (programming language concepts); CIS 400, CIS 501, and CIS 300's server-layer and concurrency work (software development).

**General-purpose language**: CIS 116 and CIS 200/300 provide sustained, substantial work in a single general-purpose language across three courses.

**Exposure areas**: computer architecture (CIS 115); information management (CIS 260, CIS 560); networking (CIS 225, CIS 525); operating systems and parallel/distributed computing — **corrected 2026-08-04**: CIS 220 gives a light, genuine OS-exposure touch ("browser as mini-OS"), but the deeper formalization this row used to attribute to CIS 220/CIS 300 core content was never actually built there (see `resources/reference/spiral-threads.md`'s correction note). Coverage instead rests on **CIS 525** in this map's required Year 4 sequence — but see the concern flagged below: unlike the AI Systems map, this degree hard-codes CIS 525 alone rather than the general Systems Elective choice (CIS 520/525/625), so it may not independently clear the OS-exposure half of this requirement the way CIS 520 or CIS 625 would.

**Abstraction across scales**: the core's progression from representation (CIS 115) through data structures (CIS 300) to systems and architecture (CIS 450, CIS 501) demonstrates computing systems at multiple levels of abstraction.

**Major project**: satisfied jointly by CIS 400 (core-level systems project) and CIS 599 (specialization capstone).

**Mathematics**: MATH 220 (calculus), the discrete-math sequence, STAT 410, and the Year 2 math elective (MATH 515 or 551) together total 15 semester credit hours, meeting the floor exactly.

**Security, privacy, and societal impact** (general-criteria requirement, not CS-specific): CIS 251, CIS 415, and CRIM 550.

## Concerns for Faculty

1. **MATH 221 (Calculus II) is not included in this map.** It appears in the currently-published Cybersecurity requirements, but neither ABET criteria requires it specifically, and no course in this map depends on it as a prerequisite. Removing it is a substantive change from the published curriculum and should be confirmed explicitly, not treated as incidental.
2. **The CS mathematics floor (15 SCH) is met exactly, with no margin.** Any future adjustment to the math sequence, the statistics course, or the Year 2 math elective should be checked against this floor before being made.
3. **Component Security and Organizational Security are the genuinely thin areas of the eight ABET Cybersecurity fundamental areas — Human Security is not.** CIS 251's Week 4 (phishing, social engineering, insider threats) is a direct, well-supported match for Human Security. Component Security has no CIS 251 support at all (that course has no component/architecture-level content) and still leans entirely on CIS 300/CIS 501's general contract/interface framing. Organizational Security gets a light, real boost from CIS 251's Week 6 (incident-response planning) but is still the thinnest of the eight — coverage still leans mostly on CRIM 550. Likely candidates for explicit attention remain CIS 551 (component/system security) and CIS 599 (organizational context, if the capstone project is scoped to include it).
4. **The dual-purpose capstone structure (CIS 400 + CIS 599) should be confirmed as satisfying both degrees' major-project requirements**, since CIS 400's scope is general systems work, not security-specific — the CS major-project requirement is clearly met, and the Cybersecurity major-project requirement rests on CIS 599 alone carrying that weight for the specialization.
5. **Total program length is 121 credit hours**, one hour above the currently-published 120-hour total. This matches the Computer Science degree's own total under this design and is not specific to Cybersecurity, but both should be reconciled together if 120 is a hard institutional ceiling.
6. **ABET operating-systems exposure for this specific degree map needs a direct check.** This map requires CIS 525 (Network Programming) alone in Year 4, rather than the general Systems Elective choice (CIS 520 Operating Systems I / CIS 525 / CIS 625 Concurrent Software Systems) the AI Systems map uses. The core content this exposure claim used to rest on (deep OS/concurrency formalization) was found to have no confirmed home anywhere in the core (`resources/reference/spiral-threads.md`, 2026-08-04). Confirm whether CIS 525 alone still clears the ABET OS-exposure bar for Cybersecurity, or whether this map needs a second required course from the Systems Elective list.
7. **New, 2026-08-04 — CIS 251's real content is narrower than earlier framing assumed, and this ripples beyond this table.** `specialization-model.md`'s "seed → deep spiral" section claims cyber upper-division courses (CIS 551, 553) can assume threat modeling, least privilege, trust boundaries, and applied cryptography with a modular-arithmetic tie-in from CIS 251 — none of which are in its real 7 SLOs or 8-week schedule (which covers CIA triad, threat/attacker survey, defensive best practices, risk/incident response, and ethics/privacy/law, at an intro-survey level throughout). That page has been corrected with a caveat; whether CIS 251 should be *redesigned* to actually carry that deeper content (matching the original design intent), or whether CIS 551/553 need to assume less and teach more themselves, is a real open decision for course-designer/faculty — not resolved by this correction.
