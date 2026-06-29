+++
title = "AP Cybersecurity Alignment Analysis"
weight = 50
ordinal = "6.5"
+++

> *Working draft for faculty review. Maps the College Board AP Cybersecurity curriculum (Course and Exam Description, 2026–27) against the two-year core to answer two questions: (1) where does a student who earned AP Cybersecurity credit already have foundation, and (2) where does the core **not** deliver what the AP course develops? The binding use case is the Cybersecurity specialization: this analysis identifies the pre-college foundation the specialization can build on and the gaps it must address.*

## About the AP Cybersecurity course

AP Cybersecurity launched as a pilot in 2024–25, expanded in 2025–26, and goes nationwide in 2026–27 with the first official AP exam in May 2027. The course is a year-long, high-school-level introduction organized into **five units** (roughly 32 instructional weeks) and assessed against **three spiraling core skills** — *Analyze Risk*, *Mitigate Risk*, and *Detect Attacks* — each weighted at 25%–40% of the AP exam score.

The five units:

| Unit | Title | Approx. weeks |
|---|---|---|
| 1 | Introduction to Security | 1–4 |
| 2 | Securing Spaces | 5–10 |
| 3 | Securing Networks | 11–18 |
| 4 | Securing Devices | 19–26 |
| 5 | Securing Applications & Data | 27–32 |

---

## Unit-by-unit coverage mapping

### Unit 1 — Introduction to Security

| AP topic | AP content | Core coverage | Block / course | Status |
|---|---|---|---|---|
| 1.1 Social Engineering | Phishing, spear-phishing, whaling; vishing; smishing; pretexting; urgency and intimidation tactics | Threat identification in CS-205 is the likeliest home; social engineering as a named category and its specific channel variants are not required. | B6 / CS-205 | **Partial** |
| 1.2 Authentication | Password attacks (brute force, credential stuffing, password spraying); strengthening with length and uniqueness; MFA (know/have/are factors) | CS-205 explicitly covers authentication and authorization. Attack specifics (brute force, credential stuffing, spraying) and MFA factors are not explicitly required. | B6 / CS-205 | **Partial** |
| 1.3 Public Networks | Public Wi-Fi interception risks; evil twin and rogue access points; VPNs as encrypted tunnels on untrusted networks | CS-209 (B7) covers TLS at the Session/Presentation layer, connecting to CS-205 applied cryptography — together grounding the VPN-as-encrypted-tunnel concept. Evil twin and rogue access points are Data Link / wireless-specific; CS-209 covers that layer conceptually (signals, framing, MAC addresses) but not wireless attack specifics. | B7 / CS-209; B6 / CS-205 | **Partial** |
| 1.4 AI-Powered Threats | AI-generated phishing (scaled, multilingual); deepfakes and voice cloning for impersonation; LLM prompt injection; training-data poisoning; AI-assisted malware and reconnaissance | Not covered. The bounded AI-Assisted Development practice addresses AI as a code-writing collaborator, not as an attack vector. | — | **Gap** |
| 1.5 AI in Defense | AI-powered threat detection and automated incident response | CS-212 (B8) covers high-stakes verification of AI-generated code for security, but AI as a defensive tool in cyber operations is not covered. | B8 / CS-212 (adjacent) | **Gap** |

---

### Unit 2 — Securing Spaces

| AP topic | AP content | Core coverage | Block / course | Status |
|---|---|---|---|---|
| 2.1 Security Foundations | CIA triad (confidentiality, integrity, availability); risk assessment (likelihood × severity matrix); risk response strategies (accept, transfer, mitigate, avoid); threat actor taxonomy (script kiddies to nation-states); six-phase cyberattack lifecycle (recon → weaponize → deliver → exploit → maintain → exfil); defense-in-depth | The Trustworthy Computing lens embodies defense-in-depth as a philosophy and CS-205 covers threat modeling, but none of these foundational frameworks — CIA triad, risk matrix, attack lifecycle, threat actor taxonomy — are explicitly named in the core. | B6 / CS-205 (adjacent) | **Gap** |
| 2.2 Physical Attacks | Tailgating; shoulder surfing; dumpster diving; card cloning and RFID skimming | Not covered anywhere in the core. | — | **Gap** |
| 2.3 Physical Protection | Physical access controls (locks, card readers, mantraps/vestibules, bollards); clean-desk policy; insider threat program | Not covered anywhere in the core. | — | **Gap** |
| 2.4 Detecting Physical Attacks | Security cameras; guards; motion sensors; placement and coverage strategy | Not covered anywhere in the core. | — | **Gap** |

