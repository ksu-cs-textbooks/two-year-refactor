+++
title = "The Spiral Method"
weight = 10
ordinal = "3.1"
+++

> *Working draft for faculty review. This page describes the pedagogical principles behind the curriculum's spiral structure. For the block-by-block expression of those principles, see the block files in Chapter 1.*

## What a spiral curriculum is — and isn't

A spiral curriculum is one in which ideas **recur** — not as review, but as return. Each time a concept appears, the context is richer, the student's tools are sharper, and the encounter goes deeper. The alternative is coverage: teach a topic once, test it, and move on. Coverage is efficient but brittle; the spiral is slower but builds genuine understanding.

This two-year core is organized as a spiral. Thirteen named threads run across all eight blocks. No thread appears only once. The earliest pass at any thread is deliberately incomplete — sufficient for the current block's work, insufficient for what comes later. The later pass is not a re-explanation of what the student already heard; it is a genuine new encounter with the same idea, from a vantage point that didn't exist before.

Four design principles shape how the spiral works here.

---

## Principle 1: Practice precedes formal naming

Students encounter ideas through use before those ideas are formally named and analyzed. This is deliberate and consequential.

In Block 1, students use `git log`, `git diff`, and `git blame` to understand a codebase they didn't write. They are not told "this is version control" or "version control serves the following purposes." They use a tool, observe its behavior, and build intuition. By Block 2, when they use `git commit` and `git revert` as safety nets while repairing code, they have operational experience to ground the concept. By Block 4, when collaborative git (branches, PRs, code review) is introduced, they are not learning git — they are extending something they already know how to use.

The same pattern holds throughout:

| Idea | First practical encounter | Formal naming |
|---|---|---|
| Version control | B1 — git as a history-reading tool | B2 — commit/revert as a safety net for change |
| Correctness reasoning | B1 — asserts and logs to explore behavior | B2 — regression tests; B3 — pre/post-condition reasoning |
| Declarative programming | B1 — HTML/CSS as a reading substrate (the browser resolves layout from markup) | B2 — CS-106 names HTML/CSS explicitly as a DECLARATIVE model |
| Event-driven execution | B2 — async/event-loop via fetch | B4 — event-driven programming formalized as a structural pattern |
| Privacy and data minimization | B2 — "why are we asking for this?" in form fields | B6 — data minimization as a design principle with a name and an ABET anchor |
| Graph algorithms as optimization | B4 — spatial indexing structures | B7 — shortest path named explicitly as optimization under a metric |

The pattern is not accidental. When formal naming follows practice, students already have an experience to attach the concept to. When naming precedes practice, students memorize a definition that has no grip.

---

## Principle 2: Ideas return through genuine generalization, not harder repetition

The spiral would fail if each return were simply a harder version of the same thing. "Here is sorting again, but now with larger arrays" is not a spiral — it is repetition with harder parameters. A genuine spiral return is a **generalization**: the new encounter shows that the old concept was a special case of something larger.

The Data Structures & Representation thread is the clearest example:

| Block | What's new | Why it's a generalization |
|---|---|---|
| B1 | Bits, booleans, integers | The most primitive representation |
| B3 | Lists, stacks, queues as ADTs | A sequence is a generalization of a single value |
| B3–B4 | Trees, hierarchies | A tree is a generalization of a sequence (sequences are degenerate trees) |
| B4 | Hashing | A generalization of direct lookup; trees and hash tables both implement associative maps, but with different cost profiles |
| B5 | Relational data | A generalization of hierarchical data (a table is a flat projection; joins recover relationships) |
| B7 | Graphs | A generalization of trees (a tree is a connected acyclic graph); documents and NoSQL are generalization of the relational model |

By Block 7, a student who traces this thread has moved from the most primitive representation (a single bit) to the most general (an arbitrary graph). Each step is a real mathematical generalization — not a restatement. A student who followed the thread can articulate why each generalization was necessary: what the previous representation could not express that forced the move.

This principle applies to every thread. Code Comprehension moves from "make it work" (B1) to "understand others' code" (B2) to "organize for others to read" (B3) to "reason formally about correctness" (B7). Computational Models moves from "two paradigms exist" (B1) to "failure looks different in each model" (B2–B5) to "models have formal properties" (B7). Each return is an expansion of scope, not a harder drill.

