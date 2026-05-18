import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';

const clients = [
  {
    name: 'STech Group',
    type: 'School ERP + Marketing',
    result: 'Admissions and operations system',
    icon: GraduationCap,
  },
  {
    name: 'Academic Plus',
    type: 'Admission Growth',
    result: 'Lead funnel and campaign support',
    icon: Building2,
  },
  {
    name: 'Sujas College',
    type: 'Lead Generation',
    result: 'Inquiry growth through digital ads',
    icon: GraduationCap,
  },
  {
    name: 'FitZone Gym',
    type: 'Local Campaigns',
    result: 'Membership leads from nearby audience',
    icon: Dumbbell,
  },
];

const desktopClients = [...clients, ...clients];

const stats = [
  { value: '1200+', label: 'Businesses supported' },
  { value: '3000+', label: 'Leads generated' },
  { value: '5 star', label: 'Client experience' },
];

const Clients = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_82%_30%,rgba(139,92,246,0.1),transparent_30%)]" />
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container relative z-10">
        <div className="mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.5fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-sky-200 backdrop-blur">
              <Sparkles size={16} />
              Trusted By Growing Teams
            </div>

            <h2 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
              Practical digital work trusted by schools, local brands, and service businesses.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              Simple proof, real business categories, and outcomes that are easy for new clients to understand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur"
              >
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-4 lg:hidden">
          <ImpactCard />

          <div className="grid gap-4 sm:grid-cols-2">
            {clients.map((client, index) => (
              <ClientCard key={client.name} client={client} index={index} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-4 grid grid-cols-[0.82fr_1.18fr] gap-4"
          >
            <ImpactCard />

            <div className="relative overflow-hidden rounded-3xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950 to-transparent" />

              <motion.div
                className="flex w-max gap-4"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              >
                {desktopClients.map((client, index) => (
                  <ClientCard
                    key={`${client.name}-${index}`}
                    client={client}
                    index={index % clients.length}
                    className="w-[310px] shrink-0"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-4 grid gap-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">
              Next Growth Story
            </p>
            <h3 className="mt-3 text-3xl font-black text-white">Your brand can be next.</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Tell us your goal and we will help you choose the right mix of marketing, website,
              ERP, and automation work.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:w-fit"
          >
            Start Growth
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ImpactCard = () => {
  return (
    <div className="flex min-h-[240px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/15 backdrop-blur">
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
          <TrendingUp size={24} />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Our Impact</p>
        <h3 className="mt-4 text-4xl font-black text-white lg:text-5xl">Results First</h3>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Every project is shaped around a practical business outcome: more inquiries, smoother
          operations, cleaner reporting, or stronger brand trust.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-300">
        <Star size={16} className="fill-sky-300 text-sky-300" />
        Campaigns, websites, ERP, and support
      </div>
    </div>
  );
};

const ClientCard = ({ client, index, className = '' }) => {
  const Icon = client.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className={`group flex min-h-[205px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/10 backdrop-blur transition-all duration-300 hover:border-sky-300/30 hover:bg-white/[0.07] sm:p-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/10 text-sky-200">
          <Icon size={24} />
        </div>
        <Star size={18} className="fill-sky-300 text-sky-300" />
      </div>

      <div className="mt-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
          Growth Partner
        </p>
        <h3 className="text-2xl font-black text-white transition-colors group-hover:text-sky-200">
          {client.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-sky-200">{client.type}</p>
        <p className="mt-4 text-sm leading-6 text-slate-400">{client.result}</p>
      </div>
    </motion.article>
  );
};

export default Clients;
