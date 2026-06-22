+++
title = "Computational Models"
weight = 60
ordinal = "1.2.6"
+++

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the flagship spiral; one of nine spirals (with three lenses and one bounded practice — 13 threads total).*

**In one line:** The landscape of ways to express computation — imperative, functional, declarative, concurrent — with 'how does each model handle failure' woven through.

---

## Character

FLAGSHIP. Reframed so the spine is the TAXONOMY of models rather than control flow (which it had drifted into). Error-handling is now a cross-cutting PROPERTY of each model, not the spine. Genuinely uncommon undergraduate content — most programs teach imperative + try/catch as the only model and never surface declarative, dataflow, logic/constraint, or actor models. The model taxonomy: imperative, functional, declarative (markup/query/logic-constraint), concurrent/reactive, and dataflow (data flowing through transformation stages). A message-queue/event-loop through-line unifies the concurrent/reactive/actor family — met concretely in the browser (B2), generalized to OS message passing and actor mailboxes (B8).

## Passes across the two years

| Block | Host context | What's new at this pass |
|---|---|---|
| B1 (Y1 Fall) | CS-101/102 / CS-103 | IMPERATIVE (steps that change state) & FUNCTIONAL (composition of transformations). Errors as ordinary (read a stack trace). Execution-model seed: a running program is a PROCESS the OS schedules (the grounding the concurrent models will need). |
| B2 (Y1 Fall) | CS-106 / CS-104 | DECLARATIVE introduced (HTML/CSS: state what, not how) + CONCURRENT/REACTIVE (async/event-loop). DATAFLOW seeded: transformation pipelines (parse → filter → reshape) as proto-dataflow. The event loop processes a QUEUE of callbacks/events — first encounter with message-queue mechanics; the browser as a MINI-OS (scheduling, origin isolation, workers, postMessage) is a concrete on-ramp to the OS concepts at B8. Failure looks different across models. |
| B3 (Y1 Spring) | CS-107/108 OOP | Control flow & exceptions within the imperative model (try/catch named). |
| B4 (Y1 Spring) | CS-111 Systems & APIs | DATAFLOW named: web-server request pipelines (parse → auth → route → handle → serialize → respond) and D3 data-join/method-chaining (client-side) — computation as data flowing through stages. Network failures/timeouts — errors you don't control. |
| B5 (Y2 Fall) | CS-201 SQL | DECLARATIVE QUERYING (SQL = the same 'state what, not how' idea as HTML, now for data). Transactional rollback (a failure model). |
| B7 (Y2 Spring) | CS-206 (light) | LOGIC & CONSTRAINT models — see and explore a small example (a few Prolog-style facts/rules + a query, or a small constraint problem a solver resolves). |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | OS grounding makes the concurrent-model choice meaningful: processes vs threads (shared vs isolated memory), preemptive (OS threads) vs cooperative (green threads) scheduling, and MESSAGE QUEUES / IPC — generalizing the B2 browser event loop (the browser was a mini-OS all along). Actor mailboxes ARE message queues, tying the actor model to its substrate. The ACTOR MODEL named explicitly (Erlang/OTP). Fault-tolerance compared: try/catch vs actor/supervision vs circuit-breaker. (Without the process/thread grounding, these are vocabulary, not a reasoned choice.) |

## Connections

- Declarative passes (HTML B2, SQL B5) connect to Boundaries & Contracts (a contract is declarative about behavior). Logic/constraint (B7) connects to Trustworthy Computing's predicate logic and the Optimization lens. The concurrent models (B8) rest on programmer-facing OS grounding (processes, threads, scheduling) seeded at B1 — this also supplies the ABET operating-systems exposure. B8 converges with Algorithmic Thinking (slow under load) and Sociotechnical (blameless postmortem).

## Open questions for faculty review

1. The logic/constraint example (B7) and actor naming (B8) are small new content — confirm they fit at conceptual/see-and-explore depth in 1-credit courses.

---

*For how this lands in a specific block, see that block's review file.*
