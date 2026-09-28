+++
title = "Computer Science"
weight = 10
ordinal = "2.1"
+++

The department's flagship degree, the Bachelor in Computer Science retains its flexibility as a degree option providing students with many electives. This flexibility allows students to customize the degree to the career they have chosen for themselves, mixing computing know-how from technical electives with other-discipline domain knowledge from unrestricted electives.

Our specialization degrees -- [Artificial Intelligence](./artificial-intelligence) and [Cybersecurity](./cybersecurity) -- are essentially the computer science degree with specific electives chosen.  Thus, every major graduating with a specialization degree also earns a Bachelor of Computer Science with no additional coursework required.

The Bachelor in Computer Science is accredited by ABET.

{{< degree-map style="width: 2300px">}}
<script type="module">
  const plan = {
    name: "Bachelor of Science in Computer Science",
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
      {
        name: "Year 3",
        semesters: [
          {
            name: "Fall",
            courses: [
              { subject: "CIS", number: 450, name: "Computer Architecture and Operations", hours: 3 },
              { subject: "CIS", number: 501, name: "Software Architecture and Design", hours: 3 },
              { subject: "CIS", number: 505, name: "Introduction to Programming Languages", hours: 3 },
              { type: "elective", name: "Technical Writing (ENGL 415 or 516)", hours: 3 },
              { type: "elective", name: "Social and Behavioral Sciences Requirement", hours: 3 },
            ],
          },
          {
            name: "Spring",
            courses: [
              { subject: "CIS", number: 560, name: "Database System Concepts", hours: 3 },
              { subject: "CIS", number: 575, name: "Introduction to Algorithm Analysis", hours: 3 },
              { subject: "CIS", number: 415, name: "Ethics and Conduct for Computing Professionals", hours: 3 },
              { type: "elective", name: "Arts & Humanities Requirement", hours: 3 },
              { type: "elective", name: "Free Elective", hours: 3 },
            ],
          },
        ],
      },
      {
        name: "Year 4",
        semesters: [
          {
            name: "Fall",
            courses: [
              { type: "elective", name: "Systems Elective (CIS 520, 525, or 625)", hours: 3 },
              { type: "elective", name: "Technical Elective", hours: 3 },
              { subject: "CIS", number: "XXX", name: "Agentic Software Development", hours: 3 },
              { type: "elective", name: "Arts & Humanities Requirement", hours: 3 },
              { type: "elective", name: "Free Elective", hours: 3 },
            ],
          },
          {
            name: "Spring",
            courses: [
              { subject: "CIS", number: 598, name: "CS Capstone", hours: 3 },
              { type: "elective", name: "Technical Elective", hours: 3 },
              { type: "elective", name: "Technical Elective", hours: 3 },
              { type: "elective", name: "Upper Division Elective", hours: 3 },
              { type: "elective", name: "Upper Division Elective", hours: 3 },
              { type: "elective", name: "Upper Division Elective", hours: 3 },
            ],
          },
        ],
      },
    ],
  };
  document.querySelector("degree-map").plan = plan;
</script>