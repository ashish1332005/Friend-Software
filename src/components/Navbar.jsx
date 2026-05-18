import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  Home,
  Mail,
  Menu,
  MessageCircleMore,
  Phone,
  Sparkles,
  Users,
  Wrench,
  X,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Wrench },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Portfolio', href: '/portfolio', icon: BriefcaseBusiness },
  { name: 'ERP Solutions', href: '/erp-solutions', icon: Sparkles },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <nav
        className={`container flex min-h-[76px] items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'rounded-none border-white/70 bg-white/90 py-1 shadow-lg shadow-slate-900/5 backdrop-blur-2xl md:rounded-2xl md:border md:px-5'
            : 'py-1 md:px-0'
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="group relative z-10 flex min-w-0 items-center gap-3"
          aria-label="Friend Software home"
        >
          <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105 md:h-[82px] md:w-[82px]">
            <img
              src={logo}
              alt="Friend Software"
              className="relative z-10 h-full w-full object-contain"
            />
          </div>

          <div className="hidden min-w-0 leading-none lg:block">
            <h1
              className={`truncate text-[26px] font-black tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-950' : 'text-white drop-shadow-sm'
              }`}
            >
              Friend Software
            </h1>
            <p
              className={`mt-1 text-xs font-semibold tracking-[0.22em] transition-colors duration-300 ${
                isScrolled ? 'text-slate-500' : 'text-white/75'
              }`}
            >
              DIGITAL GROWTH
            </p>
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm backdrop-blur xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919521066616"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary lg:flex"
            aria-label="Call Friend Software"
          >
            <Phone size={17} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
          >
            <Sparkles size={14} />
            Get A Quote
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-dark shadow-sm transition-colors hover:bg-slate-100 xl:hidden"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[92px] bg-slate-950/35 backdrop-blur-sm xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="container absolute right-0 left-0 top-full mt-2 xl:hidden"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
                <div className="border-b border-slate-100 bg-slate-50/80 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Friend Software
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Websites, apps, ERP, and digital growth.
                  </p>
                </div>

                <div className="grid gap-2 p-3 sm:grid-cols-2">
                  {navLinks.map((link, i) => {
                    const Icon = link.icon;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.035 }}
                      >
                        <NavLink
                          to={link.href}
                          end={link.href === '/'}
                          className={({ isActive }) =>
                            `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                              isActive
                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                                  isActive ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary'
                                }`}
                              >
                                <Icon size={18} />
                              </span>
                              <span className="min-w-0 flex-1 truncate">{link.name}</span>
                              <ChevronRight size={16} />
                            </>
                          )}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="grid gap-3 border-t border-slate-100 p-4 sm:grid-cols-3">
                  <a
                    href="tel:+919521066616"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-primary/30 hover:text-primary"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href="https://wa.me/919521066616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-primary/30 hover:text-primary"
                  >
                    <MessageCircleMore size={16} />
                    WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25"
                  >
                    Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
