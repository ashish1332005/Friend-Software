import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Mail,
  MessageCircleMore,
  Phone,
  Sparkles,
} from 'lucide-react';

const trustPoints = [
  'Free consultation',
  'Clear scope and pricing',
  'Website, app, ERP, and marketing support',
];

const contactOptions = [
  {
    label: 'Call',
    value: '+91 9521066616',
    href: 'tel:+919521066616',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'friendsoftwaresin@gmail.com',
    href: 'mailto:friendsoftwaresin@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: 'Quick project discussion',
    href: 'https://wa.me/919521066616?text=Hello%20Friend%20Software%2C%20I%20want%20to%20discuss%20a%20project.',
    icon: MessageCircleMore,
    external: true,
  },
];

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-white py-14 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/8"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden bg-slate-950 p-6 text-white sm:p-8 lg:p-10 xl:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(14,165,233,0.22),_transparent_34%),radial-gradient(circle_at_85%_85%,_rgba(79,70,229,0.28),_transparent_36%)]" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
                  backgroundSize: '44px 44px',
                }}
              />

              <div className="relative z-10">
                <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-cyan-200 sm:px-4">
                  <Sparkles size={15} className="shrink-0" />
                  <span className="truncate">Start Your Project</span>
                </div>

                <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Let’s build something useful for your business.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Share your requirement and we will help you choose the right plan for your
                  website, app, ERP, or digital marketing work.
                </p>

                <div className="mt-6 grid gap-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                        <BadgeCheck size={17} />
                      </span>
                      <span className="min-w-0 text-sm font-semibold text-slate-200">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-md">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Get Free Quote
                    <ArrowRight size={17} />
                  </Link>
                  <a
                    href="https://wa.me/919521066616?text=Hello%20Friend%20Software%2C%20I%20want%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    <MessageCircleMore size={17} className="text-cyan-300" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                    Contact Options
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                    Choose the fastest way to reach us.
                  </h3>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                  <Clock3 size={15} />
                  24h response
                </div>
              </div>

              <div className="grid gap-3">
                {contactOptions.map((option) => (
                  <ContactOption key={option.label} {...option} />
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-950">For a faster reply, include:</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Business type, target audience, required service, and the problem you want to solve.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactOption = ({ href, icon: Icon, label, value, external }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="group grid min-w-0 grid-cols-[44px_minmax(0,1fr)] gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg sm:grid-cols-[46px_minmax(0,1fr)_18px]"
  >
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-[46px] sm:w-[46px]">
      <Icon size={18} />
    </span>
    <span className="min-w-0 self-center">
      <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <span className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-black text-slate-950 sm:text-base">
        {value}
      </span>
    </span>
    <ArrowRight className="col-start-2 justify-self-end self-center text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-primary sm:col-start-auto" size={17} />
  </a>
);

export default ContactCTA;
