import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MessageCircleMore,
  PhoneCall,
  Play,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import heroDeviceMockup from '../assets/hero_device_mockup.png';

const servicePills = [
  'Digital Marketing',
  'Web Development',
  'ERP Solutions',
  'AI Automation',
  'SEO Growth',
];

const stats = [
  { value: '1200+', label: 'Happy Clients' },
  { value: '3000+', label: 'Leads Generated' },
  { value: 'INR 10L+', label: 'Ads Managed' },
];

const mobileMetrics = [
  { value: '+256%', label: 'Growth' },
  { value: '24h', label: 'Response' },
  { value: 'AI', label: 'Reports' },
];

const trustPoints = [
  'Fast project delivery',
  'Mobile-first websites',
  'Lead tracking support',
];

const Hero = () => {
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const mockupRef = useRef(null);
  const growthRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    let tl;
    let floatTween;

    async function init() {
      try {
        const mod = await import('gsap');
        const gsap = mod?.gsap || mod.default || mod;

        gsap.set(
          [
            badgeRef.current,
            headlineRef.current,
            paragraphRef.current,
            ctaRef.current,
            mockupRef.current,
            growthRef.current,
            clientsRef.current,
          ],
          {
            opacity: 0,
            y: 30,
          }
        );

        tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0)
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
          .to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.25)
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.4)
          .to(mockupRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, 0.35)
          .to(growthRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
          .to(clientsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.9);

        floatTween = gsap.to(mockupRef.current, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: 'sine.inOut',
          delay: 1.8,
        });
      } catch (error) {
        console.log('GSAP animation error:', error);
      }
    }

    init();

    return () => {
      if (tl) tl.kill();
      if (floatTween) floatTween.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-start overflow-hidden bg-slate-950 pb-10 pt-24 text-white sm:pt-28 md:min-h-screen md:items-center md:pb-20 md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,_rgba(14,165,233,0.22),_transparent_34%),radial-gradient(circle_at_10%_80%,_rgba(79,70,229,0.22),_transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.35),_rgba(2,6,23,0.9))]" />
      <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl md:hidden" />
      <div className="absolute -left-28 top-72 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl md:hidden" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 items-center gap-7 md:gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20">
        <div className="mx-auto max-w-2xl text-left lg:mx-0 lg:max-w-none">
          <div
            ref={badgeRef}
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-200 shadow-lg backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.18em] md:mb-6"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span className="truncate">Modern Digital Growth Agency</span>
          </div>

          <h1
            ref={headlineRef}
            className="mb-4 max-w-4xl text-[2.35rem] font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:mb-7 md:text-6xl lg:text-7xl"
          >
            Build a business presence that <span className="gradient-text">feels premium.</span>
          </h1>

          <p
            ref={paragraphRef}
            className="mb-5 max-w-[34rem] text-[15px] leading-7 text-slate-300 md:mb-8 md:max-w-2xl md:text-xl"
          >
            Friend Software helps businesses launch high-converting websites, ERP dashboards,
            AI-powered reports, and digital marketing campaigns that turn attention into real
            enquiries.
          </p>

          <div className="mb-5 flex flex-wrap gap-2.5 md:mb-9 md:gap-3">
            {servicePills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 sm:px-4 sm:py-2 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div ref={ctaRef} className="grid grid-cols-1 gap-3 sm:flex sm:gap-3 md:gap-4">
            <Link
              to="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(14,165,233,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(14,165,233,0.32)] sm:rounded-full sm:text-base md:px-7 md:py-4"
            >
              Book Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-5 py-3 font-semibold text-white shadow-lg backdrop-blur-xl transition-all hover:border-cyan-300/50 hover:bg-white/15 sm:rounded-full md:px-6 md:py-3.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cyan-300 transition-all group-hover:bg-cyan-300 group-hover:text-slate-950 md:h-10 md:w-10">
                <Play size={16} fill="currentColor" />
              </span>
              View Live Projects
            </Link>
          </div>

          <div className="mt-5 grid gap-2 text-sm text-slate-300 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3 md:mt-7">
            {trustPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 sm:border-0 sm:bg-transparent sm:p-0">
                <CheckCircle2 size={16} className="text-cyan-300" />
                {point}
              </span>
            ))}
          </div>

          <div className="relative mt-7 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-cyan-950/25 backdrop-blur-2xl md:hidden">
            <img
              src={heroDeviceMockup}
              alt="Friend Software dashboard preview"
              className="aspect-[4/3] w-full rounded-[1.35rem] object-cover object-[57%_50%]"
            />
            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-xl">
              Live Preview
            </div>
            <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-2.5 backdrop-blur-xl">
              {mobileMetrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-base font-black leading-none text-white">{metric.value}</p>
                  <p className="mt-1 text-[10px] font-medium text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid max-w-2xl grid-cols-3 gap-2 border-t border-white/10 pt-5 md:mt-10 md:gap-3 md:pt-7 lg:max-w-none">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 text-center backdrop-blur-sm md:p-4 lg:text-left"
              >
                <h3 className="text-base font-black leading-tight text-white sm:text-2xl md:text-3xl">
                  {stat.value}
                </h3>
                <p className="mt-1 text-[11px] leading-tight text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 mx-auto hidden w-full max-w-2xl justify-center md:flex lg:max-w-none">
          <div ref={mockupRef} className="relative z-10 w-full">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="mb-3 flex items-center justify-between rounded-2xl bg-slate-950/75 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <ShieldCheck size={14} className="text-cyan-300" />
                  Live Growth Dashboard
                </div>
              </div>
              <img
                src={heroDeviceMockup}
                alt="Friend Software digital dashboard preview"
                className="w-full rounded-3xl"
              />
            </div>
          </div>

          <div
            ref={growthRef}
            className="absolute -bottom-5 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white p-4 text-slate-900 shadow-2xl backdrop-blur-2xl sm:-left-3 md:p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <TrendingUp size={22} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Growth Rate
              </p>
              <p className="text-xl font-black text-slate-950 md:text-2xl">+256%</p>
            </div>
          </div>

          <div
            ref={clientsRef}
            className="absolute -right-1 -top-5 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white p-4 text-slate-900 shadow-2xl backdrop-blur-2xl md:p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Users size={21} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Clients
              </p>
              <p className="text-xl font-black text-slate-950 md:text-2xl">1,200+</p>
            </div>
          </div>

          <div className="absolute bottom-24 right-0 z-20 hidden items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/85 p-4 text-white shadow-2xl backdrop-blur-2xl md:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
              <Zap size={21} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                AI Reports
              </p>
              <p className="text-lg font-black text-white">Smart Tracking</p>
            </div>
          </div>

          <div className="absolute -bottom-16 right-6 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl lg:block">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold">
              <BarChart3 size={17} className="text-cyan-300" />
              Quick actions
            </div>
            <div className="flex gap-2">
              <a
                href="tel:+919521066616"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-300 hover:text-slate-950"
                aria-label="Call Friend Software"
              >
                <PhoneCall size={17} />
              </a>
              <a
                href="https://wa.me/919521066616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-300 hover:text-slate-950"
                aria-label="WhatsApp Friend Software"
              >
                <MessageCircleMore size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
