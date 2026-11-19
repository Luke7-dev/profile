export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Client / organization name */
  client?: string;
  /** Your role on the project */
  role?: string;
  /** Engagement type, e.g. Freelance / Contract */
  engagement?: string;
  /** Key delivery highlights */
  highlights?: string[];
  /** One or more preview images (local /public path or remote URL) */
  images?: string[];
  /** Live demo / production URL */
  href?: string;
  /** Source repository URL */
  github?: string;
  /** Lead project — receives the lead badge */
  lead?: boolean;
  featured: boolean;
};

// Source of truth: latest resume (yewin-llm-dev). Only add links/images that
// are public and present in the repo.
export const projects: Project[] = [
  {
    title: "Agentive — LLM-powered Car Rental Service",
    description:
      "An LLM-powered car rental assistant that answers customer questions from business-specific knowledge rather than relying solely on general model knowledge — built as a Python/FastAPI AI service alongside a NestJS business API.",
    highlights: [
      "Built a grounded RAG pipeline covering knowledge ingestion, embeddings, vector retrieval, context construction, and LLM-based answer generation.",
      "Implemented the AI service in Python and FastAPI, separating LLM/RAG capabilities from the core business application.",
      "Designed a microservice-oriented architecture: FastAPI for AI/knowledge services, NestJS for business APIs, authentication, and business data.",
      "Added abstraction layers for retrieval, vector storage, embeddings, and LLM providers to keep components modular and replaceable.",
      "Grounded answers in retrieved business context to improve relevance and reduce unsupported responses.",
      "Validated the retrieval and chat pipeline end to end, and found and fixed an in-memory vector store lifecycle issue affecting knowledge retrieval.",
      "Laid the foundation for a Q&A evaluation loop that uses reviewed conversations and failed or unclear answers to improve knowledge, retrieval, prompts, and model behavior.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    images: [
      "/projects/1794606752591.jpeg",
      "/projects/1791356990037.jpeg",
      "/projects/1789399587614.jpeg",
    ],
    lead: true,
    featured: true,
  },
  {
    title: "Digital Coupon Management System",
    client: "PSI Myanmar",
    role: "Technical Lead / Full-stack Developer",
    engagement: "Freelance / Contract",
    description:
      "Digital coupon management platform for healthcare programs. Led end-to-end delivery — from requirements analysis and system design through production deployment on AWS / Fly.io.",
    highlights: [
      "Led a team of a UI/UX designer and two developers, coordinating workflows, code reviews, and delivery.",
      "Designed the architecture and built key frontend and backend features with Next.js, NestJS, MongoDB, and REST APIs.",
      "Integrated Redis for caching and session management.",
    ],
    tags: ["Next.js", "NestJS", "MongoDB", "Redis", "REST APIs", "AWS", "Fly.io"],
    images: [
      "/projects/psi-dasboard.png",
      "/projects/psimobile.png",
      "/projects/design.png",
    ],
    featured: true,
  },
  {
    title: "Loyalty & CRM Platform",
    description:
      "Customer loyalty platform for rewards, benefits, customer engagement, and relationship management — built with React and TypeScript at Rocket Digital.",
    tags: ["React", "TypeScript", "MongoDB"],
    images: ["/projects/rocket.png"],
    featured: true,
  },
  {
    title: "Oway Travel",
    description:
      "Travel booking platform supporting flights, hotels, tour packages, and online transactions, with payment gateway and third-party integrations.",
    tags: ["React", "Node.js", "AWS"],
    images: ["/projects/owaytravel.png", "/projects/oway-mb.png"],
    featured: true,
  },
  {
    title: "CarsDB Marketplace",
    description:
      "Vehicle marketplace with customer-facing applications and administrative systems, built with responsive, mobile-first interfaces.",
    tags: ["React", "Node.js", "MongoDB"],
    images: ["/projects/carsdb.png", "/projects/carsdb-mb.png"],
    featured: true,
  },
];
