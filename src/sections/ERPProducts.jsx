import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  Heart,
  Settings,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const erpTypes = [
  {
    name: 'School ERP',
    icon: GraduationCap,
    features: ['Attendance', 'Fees Management', 'Exams', 'Parent Portal'],
  },
  {
    name: 'College ERP',
    icon: Building2,
    features: ['LMS', 'Admission', 'Alumni Tracking', 'Inventory'],
  },
  {
    name: 'Gym ERP',
    icon: Dumbbell,
    features: ['Membership', 'Trainer Tracking', 'Diet Plans', 'Billing'],
  },
  {
    name: 'Custom ERP',
    icon: Settings,
    features: ['Tailored Workflow', 'Cloud Hosting', '24/7 Support', 'Mobile App'],
  },
];

const highlights = [
  {
    icon: CheckCircle2,
    title: 'Cost Effective',
    desc: 'Best rates in the market',
  },
  { icon: Zap, title: 'Fast Deployment', desc: 'Ready in days, not weeks' },
  {
    icon: ShieldCheck,
    title: 'Secure & Cloud',
    desc: 'Safe and accessible anywhere',
  },
  { icon: Heart, title: 'User Friendly', desc: 'Minimal learning curve' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const ERPProducts = () => {
  return (
    <section id="erp" className="relative overflow-hidden bg-white py-16 text-slate-950 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,_rgba(79,70,229,0.08),_transparent_36%),radial-gradient(circle_at_80%_80%,_rgba(14,165,233,0.08),_transparent_32%)]" />
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              Specialized Solutions
            </span>
            <h2 className="mb-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Powerful{' '}
              <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                ERP Systems
              </span>{' '}
              for daily business work.
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Manage students, members, fees, reports, leads, and operations from one clean
              system designed around your workflow.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950">{title}</h4>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 text-sm font-black text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 sm:w-fit"
            >
              Contact for Pricing <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {erpTypes.map((erp) => {
              const Icon = erp.icon;

              return (
                <motion.div
                  key={erp.name}
                  variants={cardVariants}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={27} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                    {erp.name}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {erp.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERPProducts;
