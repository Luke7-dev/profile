import { Panel } from "@/components/chrome/panel";
import { StatusChip } from "@/components/chrome/status-chip";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/data/site";

export function About() {
  const meta = [
    { key: "location", value: siteConfig.location },
    { key: "focus", value: siteConfig.focus },
    { key: "languages", value: siteConfig.languages.join(" · ") },
    {
      key: "education[0]",
      value:
        "M.C.Sc · Computer Science (Software & Data Mining) · University Mandalay · 2013–2016",
    },
    {
      key: "education[1]",
      value: "Bachelor's · Computer Science · University Mandalay · 2010–2013",
    },
  ];

  return (
    <Section id="about" label="About" title="About Me">
      <FadeIn>
        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <Panel title="meta.json" accent="info">
            <ul className="space-y-4">
              {meta.map((item) => (
                <li
                  key={item.key}
                  className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <p className="shrink-0 text-xs font-medium text-muted-foreground">
                    {item.key}
                  </p>
                  <p className="text-right text-sm leading-relaxed text-foreground">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel
            title="summary.md"
            accent="lime"
            headerRight={<StatusChip tone="passes">10+ yrs</StatusChip>}
          >
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Senior Full-stack Engineer with 10+ years designing, developing,
                and delivering scalable web applications, SaaS platforms,
                enterprise systems, and customer-facing products.
              </p>
              <p>
                Hands-on across the stack — Node.js, NestJS, REST APIs, MongoDB,
                React, Vue, TypeScript, Next.js, and Nuxt.js — with recent work
                building LLM-powered applications and AI services using Python,
                FastAPI, RAG, embeddings, vector search, and grounded answer
                generation. I design systems where business services and AI
                capabilities are independently deployable: NestJS business APIs
                alongside Python/FastAPI LLM and knowledge services.
              </p>
              <p>
                A strong frontend background — architecture, reusable component
                systems, design systems, and performance optimization — shapes
                how I build. I lead delivery from requirements through
                production, collaborate with product and business stakeholders,
                mentor developers, and run code reviews.
              </p>
              <p>
                Based in Bangkok and open to senior full-stack and LLM / AI
                engineering roles — remote or relocation.
              </p>
            </div>
          </Panel>
        </div>
      </FadeIn>
    </Section>
  );
}
