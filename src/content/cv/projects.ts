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
      <li>Microservice application for tracking babybox data</li>
      <li>Issue and maintenance tracking</li>
      <li>Data visualizations and aggregations from babyboxes</li>
      <li>Keeping track of babybox metadata</li>
    </ul>`,
		blog: "/blog/babybox-dashboard/",
		keywords: ["Go", "TypeScript", "Python", "Next.js", "React", "Bun"],
		size: "big",
		show: true,
	},
	{
		name: "Babybox Panel",
		github: "https://github.com/zbyju/portfolio",
		content: `<ul class="ml-5 list-disc">
      <li>Application for real-time 24/7 babybox monitoring for hospitals</li>
      <li>Interface for changing babybox parameters</li>
    </ul>`,
		keywords: ["TypeScript", "Vue", "Node.js"],
		size: "big",
		show: true,
	},
	{
		name: "Babybox Donors",
		github: "https://github.com/zbyju/portfolio",
		content: `<ul class="ml-5 list-disc">
      <li>Application for tracking potential donors for the babybox project</li>
    </ul>`,
		keywords: ["TypeScript", "Next.js", "React"],
		size: "medium",
		show: true,
	},
	{
		name: "My Portfolio",
		github: "https://github.com/zbyju/portfolio",
		content: `<ul class="ml-5 list-disc">
      <li>Using Astro's island architecture to deliver a fast website</li>
    </ul>`,
		keywords: ["TypeScript", "Astro"],
		size: "medium",
		show: true,
	},
	{
		name: "Advent of Code",
		github: "https://github.com/zbyju/advent-of-code",
		content: `<ul class="ml-5 list-disc">
      <li>Trying to write performant advent of code solutions</li>
    </ul>`,
		keywords: ["Python", "Scala", "Go", "Rust"],
		size: "medium",
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
		show: true,
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
      <li>Implements some commands of the Redis protocol to concurrently handle incoming requests</li>
    </ul>`,
		keywords: ["TypeScript", "Node.js"],
		size: "medium",
		show: true,
	},
	{
		name: "HTTP Server",
		github: "https://github.com/zbyju/http-server-go",
		content: `<ul class="ml-5 list-disc">
      <li>Supports concurrently handling requests and sending responses</li>
      <li>Is able to do header compressions using Gzip</li>
    </ul>`,
		keywords: ["Go"],
		size: "small",
		show: true,
	},
	{
		name: "Git Clone",
		github: "https://github.com/zbyju/git-go",
		content: `<ul class="ml-5 list-disc">
      <li>Implements Git's plumbing commands to store and read blob, tree and commit objects</li>
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
      <li>Support creating a game and moving pieces</li>
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
      <li>Jump King inspired game that challenges the player to perfectly jump through the level</li>
      <li>It implements gravity, collisions, custom jump mechanic, different objects to interact with and more</li>
    </ul>`,
		keywords: ["TypeScript"],
		size: "medium",
		show: true,
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
		show: true,
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
