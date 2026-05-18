import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Send,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const contactMethods = [
  {
    title: 'Email Us',
    description: 'Share your project goals and we will get back with the right approach.',
    value: 'friendsoftwaresin@gmail.com',
    link: 'mailto:friendsoftwaresin@gmail.com',
    action: 'Send Email',
    icon: Mail,
  },
  {
    title: 'Call Us',
    description: 'Talk directly about timelines, pricing, and the solution you need.',
    value: '+91 9521066616',
    link: 'tel:+919521066616',
    action: 'Call Now',
    icon: Phone,
  },
  {
    title: 'Visit Us',
    description: 'We are based in Bhilwara and work with businesses across industries.',
    value: 'Bhilwara, Rajasthan, India',
    link: null,
    action: 'Local Team',
    icon: MapPin,
  },
];

const projectTypes = [
  'Business Website',
  'Mobile App',
  'Custom ERP / CRM',
  'Digital Marketing',
  'UI/UX Design',
  'Maintenance & Support',
];

const responseSteps = [
  {
    title: 'Share your requirement',
    description: 'Tell us what you want to build, who it is for, and where you are stuck.',
    icon: FileText,
  },
  {
    title: 'Get a practical plan',
    description: 'We map the right scope, timeline, and technology for your business goal.',
    icon: CheckCircle2,
  },
  {
    title: 'Start with clarity',
    description: 'Once the direction is clear, we move into design, development, and delivery.',
    icon: Send,
  },
];

const ContactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about the next version of your business."
        description="Whether you need a website, an app, digital marketing, or a custom ERP, we can help you shape the right plan and ship it with confidence."
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-2xl">
              <span className="section-badge">Start Here</span>
              <h2 className="mb-5 text-4xl md:text-5xl">
                Choose the easiest way to reach us.
              </h2>
              <p className="text-lg text-text-muted">
                We keep the process simple, responsive, and focused on what your business actually needs.
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-5">
                <Clock3 className="mb-3 text-primary" size={24} />
                <p className="text-sm font-semibold text-dark">Quick response</p>
                <p className="mt-1 text-sm text-text-muted">Usually within 24 hours</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <CheckCircle2 className="mb-3 text-primary" size={24} />
                <p className="text-sm font-semibold text-dark">Free consultation</p>
                <p className="mt-1 text-sm text-text-muted">Clear scope before work</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <MapPin className="mb-3 text-primary" size={24} />
                <p className="text-sm font-semibold text-dark">India based</p>
                <p className="mt-1 text-sm text-text-muted">Serving clients remotely</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {contactMethods.map(({ title, description, value, link, action, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-2xl">{title}</h3>

                <p className="mb-5 text-text-muted">{description}</p>

                {link ? (
                  <a
                    href={link}
                    className="mt-auto inline-flex items-center justify-between gap-4 rounded-full border border-slate-200 px-5 py-3 font-semibold text-dark transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary"
                  >
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-text-muted">
                        {action}
                      </span>
                      <span className="break-words">{value}</span>
                    </span>
                    <ArrowRight className="shrink-0" size={18} />
                  </a>
                ) : (
                  <div className="mt-auto rounded-full border border-slate-200 px-5 py-3 font-semibold text-dark">
                    <span className="block text-xs uppercase tracking-[0.16em] text-text-muted">
                      {action}
                    </span>
                    {value}
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
              <div className="mb-8 max-w-2xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Quick Brief
                </p>

                <h3 className="mb-3 text-3xl">Need a faster conversation?</h3>

                <p className="text-slate-300">
                  Send a few details first and we can reply with something useful instead of generic.
                </p>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {projectTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 size={17} className="shrink-0 text-primary" />
                    {type}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919521066616?text=Hello%20Friend%20Software%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
              >
                <MessageCircleMore size={19} className="text-primary" />
                Start WhatsApp Chat
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                What Happens Next
              </p>
              <h3 className="mb-8 text-3xl">From first message to clear plan.</h3>

              <div className="space-y-6">
                {responseSteps.map(({ title, description, icon: Icon }, index) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-text-muted">
                        Step {index + 1}
                      </p>
                      <h4 className="mb-2 text-xl">{title}</h4>
                      <p className="text-text-muted">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
