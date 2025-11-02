export type Project = {
  name: string;
  github?: string;
  blog?: string;
  context?: string;
  keywords: string[];
  content: string;
  size: "big" | "medium" | "small";
  show?: boolean;
};
export const projects: Project[] = [
  {
    name: "Babybox Dashboard",
    github: "https://github.com/zbyju/portfolio",
    content: `<ul class="ml-5 list-disc">
			<li>Application designed to assist with babybox maintenance, providing data-driven insights and tools for efficient issue tracking and resolution.</li>
			<li>Gathers data for visualization, aggregation and analysis</li>
      <li>Notifications system with custom condition-based triggers</li>
      <li>Tracks issues, maintenances, and other relevant metadata</li>
    </ul>`,
    blog: "/blog/babybox-dashboard/",
    keywords: [
      "TypeScript",
      "Go",
      "Python",
      "Next.js",
      "React",
      "Bun",
      "MongoDB",
      "InfluxDB",
      "RabbitMQ",
    ],
    size: "big",
    show: true,
  },
  {
    name: "Babybox Panel",
    github: "https://github.com/zbyju/portfolio",
    content: `<ul class="ml-5 list-disc">
			<li>On-site monitoring application for hospitals, designed for 24/7 use with no user input required after setup.</li>
			<li>Displays babybox parameters (temperature, voltage, door status, connection, etc.) and live camera feed</li>
      <li>Alerts hospital staff with visual and audio signals when the babybox activates or something goes wrong</li>
      <li>Allows remote maintenance staff to adjust parameters (target temperatures, hysteresis, door settings)</li>
    </ul>`,
    keywords: ["TypeScript", "Vue", "Node.js", "Bash"],
    size: "big",
    show: true,
  },
  {
    name: "Babybox Donors",
    github: "https://github.com/zbyju/portfolio",
    content: `<ul class="ml-5 list-disc">
			<li>Application for managing information about potential and current donors</li>
			<li>Provides tools for efficient donor management and communication</li>
    </ul>`,
    keywords: ["TypeScript", "Next.js", "React"],
    size: "medium",
    show: true,
  },
  {
    name: "My Portfolio",
    github: "https://github.com/zbyju/portfolio",
    content: `<ul class="ml-5 list-disc">
      <li>Using Astro's island architecture to deliver a fast website/blog</li>
    </ul>`,
    keywords: ["TypeScript", "Astro", "Svelte"],
    size: "small",
    show: true,
  },
  {
    name: "Advent of Code",
    github: "https://github.com/zbyju/advent-of-code",
    content: `<ul class="ml-5 list-disc">
      <li>Trying to write performant advent of code solutions</li>
    </ul>`,
    keywords: ["Python", "Scala", "Go", "Rust"],
    size: "small",
    show: true,
  },
  {
    name: "POB",
    github: "https://github.com/zbyju/pma-only-bot",
    content: `<ul class="ml-5 list-disc">
      <li>Modular Discord Bot</li>
      <li>Reacts to incoming user messages</li>
    </ul>`,
    keywords: ["TypeScript", "MongoDB"],
    size: "small",
    show: false,
  },
  {
    name: "Quest for Nature",
    context: "Hackathon Team Project",
    github: "https://github.com/zbyju/dream-team-collabothon",
    content: `<ul class="ml-5 list-disc">
      <li>Google Hackathon winning solution for the #SustainableTomorrow
Challenge</li>
      <li>Application for tracking ESG score for personal use
    </ul>`,
    keywords: ["Next.js", "React", "PWA"],
    size: "small",
    show: false,
  },
  {
    name: "Redis Clone",
    github: "https://github.com/zbyju/redis-go",
    content: `<ul class="ml-5 list-disc">
			<li>Redis clone built using the hexagonal architecture, implementing key Redis commands and persistence.</li>
			<li>Implements Redis commands</li>
      <li>Supports persistence using Redis Database files</li>
      <li>Reimplements the Redis protocol for communication</li>
      <li>Follows the Redis specification</li>
    </ul>`,
    keywords: ["TypeScript", "Node.js"],
    size: "medium",
    show: false,
  },
  {
    name: "Kafka Clone",
    github: "https://github.com/zbyju/kafka-python",
    content: `<ul class="ml-5 list-disc">
			<li>Redis clone following the specficiation of Kafka.</li>
			<li>Implements the Kafka protocol for communication</li>
			<li>Supports basic commands for interaction and handling mulitple clients</li>
    </ul>`,
    keywords: ["Python"],
    size: "medium",
    show: false,
  },
  {
    name: "HTTP Server",
    github: "https://github.com/zbyju/http-server-go",
    content: `<ul class="ml-5 list-disc">
			<li>Custom HTTP server built to handle concurrent requests efficiently.</li>
			<li>Handles concurrent requests</li>
      <li>Supports working with headers and body of the request</li>
      <li>Supports sending files</li>
      <li>Supports gzip compression based on the client's compression header</li>
    </ul>`,
    keywords: ["Go"],
    size: "medium",
    show: false,
  },
  {
    name: "Git Clone",
    github: "https://github.com/zbyju/git-go",
    content: `<ul class="ml-5 list-disc">
			<li>Developed a Git clone implementing key plumbing commands</li>
			<li>Follows Git specs for storing blob, tree, and commit objects</li>
			<li>Replicates Git's method of storing information in the .git folder</li>
    </ul>`,
    keywords: ["Go"],
    size: "small",
    show: true,
  },
  {
    name: "Chesso",
    github: "https://github.com/zbyju/chesso",
    content: `<ul class="ml-5 list-disc">
      <li>Implementation of the game of chess in Scala</li>
      <li>Supports creating a game and moving pieces</li>
      <li>Supports loading a board state using FEN</li>
    </ul>`,
    keywords: ["Scala"],
    size: "medium",
    show: true,
  },
  {
    name: "BoxJump",
    context: "School Project",
    github: "https://github.com/zbyju/boxjump",
    content: `<ul class="ml-5 list-disc">
			<li>Developed a PixiJS and Matter.js game using ECS architecture</li>
			<li>Heavily inspired by the game Jump King</li>
			<li>Features physics-based gameplay and challenging jumping mechanics</li>
    </ul>`,
    keywords: ["TypeScript", "Pixi.js", "Matter.js"],
    size: "medium",
    show: false,
  },
  {
    name: "Timeseries Benchmark",
    context: "School Project",
    github: "https://github.com/zbyju/timeseries-benchmark",
    content: `<ul class="ml-5 list-disc">
      <li>Complex benchmark for understanding the benefits of using different timeseries databases.</li>
      <li>The benchmark uses generated but realistic data from the IoT domain</li>
    </ul>`,
    keywords: ["TypeScript"],
    size: "small",
    show: true,
  },
  {
    name: "Angry Patterns",
    context: "School Project",
    github: "https://github.com/zbyju/angrypatterns",
    content: `<ul class="ml-5 list-disc">
      <li>Angry birds inspired game for implementing different design patterns</li>
      <li>It supports different shooting modes, missile moving strategies, types of missiles, rewinding back in time</li>
    </ul>`,
    keywords: ["Scala", "ScalaFX"],
    size: "medium",
    show: false,
  },
  {
    name: "Point Cloud Tree Classifier",
    context: "School Team Project",
    content: `<ul class="ml-5 list-disc">
      <li>A model trained to classify types of trees based on their point cloud representation</li>
    </ul>`,
    keywords: ["Python", "SVM", "Logistic Regression"],
    size: "small",
    show: false,
  },
  {
    name: "Geofencing Project",
    github: "https://github.com/zbyju/geofencing-research",
    context: "School Team Project",
    content: `<ul class="ml-5 list-disc">
      <li>Set a custom geofence on the map</li>
      <li>Track users inside the geofence</li>
      <li>Get the user's path, time, distance and speed inside the geofence</li>
    </ul>`,
    keywords: ["TypeScript", "Next.js", "React", "Geolocation API"],
    size: "medium",
    show: false,
  },
];