Unit 2 is the largest single gap between the two curricula. The K-State core has a strong *software* security posture but no physical security content at all — by design, since the core is a programming and systems foundation rather than a security-operations curriculum.

---

### Unit 3 — Securing Networks

| AP topic | AP content | Core coverage | Block / course | Status |
|---|---|---|---|---|
| 3.1 Network Attacks | ARP spoofing and ARP poisoning; MAC flooding; DNS poisoning; DoS and DDoS; on-path (man-in-the-middle) attacks; packet sniffing | CS-209 (B7) covers ARP and MAC addressing (Data Link), IP addressing and routing (Network), TCP/UDP (Transport), and DNS (Application) — the protocol-layer foundation that makes ARP spoofing, MAC flooding, DNS poisoning, DoS, MitM, and packet sniffing comprehensible. The specific attack procedures, tools, and defenses are not required. | B7 / CS-209 | **Partial** |
| 3.2 Wireless Controls | Managerial and administrative controls; WPA2/3 and wireless authentication; SSID management; war driving awareness | CS-209 (B7) introduces the Data Link layer conceptually (signals, framing, MAC addresses). CS-205 (B6) applied cryptography grounds the WPA2/3 encryption model. Operational wireless security — SSID management, war driving, wireless access control policies — is not required. | B7 / CS-209; B6 / CS-205 (foundation) | **Partial** |
| 3.3 Network Segmentation | Network segmentation strategy; VLANs and VLAN tagging; DMZ architecture for public-facing services | CS-209 (B7) covers IP addressing, CIDR subnets, and routing — the Network-layer foundation for understanding why segmentation works and how subnets isolate traffic. VLANs (Data Link-level tagging) and DMZ as a named architectural pattern are not required. | B7 / CS-209 | **Partial** |
| 3.4 Firewalls | Stateless packet filtering; stateful inspection; next-generation firewalls (NGFW, deep packet inspection, application-layer filtering); writing and reading firewall rules | CS-209 (B7) covers IP and TCP/UDP with ports — exactly the layer on which stateless and stateful packet filtering operates. CS-210 (B8) covers security hardening before deployment. Firewall architecture (stateless vs. stateful vs. NGFW) and rule syntax are not explicitly required. | B7 / CS-209; B8 / CS-210 | **Partial** |
| 3.5 Monitoring | IDS vs. IPS (detect-and-alert vs. detect-and-block); SIEM (centralized log aggregation and correlation); network traffic analysis | CS-210 covers operational monitoring of a live system (deploy, monitor, operate). IDS/IPS and SIEM as specific security-monitoring architectures are not named. | B8 / CS-210 (partial) | **Partial** |

CS-209 OSI Networking Fundamentals (B7) resolves the foundational dependency that blocked this entire unit in earlier drafts. Students now arrive at the Cybersecurity specialization with the protocol theory — ARP, IP/CIDR, TCP/UDP, DNS, TLS — that makes Unit 3 concepts comprehensible. What the core still does not provide is the security-operations layer: specific attack procedures, wireless access management, VLAN administration, and firewall rule authoring. These belong in the first specialization course and can now be introduced against a foundation students actually have.

---

### Unit 4 — Securing Devices

