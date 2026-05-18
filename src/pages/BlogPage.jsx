import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Globe2,
  Megaphone,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../sections/ContactCTA';

const featuredPosts = [
  {
    title: 'How to Plan a Business Website Before Development Starts',
    category: 'Website Guide',
    readTime: '6 min read',
    date: 'May 18, 2026',
    icon: Globe2,
    description:
      'A practical checklist for pages, content, enquiry forms, SEO basics, speed, and launch planning.',
    points: ['Clear page structure', 'Mobile-first content', 'Lead-focused calls to action'],
  },
  {
    title: 'Hosting, Domain, SSL, and Email: What Every Owner Should Know',
    category: 'Hosting Guide',
    readTime: '5 min read',
    date: 'May 18, 2026',
    icon: Server,
    description:
      'Understand the core setup behind a stable website so your business does not depend on guesswork.',
    points: ['Secure hosting setup', 'SSL and backups', 'Business email basics'],
  },
  {
    title: 'Simple Digital Marketing Steps for Local Business Growth',
    category: 'Growth Tips',
    readTime: '7 min read',
    date: 'May 18, 2026',
    icon: Megaphone,
    description:
      'Use search, social media, landing pages, analytics, and follow-up systems to generate better enquiries.',
    points: ['SEO foundations', 'Social media consistency', 'Conversion tracking'],
  },
];

const categories = [
  { name: 'Website Development', icon: Globe2, count: 'Planning, UI, SEO' },
  { name: 'ERP Solutions', icon: BarChart3, count: 'Reports, automation, dashboards' },
  { name: 'Hosting & Security', icon: ShieldCheck, count: 'Domain, SSL, backups' },
  { name: 'Digital Marketing', icon: Sparkles, count: 'SEO, ads, social growth' },
];

const quickGuides = [
  'Choose one main goal for every website page.',
  'Keep service pages focused on customer problems and outcomes.',
  'Add WhatsApp, phone, and contact forms where users naturally need help.',
  'Track enquiries so marketing decisions are based on real data.',
];

const BlogPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Blog & Resources"
        title="Practical guides for websites, hosting, and business growth."
        description="Helpful articles from Friend Software for business owners planning a stronger digital presence, better systems, and more reliable online enquiries."
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-badge">Latest Articles</span>
              <h2 className="section-title mb-0 text-dark">Start with these guides</h2>
            </div>
            <p className="max-w-xl text-text-muted">
              These resources are written for owners who want clear decisions before investing in
              websites, ERP, hosting, or digital marketing.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => {
              const Icon = post.icon;

              return (
                <article
                  key={post.title}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={23} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-dark transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-5 flex-1 leading-relaxed text-text-muted">
                    {post.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {post.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    Discuss this topic
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="section-badge">Categories</span>
              <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
                Learn by business need
              </h2>
              <p className="text-lg leading-relaxed text-text-muted">
                Browse focused topics around building a better website, setting up reliable hosting,
                improving marketing, and moving daily operations into smarter systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.name}
                    className="rounded-[1.5rem] border border-slate-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                      <Icon size={21} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-dark">{category.name}</h3>
                    <p className="text-sm text-text-muted">{category.count}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <span className="section-badge">Quick Checklist</span>
            <h2 className="mb-6 text-3xl font-extrabold text-dark md:text-4xl">
              Before starting your next digital project
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {quickGuides.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={19} />
                  <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default BlogPage;
