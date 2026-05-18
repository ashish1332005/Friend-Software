import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const clients = [
  {
    name: "STech Group",
    type: "School ERP + Marketing",
    result: "Admissions and operations system",
    icon: GraduationCap,
  },
  {
    name: "Academic Plus",
    type: "Admission Growth",
    result: "Lead funnel and campaign support",
    icon: Building2,
  },
  {
    name: "Sujas College",
    type: "Lead Generation",
    result: "Inquiry growth through digital ads",
    icon: GraduationCap,
  },
  {
    name: "EduPro",
    type: "Digital Branding",
    result: "Brand content and web presence",
    icon: BriefcaseBusiness,
  },
  {
    name: "FitZone Gym",
    type: "Local Campaigns",
    result: "Membership leads from nearby audience",
    icon: Dumbbell,
  },
  {
    name: "Royal Academy",
    type: "Performance Marketing",
    result: "Awareness, inquiries, and reporting",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "1200+", label: "Businesses supported" },
  { value: "3000+", label: "Leads generated" },
  { value: "5 star", label: "Client experience" },
];

const Clients = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const cardsX = useTransform(scrollYProgress, [0.2, 0.75], ["0%", "-42%"]);
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.75], ["8%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_82%_30%,rgba(139,92,246,0.14),transparent_30%)]" />
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative z-10">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.5fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-sky-200 backdrop-blur">
              <Sparkles size={16} />
              Trusted By Growing Teams
            </div>

            <h2 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Digital growth work trusted by schools, local brands, and service businesses.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              We help clients combine campaigns, websites, ERP, and automation into systems that are easier to run and easier to measure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <div className="mb-7 flex items-center gap-4">
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                style={{ width: progressWidth }}
                className="h-full rounded-full bg-gradient-to-r from-sky-300 via-primary to-secondary"
              />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Scroll</p>
          </div>

          <motion.div style={{ x: cardsX }} className="flex w-max gap-5 pr-[44vw]">
            <ImpactCard />
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
            <EndCard />
          </motion.div>
        </div>

        <div className="-mx-4 overflow-hidden px-4 lg:hidden">
          <motion.div
            className="flex w-max gap-4 pb-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...mobileCards, ...mobileCards].map((item, index) => {
              if (item.type === "impact") {
                return <ImpactCard key={`${item.type}-${index}`} className="w-[270px] shrink-0 sm:w-[310px]" />;
              }

              if (item.type === "end") {
                return <EndCard key={`${item.type}-${index}`} className="w-[270px] shrink-0 sm:w-[310px]" />;
              }

              return (
                <ClientCard
                  key={`${item.client.name}-${index}`}
                  client={item.client}
                  compact
                  className="w-[270px] shrink-0 sm:w-[310px]"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const mobileCards = [
  { type: "impact" },
  ...clients.map((client) => ({ type: "client", client })),
  { type: "end" },
];

const ImpactCard = ({ className = "" }) => {
  return (
    <div className={`flex min-h-[290px] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur lg:h-[340px] lg:w-[380px] lg:shrink-0 ${className}`}>
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
          <TrendingUp size={24} />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Our Impact</p>
        <h3 className="mt-4 text-4xl font-black text-white lg:text-5xl">Results First</h3>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Every project is shaped around a practical business outcome: more inquiries, smoother operations, cleaner reporting, or stronger brand trust.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-300">
        <Star size={16} className="fill-sky-300 text-sky-300" />
        Campaigns, websites, ERP, and support
      </div>
    </div>
  );
};

const ClientCard = ({ client, compact = false, className = "" }) => {
  const Icon = client.icon;

  return (
    <motion.article
      whileHover={{ y: compact ? 0 : -8 }}
      className={`group flex min-h-[260px] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/15 backdrop-blur transition-all duration-300 hover:border-sky-300/30 hover:bg-white/[0.07] lg:h-[340px] lg:w-[330px] lg:shrink-0 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/15 bg-sky-300/10 text-sky-200">
          <Icon size={24} />
        </div>
        <ArrowUpRight size={20} className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-300" />
      </div>

      <div className="mt-10">
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

const EndCard = ({ className = "" }) => {
  return (
    <div className={`flex min-h-[290px] flex-col justify-between rounded-lg border border-sky-300/20 bg-gradient-to-br from-sky-400/15 via-white/[0.055] to-violet-500/15 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur lg:h-[340px] lg:w-[380px] lg:shrink-0 ${className}`}>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Next Growth Story</p>
        <h3 className="mt-4 text-3xl font-black text-white">Your brand can be next.</h3>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Tell us your goal and we will help you choose the right mix of marketing, website, ERP, and automation work.
        </p>
      </div>

      <Link
        to="/contact"
        className="mt-7 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
      >
        Start Growth
        <ArrowRight size={17} />
      </Link>
    </div>
  );
};

export default Clients;
