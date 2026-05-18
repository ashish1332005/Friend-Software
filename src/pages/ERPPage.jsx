import React from 'react';
import {
  BrainCircuit,
  BarChart3,
  Users,
  ShieldCheck,
  Workflow,
  School,
  Dumbbell,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Database,
  LineChart,
  Smartphone,
} from 'lucide-react';

import PageHero from '../components/PageHero';
import ERPProducts from '../sections/ERPProducts';
import ContactCTA from '../sections/ContactCTA';

const erpHighlights = [
  {
    title: 'AI-Powered Reports',
    description:
      'Get smart business reports, lead insights, marketing performance, and growth suggestions in one dashboard.',
    icon: BrainCircuit,
  },
  {
    title: 'Lead & Client Tracking',
    description:
      'Track every inquiry, follow-up, conversion status, assigned team member, and customer journey clearly.',
    icon: Users,
  },
  {
    title: 'Marketing Dashboard',
    description:
      'See Instagram, Google, website, and campaign leads in one transparent system with accurate reporting.',
    icon: BarChart3,
  },
  {
    title: 'Workflow Automation',
    description:
      'Reduce manual work with automated records, reminders, status updates, and team task management.',
    icon: Workflow,
  },
];

const industries = [
  {
    title: 'School ERP',
    description:
      'Manage students, admissions, fees, attendance, staff, results, notices, and parent communication.',
    icon: School,
  },
  {
    title: 'College ERP',
    description:
      'Centralize admissions, departments, students, faculty, reports, notices, and academic operations.',
    icon: Building2,
  },
  {
    title: 'Gym ERP',
    description:
      'Manage memberships, trainers, fees, attendance, renewals, diet plans, and member follow-ups.',
    icon: Dumbbell,
  },
  {
    title: 'Business ERP',
    description:
      'Perfect for service businesses to manage leads, clients, projects, payments, reports, and team work.',
    icon: Database,
  },
];

const features = [
  'Custom dashboard for owner and team',
  'Lead management with follow-up tracking',
  'AI-based reports and business insights',
  'Role-based login for admin, staff, and users',
  'Student, client, or member database management',
  'Payment, fees, and invoice record system',
  'Marketing campaign performance tracking',
  'Mobile-friendly responsive interface',
  'Secure data storage and organized workflow',
  'Custom modules according to business needs',
];

const ERPPage = () => {
  return (
    <>
      <PageHero
        eyebrow="ERP Solutions"
        title="AI-powered ERP software to manage your business smarter."
        description="Friend Software builds modern ERP systems for schools, colleges, gyms, coaching institutes, service businesses, and growing teams. Manage leads, reports, payments, staff, students, clients, and daily work from one powerful dashboard."
      />

      <section className="section relative overflow-hidden bg-surface">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Sparkles size={16} />
                Smart Business System
              </span>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-dark md:text-5xl">
                One ERP system to control your complete workflow.
              </h2>

              <p className="mb-8 text-lg leading-8 text-text-muted">
                Our ERP is designed to reduce manual work and give business owners complete visibility.
                From leads and admissions to staff, payments, reports, marketing data, and customer follow-ups —
                everything stays organized in one place.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <LineChart className="mb-4 text-primary" size={30} />
                  <h3 className="mb-2 text-xl font-semibold text-dark">Live Growth Tracking</h3>
                  <p className="text-sm text-text-muted">
                    Track leads, sales, campaigns, and business performance clearly.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <ShieldCheck className="mb-4 text-primary" size={30} />
                  <h3 className="mb-2 text-xl font-semibold text-dark">Secure Access</h3>
                  <p className="text-sm text-text-muted">
                    Admin, staff, receptionist, teacher, trainer, or team login with role-based access.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl">
              <div className="absolute -right-5 -top-5 rounded-3xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-xl">
                AI Report Ready
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">ERP Dashboard</p>
                    <h3 className="text-2xl font-bold">Friend Software</h3>
                  </div>
                  <div className="rounded-2xl bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Total Leads</p>
                    <h4 className="mt-2 text-3xl font-bold">1,248</h4>
                    <p className="mt-2 text-sm text-green-300">+18% this month</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Conversions</p>
                    <h4 className="mt-2 text-3xl font-bold">326</h4>
                    <p className="mt-2 text-sm text-green-300">High performance</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Pending Follow-ups</p>
                    <h4 className="mt-2 text-3xl font-bold">74</h4>
                    <p className="mt-2 text-sm text-yellow-300">Action needed</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Campaign ROI</p>
                    <h4 className="mt-2 text-3xl font-bold">3.7x</h4>
                    <p className="mt-2 text-sm text-cyan-300">AI analyzed</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="mb-2 text-sm font-semibold text-primary">AI Suggestion</p>
                  <p className="text-sm leading-6 text-slate-300">
                    Instagram leads are converting better than cold calls. Increase follow-up speed and run
                    remarketing for warm leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ERPProducts />

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
              Powerful Features
            </span>
            <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
              Built for speed, clarity, and control.
            </h2>
            <p className="text-lg text-text-muted">
              Your ERP should not be complicated. We create clean, modern, and easy-to-use systems
              that your team can actually use daily.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {erpHighlights.map(({ title, description, icon: Icon }) => (
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
                Industry Ready ERP
              </span>

              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                Custom ERP for different business models.
              </h2>

              <p className="mb-8 text-lg leading-8 text-slate-300">
                We do not build one fixed software for everyone. We understand your workflow and create
                modules according to your business, team, users, and reporting needs.
              </p>

              <a
                href="https://wa.me/919521066616"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Discuss Your ERP
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {industries.map(({ title, description, icon: Icon }) => (
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
                What You Get
              </span>

              <h2 className="mb-5 text-4xl font-bold text-dark md:text-5xl">
                Everything your team needs in one system.
              </h2>

              <p className="text-lg leading-8 text-text-muted">
                Our ERP helps owners, admins, staff, receptionists, teachers, trainers, and marketing teams
                work together with better data, better follow-up, and better decisions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-primary" size={20} />
                  <p className="font-medium text-dark">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                  <Smartphone size={16} />
                  Web + Mobile Friendly
                </span>

                <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                  Manage your complete work from anywhere.
                </h2>

                <p className="mb-8 text-lg leading-8 text-slate-300">
                  Whether you are in office, on client visit, or managing marketing remotely,
                  your ERP dashboard keeps every lead, task, payment, and report available in real time.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+919521066616"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    Call Now
                  </a>

                  <a
                    href="mailto:friendsoftwaresin@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    Send Requirement
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <h3 className="mb-6 text-2xl font-bold">Best for businesses that need:</h3>

                <div className="space-y-4">
                  {[
                    'Less manual work',
                    'Accurate reporting',
                    'Lead transparency',
                    'Team accountability',
                    'Better customer follow-up',
                    'Custom software for daily operations',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                      <CheckCircle2 className="text-primary" size={20} />
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

export default ERPPage;