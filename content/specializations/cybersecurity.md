+++
title = "Cybersecurity"
weight = 20
ordinal = "5.2"
+++

> *Working draft for faculty review. Unlike the A.I. and Data Science recommendations, **a Cybersecurity degree already exists at K-State** — this document re-expresses it on the shared two-year core and checks it against ABET's cybersecurity criteria. It is the worked example that first revealed the specialization model. Core course codes are placeholders; CIS numbers are actual K-State courses.*

## Premise

K-State's existing Cybersecurity degree already has the structure the specialization model predicts: its first ~23 credits are identical to the CS sub-500 CIS block (the common core), followed by a security-specific upper division. This document re-expresses that degree on the redesigned core and verifies ABET alignment. Of the four specializations, Cybersecurity is the **strongest fit** — both because the core's security emphasis was always its strongest on-ramp, and because ABET's cyber criteria reward the systems-thinking the core is built on.

## What the core already provides (the on-ramps)

Cyber-bound students arrive having spiraled through:

- **Trustworthy Computing** (lens, primary) — security, privacy, and ethics asked throughout, formalized in Block 6.
- **Block 6 "Responsible Development"** — a dedicated security course (CS-204): authentication, authorization, threat modeling, applied cryptography (grounded in MATH-103 modular arithmetic), least privilege, least data collection.
- **Correctness & Verification** — secure, correct code.
- **Boundaries & Contracts** — trust boundaries as contracts about what each side may assume.
- **Computational Models** — errors as attack surface.
- **Sociotechnical Structure** + **APIs & Networked Systems** — systems and network grounding.

## Specialization stack — from the existing cyber degree

These are real, current K-State courses — the cyber specialization already exists:

| Course | Role |
|---|---|
| **CIS 525 Network Programming** | Connection security; builds on the core's networked-systems thread |
| **CIS 551 Fundamentals of Computer & Information Security** | Software/system security; builds on the core's B6 floor |
| **CIS 553 Fundamentals of Cryptography** | Data security; the deep spiral of the B6 applied-crypto seed |
| **CIS 655 / 755 Systems Security** | System security depth (restricted elective) |
| **CIS 599 Cybersecurity Project** | Capstone (ABET major project) |
| **CRIM 550 Cybercrime, Security & Society** | Human/organizational/societal security context |
| **SOCIO 211 Introduction to Sociology** | Societal context |

## Seed → deep spiral

Because the core seeds security thoroughly, the specialization courses start from a higher baseline. The cleanest example is the three-stage cryptography spiral: **MATH-103 (modular arithmetic) → B6 (applied/conceptual crypto) → CIS 553 (cryptographic rigor).** CIS 551 can assume authn/authz, threat modeling, and trust boundaries from B6 and move to security architecture and defense-in-depth. CIS 525 can assume networked-systems fluency and focus on network *security*. (Caveat from the specialization-model analysis: CIS 553 needs more number theory than MATH-103 provides — the year-3 MATH 506 Number Theory elective is the natural feeder.)

---

# ABET Accreditation Mapping

ABET's cybersecurity criteria require **at least 45 semester credit hours of computing and cybersecurity coursework** applying six crosscutting concepts and covering eight fundamental areas, plus advanced depth — and **separately, at least 6 SCH of mathematics** (discrete math and statistics).

## Crosscutting concepts (applied throughout)

| Crosscutting concept | Where it lives | Status |
|---|---|---|
| Confidentiality, Integrity, Availability | Core B6 (authn/authz), Trustworthy Computing lens, B5 access control | Covered |
| Risk | Core B6 threat modeling; B7 design-under-uncertainty | Covered |
| Adversarial thinking | Core B6 (threat identification, errors-as-attack-surface) | Covered — the security mindset is explicit in B6 |
| Systems thinking | The core is *built* on it — Sociotechnical Structure, Boundaries & Contracts, "structure across scales" | **Covered strongly** — a core ethos, not just a topic |

These are applied *throughout*, which aligns philosophically with the core's lens approach — cyber's crosscutting concepts and the core's woven-throughout design are the same shape.

## The eight fundamental areas

| Area | Coverage | Status |
|---|---|---|
| Data Security (rest / processing / transit) | Core B5 (data at rest, access control) + B6 (applied crypto) + data minimization; CIS 553 deepens | Covered |
| Software Security | Core B6 (secure coding) + Correctness & Verification; CIS 551 deepens | Covered |
| Component Security (design/procure/test/analyze/maintain) | Core Boundaries & Contracts (interfaces) + testing | **Partial** — component security as a named area (supply chain, component analysis) needs explicit specialization coverage |
| Connection Security (physical + logical) | Core APIs & Networked Systems + trust boundaries; CIS 525 deepens; OSI unit (deferred) | Covered |
| System Security | Core B8 (production hardening) + Sociotechnical; CIS 655/755 deepens | Covered |
| Human Security (behavior, privacy, threat mitigation) | Core Human-Centered Computing + Trustworthy Computing (privacy); CRIM 550 | **Partial** — security-specific human factors (social engineering, usable security) need explicit cyber coverage |
| Organizational Security (governance, risk mgmt, mission) | Core Sociotechnical (orgs); CRIM 550 | **Partial** — governance, compliance, and risk management are specialization topics not in the core |
| Societal Security (broad societal impact) | Core Trustworthy Computing (ethics); **CRIM 550 Cybercrime, Security & Society**; SOCIO 211 | Covered — the degree's context courses serve this directly |

## Mathematics (≥6 SCH: discrete + statistics)

The core's embedded discrete (MATH-101–104) and statistics (STAT-101–104) **easily clear** the 6-credit floor — the lowest mathematics bar of the four specializations. (Cryptography's number-theory need is a specialization prerequisite beyond this minimum, met by the year-3 MATH 506 feeder.)

## The 45-credit floor

Cybersecurity clears its 45 SCH the most comfortably of the four, because ABET counts **"computing *and* cybersecurity coursework"** — broader than data science's "data science coursework" or A.I.'s "A.I. coursework." Much of the general-CS core qualifies, so the core contributes generously, and the cyber specialization stack plus context courses carry the rest with room to spare.

## Gaps to close for ABET

1. **Component Security** — add explicit coverage (supply chain, component procurement/analysis); currently only touched via boundaries and testing.
2. **Human Security** — add security-specific human factors (social engineering, usable security) beyond the core's HCI and privacy.
3. **Organizational Security** — add governance, risk management, and compliance; partially served by CRIM 550 but needs cyber-specific treatment.
4. **Number theory for cryptography** — plan the MATH 506 feeder for CIS 553 (beyond the ABET math minimum, but needed for the crypto course).

## Bottom line

Cybersecurity is the best-fit specialization for ABET, for two reasons the criteria make explicit: the **crosscutting concepts** (especially systems thinking) map onto the core's deepest ethos rather than onto bolted-on topics, and the **45-credit floor is the easiest to clear** because computing coursework counts broadly. The gaps are the three "softer" knowledge areas — **Component, Human, and Organizational Security** — which pure-CS cores typically underserve; here the existing degree's context courses (CRIM 550, SOCIO 211) plus targeted specialization coverage close them. This specialization is the most accreditation-ready of the four, which is fitting, since it is the one that already exists and the one whose on-ramp the core was always strongest for.