| AP topic | AP content | Core coverage | Block / course | Status |
|---|---|---|---|---|
| 4.1 Malware | Nine malware types: virus, worm, trojan horse, ransomware, spyware, keylogger, logic bomb, rootkit, fileless malware; infection vectors | CS-205 covers threat identification generally; specific malware taxonomy (nine types and their propagation mechanisms) is not required. | B6 / CS-205 (adjacent) | **Partial** |
| 4.2 Authentication & Hashing | Four authentication factors (something you know/have/are/somewhere you are); password storage via cryptographic hashing; collision resistance and pre-image resistance; MD5, SHA-1 (deprecated), SHA-256, SHA-512 | CS-205 covers authentication and applied cryptography grounded in MATH-103 modular arithmetic; hashing for password storage is likely included. Specific algorithm names and hash properties (collision/pre-image resistance) are not required. | B6 / CS-205 + MATH-103 | **Partial** |
| 4.3 Device Hardening | Anti-malware and endpoint detection; patch management; host-based firewall; configuration hardening; least privilege; IoT security considerations; mobile device management (MDM) | CS-205 explicitly requires least privilege (extended to least data collection); CS-210 requires security hardening before deployment. Patch management, MDM, and IoT-specific controls are not required. | B6 / CS-205; B8 / CS-210 | **Partial** |
| 4.4 Detecting Device Attacks | Indicators of compromise (IoC); log analysis for device-level anomalies; detection controls and alerting | CS-210 covers operational monitoring; the blameless postmortem (B8/CS-211) instills incident-response culture. IoC as a named concept and device-level detection specifics are not required. | B8 / CS-210 (partial) | **Partial** |

---

### Unit 5 — Securing Applications & Data

| AP topic | AP content | Core coverage | Block / course | Status |
|---|---|---|---|---|
| 5.1 Application Attacks | SQL injection (untrusted input into database queries); XSS — reflected (Type I) and stored (Type II) cross-site scripting | CS-201/202 provide the SQL foundation needed to understand injection; CS-106 Web Foundations provides the DOM/web context for XSS. CS-205 threat modeling is the likeliest host for naming both as attack patterns, but they are not explicitly required. | B5 / CS-201–202; B2 / CS-106; B6 / CS-205 (adjacent) | **Partial** |
| 5.2 Access Controls | Role-based access control; authorization vs. authentication; principle of least privilege | CS-205 explicitly covers authentication, authorization, and least privilege. CS-202 covers access control as a database schema dimension. | B5 / CS-202; B6 / CS-205 | **Covered** |
| 5.3–5.4 Cryptography | Symmetric encryption (AES — shared secret); asymmetric encryption (RSA — public/private pair); key exchange; digital signatures and non-repudiation; PKI and certificate authority trust chains; HTTPS and TLS handshake | CS-205 covers applied cryptography grounded in MATH-103 modular arithmetic; symmetric and asymmetric concepts are likely included. Digital signatures, PKI, certificate authorities, and HTTPS are not explicitly required. | B6 / CS-205 + MATH-103 | **Partial** |
| 5.5 Input Sanitization | Input validation and sanitization as a secure-by-design coding practice; parameterized queries as SQL-injection defense; output encoding as XSS defense | Not explicitly required. CS-205 could address this under threat mitigation, but secure coding practices as a named category are absent from the core. | B6 / CS-205 (adjacent) | **Gap** |
| 5.6 Data Integrity | Hash-based integrity verification (file and message integrity); detecting data tampering through hash comparison; monitoring for data-integrity violations | CS-205 applied cryptography likely covers cryptographic hashing; hash-based integrity verification as a specific use case is not explicitly required. | B6 / CS-205 (likely) | **Partial** |

---

## The AP core skills and where the core develops them

| AP skill | Description (from CED) | Core development |
|---|---|---|
| **Analyze Risk** (25–40%) | Evaluate risk to organizational assets by identifying threats, vulnerabilities, and likelihood × impact | CS-205 threat modeling is the primary home. The Trustworthy Computing lens applies risk thinking wherever security is relevant. The core does not teach the formal risk-assessment frameworks (likelihood/severity matrix, risk response strategies) the AP course uses. |
| **Mitigate Risk** (25–40%) | Implement protective and deterrent controls across people, networks, devices, and applications | Covered at the *principle* level (least privilege, data minimization, hardening, trust boundaries as contracts). Physical, network, and many device controls are outside the core's scope. |
| **Detect Attacks** (25–40%) | Implement detection methods, monitor systems, analyze logs and network data as evidence | CS-210 operational monitoring covers the software-operations side. IDS/IPS, SIEM, IoC detection, and network traffic analysis are outside the core. |
| **Collaborate** | Work with others and with AI tools to accomplish tasks | Covered strongly — Sociotechnical Structure (B6 team project, B8 postmortem), Collaborative Development (CS-206), and the AI-Assisted Development bounded practice. |
| **Communicate Concepts** | Explain key cybersecurity concepts to technical and non-technical audiences | The Professional Practices lens (documentation) and Human-Centered Computing (B8) develop technical communication broadly; security-concept explanation is not specifically practiced. |

