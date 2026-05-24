"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  Cpu,
  Database,
  FileCheck2,
  GitBranch,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  PieChart,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const viewportOnce = { once: true, amount: 0.08, margin: "0px 0px -4% 0px" } as const;

const fadeUp = {
  hidden: { opacity: 0.35, y: 24, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cardReveal = {
  hidden: { opacity: 0.32, y: 20, scale: 0.985, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const services = [
  {
    title: "AI Workflow Automation",
    icon: BrainCircuit,
    copy: "Connect AI to the actual operating process: intake, decisions, data cleanup, approvals, exceptions, and delivery.",
  },
  {
    title: "Reporting & Dashboard Automation",
    icon: LineChart,
    copy: "Replace recurring spreadsheet reporting with live metrics, scheduled outputs, and reliable executive dashboards.",
  },
  {
    title: "Compliance Workflow Automation",
    icon: FileCheck2,
    copy: "Build structured processes for evidence collection, document generation, review trails, and recurring compliance reporting.",
  },
  {
    title: "Bank Reconciliation Automation",
    icon: CircleDollarSign,
    copy: "Automate transaction matching, exception queues, account visibility, and reconciliation status reporting.",
  },
  {
    title: "Internal Business Applications",
    icon: Code2,
    copy: "Custom portals, admin systems, approval tools, data apps, and operational software built around your business rules.",
  },
  {
    title: "Fractional CTO Support",
    icon: Network,
    copy: "Practical technical strategy for SMBs that need senior guidance without hiring a full-time technology executive.",
  },
];

const useCases = [
  ["Bank reconciliations", "Import statements, match records, flag exceptions, and produce audit-ready summaries."],
  ["Compliance reporting", "Collect evidence, generate recurring reports, and track review status across teams."],
  ["Data analysis and visualizations", "Turn fragmented exports into dashboards that expose trends, risks, and opportunities."],
  ["Spreadsheet replacement", "Move fragile workbooks into secure, role-aware apps with validations and workflows."],
  ["Data Migration and Imports", "Use AI import agents to interpret CSV exports, map messy headers to the right fields, validate records, and move data into cleaner systems with less manual cleanup."],
  ["Operational dashboards", "Unify KPIs from CRMs, accounting systems, spreadsheets, APIs, and custom databases."],
];

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  ".NET",
  "C#",
  "SQL Server",
  "PostgreSQL",
  "Azure",
  "OpenAI",
  "Azure OpenAI",
  "API integrations",
  "Workflow automation",
  "Data visualization",
  "Secure authentication",
  "Role-based access",
];

const workflow = [
  {
    step: "01",
    title: "Workflow Audit",
    copy: "We map the messy reality: spreadsheets, approvals, systems, exports, handoffs, manual checks, and bottlenecks.",
  },
  {
    step: "02",
    title: "Automation Plan",
    copy: "You get a practical plan for what to automate, what to integrate, what to rebuild, and where AI actually helps.",
  },
  {
    step: "03",
    title: "Custom Build",
    copy: "We design and build the software, automations, dashboards, and integrations around your real business process.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    copy: "We deploy, train, measure time saved, monitor exceptions, and keep improving as the workflow evolves.",
  },
];

const metrics = [
  { label: "Reconciliation Match Rate", value: "94.8%", detail: "+18.2% vs manual review" },
  { label: "Compliance Reports Generated", value: "312", detail: "Quarter-to-date" },
  { label: "Hours Saved", value: "46.5", detail: "Every operating week" },
  { label: "Data Sources Connected", value: "17", detail: "APIs, sheets, PDFs, SQL" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Badge className="mb-5">
      <Sparkles className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </Badge>
  );
}

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CommandCenterGraphic() {
  const workflowSteps = ["Bank feed", "AI match", "Exception route", "Report sent"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.16),transparent_30%)]" aria-hidden="true" />
      <div className="absolute left-8 right-8 top-0 h-px origin-center bg-gradient-to-r from-transparent via-cyan-200 to-transparent animate-pulse-line" aria-hidden="true" />

      <div className="relative mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">Live workflow command center</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Operations Intelligence Layer</h3>
        </div>
        <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs text-emerald-200">Online</div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">Automation engine</p>
              <p className="mt-1 text-sm font-semibold text-white">Workflow sequence live</p>
            </div>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
              <RefreshCw className="h-6 w-6 animate-spin-slow text-cyan-200" aria-hidden="true" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" aria-hidden="true" />
            </div>
          </div>

          <div className="relative mt-6 h-48 rounded-[1.5rem] border border-white/10 bg-slate-900/65 p-4">
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/5" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 bg-blue-400/10" aria-hidden="true" />
            <Cpu className="absolute left-1/2 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-cyan-100" aria-hidden="true" />
            <div className="absolute inset-8 rounded-full border border-dashed border-cyan-200/25 animate-spin-reverse-slow" aria-hidden="true" />
            <div className="absolute inset-14 rounded-full border border-dashed border-blue-200/20 animate-spin-slow" aria-hidden="true" />

            {[
              { className: "left-4 top-6 bg-cyan-300/15 text-cyan-100", Icon: Database },
              { className: "right-5 top-7 bg-blue-300/15 text-blue-100", Icon: FileCheck2 },
              { className: "bottom-5 left-8 bg-emerald-300/15 text-emerald-100", Icon: LineChart },
              { className: "bottom-7 right-7 bg-sky-300/15 text-sky-100", Icon: ShieldCheck },
            ].map(({ className, Icon }, index) => (
              <motion.div
                key={className}
                className={`absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 ${className}`}
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 3.2, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.075]"
              animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(103,232,249,0.38)", "rgba(255,255,255,0.1)"] }}
              transition={{ duration: 4, delay: index * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 to-blue-500 opacity-70" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300/10 font-mono text-[11px] text-cyan-200">0{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-100">{step}</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                      initial={{ width: "18%" }}
                      animate={{ width: ["18%", "92%", "42%"] }}
                      transition={{ duration: 5, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
                <Zap className="h-4 w-4 text-cyan-200 opacity-70 transition group-hover:scale-110" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-slate-950/55 p-3"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
            <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OperationsIllustration() {
  const avatars = [
    { name: "Ops", className: "left-[8%] top-[58%]", color: "bg-cyan-300" },
    { name: "Finance", className: "left-[28%] top-[72%]", color: "bg-blue-300" },
    { name: "Compliance", className: "right-[12%] top-[60%]", color: "bg-orange-300" },
    { name: "Analyst", className: "left-[48%] top-[20%]", color: "bg-emerald-300" },
  ];

  return (
    <motion.div
      className="relative min-h-[430px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.085] via-white/[0.045] to-cyan-400/[0.06] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl"
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      aria-label="Interactive workflow collaboration illustration"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_38%),radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.14),transparent_36%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-slate-700/45" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-transparent border-r-orange-400/90 border-t-cyan-300/80 animate-orbit-slow" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/25 animate-spin-reverse-slow" aria-hidden="true" />

      <div className="absolute left-[11%] top-[31%] w-32 rounded-3xl border border-cyan-200/25 bg-slate-950/80 p-3 shadow-xl shadow-cyan-950/25">
        <div className="mb-3 flex items-center justify-between">
          <Activity className="h-5 w-5 text-cyan-200" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
        </div>
        <div className="space-y-2">
          {[70, 48, 86].map((width) => (
            <div key={width} className="h-1.5 rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-cyan-300" animate={{ width: [`${Math.max(24, width - 22)}%`, `${width}%`, `${Math.max(34, width - 10)}%`] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          ))}
        </div>
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 430" fill="none" aria-hidden="true">
        <path d="M156 284 C245 202 343 216 488 284" stroke="url(#pathA)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 14" />
        <path d="M240 156 C316 232 400 210 498 140" stroke="url(#pathB)" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 12" />
        <defs>
          <linearGradient id="pathA" x1="156" x2="488" y1="284" y2="284"><stop stopColor="#67e8f9" /><stop offset="1" stopColor="#fb923c" /></linearGradient>
          <linearGradient id="pathB" x1="240" x2="498" y1="156" y2="140"><stop stopColor="#38bdf8" /><stop offset="1" stopColor="#6ee7b7" /></linearGradient>
        </defs>
      </svg>

      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.name}
          className={`absolute ${avatar.className} group`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.2, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-2">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${avatar.color} text-slate-950 shadow-2xl shadow-cyan-950/30 transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3`}>
              <UserRound className="h-7 w-7" aria-hidden="true" />
            </div>
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-200 backdrop-blur">{avatar.name}</span>
          </div>
        </motion.div>
      ))}

      <motion.div className="absolute left-1/2 top-[47%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" animate={{ y: [0, -6, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-200/30 bg-cyan-300/15 shadow-[0_0_35px_rgba(34,211,238,0.25)]">
          <Users className="h-8 w-8 text-cyan-100" aria-hidden="true" />
        </div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-2 text-center backdrop-blur">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">Unified workflow</p>
          <p className="mt-1 text-xs text-slate-300">People + data + approvals</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="noise" aria-hidden="true" />
      <div className="bg-grid fixed inset-0 z-0" aria-hidden="true" />
      <div className="fixed left-1/2 top-0 z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3" aria-label="Brownstone Hub Solutions home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_25px_rgba(34,211,238,0.24)]">
              <Building2 className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[-0.02em]">Brownstone Hub</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200">Solutions</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-200" href="#services">Services</a>
            <a className="transition hover:text-cyan-200" href="#use-cases">Use cases</a>
            <a className="transition hover:text-cyan-200" href="#process">Process</a>
            <a className="transition hover:text-cyan-200" href="#capabilities">Capabilities</a>
          </div>
          <Button asChild size="sm">
            <a href="#contact">Book Audit</a>
          </Button>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <Badge>
            <Bot className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            AI automation + custom technology systems
          </Badge>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl">
            Turn Messy Business Workflows Into Intelligent Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Brownstone Hub Solutions helps small and mid-sized businesses automate reporting, compliance, reconciliation, data analysis, and other time-consuming workflows with custom AI-powered tools built around how your business actually operates.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">Book a Workflow Audit <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#use-cases">See What We Automate</a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["Reporting", "Compliance", "Reconciliation", "Dashboards"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-label="Automation dashboard preview"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-400/20 blur-3xl" aria-hidden="true" />
          <CommandCenterGraphic />
        </motion.div>
      </section>

      <AnimatedSection className="relative z-10 mx-auto max-w-5xl px-5 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="overflow-hidden border-white/10 bg-white/[0.045]">
            <CardContent className="p-7 sm:p-10">
              <p className="text-xl leading-9 text-slate-200">
                Most small and mid-sized businesses are not short on tools. They are buried under them. Spreadsheets, email threads, PDFs, shared drives, outdated websites, disconnected CRMs, manual reports, and one-off processes slowly become the way the business runs. Brownstone Hub Solutions helps businesses identify the repetitive, manual, and data-heavy workflows slowing them down — then builds custom software and AI automation to make those workflows faster, cleaner, and easier to manage.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </AnimatedSection>

      <AnimatedSection id="services" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Automation and software that fits the way your business actually runs.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">From one painful spreadsheet process to a full internal platform, we build the technical layer that turns manual operations into repeatable systems.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["People", "Data", "Approvals"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-100">
                  {item} synced
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <OperationsIllustration />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]">
                  <CardHeader>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:scale-105 group-hover:bg-cyan-300/15">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.copy}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection id="use-cases" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Where messy work becomes measurable leverage.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">We look for data-heavy, repetitive, exception-prone processes where automation can save hours every week and improve accuracy.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <Card className="h-full bg-slate-950/55 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-cyan-200" aria-hidden="true" />
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                    <CardDescription>{copy}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="relative overflow-hidden border-blue-300/20 bg-gradient-to-br from-blue-950/70 via-slate-950/80 to-cyan-950/40">
            <div className="absolute right-[-10%] top-[-35%] h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl" aria-hidden="true" />
            <CardContent className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
              <div>
                <Badge>Clear differentiation</Badge>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">We Are Not Here to Sell You AI Hype</h2>
              </div>
              <div>
                <p className="text-xl leading-9 text-slate-200">
                  AI is useful, but only when it is connected to the right workflow, the right data, and the right business problem. A chatbot alone will not fix broken operations. A generic SaaS tool will not understand the messy details of your process. Brownstone Hub Solutions builds durable systems that combine software engineering, workflow automation, data processing, and AI implementation.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {["Software first", "AI where useful", "Built for operations"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-cyan-100">{item}</div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </AnimatedSection>

      <AnimatedSection id="process" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">A practical path from workflow chaos to operating system.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">No vague transformation theater. We start with a specific workflow, quantify the pain, then build and improve the system.</p>
          </Reveal>
          <div className="grid gap-4">
            {workflow.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.07}>
                <Card className="group overflow-hidden bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                  <CardContent className="flex gap-5 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-200">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-400">{item.copy}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Card>
              <CardContent className="p-8 sm:p-10">
                <SectionLabel>About</SectionLabel>
                <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">A technical partner for SMB operators who need more than another subscription.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">Brownstone Hub Solutions is a brand under Brownstone Hub LLC focused on practical automation, internal tools, and AI-enabled software for small and mid-sized businesses. We work like a focused technology partner: understanding how work actually gets done, identifying what should be automated or rebuilt, and delivering systems that remove recurring friction.</p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full bg-cyan-300/10">
              <CardContent className="p-8">
                <PieChart className="h-10 w-10 text-cyan-200" aria-hidden="true" />
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">Engagement model</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Workflow audit, automation roadmap, custom build, ongoing improvement.</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </AnimatedSection>

      <AnimatedSection id="capabilities" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionLabel>Tech capabilities</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Modern stack. Secure architecture. Business-specific implementation.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">We combine application engineering, database design, integrations, AI services, authentication, dashboards, and deployment practices into one coherent solution.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <Card>
              <CardContent className="p-7">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {tech.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={cardReveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      transition={{ duration: 0.48, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
                <Separator className="my-7" />
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300"><Database className="h-5 w-5 text-cyan-200" /> Data pipelines</div>
                  <div className="flex items-center gap-3 text-sm text-slate-300"><LockKeyhole className="h-5 w-5 text-cyan-200" /> Secure access</div>
                  <div className="flex items-center gap-3 text-sm text-slate-300"><GitBranch className="h-5 w-5 text-cyan-200" /> API workflows</div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative z-10 mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <Card>
            <CardHeader>
              <SectionLabel>Common questions</SectionLabel>
              <CardTitle className="text-3xl sm:text-4xl">Before the workflow audit</CardTitle>
              <CardDescription>Quick answers for operators evaluating AI automation, internal tools, or fractional CTO support.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do we need clean data before starting?</AccordionTrigger>
                  <AccordionContent>No. Messy data is usually part of the problem. The audit identifies what needs cleaning, validation, standardization, and integration before automation is reliable.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is this just chatbot implementation?</AccordionTrigger>
                  <AccordionContent>No. AI may be part of the system, but the core work is software engineering, workflow design, data processing, integrations, dashboards, and operational controls.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can you work with our existing tools?</AccordionTrigger>
                  <AccordionContent>Yes. We can connect to APIs, databases, exports, spreadsheets, PDFs, existing websites, CRMs, accounting systems, and custom software where access allows.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </AnimatedSection>

      <AnimatedSection id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="relative overflow-hidden border-cyan-300/25 bg-gradient-to-br from-slate-900/95 via-slate-950 to-blue-950/60">
            <div className="absolute left-[-12%] top-[-20%] h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl" aria-hidden="true" />
            <CardContent className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
              <div>
                <Badge>Contact / workflow audit</Badge>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Ready to find the workflows costing your team the most time?</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">Book a workflow audit and we will identify the repetitive reporting, compliance, reconciliation, spreadsheet, and data-heavy processes that are good candidates for automation or custom software.</p>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <div className="flex gap-3"><ShieldCheck className="h-5 w-5 text-cyan-200" /> Practical recommendations, not AI theater.</div>
                  <div className="flex gap-3"><Layers3 className="h-5 w-5 text-cyan-200" /> Software, integrations, dashboards, and automation in one plan.</div>
                  <div className="flex gap-3"><Workflow className="h-5 w-5 text-cyan-200" /> Built around your existing operational reality.</div>
                </div>
              </div>
              <form className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl sm:p-7" aria-label="Workflow audit request form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-slate-200">
                    Name
                    <Input name="name" placeholder="Your name" autoComplete="name" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-slate-200">
                    Email
                    <Input name="email" type="email" placeholder="you@company.com" autoComplete="email" />
                  </label>
                </div>
                <label className="mt-4 block space-y-2 text-sm font-medium text-slate-200">
                  Company
                  <Input name="company" placeholder="Company name" autoComplete="organization" />
                </label>
                <label className="mt-4 block space-y-2 text-sm font-medium text-slate-200">
                  What workflow is slowing you down?
                  <Textarea name="message" placeholder="Example: monthly compliance reports, bank reconciliations, spreadsheet-heavy approvals, disconnected dashboards..." />
                </label>
                <Button type="button" className="mt-6 w-full" size="lg">Book a Workflow Audit <ArrowRight className="h-4 w-4" /></Button>
                <p className="mt-4 text-center text-xs leading-5 text-slate-500">Form wiring can connect to your preferred CRM, email inbox, or scheduling flow.</p>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </AnimatedSection>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Brownstone Hub LLC. Brownstone Hub Solutions.</p>
          <p className="font-mono uppercase tracking-[0.18em] text-slate-500">AI automation • custom software • fractional CTO</p>
        </div>
      </footer>
    </main>
  );
}
