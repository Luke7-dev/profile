export type Experience = {
  company: string;
  role: string;
  period: string;
  /** Omitted when not stated in the resume */
  location?: string;
  highlights: string[];
  /** e.g. Part-time, Freelance */
  engagement?: string;
  /** Company website or LinkedIn URL */
  companyUrl?: string;
  /** Logo path under /public */
  logo?: string;
  /** Light logo needs a bright background container */
  logoOnLight?: boolean;
  /** Only set when the role is confirmed ongoing */
  current?: boolean;
};

// Source of truth: latest resume (yewin-llm-dev). ZigWay is kept from the
// earlier portfolio; it is not listed on the current resume.
export const experience: Experience[] = [
  {
    company: "PSI Myanmar",
    role: "Technical Lead / Full-stack Developer",
    period: "2026",
    engagement: "Freelance / Contract",
    companyUrl: "https://psimyanmar.org/",
    highlights: [
      "Led end-to-end delivery of a digital coupon management platform, from requirements analysis and system design through production deployment.",
      "Worked directly with client stakeholders to gather requirements, refine workflows, and translate business needs into technical solutions.",
      "Led a cross-functional team of a UI/UX designer and two software developers — coordinating tasks, development workflows, code reviews, and delivery.",
      "Designed the application architecture and built key frontend and backend features with Next.js, NestJS, MongoDB, and REST APIs.",
      "Integrated Redis for caching and session management to improve responsiveness and reduce repeated data access.",
      "Coordinated testing, deployment, production support, and post-release improvements.",
    ],
  },
  {
    company: "Ruby Next",
    role: "Software Engineer",
    period: "Apr 2023 — May 2026",
    location: "Bangkok, Thailand",
    companyUrl: "https://www.linkedin.com/company/rubynext/",
    logo: "/companies/rubynext.jpeg",
    highlights: [
      "Developed and maintained large-scale web applications with Vue.js, Nuxt.js, and TypeScript.",
      "Delivered business-critical features integrating internal payment services, REST APIs, and third-party provider platforms.",
      "Built real-time experiences with WebSocket communication, authentication, session management, and single active session enforcement.",
      "Led Nuxt 2 → Nuxt 3 migrations to improve maintainability, scalability, and developer productivity.",
      "Contributed to backend services built with Node.js and NestJS, working with RESTful APIs to support end-to-end feature delivery.",
      "Optimized performance through lazy loading, code splitting, caching strategies, and efficient state management.",
      "Contributed to CI/CD workflows, AWS-based production environments, staging releases, and production deployments.",
      "Wrote Jest unit tests and Cypress end-to-end tests; led cross-team code reviews and supported engineering standards.",
    ],
  },
  {
    company: "Rocket Digital",
    role: "Full-stack Developer",
    period: "Jan 2022 — Mar 2023",
    location: "Bangkok, Thailand",
    companyUrl: "https://rocket.in.th",
    logo: "/companies/rocket.svg",
    highlights: [
      "Built loyalty, CRM, municipal service, and customer engagement apps with React and TypeScript.",
      "Designed reusable frontend boilerplates and shared component libraries adopted across multiple projects.",
      "Contributed to company-wide design systems and frontend architecture standards.",
      "Shipped Progressive Web Applications (PWA) to improve accessibility and user experience.",
      "Collaborated with designers, backend engineers, and stakeholders; participated in code reviews and technical discussions.",
    ],
  },
  {
    company: "Oway Travel & Tour",
    role: "Frontend Developer",
    period: "May 2019 — Dec 2021",
    location: "Yangon, Myanmar",
    companyUrl: "https://oway.com.mm",
    logo: "/companies/oway.svg",
    highlights: [
      "Led frontend development for travel booking, ticketing, e-commerce, and operational management platforms.",
      "Designed scalable React architecture and integrated payment gateways and third-party services for booking and transactions.",
      "Managed AWS services, deployment pipelines, and microservice integrations.",
      "Built React Native apps for ticketing and operational workflows; reviewed pull requests and provided technical guidance.",
    ],
  },
  {
    company: "ZigWay",
    role: "Mobile Application Developer",
    period: "Sep 2020 — Feb 2021",
    location: "Yangon, Myanmar",
    engagement: "Part-time · alongside Oway",
    companyUrl: "https://www.linkedin.com/company/zigway.co/",
    logo: "/companies/zigway.jpeg",
    logoOnLight: true,
    highlights: [
      "Developed JavaScript mobile application features for ordering, credit, and user level management.",
      "Built fintech capabilities helping low-income families access subscriptions and affordable nano-loans.",
    ],
  },
  {
    company: "CarsDB",
    role: "Web Developer",
    period: "Jul 2017 — Apr 2019",
    location: "Yangon, Myanmar",
    companyUrl: "https://carsdb.com",
    logo: "/companies/carsdb.png",
    logoOnLight: true,
    highlights: [
      "Developed customer-facing and admin applications for a vehicle marketplace platform.",
      "Built responsive, mobile-first interfaces and improved performance through component refactoring.",
      "Shipped media-related web platforms and internal operational tools with product teams.",
    ],
  },
];