---

## Coverage summary

### Covered by the core (AP student arrives with this foundation)

| Topic | Core home |
|---|---|
| Authentication and authorization concepts | CS-205 (B6) |
| Principle of least privilege | CS-205 (B6); CS-202 (B5) |
| Data minimization as a design decision | CS-205 (B6); CS-202 (B5) |
| Access control as a schema dimension | CS-202 (B5) |
| Applied cryptography foundations (modular arithmetic) | CS-205 (B6) + MATH-103 (B3) |
| Errors as attack surface (verbose stack traces, information leakage) | Computational Models thread + Trustworthy Computing lens (B6) |
| Trust boundaries as explicit contracts | Boundaries & Contracts thread (B6 pass) |
| Security hardening before deployment | CS-210 (B8) |
| Operational monitoring of live systems | CS-210 (B8) |
| Re-identification risk from combined datasets | CS-208 (B7) |
| Collaborative incident retrospective culture (blameless postmortem) | CS-211 (B8) |
| OSI protocol stack theory (ARP, IP/CIDR, TCP/UDP, DNS, TLS as layers) | CS-209 (B7) |

### Partially covered (concept is in the core, AP depth not fully matched)

| Topic | What the core has | What's missing |
|---|---|---|
| Threat identification and modeling | CS-205 covers threat identification | CIA triad, attack lifecycle, threat actor taxonomy not named |
| Social engineering | CS-205 threat ID could encompass this | Channel-specific variants (phishing/vishing/smishing) not required |
| Malware | CS-205 threat ID | Nine-type taxonomy and propagation mechanics not required |
| Cryptographic hashing | CS-205 applied crypto | Algorithm names (SHA-256), hash properties not required |
| Symmetric/asymmetric encryption | CS-205 applied crypto | PKI, digital signatures, HTTPS/TLS not required |
| SQL injection / XSS | CS-201/202 + CS-106 prerequisite foundations | Named attack patterns not required |
| Device hardening | CS-205 least privilege; CS-210 hardening | Patching, anti-malware, MDM, IoT not required |
| Security monitoring | CS-210 operational monitoring | IDS/IPS, SIEM not named |
| Incident detection | CS-210 monitoring + CS-211 postmortem | IoC concept not named |
| MFA factors | CS-205 authentication | Know/have/are factor model not required |
| Network-layer attacks (ARP, MAC, DNS, DoS, MitM, packet sniffing) | CS-209 (B7) covers the protocols under each attack | Attack procedures, tools, and defenses not required |
| VPN as encrypted tunnel; public Wi-Fi risk | CS-209 (B7) TLS at Session/Presentation + CS-205 applied crypto | Evil twin / rogue AP wireless attack specifics not required |
| Network segmentation | CS-209 (B7) IP/CIDR subnet theory | VLANs (Data Link tagging) and DMZ as named architecture not required |
| Firewalls | CS-209 (B7) Network/Transport layer (IP, ports) + CS-210 (B8) security hardening | Stateless/stateful/NGFW architecture and rule writing not required |
| Wireless authentication (WPA2/3) | CS-209 (B7) Data Link conceptual + CS-205 applied crypto | Wireless-specific controls and administrative practice not required |

### Gaps — not in the core

