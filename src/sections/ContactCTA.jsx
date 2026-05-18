import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dark to-secondary p-12 text-center shadow-2xl shadow-primary/30 md:p-20"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-white/[0.07]" />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04]" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="mx-auto mb-6 text-white/60" size={32} />
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Ready to Grow <br className="hidden sm:block" /> Your Business?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/70 md:text-xl">
                Let's build something amazing together. Contact us today for a
                free consultation and personalized quote.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="btn bg-white px-10 py-4 text-base font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-2xl"
              >
                Get A Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="btn border-2 border-white/30 px-10 py-4 text-base text-white transition-all hover:border-white hover:bg-white hover:text-primary"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
