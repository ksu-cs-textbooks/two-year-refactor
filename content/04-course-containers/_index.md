+++
archetype = "chapter"
chapter = true
title = "Course Containers"
pre = "<b>4. </b>"
weight = 4
ordinal = "4"
+++

The mappings of the curriculum structure and competencies into course containers. 

{{< mermaid align="center" zoom="true">}}

flowchart TD

subgraph Block1
  CIS101[ Imperative Programming ]
  CIS102[ Functional Programming ]
  CIS103[ Computational Representation ]
  MATH101[ Logic and Sets ]
end

subgraph Block2
  CIS104[ Object-Oriented Programming ]
  CIS105[ Code Reading & Debugging I ]
  CIS106[ Web Foundations ]
end

subgraph Block3
  CIS107[ Object-Oriented Programming II ]
  CIS108[ Linear Data Structures ]
  CIS109[ Algorithmic Complexity ]
end

subgraph Block4
  CIS107[ Trees, Hashing & Hiearchies ]
  CIS108[ APIs & Data Validation ]
  CIS109[ Data Persistence I ]
end

subgraph Block5
end

CIS101 --> CIS104

{{< /mermaid >}}flowchart LR
