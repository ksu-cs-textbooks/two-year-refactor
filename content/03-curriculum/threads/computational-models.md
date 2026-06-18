---
title: "Computational Models & Error Handling"
pre: "T1. "
weight: 10
---

# Thread: Computational Models & Error Handling

> *Working draft for faculty review. A **spiral** deepens through escalating passes across blocks. This is the flagship spiral; one of nine spirals (alongside three lenses and one bounded practice).*

**In one line:** From naming that there’s more than one model, to comparing production fault-tolerance philosophies — with 'how does this model handle failure' as the connective idea.

---

## Character

FLAGSHIP. Merges two directives (computational models seeded throughout; errors as normative, compared across models) because how a model handles failure is one of its most important properties. Genuinely uncommon undergraduate content — most programs teach try/catch as the only model.

## Passes across the two years

| Block | Host context | What’s new at this pass |
|---|---|---|
| B1 (Y1 Fall) | CS-101/102 | Name that there is more than one model (imperative/sequential vs functional/declarative). Read your first stack trace — errors are ordinary, not shameful. |
| B2 (Y1 Fall) | CS-106 Web Foundations | Async/event-loop model via fetch; a failure looks different here (rejected promise) than B1’s sequential crash — first comparison point. |
| B3 (Y1 Spring) | CS-107/108 OOP | try/catch exception handling — the 'classical' model, named. |
| B4 (Y1 Spring) | CS-111 Systems & APIs | Network failures and timeouts — errors you don’t control; different stakes than your own bugs. |
| B5 (Y2 Fall) | CS-202 Database Design | Transactional rollback (atomicity) under concurrent access — a third failure model. |
| B6 (Y2 Fall) | CS-204 Security Fundamentals | Errors as attack surface (verbose stack traces leak info) — converges with Security. |
| B8 (Y2 Spring) | CS-208 Deployment & Operations | Production fault tolerance compared: try/catch vs Erlang/OTP supervision (“let it crash” + restart) vs circuit-breaker/retry. Conceptual — the point is that try/catch is one philosophy, not a law of nature. |

## Connections

- B8 converges with Algorithmic Thinking (slow under load) and with the Sociotechnical thread (blameless postmortem = the org-culture expression of 'errors are normative').

## Open questions for faculty review

1. Recursion sequencing note shared with the Algorithmic thread.
2. The OTP/supervision comparison (B8) is genuinely new conceptual content — confirm it fits a 1-credit course at conceptual depth.

---

*For how this lands in a specific block, see that block’s review file.*
