import { StackSection } from "@/components/sections/stack-section"
import { Section } from "@/components/ui/section"

const frontend = [
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    icon: "typescript",
  },
  { name: "React", url: "https://react.dev", icon: "react" },
  { name: "Next.js", url: "https://nextjs.org", icon: "nextjs" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com", icon: "tailwindcss" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com", icon: "shadcn-ui" },
  { name: "Radix UI", url: "https://www.radix-ui.com", icon: "radix-ui" },
  {
    name: "Material UI",
    url: "https://mui.com/material-ui",
    icon: "materialui",
  },
  { name: "Motion", url: "https://motion.dev", icon: "motion" },
  { name: "Expo", url: "https://expo.dev", icon: "expo" },
]

const backend = [
  { name: "Node.js", url: "https://nodejs.org/en", icon: "nodejs" },
  { name: "Bun", url: "https://bun.sh", icon: "bun" },
  { name: "NestJS", url: "https://nestjs.com", icon: "nestjs" },
  { name: "tRPC", url: "https://trpc.io", icon: "trpc" },
  { name: "Express", url: "https://expressjs.com", icon: "expressjs" },
  { name: "Elysia", url: "https://elysiajs.com", icon: "elysiajs" },
  { name: "Hono", url: "https://hono.dev", icon: "hono" },
  { name: "PostgreSQL", url: "https://www.postgresql.org", icon: "postgresql" },
  { name: "Prisma ORM", url: "https://www.prisma.io/orm", icon: "prisma" },
  { name: "Drizzle ORM", url: "https://orm.drizzle.team", icon: "drizzle-orm" },
]

const testing = [
  { name: "Jest", url: "https://jestjs.io", icon: "jest" },
  { name: "Vitest", url: "https://vitest.dev", icon: "vitest" },
  { name: "Playwright", url: "https://playwright.dev", icon: "playwright" },
]

const ops = [
  {
    name: "GitHub Actions",
    url: "https://github.com/features/actions",
    icon: "github",
  },
  { name: "Docker", url: "https://www.docker.com", icon: "docker" },
  { name: "Jenkins", url: "https://www.jenkins.io", icon: "jenkins" },
  { name: "Ansible", url: "https://docs.ansible.com", icon: "ansible" },
  { name: "Airflow", url: "https://airflow.apache.org", icon: "airflow" },
]

export const Stack = () => (
  <Section title="Stack" className="p-0">
    <StackSection name="Front-end" items={frontend} />
    <div className="h-4 screen-lines" />
    <StackSection name="Back-end" items={backend} />
    <div className="h-4 screen-lines" />
    <StackSection name="Testing" items={testing} />
    <div className="h-4 screen-lines" />
    <StackSection name="Ops" items={ops} />
  </Section>
)
