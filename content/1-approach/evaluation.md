+++
title = "Evaluation Strategy"
weight = 30
ordinal = "1.3"
pre = "<b>1.3. </b>"
+++


These instruments will compare student learning under the legacy B.S. in CS with learning under the redesigned curriculum, at the cohort level. They will not be used to certify individual students. That is the use most concept inventories were built for, so the rigorously validated ones can be adopted as they are.
 
**Recommended battery.**
 
- **Knowledge:** SCS1 (CS1), BDSI (data structures), CAOS or BLIS (statistics), DLCI (digital logic, if it is in the core), and CCI (entry to the Cybersecurity track).
- **Affective panel:** the Steinhorst programming self-efficacy scale, the Computing Attitudes Survey, the Mahadeo–Hazari–Potvin computing identity items, and the 2026 SIGCSE belonging survey.
**Most urgent: collect legacy baseline data now.** Every legacy cohort that goes untested is data that cannot be recovered.
 
1. Request access to the secure instruments this fall. That means the SCS1 Google Group and the BDSI, DLCI and CCI authors.
2. Test current first- and second-year students in spring 2027.
3. Build local instruments for the gap areas (discrete math, OOP) and pilot them on legacy students before the old curriculum ends.
Two or three legacy cohorts support an interrupted time series. That design is much stronger than a single before/after comparison.
 
## Evaluation design
 
The strongest feasible design is an interrupted time series. It compares several legacy cohorts with several new-curriculum cohorts on the same instruments, at the same program milestones, under the same conditions.
 
- **Multiple legacy cohorts.** They show how much scores drift from year to year without any curriculum change. A shift at the transition then has to exceed that drift. One legacy cohort cannot separate the curriculum effect from an unusual year.
- **Milestones, not course names.** A spiral curriculum spreads topics across courses. "End of CS1" in the legacy program may not cover the same material as its nearest counterpart in the new one. Testing both programs at entry, end of year 1, and end of year 2 compares learning rather than content timing. It also shows whether the spiral delays some outcomes and then catches up.
- **Retention as its own outcome.** Give SCS1 again at the end of year 2 in both curricula. The spiral's central claim is revisiting and retention, and a second SCS1 tests that claim directly. A legacy student who finished CS1 eighteen months earlier is the right comparison.
- **Identical administration conditions.** On low-stakes tests, a change in student motivation can swamp the curriculum effect. Keep these the same for every cohort:
    - incentive (e.g., participation credit, not graded on correctness)
    - setting and proctoring
    - time limit
    - instrument version
    - use of the full instrument, never subsets
- **Freeze the battery.** Don't swap instruments partway through. If a better instrument appears, such as the SCS1-based CS1 assessment in development, run it alongside the original for at least one overlapping cohort.
- **Covariates at entry.** Record these for every student:
    - prior programming experience and high school CS coursework
    - math placement
    - transfer status
    - first-generation status and demographics (for disaggregation)
    - Kansas K-12 outreach participation
    - self-reported generative AI use
## Administration schedule
 
Every cohort, legacy and new, takes the same instruments at the same four milestones. The SCS1 retest at the end of year 2 is the key addition, because it tests the spiral's retention claim.
 
The **affective panel** is the Steinhorst self-efficacy scale, CAS, the computing identity items, and the belonging survey.
 
**Core (all students)**
 
| Milestone | Instruments |
| --- | --- |
| Entry (start of year 1) | Covariate survey; affective panel. No SCS1 pretest, because of its floor effect with novices. |
| End of year 1 | SCS1, full 27 items; affective panel; CAOS or BLIS if statistics is taught in year 1 |
| **End of year 2 (core exit)** | **SCS1 again, to measure retention**; BDSI; CAOS or BLIS; DLCI if taught; local discrete math and OOP items; AILIT for all students; affective panel |
 
**Tracks (years 3–4)**
 
