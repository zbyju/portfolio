export type SkillInfo = {
  name: string;
  skill: number;
};

export type Skills = {
  programmingLanguages: SkillInfo[];
  frameworks: SkillInfo[];
  databases: SkillInfo[];
  others: SkillInfo[];
  languages: SkillInfo[];
};

export const skills: Skills = {
  programmingLanguages: [
    { name: "TypeScript", skill: 5 },
    { name: "JavaScript", skill: 5 },
    { name: "Go", skill: 4 },
    { name: "Python", skill: 4 },
    { name: "Java", skill: 3 },
    { name: "Scala", skill: 3 },
    { name: "C/C++", skill: 2 },
    { name: "Haskell", skill: 2 },
    { name: "Rust", skill: 1 },
    { name: "React", skill: 4 },
  ],
  frameworks: [
    { name: "Next.js", skill: 3 },
    { name: "Vue", skill: 4 },
    { name: "Astro", skill: 4 },
  ],
  databases: [
    { name: "MongoDB", skill: 4 },
    { name: "SQL", skill: 3 },
  ],
  others: [
    { name: "Redis", skill: 3 },
    { name: "Docker", skill: 4 },
    { name: "Docker-Compose", skill: 4 },
    { name: "Kubernetes", skill: 1 },
    { name: "RabbitMQ", skill: 3 },
    { name: "Caddy", skill: 3 },
    { name: "Traefik", skill: 2 },
    { name: "Nginx", skill: 2 },
  ],
  languages: [
    { name: "Czech", skill: 5 },
    { name: "English", skill: 5 },
    { name: "French", skill: 2 },
    { name: "German", skill: 1 },
    { name: "Chinese", skill: 1 },
  ],
};
