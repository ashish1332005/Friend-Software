import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Layers3,
  Megaphone,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';

import PageHero from '../components/PageHero';
import Portfolio from '../sections/Portfolio';
import ContactCTA from '../sections/ContactCTA';

const portfolioStats = [
  {
    label: 'Project Categories',
    value: '10+',
    description: 'Websites, ERP, apps, dashboards, marketing systems',
  },
  {
    label: 'Business Focus',
    value: '100%',
    description: 'Designed for real business growth and daily operations',
  },
  {
    label: 'Responsive Design',
    value: 'All',
    description: 'Mobile, tablet, and desktop friendly interfaces',
  },
  {
    label: 'Custom Solutions',
    value: 'ERP+',
    description: 'Software built according to client workflow',
  },
];

const featuredProjects = [
  {
    title: 'Business Website & Hosting Setup',
    category: 'Website Development',
    description:
      'Professional business websites with domain, hosting, SSL, responsive design, contact forms, and fast performance setup.',
    icon: Globe,
    tags: ['React', 'Hosting', 'SEO Ready', 'Responsive'],
    results: ['Fast loading pages', 'Professional online presence', 'Lead-ready contact system'],
  },
  {
    title: 'AI-Powered ERP Dashboard',
    category: 'ERP Software',
    description:
      'A custom ERP system that helps businesses track leads, campaigns, clients, tasks, payments, and AI-powered reports from one dashboard.',
    icon: Workflow,
    tags: ['ERP', 'AI Reports', 'Dashboard', 'Automation'],
    results: ['Reduced manual work', 'Better lead tracking', 'Transparent business reports'],
  },
  {
    title: 'School & College Management System',
    category: 'Education ERP',
    description:
      'A modern system for schools and colleges to manage admissions, students, fees, staff, attendance, notices, and reports.',
    icon: Layers3,
    tags: ['Education ERP', 'Admin Panel', 'Reports', 'Role Login'],
    results: ['Centralized student data', 'Easy admission tracking', 'Better admin control'],
  },
  {
    title: 'Local Commerce Startup Platform',
    category: 'Marketplace',
    description:
      'A startup-focused platform concept connecting suppliers, local shop owners, and customers with order and delivery workflow.',
    icon: ShoppingBag,
    tags: ['Marketplace', 'MongoDB', 'Node.js', 'Business Model'],
    results: ['Local supply-chain support', 'Order workflow planning', 'Scalable startup idea'],
  },
  {
    title: 'Digital Marketing Lead System',
    category: 'Marketing Automation',
    description:
      'A lead tracking and campaign reporting system for businesses running Instagram ads, Google ranking, SEO, and social media marketing.',
    icon: Megaphone,
    tags: ['Leads', 'Campaigns', 'Reports', 'Marketing'],
    results: ['Clear campaign tracking', 'Better follow-up system', 'Improved client transparency'],
  },
  {
    title: 'Mobile-Friendly Service Website',
    category: 'Service Business Website',
    description:
      'A clean and premium service website designed to explain business offerings, showcase trust, and generate inquiries.',
    icon: MonitorSmartphone,
    tags: ['UI Design', 'React', 'CTA', 'Mobile First'],
    results: ['Modern brand image', 'Better inquiry flow', 'Professional service presentation'],
  },
];

const technologies = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Flask',
  'Python',
  'Tailwind CSS',
  'Firebase',
  'REST API',
  'JWT Authentication',
  'SEO Basics',
];

const processSteps = [
  {
    title: 'Research & Planning',
    description:
      'We understand your business, target audience, current problems, and the exact workflow you want to improve.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'UI/UX & System Design',
    description:
      'We create clean, modern, mobile-friendly layouts with strong visual hierarchy and simple user flow.',
    icon: Sparkles,
  },
  {
    title: 'Development & Integration',
    description:
      'We build websites, dashboards, ERP modules, APIs, database systems, and secure login features.',
    icon: Code2,
  },
  {
    title: 'Launch & Growth Support',
    description:
      'We help with hosting setup, deployment, performance checks, SEO basics, and marketing-ready structure.',
    icon: Rocket,
  },
];