---

## Principle 3: Threads are designed to converge

Thirteen threads running independently would produce fragmentation, not coherence. The spiral's threads are designed to **meet** at certain blocks — points where independently developed ideas formalize together and reinforce each other. These convergence points are the strongest evidence that the design is integrated rather than assembled.

**Block 1** is the first convergence: four "reading tools" arrive simultaneously. Git history, asserts/logs, documentation, and the AI explainer all converge on the Code Archaeology assessment that formalizes in B2. Separately, each tool is a minor skill. Together, they form a coherent reading practice.

**Block 6 — Build Responsibly** is the major convergence of Year 2. Testing, security, collaboration, team-facing documentation, and errors-as-attack-surface all formalize at once, unified by the "responsible development" frame. This is not coincidence — these ideas are separately introduced in B1–B5 precisely so they can converge here. A student who hasn't practiced writing tests (B2), hasn't seen data minimization (B2), and hasn't used git collaboratively (B4) cannot productively engage with B6's responsibilities. The convergence is load-bearing.

**Block 8** is the terminal convergence: production concurrency, real-bottleneck performance, fault-tolerance, hardening, versioning, and the blameless postmortem all land together as the program's final pass. The blameless postmortem is not a new idea introduced at B8 — it is the B6 "responsibility" frame applied after the fact, when the system is live.

The convergence points serve a second purpose: they validate, for the student, that the threads they have been developing separately are aspects of a single professional stance. Testing is not a separate skill from security — both are expressions of the same underlying question, "Can this be trusted?" The convergence points name that connection explicitly.

---

## Principle 4: The spiral is a transfer design

The cognitive science rationale for a spiral curriculum is **transfer**: the ability to apply a learned idea in a novel context. Transfer is how learning becomes capability, and it is notoriously hard to teach directly. The spiral is an indirect route to transfer — by encountering the same idea in multiple, structurally different contexts, students develop representations that are not tied to any single context, and can therefore be applied in new ones.

In this curriculum:

- Git appears first as a history-reading tool (B1), then as a safety net (B2), then as a collaboration protocol (B4), then as a contribution workflow on a production codebase (B6). A student who has used git in all four contexts does not have a "git skill" — they have a model of version control that they can apply in any context, including ones not encountered in the curriculum.

- Boundary and contract thinking appears in ADT interfaces (B3), API design (B4), schema design (B5), security trust boundaries (B6), and integration design (B7). By B7, "what is the contract at this boundary?" is a question a student asks automatically, in any context — not because they were taught to ask it, but because they have asked and answered it in five different forms.

- The computational model vocabulary (imperative, functional, declarative, concurrent) appears first in B1 as a naming of "more than one model exists," recurs as students implement in each paradigm, and is invoked as a design tool in B7 and B8 when students choose which model fits a given problem. By B8, students do not choose a paradigm because it is the one they know — they choose it because it is the one that fits.

**The transfer/exit checkpoint** at the end of Year 1 (Block 4) is a structural expression of this principle. A student who exits after four blocks has a coherent foundation — not complete, but transferable. They can read code they didn't write, repair it, model it, and structure it. They can take that capability to a transfer institution, a co-op, or an internship and apply it in contexts the curriculum did not anticipate. Year 2 continues and deepens the same foundation; it does not unlock it.

---

## What the spiral is not

The spiral is not the same as "everything is connected." Not all threads converge, not all ideas return with equal depth, and not all blocks are equally dense. The design makes deliberate choices about what recurs and what does not. The Optimization lens, for example, is named where it arises organically (algorithmic complexity in B4, graph shortest path in B7) rather than being forced into every block. The spiral disciplines those choices — an idea recurs when the recurrence is a genuine generalization; it does not recur to produce the appearance of connection.

The spiral is also not an excuse for incompleteness. The first pass at a thread must be sufficient for the work of that block, not merely a teaser for the later pass. Students must be able to use git as a reading tool in B1, even though they will use it as a safety net in B2. Each pass must stand on its own within its block, while preparing the ground for the next.
