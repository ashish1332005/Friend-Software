import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Globe,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react';

import PageHero from '../components/PageHero';
import Clients from '../sections/Clients';
import About from '../sections/About';
import ContactCTA from '../sections/ContactCTA';

const companyValues = [
  {
    title: 'Business First Approach',
    description:
      'We do not only build websites or software. We first understand your business goal, audience, workflow, and growth plan.',
    icon: Target,
  },
  {
    title: 'Modern Technology',
    description:
      'We use modern web technologies to build responsive websites, dashboards, ERP systems, and digital products.',
    icon: Code2,
  },
  {
    title: 'Long-Term Support',
    description:
      'Our work does not stop after delivery. We support clients with updates, improvements, hosting guidance, and growth ideas.',
    icon: HeartHandshake,
  },
  {
    title: 'Clear Communication',
    description:
      'We keep the process simple, transparent, and easy to understand so clients always know what is happening.',
    icon: Users,
  },
];

const services = [
  {
    title: 'Website Development',
    description:
      'Professional business websites, landing pages, portfolio websites, school websites, and service websites.',
    icon: Globe,
  },
  {
    title: 'ERP Software',
    description:
      'Custom ERP systems for schools, colleges, gyms, businesses, lead tracking, reporting, and workflow automation.',
    icon: Workflow,
  },
  {
    title: 'App Development',
    description:
      'Mobile-friendly digital systems and app solutions for businesses that need better customer and team access.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Digital Marketing',
    description:
      'Social media marketing, Instagram growth, lead generation, SEO basics, Google ranking, and campaign support.',
    icon: Megaphone,
  },
];

const whyChooseUs = [
  'Custom solutions according to business needs',
  'Modern UI/UX with mobile responsive design',
  'Secure login, dashboard, database, and admin panels',
  'ERP systems with AI-powered reports and lead tracking',
  'Hosting, domain, SSL, and deployment guidance',
  'Website + marketing + software under one roof',
  'Clear pricing, clear workflow, and practical suggestions',
  'Focused on long-term digital growth',
];

const timeline = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We understand your business, target customers, current problems, and the solution you actually need.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We create a clear plan for website, ERP, app, marketing, hosting, timeline, and required features.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We design and develop a clean, secure, responsive, and easy-to-use digital product.',
  },
  {
    step: '04',
    title: 'Grow',
    description:
      'We help you improve results through reports, marketing support, automation, and continuous improvements.',
  },
];

const stats = [
  {
    value: '360°',
    label: 'Digital Solutions',
    description: 'Website, app, ERP, hosting, and marketing support',
  },
  {
    value: 'AI+',
    label: 'Smart Reporting',
    description: 'AI-powered reports for better decisions',
  },
  {
    value: '100%',
    label: 'Responsive Design',
    description: 'Mobile, tablet, and desktop friendly layouts',
  },
  {
    value: '1:1',
    label: 'Client Focus',
    description: 'Personalized planning for every business',
  },
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Friend Software builds digital systems that help businesses grow smarter."
        description="We are a modern technology and digital growth company helping businesses with websites, apps, ERP software, AI-powered reports, hosting guidance, and digital marketing solutions."
      />

      <section className="section relative overflow-hidden bg-surface">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Sparkles size={16} />
                Who We Are
              </span>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-dark md:text-5xl">
                A technology partner for businesses that want more than just a website.
              </h2>

              <p className="mb-6 text-lg leading-8 text-text-muted">
                Friend Software helps local businesses, schools, colleges, startups, service providers,
                and growing teams build a strong digital presence. Our goal is to combine technology,
                design, automation, and marketing so businesses can manage work better and grow faster.
              </p>

              <p className="mb-8 text-lg leading-8 text-text-muted">
                We work on websites, custom ERP systems, dashboards, mobile-friendly apps, lead management
                systems, and digital marketing support. We also guide clients with domain, hosting, SSL,
                deployment, and online growth strategy.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919521066616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </a>

                <a
                  href="mailto:friendsoftwaresin@gmail.com"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Requirement
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Company Focus</p>
                    <h3 className="text-2xl font-bold">Friend Software</h3>
                  </div>

                  <div className="rounded-2xl bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
                    Growth Partner
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Website Development',
                    'ERP & Dashboard Systems',
                    'AI Reports & Automation',
                    'Digital Marketing Support',
                    'Hosting & Deployment Guidance',
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
                      <BadgeCheck size={20} className="text-green-300" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="mb-2 text-sm font-semibold text-primary">Our Promise</p>
                  <p className="text-sm leading-6 text-slate-300">
                    We build practical digital solutions that are easy to use, easy to manage,
                    and focused on business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ value, label, description }) => (
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

      <Clients />

      <About />

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
              Our Values
            </span>
            <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
              We build with clarity, trust, and long-term thinking.
            </h2>
            <p className="text-lg leading-8 text-text-muted">
              Every project is designed to solve a real business problem, not just to look good.
              We focus on clean design, strong functionality, and practical growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {companyValues.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-[2rem] border border-slate-200 bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-dark">{title}</h3>
                <p className="leading-7 text-text-muted">{description}</p>
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
                What We Do
              </span>

              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                Complete digital solutions for modern businesses.
              </h2>

              <p className="mb-8 text-lg leading-8 text-slate-300">
                Instead of giving only one service, we help clients with the complete digital journey:
                website, software, ERP, hosting setup, digital marketing, lead tracking, and reporting.
              </p>

              <a
                href="tel:+919521066616"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Call for Consultation
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                  <p className="leading-7 text-slate-300">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
                Why Choose Friend Software
              </span>

              <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
                We understand both technology and business growth.
              </h2>

              <p className="text-lg leading-8 text-text-muted">
                Many businesses struggle because their website, marketing, leads, and internal work are
                not connected. We help connect these parts with smart digital systems and clear reporting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <BadgeCheck className="mt-1 shrink-0 text-primary" size={20} />
                  <p className="font-medium text-dark">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
              How We Work
            </span>
            <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
              Simple process, professional execution.
            </h2>
            <p className="text-lg leading-8 text-text-muted">
              Our process keeps projects clear from the first discussion to final launch and future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {timeline.map(({ step, title, description }) => (
              <article
                key={title}
                className="relative rounded-[2rem] border border-slate-200 bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <span className="mb-6 block text-5xl font-black text-primary/20">{step}</span>
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
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                  <ShieldCheck size={16} />
                  Trusted Digital Partner
                </span>

                <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                  Building websites, systems, and growth tools with a professional approach.
                </h2>

                <p className="mb-8 text-lg leading-8 text-slate-300">
                  Whether you need a business website, ERP dashboard, app, or digital marketing system,
                  Friend Software helps you plan, build, launch, and improve with confidence.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://wa.me/919521066616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    WhatsApp Us
                  </a>

                  <a
                    href="mailto:friendsoftwaresin@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    Email Requirement
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <h3 className="mb-6 text-2xl font-bold">Best fit for:</h3>

                <div className="space-y-4">
                  {[
                    'Small and growing businesses',
                    'Schools, colleges, and institutes',
                    'Service providers and local brands',
                    'Startups and new digital products',
                    'Businesses needing ERP and automation',
                    'Clients who need website + marketing together',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                      <BadgeCheck className="text-primary" size={20} />
                      <span className="font-medium text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default AboutPage;