| Track | Instruments |
| --- | --- |
| Cybersecurity | CCI after the first security course; CCA at graduation |
| AI | AILIT retest. No validated technical ML concept inventory exists. |
| Data Science | BLIS or CAOS retest; DLSES. No validated technical data science concept inventory exists. |
| CS | DPCI (preliminary); local algorithm items |
| All tracks | Affective panel again at graduation |
 
Legacy students have no tracks. Give the track instruments to legacy students at the equivalent point, for example CCI after their first security course, and compare them with the matching new track.
 
**Legacy baseline plan for 2026–27**
 
| When | Who | What |
| --- | --- | --- |
| Oct–Nov 2026 | Program team | Request SCS1, BDSI, DLCI, CCI and CCA access. Submit the IRB protocol, with consent for publication. Draft the covariate survey. |
| Spring 2027 | Current year 1 (legacy) | End-of-year-1 battery, plus the covariate survey. The fall 2026 entry window has passed, so collect covariates retrospectively. |
| Spring 2027 | Current year 2 (legacy) | End-of-year-2 battery, including the SCS1 retest. Pilot the local discrete math and OOP items. |
| Spring 2027 | Legacy students in security, stats and upper-level courses | CCI, CAOS or BLIS, and AILIT, at the milestones matching each new track. |
| Fall 2027 onward | Each entering cohort | Full schedule. Repeat each year until at least two new-curriculum cohorts have reached the end of year 2. |
 
## Instruments by topic
 
Each entry gives what the instrument measures, its validity evidence, how to get it, and how well it suits cohort comparison.
 
### Introductory programming
 
**SCS1 (Second CS1 Assessment).** 27 multiple-choice items in pseudocode, 60 minutes, isomorphic to FCS1.
 