const trustPoints = [
  {
    title: 'Hosting & Website Guidance',
    description:
      'We help clients choose the right domain, hosting, SSL, business email, and website structure.',
    icon: ShieldCheck,
  },
  {
    title: 'Business-Oriented Development',
    description:
      'Every project is designed with a practical goal: leads, sales, management, automation, or brand trust.',
    icon: BarChart3,
  },
  {
    title: 'Full-Stack Capability',
    description:
      'Frontend, backend, database, authentication, dashboards, APIs, and custom admin panels.',
    icon: Database,
  },
  {
    title: 'Modern Responsive Design',
    description:
      'Websites and software are designed to work smoothly on mobile, tablet, laptop, and desktop screens.',
    icon: Smartphone,
  },
];

const PortfolioPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Professional websites, ERP systems, apps, and marketing solutions."
        description="Explore selected work and project capabilities from Friend Software. We build modern digital systems that help businesses improve their online presence, manage operations, track leads, and grow with confidence."
      />

      <section className="section relative overflow-hidden bg-surface">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                <BadgeCheck size={16} />
                Real Business Solutions
              </span>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-dark md:text-5xl">
                Work that proves design, development, and business understanding.
              </h2>

              <p className="mb-8 text-lg leading-8 text-text-muted">
                Our portfolio is focused on practical outcomes: professional websites, secure dashboards,
                ERP systems, lead management, business automation, and digital marketing support.
                This makes our work suitable for clients who need a complete online growth system.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919521066616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Discuss a Project
                  <ArrowRight size={18} />
                </a>

                <a
                  href="mailto:friendsoftwaresin@gmail.com"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Requirement
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Portfolio Overview</p>
                    <h3 className="text-2xl font-bold">Friend Software</h3>
                  </div>
                  <div className="rounded-2xl bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
                    Active
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Website Development',
                    'ERP Software',
                    'Digital Marketing System',
                    'App & Dashboard UI',
                    'Business Automation',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-white/10 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="font-medium text-slate-100">{item}</span>
                      </div>
                      <CheckIcon />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="mb-2 text-sm font-semibold text-primary">Why this portfolio is strong</p>
                  <p className="text-sm leading-6 text-slate-300">
                    It shows practical business projects, technical skills, hosting knowledge,
                    and client-focused digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {portfolioStats.map(({ label, value, description }) => (
              <div
                key={label}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="mb-2 text-4xl font-bold text-primary">{value}</h3>
                <p className="mb-2 text-lg font-semibold text-dark">{label}</p>
                <p className="text-sm leading-6 text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
              Selected Case Studies
            </span>
            <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
              Projects built for performance, trust, and growth.
            </h2>
            <p className="text-lg leading-8 text-text-muted">
              These project categories show our ability to build professional websites,
              custom software, marketing systems, and digital tools for different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.map(({ title, category, description, icon: Icon, tags, results }) => (
              <article
                key={title}
                className="group rounded-[2.2rem] border border-slate-200 bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                    {category}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-dark md:text-3xl">{title}</h3>

                <p className="mb-6 leading-8 text-text-muted">{description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {results.map((result) => (
                    <div key={result} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 shrink-0 text-primary" size={18} />
                      <p className="font-medium text-dark">{result}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
                Technical Capability
              </span>

              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                Full-stack skills for modern business projects.
              </h2>

              <p className="mb-8 text-lg leading-8 text-slate-300">
                We work with modern frontend, backend, database, authentication, hosting,
                and deployment technologies. This helps us build complete solutions instead of
                only design pages.
              </p>

              <a
                href="tel:+919521066616"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Call for Project Discussion
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
              Our Process
            </span>
            <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
              From idea to launch with a clear workflow.
            </h2>
            <p className="text-lg leading-8 text-text-muted">
              A professional portfolio is not only about design. It should show how projects are planned,
              developed, launched, and improved for real business use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <span className="text-4xl font-black text-slate-100">0{index + 1}</span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-dark">{title}</h3>
                <p className="leading-7 text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                  <ShieldCheck size={16} />
                  Affiliate Approval Friendly
                </span>

                <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                  A portfolio that builds trust for clients and affiliate programs.
                </h2>

                <p className="text-lg leading-8 text-slate-300">
                  This page shows that Friend Software is not a spam website. It presents real services,
                  useful technical content, business solutions, and professional project capability —
                  which is important for hosting affiliate approval.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {trustPoints.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                    <p className="text-sm leading-6 text-slate-300">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

const CheckIcon = () => (
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400/10 text-green-300">
    <BadgeCheck size={16} />
  </span>
);

export default PortfolioPage;