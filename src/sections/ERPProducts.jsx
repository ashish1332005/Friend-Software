import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Heart,
  ArrowRight,
} from 'lucide-react';

const erpTypes = [
  {
    name: 'School ERP',
    emoji: '🏫',
    features: ['Attendance', 'Fees Management', 'Exams', 'Parent Portal'],
  },
  {
    name: 'College ERP',
    emoji: '🎓',
    features: ['LMS', 'Admission', 'Alumni Tracking', 'Inventory'],
  },
  {
    name: 'Gym ERP',
    emoji: '💪',
    features: ['Membership', 'Trainer Tracking', 'Diet Plans', 'Billing'],
  },
  {
    name: 'Custom ERP',
    emoji: '⚙️',
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
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ERPProducts = () => {
  return (
    <section
      id="erp"
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(79,70,229,0.15),_transparent_40%),radial-gradient(circle_at_80%_80%,_rgba(139,92,246,0.1),_transparent_30%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Specialized Solutions
            </span>
            <h2 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[3.5rem]">
              Powerful{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ERP Systems
              </span>
              <br />
              For Your Business
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-400">
              Our ERP solutions are designed to be intuitive yet powerful. We
              offer specialized modules for Schools, Colleges, and Gyms at rates
              much cheaper than the market average.
            </p>

            {/* Highlights */}
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn btn-primary">
              Contact for Pricing <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right — ERP Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {erpTypes.map((erp) => (
              <motion.div
                key={erp.name}
                variants={cardVariants}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4 text-3xl">{erp.emoji}</div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  {erp.name}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {erp.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm text-slate-400"
                    >
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERPProducts;
