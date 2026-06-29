---
title: "Systems and Infrastructure"
pre: "4. "
weight: 40
---

### Analyze System Behavior

**I can investigate the behavior of computing systems by examining interactions among software, hardware, networks, and data.**

I explain system performance, reliability, and resource utilization using evidence gathered from observation and measurement.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B1 | CS-103 | Foundation — stack/heap memory model; "a running program is a PROCESS the OS schedules"; first named encounter with system execution mechanics |
| B2 | CS-106 | Browser as mini-OS — tracing async requests through the event loop; origin isolation; web workers as concurrent processes; postMessage as IPC |
| B4 | CS-111 | Client-server dataflow — tracing a request through parse → auth → route → handle → serialize → respond; event-driven architecture formalized |
| B4 | CS-112 | Big-O as a tool for analyzing performance characteristics theoretically |
| B8 | CS-210 | Primary home — full memory hierarchy (cache, locality, virtual memory, thrashing); OS internals (processes vs. threads, preemptive vs. cooperative scheduling, kernel vs. user space); concurrency model behavior; performance analysis on a real deployed bottleneck |

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Trace execution through a model — given a system description, trace interactions and explain observed behavior |
| Independence | Unscaffolded system investigation — given a system and a symptom, investigate and explain without guided prompts |
| Adaptation | Production system analysis (CS-210) — explain a live performance bottleneck using monitoring data; reconcile theoretical and empirical behavior |
| Leadership | TA/LA leading system analysis sessions; leading blameless postmortems |

**Recurring type:** System Analysis Task — deepens from stack/heap trace (B1) through production bottleneck diagnosis using monitoring data (B8). Complementary to Code Archaeology: Code Archaeology traces behavior through code; System Analysis Task traces behavior through system interactions and operational signals.

---

### Manage Computing Environments

**I can configure and operate computing environments that support software development, deployment, and maintenance.**

I establish and manage the tools, services, dependencies, and resources needed for effective system operation.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B2 | CS-105 | Git setup and configuration — first explicit tool configuration in the program |
| B3 | CS-107 | Type checker and linter configuration — static analysis tools as part of the development environment |
| B6 | CS-204 | Test runner configuration — setting up automated test environments, not just writing tests |
| B6 | CS-206 | Collaborative toolchain — shared Git workflow configuration, branch protection, code review tooling |
| B8 | CS-210 | Primary home — containers as environment abstraction; dependency management; production configuration; monitoring and logging tooling; hardening before live |

Note: automated evidence (IDE telemetry, git logs) captures environment *use* but not environment *configuration and management* — this sub-competency requires direct assessment to demonstrate beyond Application level.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Guided environment configuration — set up a development or test environment to a provided specification |
| Independence | Open-ended environment configuration — given a system and its requirements, determine and configure an appropriate environment |
| Adaptation | Container-based deployment (CS-210) — configure a production environment with real security, dependency, and operational constraints |
| Leadership | TA/LA supporting peers with environment setup and toolchain issues; writing and maintaining team tooling documentation |

**Recurring type:** Environment Configuration Task — deepens from single personal tool configuration (B2) through production-grade container and secrets management (B8).

---

### Deploy Operational Systems

**I can deploy, monitor, and maintain software systems in operational environments.**

I prepare systems for use, manage releases, and support ongoing operation while addressing reliability, security, and performance concerns.

**Primary evidence contexts:**

| Block | Course | Work |
|-------|--------|------|
| B4 | CS-111 | Conceptual seed — client-server decomposition makes "where does each component run?" a named question |
| B6 | CS-204 | Test suite as pre-deployment validation gate |
| B6 | CS-206 | Git PR workflow as release mechanism — merge to main as a deployment trigger; semantic versioning as release communication |
| B8 | CS-210 | Primary home — containerized deployment; monitoring and logging; operational runbooks; harden-before-live; API versioning as backward-compatibility contract; fault-tolerance (actor model, circuit breakers); performance analysis under real load |
| B8 | CS-211 | System Integration Project — deploy for real user acceptance testing; blameless postmortem as operational retrospective |

Note: this sub-competency is concentrated at B8. The earlier touchpoints are seeds. This is appropriate — deployment requires security, testing, and environment management foundations that are not complete until B6–B8.

**Assessment types by level:**

| Level | Assessment type |
|-------|----------------|
| Application | Guided deployment — deploy a pre-built application to a specified environment following provided steps |
| Independence | Open-ended deployment — given a system, determine and execute an appropriate deployment strategy without step-by-step guidance |
| Adaptation | System Integration Project (B8) — deploy a novel multi-component system with real reliability, security, and performance constraints; monitor and respond to live issues |
| Leadership | TA/LA leading deployment workshops; writing operational runbooks for team use; leading incident response and blameless postmortems |

**Recurring type:** Deployment Task — starts with release tagging (B6) and deepens through production multi-component deployment with postmortem (B8).
