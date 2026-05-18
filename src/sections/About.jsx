import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Headphones,
  Layers3,
  LineChart,
  ShieldCheck,
} from 'lucide-react';
import heroDeviceMockup from '../assets/hero_device_mockup.png';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '300+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
];

const process = [
  {
    title: 'Understand',
    desc: 'We first learn your business, audience and real goal.',
    icon: LineChart,
  },
  {
    title: 'Build',
    desc: 'We design and develop websites, apps, ERP and campaigns.',
    icon: Layers3,
  },
  {
    title: 'Support',
    desc: 'We help after launch with updates, reports and improvements.',
    icon: Headphones,
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="section-badge">About Friend Software</span>

            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              A practical digital partner for websites, ERP and growth.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              We help schools, local businesses and service brands launch better digital systems without making the process complicated. You get planning, design, development, marketing and support from one focused team.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                'Clear communication from idea to launch',
                'Business-focused UI, not just decorative design',
                'Reliable support after the project goes live',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold text-slate-700 md:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950 md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-black text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                Know More
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-black text-slate-700 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={heroDeviceMockup}
                  alt="Friend Software digital dashboard preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-white/90 p-4 shadow-xl backdrop-blur">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                      <ShieldCheck size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-950">Built for real business use</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">
                        Fast websites, useful dashboards and marketing systems that your team can manage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-0 border-t border-slate-200 md:grid-cols-3">
                {process.map(({ title, desc, icon: Icon }) => (
                  <div key={title} className="border-b border-slate-200 bg-white p-5 transition-colors hover:bg-slate-50 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 text-base font-black text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/15 bg-white p-4 shadow-sm">
              <BadgeCheck size={20} className="shrink-0 text-primary" />
              <p className="text-sm font-bold text-slate-700">
                One team for design, development, ERP, marketing and support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
