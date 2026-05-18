import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { setFilter } from '../store/store';
import educationMockup from '../assets/education_mockup.png';
import erpMockup from '../assets/erp_mockup.png';
import heroDeviceMockup from '../assets/hero_device_mockup.png';

const categories = ['All', 'Websites', 'Apps', 'ERP', 'Marketing'];

const projects = [
  {
    title: 'STech School Bhilwara',
    category: 'Marketing',
    desc: 'Instagram handling, school branding and admission campaign support.',
    image: educationMockup,
    status: 'Active',
    result: 'Admission Growth',
    accent: 'from-cyan-500/20 to-primary/10',
  },
  {
    title: 'Academic Plus Bhilwara',
    category: 'Websites',
    desc: 'Website design with social content support for stronger local reach.',
    image: educationMockup,
    status: 'Active',
    result: 'Website + Marketing',
    accent: 'from-indigo-500/20 to-cyan-500/10',
  },
  {
    title: 'Sujas College Bhilwara',
    category: 'Websites',
    desc: 'College portal, structured pages and ongoing website management.',
    image: educationMockup,
    status: 'Active',
    result: 'Managed Portal',
    accent: 'from-primary/20 to-emerald-500/10',
  },
  {
    title: 'Modern Gym ERP',
    category: 'ERP',
    desc: 'Membership, billing, trainer workflow and workout tracking system.',
    image: erpMockup,
    status: 'Completed',
    result: 'Gym Operations',
    accent: 'from-slate-900/15 to-primary/10',
  },
  {
    title: 'EduPro School ERP',
    category: 'ERP',
    desc: 'Attendance, fees, exams, reports and parent communication modules.',
    image: erpMockup,
    status: 'Completed',
    result: 'School ERP',
    accent: 'from-emerald-500/20 to-cyan-500/10',
  },
  {
    title: 'Local Business App',
    category: 'Apps',
    desc: 'Mobile-first customer app interface for products, orders and updates.',
    image: heroDeviceMockup,
    status: 'Completed',
    result: 'Mobile App',
    accent: 'from-cyan-500/20 to-slate-900/10',
  },
];

const Portfolio = () => {
  const activeFilter = useSelector((state) => state.portfolio.filter);
  const dispatch = useDispatch();

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProject = filteredProjects[0] || projects[0];
  const secondaryProjects = filteredProjects.filter((project) => project.title !== featuredProject.title);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-slate-50 py-16 text-slate-950 md:py-28">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)',
          backgroundSize: '58px 58px',
        }}
      />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-8 grid gap-6 lg:mb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
              <BriefcaseBusiness size={15} />
              Our Portfolio
            </div>

            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Practical work for websites, ERP, apps, and growth campaigns.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg lg:justify-self-end">
            Selected projects built for schools, local brands, service businesses, and teams that need clean digital systems with real outcomes.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur md:mb-10 md:w-fit">
          <div className="flex min-w-max gap-1">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => dispatch(setFilter(category))}
                className={`rounded-xl px-4 py-2.5 text-sm font-black transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-slate-950 text-white shadow-lg shadow-slate-900/15'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] xl:gap-6"
          >
            <FeaturedProject project={featuredProject} />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {secondaryProjects.slice(0, 2).map((project, index) => (
                <CompactProject key={project.title} project={project} index={index} />
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 xl:grid-cols-3">
              {secondaryProjects.slice(2).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:mt-10">
          <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={21} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950">Have a project idea?</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                  We can help you plan the right website, app, ERP, or campaign with a clear roadmap.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-primary md:w-auto"
            >
              Start Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <motion.article
      layout
      className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-5 sm:p-6`}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur">
            Featured {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="relative mx-auto aspect-[16/10] max-w-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
            <TrendingUp size={14} />
            {project.result}
          </span>
          <span className="text-sm font-bold text-slate-500">{project.category}</span>
        </div>

        <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          {project.desc}
        </p>
      </div>
    </motion.article>
  );
};

const CompactProject = ({ project, index }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group grid min-h-[220px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
    >
      <div className={`relative bg-gradient-to-br ${project.accent} p-4`}>
        <img
          src={project.image}
          alt={project.title}
          className="ml-auto h-32 w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <StatusBadge status={project.status} compact />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">
            {project.category}
          </span>
          <ExternalLink size={16} className="text-slate-400 group-hover:text-primary" />
        </div>
        <h3 className="text-xl font-black text-slate-950 group-hover:text-primary">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{project.desc}</p>
      </div>
    </motion.article>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-4`}>
        <div className="aspect-[16/10]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <StatusBadge status={project.status} compact />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">
            {project.category}
          </span>
          <ExternalLink size={16} className="text-slate-400 transition-colors group-hover:text-primary" />
        </div>

        <h3 className="mt-4 text-xl font-black text-slate-950 transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{project.desc}</p>

        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-black text-slate-700">
          <BadgeCheck size={16} className="text-primary" />
          {project.result}
        </div>
      </div>
    </motion.article>
  );
};

const StatusBadge = ({ status, compact = false }) => {
  const isActive = status === 'Active';

  return (
    <div
      className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] shadow-lg ${
        compact ? 'absolute right-4 top-4' : ''
      } ${isActive ? 'bg-emerald-500 text-white' : 'bg-white/90 text-slate-700 backdrop-blur'}`}
    >
      {isActive && <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />}
      {status}
    </div>
  );
};

export default Portfolio;
