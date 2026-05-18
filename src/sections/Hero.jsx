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
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pb-20 pt-32 text-white md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,_rgba(14,165,233,0.18),_transparent_34%),radial-gradient(circle_at_10%_80%,_rgba(79,70,229,0.18),_transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.35),_rgba(2,6,23,0.9))]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] xl:gap-20">
        <div>
          <div
            ref={badgeRef}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 shadow-lg backdrop-blur-xl"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            AI Powered Business Growth Agency
          </div>

          <h1
            ref={headlineRef}
            className="mb-7 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build smarter systems. Generate better leads.
          </h1>

          <p
            ref={paragraphRef}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            Friend Software helps businesses launch high-converting websites, ERP dashboards,
            AI-powered reports, and digital marketing campaigns that turn attention into real
            enquiries.
          </p>

          <div className="mb-9 flex flex-wrap gap-3">
            {servicePills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div ref={ctaRef} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(14,165,233,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(14,165,233,0.32)]"
            >
              Book Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/10 px-6 py-3.5 font-semibold text-white shadow-lg backdrop-blur-xl transition-all hover:border-cyan-300/50 hover:bg-white/15"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-300 transition-all group-hover:bg-cyan-300 group-hover:text-slate-950">
                <Play size={16} fill="currentColor" />
              </span>
              View Live Projects
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
            {trustPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                {point}
              </span>
            ))}
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-black text-white md:text-3xl">{stat.value}</h3>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 mx-auto flex w-full max-w-2xl justify-center lg:max-w-none">
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
