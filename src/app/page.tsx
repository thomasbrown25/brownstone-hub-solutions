"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Bot, Check, ChevronDown, Code2, Database, FileCheck2, Globe2, Layers3, Menu, MousePointer2, Play, Sparkles, X, Zap } from "lucide-react";

const benefits = [
  { icon: Globe2, title: "Look ready for business", copy: "A fast, polished website gives people a clear reason to trust you, understand your services, and get in touch." },
  { icon: Bot, title: "Give repetitive work to agents", copy: "AI agents can help organize intake, process information, prepare drafts, and hand the right decisions back to your team." },
  { icon: Layers3, title: "Make your tools work together", copy: "Connect forms, spreadsheets, databases, and the software you already use instead of moving information by hand." },
];

const questions = [
  { question: "What kind of websites do you build?", answer: "We build custom websites for small businesses that clearly explain what you do and make it easy for customers to contact you. We can also connect forms and other tools to your operational workflow." },
  { question: "Do we need to replace our existing tools to use AI agents?", answer: "Not necessarily. We start with your current process and look for practical ways to connect or improve the tools you already have. The right solution depends on the systems and access available." },
  { question: "Is this just a chatbot?", answer: "No. An AI agent can be one part of a larger process. We also build the software, integrations, validation, reporting, and human review steps that make an automation useful." },
  { question: "Can you help with reporting, compliance, or reconciliation?", answer: "Yes. Brownstone Hub Solutions also works on reporting dashboards, compliance workflows, bank reconciliation tools, data imports, and internal business applications." },
  { question: "How do we get started?", answer: "Send us a message about your website or a workflow that slows your team down. We'll follow up by email to discuss an appropriate next step." },
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
}

function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a className={`action-button ${secondary ? "action-button-secondary" : ""}`} href={href}>{children}</a>;
}

function FlowVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flow-visual ${compact ? "flow-visual-compact" : ""}`} aria-label="Illustration of a website inquiry moving through an AI-assisted workflow" role="img">
      <div className="flow-window">
        <div className="window-top"><span className="mini-brand"><Mark /> Brownstone / Workflow</span><span className="window-dots">● ● ●</span></div>
        <div className="flow-canvas">
          <div className="flow-path path-one" /><div className="flow-path path-two" /><div className="flow-path path-three" />
          <div className="flow-node node-one"><span className="node-icon"><Globe2 size={17} /></span><span><strong>Website inquiry</strong><small>New customer request</small></span><span className="node-status">01</span></div>
          <div className="flow-node node-two"><span className="node-icon"><Bot size={17} /></span><span><strong>AI agent</strong><small>Organize &amp; prepare</small></span><span className="node-status">02</span></div>
          <div className="flow-node node-three"><span className="node-icon"><Check size={17} /></span><span><strong>Team review</strong><small>Approve next step</small></span><span className="node-status">03</span></div>
        </div>
        <div className="window-bottom"><span><span className="live-dot" /> Example workflow</span><span>Designed around your business</span></div>
      </div>
      <div className="floating-panel"><span className="float-kicker">A connected experience</span><strong>From first click to follow-up.</strong><span className="float-row"><Globe2 size={15} /> Your website <ArrowRight size={14} /> <Bot size={15} /> Your workflow</span></div>
    </div>
  );
}

function SiteVisual() {
  return <div className="site-visual" aria-label="Illustration of a small business website on desktop and mobile" role="img">
    <div className="site-browser"><div className="site-toolbar"><span>● ● ●</span><span>brownstone / your business</span></div><div className="site-preview"><div className="site-nav"><span className="site-monogram">Y.</span><span>Services &nbsp;&nbsp; About &nbsp;&nbsp; Contact</span></div><div className="site-preview-content"><span className="visual-overline">YOUR BUSINESS, CLEARLY PRESENTED</span><strong>A better first impression starts here.</strong><span className="site-preview-copy">A beautiful, easy-to-use home for the work you do.</span><span className="visual-button">Get in touch <ArrowUpRight size={12} /></span></div><div className="site-preview-panels"><span /><span /><span /></div></div></div>
    <div className="phone"><div className="phone-notch" /><div className="phone-content"><span className="site-monogram">Y.</span><span className="phone-art" /><strong>Made for the way people browse.</strong><span className="phone-lines" /><span className="phone-lines short" /><span className="visual-button">Contact us</span></div></div>
  </div>;
}

function AgentVisual() {
  return <div className="agent-visual" aria-label="Illustration of an AI-assisted workflow with human approval" role="img">
    <div className="agent-head"><span><span className="live-dot" /> WORKFLOW / EXAMPLE</span><span>Designed for your process</span></div>
    <div className="agent-track"><div className="agent-step"><span className="step-symbol"><MousePointer2 size={21} /></span><span><small>01 / INPUT</small><strong>New inquiry arrives</strong><em>Website form or existing tool</em></span></div><span className="track-line" /><div className="agent-step highlighted"><span className="step-symbol"><Sparkles size={21} /></span><span><small>02 / AI ASSIST</small><strong>Agent prepares the next step</strong><em>Organize, validate, draft</em></span></div><span className="track-line" /><div className="agent-step"><span className="step-symbol"><Check size={21} /></span><span><small>03 / HUMAN REVIEW</small><strong>Your team stays in control</strong><em>Review and send</em></span></div></div>
    <div className="agent-footer"><span><Database size={15} /> Connected to your tools</span><span><Zap size={15} /> Less manual work</span></div>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setFormStatus(null);
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: (event.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value || "" }),
      });
      const data = await result.json().catch(() => ({}));
      if (!result.ok || !data.ok) throw new Error(data.error || "We couldn't send your message. Please email tbrown@brownstonehub.com directly.");
      setForm({ name: "", email: "", company: "", message: "" });
      setFormStatus({ kind: "success", message: "Thanks — your message has been sent. We'll be in touch soon." });
    } catch (error) {
      setFormStatus({ kind: "error", message: error instanceof Error ? error.message : "We couldn't send your message. Please email tbrown@brownstonehub.com directly." });
    } finally {
      setSubmitting(false);
    }
  }

  return <>
    <header className="site-header"><div className="header-inner">
      <a href="#top" className="brand" aria-label="Brownstone Hub Solutions home"><Mark /><span>Brownstone <strong>Hub</strong><small>SOLUTIONS</small></span></a>
      <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#websites" onClick={() => setMenuOpen(false)}>Websites</a><a href="#automation" onClick={() => setMenuOpen(false)}>AI automation</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      </nav>
      <div className="header-actions"><a className="header-text-link" href="#questions">Questions</a><ButtonLink href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></ButtonLink></div>
      <button type="button" className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>

    <main id="top">
      <section className="hero dark-section"><div className="hero-glow" /><div className="container hero-inner"><div className="hero-copy"><span className="eyebrow">WEBSITES &amp; AI AUTOMATION</span><h1>Better websites.<br /><span>Smarter workflows.</span></h1><p>We build websites for small businesses and AI-agent workflows that take repetitive work off your team&apos;s plate. Make a stronger first impression. Connect the tools behind the scenes. Keep your people focused on what matters.</p><div className="button-row"><ButtonLink href="#contact">Send us a message <ArrowUpRight size={17} /></ButtonLink><ButtonLink href="#services" secondary>Explore what we build <ArrowRight size={17} /></ButtonLink></div></div><FlowVisual /></div></section>

      <section id="services" className="dark-section value-section"><div className="container"><div className="section-intro centered"><span className="eyebrow">BUILT AROUND YOUR BUSINESS</span><h2>Make the front end look great.<br />Make the back end work better.</h2><p>From the first visit to the follow-up, we build practical technology that helps small businesses show up professionally and operate efficiently.</p></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, copy }) => <article className="benefit-card" key={title}><div className="benefit-icon"><Icon size={27} strokeWidth={1.7} /></div><h3>{title}</h3><p>{copy}</p><a href="#contact">Talk about your project <ArrowUpRight size={16} /></a></article>)}</div></div></section>

      <section id="websites" className="dark-section feature-section"><div className="container feature-grid"><div className="feature-copy"><span className="eyebrow">WEBSITES FOR SMALL BUSINESSES</span><h2>Give your business a website that works as hard as you do.</h2><p>People should understand what you offer within seconds. We create clear, modern websites that make your business easy to find, easy to trust, and easy to contact.</p><ul className="check-list"><li><Check /> Responsive, easy-to-navigate pages</li><li><Check /> Clear services and conversion paths</li><li><Check /> Forms connected to your next steps</li><li><Check /> A foundation you can grow with</li></ul><a className="text-link" href="#contact">Let&apos;s build your website <ArrowUpRight size={19} /></a></div><SiteVisual /></div></section>

      <section id="automation" className="dark-section feature-section feature-reverse"><div className="container feature-grid"><div className="feature-copy"><span className="eyebrow">AI AGENTS &amp; WORKFLOW AUTOMATION</span><h2>Put your busywork on a better path.</h2><p>When your team is copying information between tools, chasing approvals, or rebuilding the same report each week, there&apos;s a better way. We design AI-assisted workflows around the real process—not a generic chatbot.</p><p>Think intake, data cleanup, draft preparation, reporting, compliance, reconciliation, and thoughtful human review where it matters.</p><a className="text-link" href="#contact">Explore an automation <ArrowUpRight size={19} /></a></div><AgentVisual /></div></section>

      <section className="dark-section feature-section final-feature"><div className="container feature-grid"><div className="feature-copy"><span className="eyebrow">CUSTOM-BUILT, NOT ONE-SIZE-FITS-ALL</span><h2>One technical partner for the whole picture.</h2><p>Brownstone Hub Solutions brings website development, software engineering, integrations, reporting, and practical AI together. We can start with one small bottleneck or help untangle a larger operating process.</p><p>Our existing work also spans internal apps, dashboards, compliance workflows, bank reconciliation, and fractional CTO support for growing businesses.</p><a className="text-link" href="#contact">Tell us what you need <ArrowUpRight size={19} /></a></div><div className="capability-visual" aria-label="Capabilities across websites, AI agents, and business systems"><div className="capability-center"><Mark /><span>YOUR<br />BUSINESS</span></div><div className="cap-card cap-one"><Globe2 /><span>Website</span></div><div className="cap-card cap-two"><Bot /><span>AI agents</span></div><div className="cap-card cap-three"><Code2 /><span>Custom tools</span></div><div className="cap-card cap-four"><FileCheck2 /><span>Reporting</span></div><span className="cap-ring cap-ring-one" /><span className="cap-ring cap-ring-two" /></div></div></section>

      <section id="about" className="dark-section approach-section"><div className="container"><span className="eyebrow">HOW WE WORK</span><h2>Technology should solve<br />a real business problem.</h2><div className="approach-grid"><div><span className="approach-number">01</span><h3>Understand</h3><p>We learn how customers find you and how your team actually gets work done.</p></div><div><span className="approach-number">02</span><h3>Build</h3><p>We design the right website, workflow, integration, or custom tool for the job.</p></div><div><span className="approach-number">03</span><h3>Improve</h3><p>We refine what&apos;s working and adjust the system as your needs change.</p></div></div></div></section>

      <section id="questions" className="light-section faq-section"><div className="container faq-container"><span className="eyebrow">GOOD TO KNOW</span><h2>Common questions</h2><div className="faq-list">{questions.map(({ question, answer }, index) => <div className="faq-item" key={question}><button type="button" id={`question-${index}`} aria-expanded={openQuestion === index} aria-controls={`answer-${index}`} onClick={() => setOpenQuestion(openQuestion === index ? null : index)}>{question}<ChevronDown className={openQuestion === index ? "rotate" : ""} size={22} /></button><div id={`answer-${index}`} role="region" aria-labelledby={`question-${index}`} hidden={openQuestion !== index}><p>{answer}</p></div></div>)}</div></div></section>

      <section id="contact" className="light-section contact-section"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow">LET&apos;S GET STARTED</span><h2>Ready to build something better?</h2><p>Tell us about the website you need or the work you wish your team didn&apos;t have to do manually. We&apos;ll start with a conversation about what makes sense for your business.</p><div className="contact-note"><Play size={17} /> Websites • AI agents • Custom business tools</div></div><form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form"><div className="form-row"><label>Name<input required autoComplete="name" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" autoComplete="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="you@company.com" /></label></div><label>Business name<input required autoComplete="organization" value={form.company} onChange={event => setForm({ ...form, company: event.target.value })} placeholder="Your business" /></label><label>What can we help you build?<textarea required rows={4} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="Tell us about your website or a workflow you'd like to improve..." /></label><input name="website" type="text" tabIndex={-1} autoComplete="off" className="contact-honeypot" aria-hidden="true" /><button type="submit" className="action-button" disabled={submitting}>{submitting ? "Sending..." : "Send message"} <ArrowUpRight size={17} /></button>{formStatus && <p className={`form-status ${formStatus.kind}`} role="status">{formStatus.message}</p>}<p className="form-note">Your message will be sent directly to Brownstone Hub Solutions. No scheduling step.</p></form></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="brand"><Mark /><span>Brownstone <strong>Hub</strong><small>SOLUTIONS</small></span></a><p>Websites for small businesses. Smarter workflows with AI agents.</p><span>© {new Date().getFullYear()} Brownstone Hub LLC</span></div></footer>
  </>;
}
