+++
title = "CIS XXX - Agentic Software Development"
weight = 9000
+++

## Course Description

This course introduces students to agentic software engineering: building software and systems with AI agents through disciplined, repeatable, and scalable practices rather than "vibe coding."

## Credit Hours

3 credits

## Course Prerequisites

Prerequisite: CIS 501

## Course Overview

The course begins by teaching students to implement a simple coding agent. LLM-based agents are themselves a computing platform: they operate through a set of primitives that includes calling an LLM with context, invoking tools, and receiving instructions from a human developer. Each step incurs costs and may introduce errors or security risks. To use agents effectively, students need to understand their anatomy, develop a mental model of their execution, estimate costs, and identify potential sources of failure and security vulnerabilities. This understanding also enables students to customize and extend agents for greater effectiveness and efficiency in a particular development context. The course also examines how agents interact with conventional development tools, such as testing frameworks and source code repositories, and how agentic development changes established practices or calls for new tools.

After learning how coding agents work and how to use them effectively in simple cases, students turn to an engineering-oriented methodology for working with agents. Earlier software engineering courses may have introduced processes, phases, and artifacts such as concepts of operations, requirements, plans, designs, implementation, verification, and validation. These practices can seem burdensome or irrelevant, especially on small projects completed individually or in small teams. In agentic development, however, they become increasingly important. Agents require clear guidance, and their work must be organized into consistent, reviewable artifacts that support evaluation and reliable handoffs among humans and agents. This course therefore reviews key software engineering processes and artifacts, and shows how they apply to agentic software engineering.   Most importantly, the course explores how conventional methodology needs to be rethought and modified to support agent-centric software engineering.

With this foundation in place, students undertake increasingly substantial development tasks. They learn to combine development processes, engineering artifacts, and agent capabilities into repeatable, effective workflows that replace improvisation with deliberate engineering practice. A central learning outcome is the ability to design agentic development workflows: decomposing a large project into steps or waves (process decomposition), dividing an architecture into manageable units (structural decomposition), producing reviewable outcomes, and organizing handoffs between phases, agents, and humans.

After establishing these engineering principles, students apply them to a larger project. They also learn to organize and direct agents during long-running tasks (agent loops) and to coordinate teams of agents.

For hands-on work, the course uses Claude Code as its primary platform. The principles and practices taught are intended to transfer to other coding agents, such as Codex.

## Course Goals and Learning Outcomes

1. Understand the behavior of Large Language Models (LLMs)
2. Understand the architecture of coding agents, how coding agents are built from LLMs, be able to build your own simple coding agent
3. Understand the role of an agent harness vs the role of a LLM in agentic software engineering tooling
4. Understand technical software engineering concepts including Specification, Realization, Verification, Validation, Requirements, Concept of Operations, Development Process, Planning, Assurance
5. Understand how conventional concepts of software engineering map to agentic-based development
6. Master repeatable methodologies for building, documenting, and assuring software systems via agentic development
7. Understand and predict costs and trade-offs when applying different agent models

## Course Schedule and Outline

Weeks 1-3: Basic concepts of LLMs and Coding Agents

Weeks 4-7: Software engineering principles, Applications of agents, Individual development projects

Weeks 8-15: Advanced agentic development concepts, Application of agentic development to large-scale software systems