| Topic | AP unit | Why it is absent from the core |
|---|---|---|
| CIA triad (named framework) | 2.1 | Core teaches trustworthiness as a lens, not through a named security-framework vocabulary |
| Risk assessment methodology (matrix, response strategies) | 2.1 | Core addresses risk implicitly in design decisions, not as a formal operational methodology |
| Defense-in-depth as an explicit strategy | 2.1 | The Trustworthy Computing lens *is* defense-in-depth in practice but never names it as a pattern |
| Threat actor taxonomy | 2.1 | Out of scope — the core is a programming and systems foundation, not a security-operations curriculum |
| Cyberattack lifecycle / kill chain | 2.1 | Same — security-operations framing not in the core's scope |
| Physical security (Units 2.2–2.4, ~10 weeks) | 2.2–2.4 | Entirely out of scope for a programming core |
| IDS/IPS and SIEM | 3.5 | Security-operations tooling, not covered in the core |
| Input sanitization / secure-by-design coding | 5.5 | Not explicitly required, though CS-205 threat mitigation could host it |
| AI as an attack vector (deepfakes, voice cloning, LLM manipulation) | 1.4 | The AI-Assisted Development bounded practice covers AI as a collaborator, not as a threat |

---

## Implications for the Cybersecurity specialization

The AP Cybersecurity mapping reveals two distinct gaps that the specialization must address:

**1. Security-operations vocabulary and frameworks.** The core develops a *design* security posture (least privilege, data minimization, threat modeling, hardening, trust boundaries) but not the *operational* vocabulary the AP course teaches: CIA triad, risk matrix, attack lifecycle, threat actor taxonomy, IDS/IPS, SIEM, IoC. A first-course in the Cybersecurity specialization should introduce these frameworks explicitly, positioning them as the professional language that organizes what the student already understands from the core.

**2. The OSI Networking foundation (CS-209, B7).** CS-209 OSI Networking Fundamentals is now placed in Block 7 (Y2 Spring), resolving the major prerequisite gap identified in earlier drafts. Units 3.1–3.4 of the AP course — previously entirely outside the core's scope — are now partially grounded: students arrive at the Cybersecurity specialization with the protocol theory (ARP, IP/CIDR, TCP/UDP, DNS, TLS) that makes network attacks, segmentation, and firewalls comprehensible. The residual gap is security-operations specifics: attack procedures, wireless access management, VLAN administration, and firewall rule authoring. These belong naturally in the first Cybersecurity specialization course, which can now teach them against a theoretical foundation students actually have. All Cybersecurity specialization courses that require network-layer knowledge should list CS-209 (B7) as a prerequisite.

**What the core does deliver.** A student completing the two-year core arrives at the Cybersecurity specialization with:

- Genuine applied-cryptography grounding (modular arithmetic → CS-205 applied crypto)
- Deep experience with access control and least-privilege as design decisions
- Security hardening as a practiced deployment step (CS-210)
- Trust-boundary thinking embedded across the entire Boundaries & Contracts thread
- Exposure to data-integrity concepts, re-identification risk, and errors as attack surface

These are *better* foundations for advanced cybersecurity coursework than the AP course provides, because the core develops them through building and operating systems rather than through survey study. The gap is operational breadth (frameworks, physical security, network tooling), not conceptual depth.

---

## Open questions for faculty review

1. **CS-205 scope.** The analysis repeatedly shows CS-205 as the "likeliest home" for AP concepts (social engineering, malware taxonomy, MFA, SQL injection/XSS, input sanitization). Before using this mapping as an advising or placement tool, confirm what CS-205 actually requires: a full syllabus review would resolve most of the "Partial" rows.
2. **OSI Networking prerequisite sequencing.** CS-209 (B7, Y2 Spring) resolves the placement question. The remaining question for the Cybersecurity specialization is sequencing: specialization courses that build on network-layer theory should list CS-209 as a prerequisite, which means they cannot be taken earlier than Y2 Spring. A student who enters the specialization immediately after completing the core is well positioned; a student seeking earlier entry would need a bridging arrangement.
3. **Placement credit.** Should AP Cybersecurity satisfy any core requirement or grant placement into the specialization? This mapping suggests it is *not* a core substitute (the AP course does not cover the programming, systems-thinking, and software-security-design content the core provides), but it may warrant placement into an accelerated track within the specialization.
4. **AP alignment for incoming students.** Students who took AP Cybersecurity will have strong operational vocabulary (CIA triad, attack lifecycle, threat actor taxonomy, network attack names) that the core does not develop. Acknowledging this in specialization advising — treating AP Cybersecurity as complementary rather than overlapping — would help those students understand the value of the core rather than feeling they've already "done security."
