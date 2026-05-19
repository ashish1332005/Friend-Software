import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  Share2,
  Camera,
  Send,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Clock,
  MessageCircleMore,
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact Us', to: '/contact' },
  ],
  services: [
    { name: 'Digital Marketing', to: '/services' },
    { name: 'Web Development', to: '/services' },
    { name: 'App Development', to: '/services' },
    { name: 'ERP Solutions', to: '/erp-solutions' },
    { name: 'Insta Marketing', to: '/services' },
  ],
  resources: [
    { name: 'Blog', to: '/blog' },
    { name: 'Website Guide', to: '/blog' },
    { name: 'Hosting Guide', to: '/blog' },
    { name: 'Business Growth Tips', to: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', to: '/privacy-policy' },
    { name: 'Terms & Conditions', to: '/terms-and-conditions' },
    { name: 'Affiliate Disclaimer', to: '/affiliate-disclaimer' },
  ],
};

const socials = [
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: Users, label: 'LinkedIn', href: '#' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-12 pb-7 text-white md:pt-20 md:pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(79,70,229,0.12),_transparent_50%)]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:mb-12 md:rounded-[2rem] md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Ready to grow online?
              </p>
              <h3 className="text-xl font-bold leading-snug md:text-3xl">
                Build your website, ERP, app, or marketing system with Friend Software.
              </h3>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919521066616"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
              >
                <MessageCircleMore size={17} />
                WhatsApp Us
              </a>

              <a
                href="tel:+919521066616"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:bg-white/10"
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mb-16 md:grid-cols-2 md:gap-12 xl:grid-cols-5">
          <div className="col-span-2 text-center md:text-left xl:col-span-1">
            <Link to="/" className="mb-5 flex flex-col items-center gap-2.5 md:mb-6 md:flex-row md:items-center">
              <div className="flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
                <img
                  src={logo}
                  alt="Friend Software"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-xl font-bold tracking-tight">
                Friend{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </span>
            </Link>

            <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-slate-400 md:mx-0 md:max-w-xs">
              Friend Software helps businesses grow with websites, apps, ERP software,
              AI-powered reports, hosting guidance, and digital marketing solutions.
            </p>

            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/60 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 md:mb-6 md:text-sm">
              Company
            </h4>

            <ul className="flex flex-col gap-3">
              {footerLinks.company.map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 md:mb-6 md:text-sm">
              Services
            </h4>

            <ul className="flex flex-col gap-3">
              {footerLinks.services.map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 md:mb-6 md:text-sm">
              Resources & Legal
            </h4>

            <ul className="mb-6 grid grid-cols-2 gap-3 md:mb-8 md:flex md:flex-col md:gap-3.5">
              {footerLinks.resources.map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 md:flex md:flex-col md:gap-3.5">
              {footerLinks.legal.map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 xl:col-span-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 md:mb-6 md:text-sm">
              Contact Us
            </h4>

            <ul className="grid gap-4 sm:grid-cols-2 xl:flex xl:flex-col xl:gap-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={16} />
                </div>
                <span className="text-sm leading-relaxed text-slate-400">
                  Bhilwara, Rajasthan, India
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:+919521066616"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  +91 9521066616
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:friendsoftwaresin@gmail.com"
                  className="break-all text-sm text-slate-400 transition-colors hover:text-white"
                >
                  friendsoftwaresin@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock size={16} />
                </div>
                <span className="text-sm leading-relaxed text-slate-400">
                  Mon - Sat: 10:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-500 md:text-left">
              &copy; {new Date().getFullYear()} Friend Software. All rights reserved.
            </p>

            <p className="text-center text-sm text-slate-600 md:text-right">
              Crafted with <span className="text-red-400">♥</span> in Bhilwara, Rajasthan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
