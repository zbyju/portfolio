import AaltoIcon from "../../components/icons/AaltoIcon.astro";
import CtuIcon from "../../components/icons/CtuIcon.astro";
import TumIcon from "../../components/icons/TumIcon.astro";
import SpstIcon from "../../components/icons/SpstIcon.astro";

export const education = [
  {
    icon: CtuIcon,
    institution: "Czech Technical University in Prague",
    country: "Czech Republic",
    degree: "Master's degree",
    program: "Computer Science - Web Engineering",
    start: new Date(2021, 7), // August 2021
    end: new Date(2024, 7), // August 2024
    content: `<ul class="ml-8 list-disc">
    <li class="font-medium">Thesis: Designed and implemented a PWA, Microservice application for remote monitoring, visualization, aggregations, notifications, and data analysis to deliver higher safety, efficiency and quality of service in maintaining the network of babyboxes across the Czech Republic (Go, TypeScript - React, Next.js, Bun, Python, MongoDB, InfluxDB, Docker, RabbitMQ, Traefik, Caddy)</li>
<li>Web technologies: TCP, HTTP, REST, SOAP, gRPC, SOA, microservices; Cloud computing: load balancers, virtualization, containerization, orchastration; Semantic web: RDF, SPARQL, Linked Data</li>
<li>Advanced database course: SQL evaluation and optimization, NoSQL databases (document, wide-column, key-value, XML, graph)</li>
<li>Applied functional programming: Haskell, Elm</li>
<li>Programming courses and software engineering: Design patterns, best practices, game development</li>
<li>Advanced parallel and distributed programming in C++ (OpenMP, MPI), interconnection networks, combinatorial optimization - strategies for solving NP-hard problems</li>
<li>Math: Advanced calculus, general algebra, advanced probability and statistics (hypothesis testing, information theory, Markov chains, Queueing theory)</li>
</ul>`,
    keywords: [
      "C++",
      "TypeScript",
      "JavaScript",
      "Scala",
      "Python",
      "Node.js",
      "React",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Web technologies",
      "Cloud Computing",
      "Mutlimedia Retrieval",
      "Object-Oriented Programming",
      "Functional Programming",
      "Data Analysis",
      "Recommender Systems",
    ],
  },
  {
    icon: TumIcon,
    institution: "Technical University of Munich",
    country: "Germany",
    degree: "EuroTeQ Student",
    start: new Date(2024, 1),
    end: new Date(2024, 6),
    content: `<ul class="ml-8 list-disc">
    <li>Engaged with founders, managers, and executives learning about their entrepreneurial journeys and strategies</li>
    <li>German language and culture</li>
</ul>`,
    keywords: ["Entrepreneurship", "German"],
  },
  {
    icon: AaltoIcon,
    institution: "Aalto University",
    country: "Finland",
    degree: "Exchange student",
    program: "Computer Science",
    start: new Date(2022, 7),
    end: new Date(2023, 6),
    content: `<ul class="ml-8 list-disc">
  <li>Artificial Intelligence, Machine Learning, and Deep Learning Courses - Team project: Made a model to classify different types of trees based on their point cloud representation</li>
  <li>Fullstack development course, Web development course - Team project: Geofencing and tracking users' location to retrieve different metrics</li>
  <li>Parallel Programming - Instruction-level parallelism, vector-based programming, multi-threading, SIMD</li>
</ul>`,
    keywords: [
      "C++",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Microservices",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Hypothesis Testing",
    ],
  },
  {
    icon: CtuIcon,
    institution: "Czech Technical University in Prague",
    country: "Czech Republic",
    degree: "Bachelor's degree",
    program: "Computer Science - Software Engineering",
    start: new Date(2018, 7), // 2018
    end: new Date(2021, 7), // 2021
    content: `<ul class="ml-8 list-disc">
    <li class="font-medium">Thesis: Developed a module for detecting plagiarism, including a React front-end for teachers to inspect and resolve plagiarism suspicions, and an improved plagiarism detection algorithm</li>
  <li>Programming, advanced algorithms, and data structures in C/C++; Object-Oriented Programming in C++, Java, Scala, Groovy.</li>
  <li>Relational databases, relational algebra and SQL (Oracle, PostgreSQL)</li>
  <li>Functional programming in Lambda Calculus, Lisp, Scala; Logical programming in Prolog</li>
  <li>Software Engineering, Conceptual Modeling, Process Modeling, Ontological modeling, UML, OntoUML</li>
  <li>Math courses: calculus, linear algebra, discrete math, probability and statistics, formal languages</li>
  <li>Hardware and programming microcontrollers, Arduino, FPGA - VHDL and Assembly</li>
</ul>`,
    keywords: [
      "C",
      "C++",
      "Java",
      "Scala",
      "Groovy",
      "SQL",
      "Lisp",
      "Prolog",
      "Docker",
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Functional Programming",
      "Databases",
      "Computer Networks",
      "Software Engineering",
      "Requirements Engineering",
      "Calculus",
      "Linear Algebra",
      "Discrete Math",
      "Probability and Statistics",
      "Computer Hardware",
    ],
  },
  {
    icon: SpstIcon,
    institution: "Technical High School Třebíč",
    country: "Czech Republic",
    program: "Computer Systems",
    start: new Date(2014, 7), // 2014
    end: new Date(2018, 7), // 2018
    content: `<ul class="ml-8 list-disc">
    <li class="font-medium">Final Project: Developed a Content Management System allowing users to manage blog posts, track view statistics, and customize themes and styling (Node.js)</li>
<li>Introduction to programming and algorithms, basics of object-oriented programming C++, C#</li>
<li>Basics of web design and development (HTML, CSS, JavaScript, PHP, MySQL)</li>
<li>Programming microcontrollers in C</li>
<li>PCB design and manufacturing</li>
</ul>`,
    keywords: [
      "C",
      "C++",
      "C#",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "Microcontrollers",
    ],
  },
];
