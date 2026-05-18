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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'
      }`}
    >
      <nav
        className={`container flex min-h-[64px] items-center justify-between transition-all duration-500 md:min-h-[76px] ${
          isScrolled
            ? 'border-white/70 bg-white/90 py-1 shadow-lg shadow-slate-900/5 backdrop-blur-2xl md:rounded-2xl md:border md:px-5'
            : 'py-1'
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="group relative z-10 flex min-w-0 items-center gap-3"
          aria-label="Friend Software home"
        >
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105 md:h-[72px] md:w-[72px] lg:h-[82px] lg:w-[82px]">
            <img
              src={logo}
              alt="Friend Software"
              className="relative z-10 h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0 leading-none sm:block">
            <h1
              className={`truncate text-lg font-black tracking-tight transition-colors duration-300 sm:text-xl lg:text-[26px] ${
                isScrolled ? 'text-slate-950' : 'text-white drop-shadow-sm'
              }`}
            >
              Friend Software
            </h1>
            <p
              className={`mt-1 hidden text-[10px] font-semibold tracking-[0.18em] transition-colors duration-300 sm:block lg:text-xs lg:tracking-[0.22em] ${
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
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-dark shadow-sm backdrop-blur transition-colors hover:bg-slate-100 xl:hidden"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
              className="fixed inset-0 bg-slate-950/55 backdrop-blur-sm xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[390px] flex-col overflow-hidden bg-white shadow-2xl shadow-slate-950/25 xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <Link
                  to="/"
                  className="flex min-w-0 items-center gap-3"
                  aria-label="Friend Software home"
                >
                  <img src={logo} alt="Friend Software" className="h-12 w-12 shrink-0 object-contain" />
                  <span className="min-w-0">
                    <span className="block truncate text-lg font-black leading-none text-slate-950">
                      Friend Software
                    </span>
                    <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Digital Growth
                    </span>
                  </span>
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="mb-5 rounded-3xl bg-slate-950 p-5 text-white">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Let's build
                  </p>
                  <p className="text-xl font-bold leading-snug">
                    Websites, apps, ERP, and marketing that help your business grow.
                  </p>
                </div>

                <div className="space-y-2">
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
                            `flex min-h-14 items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-semibold transition-all ${
                              isActive
                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                : 'bg-slate-50 text-slate-700 hover:bg-primary/5 hover:text-primary'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
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
              </div>

              <div className="border-t border-slate-100 bg-white p-5">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919521066616"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-primary/30 hover:text-primary"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href="https://wa.me/919521066616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-primary/30 hover:text-primary"
                  >
                    <MessageCircleMore size={16} />
                    WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25"
                  >
                    Get A Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