- **Evidence:** correlated with FCS1 (n = 183), think-alouds, and an IRT reanalysis (Xie et al., SIGCSE 2019). It is hard: 22 of 27 items were classified hard, and four items are too difficult as a pre-test.
- **Citations:** Parker, Guzdial & Engleman, ICER 2016, [doi:10.1145/2960310.2960316](https://doi.org/10.1145/2960310.2960316). Retrospective: Parker, Guzdial & Tew, ICER 2021, [doi:10.1145/3446871.3469744](https://doi.org/10.1145/3446871.3469744).
- **Access:** free on request through the authors' Google Group; no redistribution.
- **Fit:** good at the group level. The difficulty compresses scores and lowers sensitivity to small cohort differences, so use the full instrument and IRT scoring. It is unsuitable as an entry pre-test.
**FCS1.** The original, and deliberately restricted. Use SCS1 instead.
 
**CS1 assessment in development.** Parker et al., SIGCSE TS 2026, [doi:10.1145/3770761.3777236](https://doi.org/10.1145/3770761.3777236). It is subscale-based and adaptable. If it is released mid-study, run it alongside SCS1 rather than replacing it.
 
### Data structures
 
**BDSI (Basic Data Structures Inventory).** 13 pseudocode items covering lists, trees, stacks and sets, about one hour.
 
- **Evidence:** 99 interviews at up to five institutions and an open-ended pilot with 408 students. A single-factor CFA fit well, and Ferguson's delta was 0.96. Multi-institution norms are in TOCE 22(1), [doi:10.1145/3470654](https://doi.org/10.1145/3470654).
- **Citation:** Porter et al., ICER 2019, [doi:10.1145/3291279.3339404](https://doi.org/10.1145/3291279.3339404).
- **Access:** from the authors, or on LASSO.
- **Fit:** good at the group level. The 13 items are fine for comparing means. It does not cover functional paradigms. LASSO data show transfer students score lower, so disaggregate by transfer status.
**Recursion and algorithms (partial validation).**
 
- Basic Recursion CI: Hamouda et al., 2017, [doi:10.1080/08993408.2017.1414728](https://doi.org/10.1080/08993408.2017.1414728).
- Dynamic Programming CI: [arXiv 2411.14655](https://arxiv.org/abs/2411.14655). Upper-division, n = 172.
Use either only as a secondary outcome.
 
### Digital logic
 
**DLCI (Digital Logic Concept Inventory).** Built with a Delphi process, misconception interviews, and multi-institution classical test theory. See Herman, Zilles & Loui, *Computer Science Education*, 2014.
 
The developers say it is valid only as a post-test. Give it after the systems or architecture course in both curricula, and use the full instrument, since short subsets have produced α ≈ .42.
 
### Cybersecurity
 
**CCI (Cybersecurity Concept Inventory).** 25 items, about 45 minutes. Validated with 354 students from 29 institutions using CTT and IRT. Poulsen et al., TOCE 2022, [doi:10.1145/3451346](https://doi.org/10.1145/3451346).
 
**CCA (Cybersecurity Curriculum Assessment).** 25 harder items, validated with 193 students at seven institutions. SIGCSE TS 2023, [doi:10.1145/3545945.3569762](https://doi.org/10.1145/3545945.3569762).
 
Both are restricted; request them from the authors. Use CCI after the first security course and CCA at graduation.
 
### Statistics
 
**CAOS.** 40 items, α = 0.82 with 1,470 students at 33 institutions. See delMas et al., *SERJ* 6(2), 2007. Available through ARTIST.
 
**BLIS.** 37 items, α = .83, N = 940, IRT scoring. See Ziegler & Garfield, *SERJ* 17(2), 2018, [doi:10.52041/serj.v17i2.164](https://doi.org/10.52041/serj.v17i2.164). Open access and closer to modern simulation-based courses.
 
Pick one and hold it fixed. National pre/post gains on CAOS are small, about 9 points, so a curriculum effect will be modest.
 
**Secondary options:** GOALS-2 (simulation form), SCI, and LOCUS. SATS-36 measures attitudes toward statistics.
 
### AI and data literacy
 
**AILIT and AILIT-S.** IRT-validated with 1,465 students in three countries. Hornberger et al., [doi:10.1016/j.caeai.2023.100165](https://doi.org/10.1016/j.caeai.2023.100165). They measure literacy, not technical ML.
 
**DLSES (data literacy self-efficacy).** 29 items, n = 1,816. Kim et al., *PLOS ONE*, 2025, [doi:10.1371/journal.pone.0322104](https://doi.org/10.1371/journal.pone.0322104).
 
### Self-efficacy, attitudes, identity, belonging
 
- **Steinhorst programming self-efficacy (recommended).** 20 language-agnostic items in four subscales. Steinhorst et al., ICER 2020, [doi:10.1145/3372782.3406281](https://doi.org/10.1145/3372782.3406281). Independently revalidated in 2025 (α > .90, [doi:10.1145/3641554.3701813](https://doi.org/10.1145/3641554.3701813)), with a generative AI extension at ICER 2026 ([doi:10.1145/3765964.3811645](https://doi.org/10.1145/3765964.3811645)).
- **Ramalingam & Wiedenbeck CPSES.** 32 items, C++-primed, dated. Use it only for comparison with older literature.
- **Computing Attitudes Survey (CAS).** Five subscales, validated on a multi-institution sample. Dorn & Tew, 2015, [doi:10.1080/08993408.2015.1014142](https://doi.org/10.1080/08993408.2015.1014142).
- **Computing identity.** Interest, competence/performance, and recognition items. CFA with more than 1,700 students at 22 institutions. Mahadeo, Hazari & Potvin, TOCE 2020, [doi:10.1145/3365571](https://doi.org/10.1145/3365571).
- **Sense of belonging.** A 12-item survey in four components, SIGCSE TS 2026, [doi:10.1145/3770762.3772521](https://doi.org/10.1145/3770762.3772521). It was built for first- and second-year courses but is not yet replicated. The Moudgalya et al. (SIGCSE 2021) 26-item scale is an alternative.
## Summary comparison
 
| Instrument | Construct | Items | Evidence | Access | Milestone | Fit for cohort comparison |
| --- | --- | --- | --- | --- | --- | --- |
| SCS1 | CS1 programming | 27 MC | Rigorous; IRT reanalysis | On request | End Y1, end Y2 | Good; hard, so use IRT scoring |
| BDSI | Data structures | 13 MC | Rigorous; multi-institution CFA | On request / LASSO | End Y2 | Good |
| DLCI | Digital logic | MC | Rigorous; post-test only | Authors | After systems course | Good if taught in both curricula |
| CCI | Cybersecurity, intro | 25 MC | Rigorous; n = 354, 29 institutions | Restricted | After 1st security course | Good |
| CCA | Cybersecurity, advanced | 25 MC | Rigorous; n = 193 | Restricted | Graduation | Good; small legacy samples |
| CAOS or BLIS | Intro statistics | 40 / 37 | Rigorous | ARTIST / open | End Y1 or Y2; DS retest | Good; expect small effects |
| AILIT | AI literacy | 28 | IRT, 3 countries | Published | End Y2; AI retest | Literacy only |
| Recursion CI, DPCI | Recursion, dynamic programming | Varies | Partial | In papers | Upper-level | Secondary outcome |
| Steinhorst | Programming self-efficacy | 20 Likert | Rigorous; revalidated 2025 | Published | Every milestone | Good; check invariance |
| CAS | Computing attitudes | Likert | Rigorous | Published | Every milestone | Good; check invariance |
| Mahadeo et al. | Computing identity | Short Likert | CFA, n > 1,700 | Published | Every milestone | Good |
| Belonging (2026) | Sense of belonging | 12 Likert | Preliminary | Published | Every milestone | Promising; not replicated |
| DLSES | Data literacy self-efficacy | 29 Likert | CFA, n = 1,816 | Open | DS track | Good |
 
## Gaps to fill before the legacy window closes
 
Five foundational areas have no validated instrument. For a before/after comparison, any local instrument has to exist and be piloted on legacy students before the last legacy cohort passes the matching milestone. Otherwise there is nothing to compare against.
 
| Area | What exists | Recommended local build |
| --- | --- | --- |
| Discrete math, logic, proof | Proof comprehension tests validated for 3 specific proofs (Mejía-Ramos et al., 2017, [doi:10.1080/14794802.2017.1325776](https://doi.org/10.1080/14794802.2017.1325776)). An ITiCSE working group plan only. | 20–25 items covering propositional logic, sets and functions, induction, and proof reading. Build them with the Mejía-Ramos protocol. Reuse DLCI's Boolean items. |
| OOP and functional paradigms | An OOP self-efficacy scale (ICER 2025, [doi:10.1145/3702652.3744212](https://doi.org/10.1145/3702652.3744212)), preliminary. No knowledge instrument. | Misconception-based items on objects, references, inheritance, and higher-order functions. Add the OOP self-efficacy scale to the affective panel. |
| Memory, pointers, references | Covered only indirectly through BDSI's linked-list items. | Tracing items, which can share a pilot with the OOP items. |
| Technical data science | Nothing validated. | Items on data wrangling, visualization reading, and resampling. The GOALS-2 simulation form is a partial stand-in. |
| Technical ML for the AI track | Only literacy measures (AILIT) and the single-country CTAT (2026). | Local items tied to track competencies, piloted on legacy students taking the existing ML electives. |
 
For each local instrument, pilot it on 150 or more legacy students, run IRT or CFA, then freeze it. Publishing these instruments would itself be a contribution, since the gaps are field-wide.
 
## Threats to validity and analysis plan
 
The main threat is that new-curriculum cohorts differ from legacy cohorts for reasons unrelated to the curriculum. The design and analysis should rule these out explicitly.
 
| Threat | Mitigation |
| --- | --- |
| Changes in incoming students (admissions, K-12 outreach reaching rural Kansas students, pandemic-era preparation) | Adjust for entry covariates. Report the outreach participants as a subgroup. |
| Generative AI shifting what students learn and how they perform, independent of curriculum | Record self-reported AI use at every milestone. Where both scales exist, add the GenAI extension of the Steinhorst scale. Interpret 2025–2028 trends cautiously. |
| Differences in low-stakes test effort | Identical incentive and conditions for every cohort. Flag rapid guessing (response time) and too-fast completion. |
| Selective attrition, since the spiral may change who persists to year 2 | Report milestone participation and retention by cohort. Compare the entry covariates of students who persist with those who leave. |
| Instructor or course-offering changes during the rollout | Record who taught each core course per term, and include it in the models. |
| Attitude scales functioning differently across cohorts | Test measurement invariance (configural, metric, scalar) before comparing means. |
| Test items leaking into coursework | Keep secure items out of graded work. Don't use instructors' course materials as inventory items. |
 
**Analysis.**
 
- **Primary:** mixed-effects models of IRT-scaled scores. Curriculum (legacy vs new) and cohort are fixed effects, with entry covariates. Section or instructor is a random effect.
- **Time series:** a cohort-level interrupted time series that estimates the level change at the transition against the legacy trend.
- **Retention:** a curriculum × milestone interaction on SCS1 from the end of year 1 to the end of year 2.
- **Equity:** disaggregate by transfer status, first-generation status, gender, and outreach participation.
**Power.** A two-group comparison needs about 175 students per group to detect d = 0.3 with 80% power (two-sided α = .05). Individual cohorts may fall short for some measures, so pool legacy cohorts, and treat track-level comparisons as descriptive unless samples allow.
 
**IRB.** Program evaluation is often exempt. Because you intend to publish, get consent for research use from the first legacy cohort, so baseline data doesn't have to be discarded later.
 
## Repositories, reviews and caveats
 
**Repositories**
 
- [CSEdResearch.org evaluation instruments](https://csedresearch.org/resources/our-resources/overview/): a filterable database of cognitive and noncognitive instruments.
- [dB-SERC computer science assessments](https://dbserc.secure.pitt.edu/Assessment/Assessments-Computer-Science): flags which instruments lack validity testing.
- [LASSO](https://lassoeducation.org/basic-data-structures-inventory/): online pre/post administration, including BDSI.
- [CAUSEweb assessment resources](https://www.causeweb.org/cause/research/topics/assessment): statistics instruments.
**Reviews**
 
- Ali et al., "Taking Stock of Concept Inventories in Computing Education," ICER 2023, [doi:10.1145/3568813.3600120](https://doi.org/10.1145/3568813.3600120).
- Taylor et al., "Computer Science Concept Inventories: Past and Future," *Computer Science Education* 24(4), 2014.
- The data structures and algorithms misconceptions SLR, *Computer Science Education*, 2026, [doi:10.1080/08993408.2026.2633989](https://doi.org/10.1080/08993408.2026.2633989).
- Große-Bölting et al. on identity in higher computing education, TOCE 2023, [doi:10.1145/3606707](https://doi.org/10.1145/3606707).
- Runa et al. on belonging, *Educational Research Review*, 2025, [doi:10.1016/j.edurev.2025.100683](https://doi.org/10.1016/j.edurev.2025.100683).
**Caveats**
 
- Some figures came from secondary sources rather than the instruments' own reports: SATS-36 reliabilities, LOCUS reliability, and the CCI item count. Check them against the primary papers before reporting.
- Access terms change. Confirm current distribution with each author team.
- The 2025–26 instruments (belonging survey, OOP self-efficacy, the SCS1 successor, CTAT, DPCI) have only developer-run, single-context validation.
- Much of the validity evidence predates widespread generative AI use in courses.
 
