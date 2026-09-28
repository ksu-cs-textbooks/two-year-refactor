+++
title = "Computing Foundations"
weight = 10
ordinal = "2.0"
+++

All degrees offered by the Department of Computer Science (the Bachelor of Computer Science, the Bachelor of Cybersecurity, and the Bachelor of Artificial Intelligence) share a rigorous 2-year (4-semester) experience grounding students in the foundations of computer science. This sequence of courses draws upon research-backed practices in its design (see chapter 1), where students explore and extend real-world, complex production software systems (see chapter 3) leading to a capstone software development experience at the end of the second year.

After that point, students have the option of specializing in Cybersecurity or AI Systems. These specializations are the Computer Science degree with a curated choice of electives -- essentially, the student will earn *both* a Bachelor of Computer Science *and* a Bachelor in the specialization field with no additional coursework or cost than the Bachelor of Computer Science would require.  Alternatively, the student can choose to instead forge their own path, using the flexibility of the Bachelor of Computer Science to select electives that best explore their interests and lead to the career they envision for themselves.

The two-year plan for completing the computing foundations appears below (note: it is possible and common for students to deviate from this strict schedule):

{{< degree-map style="min-width: 1200px">}}
<script type="module">
  const plan = {
    name: "Computer Science Two-Year Core",
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
              { type: "elective", name: "Required Communications Elective", hours: 3 }
            ],
          },
        ],
      },
    ],
  };
  document.querySelector("degree-map").plan = plan;
</script>