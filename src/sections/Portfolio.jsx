import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  Sparkles,
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
  },
  {
    title: 'Academic Plus Bhilwara',
    category: 'Websites',
    desc: 'Website design with social content support for stronger local reach.',
    image: educationMockup,
    status: 'Active',
    result: 'Website + Marketing',
  },
  {
    title: 'Sujas College Bhilwara',
    category: 'Websites',
    desc: 'College portal, structured pages and ongoing website management.',
    image: educationMockup,
    status: 'Active',
    result: 'Managed Portal',
  },
  {
    title: 'Modern Gym ERP',
    category: 'ERP',
    desc: 'Membership, billing, trainer workflow and workout tracking system.',
    image: erpMockup,
    status: 'Completed',
    result: 'Gym Operations',
  },
  {
    title: 'EduPro School ERP',
    category: 'ERP',
    desc: 'Attendance, fees, exams, reports and parent communication modules.',
    image: erpMockup,
    status: 'Completed',
    result: 'School ERP',
  },
  {
    title: 'Local Business App',
    category: 'Apps',
    desc: 'Mobile-first customer app interface for products, orders and updates.',
    image: heroDeviceMockup,
    status: 'Completed',
    result: 'Mobile App',
  },
];

const Portfolio = () => {
  const activeFilter = useSelector((state) => state.portfolio.filter);
  const dispatch = useDispatch();

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-slate-50 py-20 text-slate-950 md:py-28">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)',
          backgroundSize: '58px 58px',
        }}
      />

      <div className="container relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-primary/15 bg-white px-3 py-2 text-sm font-bold text-primary shadow-sm">
            <BriefcaseBusiness size={16} />
            Our Portfolio
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Work that shows what we build, manage and grow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            A clean look at websites, ERP systems, apps and marketing projects delivered for schools, local brands and service businesses.
          </p>
        </div>

        <div className="mx-auto mb-10 flex max-w-3xl justify-center overflow-x-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => dispatch(setFilter(category))}
              className={`shrink-0 rounded-md px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-950">Have a project idea?</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                We can help you plan the right website, app, ERP or campaign.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary md:w-auto"
          >
            Start Project
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.35, delay: index * 0.035, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-primary/10 p-5">
        <div className="aspect-[16/10]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <StatusBadge status={project.status} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-md bg-primary/10 px-2.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-primary">
            {project.category}
          </span>
          <ExternalLink size={17} className="text-slate-400 transition-colors group-hover:text-primary" />
        </div>

        <h3 className="mt-5 text-xl font-black text-slate-950 transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.desc}</p>

        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-slate-700">
          <BadgeCheck size={16} className="text-primary" />
          {project.result}
        </div>
      </div>
    </motion.article>
  );
};

const StatusBadge = ({ status }) => {
  const isActive = status === 'Active';

  return (
    <div
      className={`absolute right-4 top-4 rounded-md px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] shadow-lg ${
        isActive ? 'bg-emerald-500 text-white' : 'bg-white/90 text-slate-700 backdrop-blur'
      }`}
    >
      {isActive && <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />}
      {status}
    </div>
  );
};

export default Portfolio;
