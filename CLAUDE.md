# CLAUDE.md — Two-Year CS Redesign (Hugo textbook)

This file onboards Claude Code to this repository. Read it fully at the start of every session.

## What this repo is

A Hugo documentation site (theme: **hugo-relearn**) publishing the design of a competency-based, spiral two-year Computer Science foundational core and its specialization/service analyses, for K-State CS faculty review. Content is authored as markdown and rendered by Hugo/Relearn. This is **published course material** — correctness, consistency, and review discipline matter more than speed.

## Workflow rules (non-negotiable)

- **Never commit to `main`.** Every change goes on a branch and is delivered as a pull request for human review.
- Branch naming: `content/<short-topic>` (e.g. `content/add-block-files`, `content/abet-cs-update`).
- One logical change per PR. Keep PRs small enough to review carefully — this is a textbook, not a codebase; prose changes deserve line-by-line review.
- **Do not enable "Accept all" for content edits.** Surface each change for approval.
- In PR descriptions, summarize *what changed and why*, and link the relevant decision in the design log (see below).
- If a task is ambiguous, ask before acting. Do not invent curricular content, course numbers, credit counts, or ABET claims — these are load-bearing and faculty-reviewed.

## Front matter conventions (Relearn, TOML)

Use TOML fences (`+++ ... +++`), matching the existing repo style. Example chapter/section index:

```toml
+++
archetype = "chapter"
chapter = true
title = "Introduction"
pre = "<b>1. </b>"
weight = 1
ordinal = "1"
+++
```

Rules:
- **Section/chapter landing pages** are `_index.md` with `chapter = true` and `archetype = "chapter"`.
- **Regular content pages** are normal `.md` files; omit `chapter`/`archetype`, keep `title` and `weight`.
- `weight` controls sibling ordering in the left nav (ascending). Leave gaps (10, 20, 30…) so pages can be inserted later without renumbering.
- `pre` holds the numbered/bold nav label (e.g. `"<b>1. </b>"`). Preserve this pattern for chapters; match the numbering to the section's position.
- **`ordinal`** is a repo-specific field (not stock Relearn). Preserve it on every page and keep it consistent with the page's position. Do not remove it; if its purpose is unclear, ask rather than guess.
- Do not introduce new front-matter keys without confirming.

## Content structure (six chapters)

The site is organized into six top-level chapters, in a deliberate narrative order: what the curriculum *is*, how it's *assessed*, how it's *taught*, the actual *courses*, where it *leads*, and how it meets *external requirements*. The skeleton (`_index.md` section pages + stubs) may already be committed; confirm before restructuring.

```
content/
  _index.md                              (site landing)

  core-design/        (1) WHAT IT IS
    _index.md
    overview.md                          ← 00-program-overview.md
    blocks/_index.md + block-1..8 .md     ← blocks/*.md
    threads/_index.md + thread-*.md       ← threads/*.md (9 spirals + practice-ai-assisted)
    lenses/_index.md + lens-*.md          ← lenses/*.md (3 lenses)

  assessment/         (2) HOW IT'S JUDGED   [STUB — needs authoring]
    _index.md
    competency-model.md                  (TBD: program-level competencies; courses as evidence; parallel grade/competency tracks)
    signature-assessments.md             (TBD: Code Archaeology, Data Investigation, Design Review, Team/System projects)

  pedagogy/           (3) HOW IT'S TAUGHT   [STUB — needs authoring]
    _index.md
    spiral-method.md                     (TBD)
    developmental-experiences.md         (TBD)
    ai-discipline.md                     (TBD)

  course-designs/     (4) THE COURSES        [stubs pre-filled from content.js]
    _index.md
    block-1/.._index.md + per-course pages (cs-101.md, math-101.md, …)
    … block-2 … block-8 …                (30 courses total: 22 CS + 8 external)

  specializations/    (5) WHERE IT LEADS
    _index.md
    specialization-model.md              ← specialization-model.md
    cybersecurity.md                     ← specialization-cybersecurity-recommendation.md
    data-science.md                      ← specialization-data-science-recommendation.md
    ai-systems.md                        ← specialization-ai-recommendation.md
    software-architecture.md             [STUB — not yet drafted]

  analyses/           (6) EXTERNAL REQUIREMENTS
    _index.md
    abet-cs.md                           ← analysis-abet-cs.md
    kstate-replacement.md                ← analysis-kstate-replacement.md
    service-computer-engineering.md      ← service-computer-engineering.md
```

Chapter weights are 10/20/30/40/50/60; within a chapter, page weights leave gaps of 10. The `←` arrows show which source markdown migrates into each page.

**Three kinds of work, kept as separate PRs:**
1. **Structure** — commit the skeleton (section `_index.md` pages + stubs). Pure navigation; review the rendered left-nav in isolation.
2. **Migration** — fill stubs that have a source file (Core Design, Specializations chapters 1 & 5, Analyses 6). Largely mechanical: add nothing, just move the body under the existing front matter.
3. **Authoring** — genuinely new content with no source yet: the Assessment and Pedagogy chapters, the per-course *design* detail (outcomes/week-maps/assessments — the stubs only carry the working description), and the Software Architecture specialization. This is design work, not migration; do it deliberately and consult the design log.

When migrating: preserve the existing Relearn front matter (title, weight, ordinal, and pre/chapter on section indexes) and drop the source body in place of the `<!-- migrate from … -->` comment. Do not renumber weights/ordinals. Mermaid/MathJax: confirm the theme build has them enabled before relying on them.

## Design decision log (read this for the *why*)

The rationale behind every curricular choice — block frames, the 13-thread taxonomy, external-course pacing, OS grounding, ABET mappings, the specialization model — lives in the design log committed to this repo (`/resources/design-log.md`). **Consult it before changing curricular substance**, and append a short dated note when a substantive design decision is made here, so cross-session continuity holds. Claude Code has no memory of the chat sessions where this design was developed; the log is the source of truth for intent.

## Existing courses

The current CS department course offerings are found in `resources/existing-cs-courses.json`. Use this to inform analysis and program creation. If you need a course that does not seem to exist, ask for it.

## Domain guardrails

- Course codes in the core (CS-101 etc.) are **placeholders**; CIS/STAT/MATH numbers are **real K-State courses**. Don't conflate them.
- The core is **identical across all degrees**; only the upper division differs. Don't introduce per-degree core variation.
- Credit counts, ABET coverage claims, and "what the core covers" are faculty-reviewed facts. Change them only with explicit instruction, and flag downstream effects (e.g. a credit change ripples into the ABET accounting).

## Build / preview

- Local preview: `hugo server -D` (then review rendered nav order and front matter, not just raw markdown).
- Before opening a PR, run a local build (`hugo`) and confirm it succeeds and the nav renders as intended.
