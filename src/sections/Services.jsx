import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Database,
  Globe,
  Megaphone,
  Smartphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    desc: "Campaigns built around leads, local visibility, retargeting, and clear monthly reporting.",
    icon: Megaphone,
    accent: "text-sky-600 bg-sky-50 border-sky-100",
    highlight: "Google Ads, SEO, lead funnels",
  },
  {
    title: "Instagram Marketing",
    desc: "Reels, ad creatives, account positioning, and content calendars that make brands easier to trust.",
    icon: Camera,
    accent: "text-rose-600 bg-rose-50 border-rose-100",
    highlight: "Reels, Meta ads, brand content",
  },
  {
    title: "Web Development",
    desc: "Fast responsive websites with polished UI, conversion sections, and simple editing workflows.",
    icon: Globe,
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
    highlight: "Business sites, landing pages, portfolios",
  },
  {
    title: "App Development",
    desc: "Modern mobile app interfaces, admin panels, and scalable product foundations for growing teams.",
    icon: Smartphone,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
    highlight: "Android apps, dashboards, MVPs",
  },
  {
    title: "ERP Solutions",
    desc: "Custom school, college, and business ERP systems for operations, reporting, and automation.",
    icon: Database,
    accent: "text-amber-600 bg-amber-50 border-amber-100",
    highlight: "School ERP, CRM, billing",
  },
  {
    title: "IT Consulting",
    desc: "Technology planning, workflow automation, and practical guidance for better digital decisions.",
    icon: BarChart3,
    accent: "text-violet-600 bg-violet-50 border-violet-100",
    highlight: "Automation, strategy, integrations",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 text-slate-950 md:py-24">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
              <Sparkles size={16} />
              Services
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Services that cover your complete digital growth.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Choose only what you need: marketing, websites, apps, ERP, automation or consulting.
            </p>
          </motion.div>

          <Link
            to="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-primary sm:w-fit"
          >
            Get A Quote
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.045, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${service.accent}`}>
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-black text-slate-950 transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                      <span className="shrink-0 text-xs font-black text-slate-300 group-hover:text-primary">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.desc}</p>

                    <span className="mt-4 inline-flex rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500">
                      {service.highlight}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
