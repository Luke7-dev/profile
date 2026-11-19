export type SkillCategory = {
  category: string;
  items: string[];
};

// Source of truth: latest resume (yewin-llm-dev) technical skills section.
export const skills: SkillCategory[] = [
  {
    category: "AI / LLM Engineering",
    items: [
      "LLM Integration",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Vector Stores",
      "Grounded Generation",
      "Prompt Engineering",
      "Knowledge Retrieval",
      "AI Service Architecture",
      "Python",
      "FastAPI",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSocket",
      "Redis",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "AngularJS",
      "RxJS",
      "Redux",
      "React Query",
      "Zustand",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Sass",
      "Styled Components",
      "Ant Design",
    ],
  },
  {
    category: "Architecture",
    items: [
      "Full-stack Development",
      "Microservice-oriented Architecture",
      "System Integration",
      "Third-party Integrations",
      "Frontend Architecture",
      "Design Systems",
      "Component Libraries",
      "Performance Optimization",
      "PWA",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, CloudFront, Lambda)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Vercel",
      "DigitalOcean",
      "Fly.io",
    ],
  },
  {
    category: "Testing & Delivery",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Unit Testing",
      "Integration Testing",
      "Git / Git Flow",
      "Jira",
      "Agile / Scrum",
      "Figma",
    ],
  },
];
