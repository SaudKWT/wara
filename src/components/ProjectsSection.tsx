import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Al Hamra Tower Renovation",
    location: "Kuwait City",
    year: "2024",
    tag: "COM—01",
    description: "Structural reinforcement and exterior finishing for one of Kuwait's tallest buildings",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
    large: true,
  },
  {
    id: 2,
    name: "Sabah Al-Salem University",
    location: "Shadadiya",
    year: "2023",
    tag: "EDU—02",
    description: "Complete materials supply for Kuwait's largest university campus expansion",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
    large: false,
  },
  {
    id: 3,
    name: "Waterfront Residences",
    location: "Salmiya",
    year: "2024",
    tag: "RES—03",
    description: "Premium finishing materials for luxury coastal residential development",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop",
    large: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-wara-black py-32 lg:py-40 px-6 lg:px-20 overflow-hidden relative">
      {/* Orange accent bar — left edge */}
      <div className="absolute left-0 top-[10%] w-[5px] h-[30%] bg-wara-orange hidden lg:block" />

      {/* Oversized section number — decorative */}
      <div className="absolute top-8 right-8 lg:right-16 hidden lg:block">
        <span className="text-[8rem] font-black leading-none text-stroke-orange select-none opacity-30">
          04
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-wara-orange" />
              <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
                04 / Projects
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              Built With Wara
            </h2>
          </motion.div>
          <div className="hidden lg:flex items-center gap-2 flex-1 ml-12">
            <div className="h-[1px] flex-1 bg-white/10" />
            <div className="w-2 h-2 border border-wara-orange/30 rotate-45" />
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden ${
                project.large ? "lg:col-span-2 h-[400px] lg:h-[500px]" : "h-[350px] lg:h-[400px]"
              }`}
            >
              <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-wara-black via-wara-black/30 to-transparent" />

              {/* Orange corner accents */}
              <div className="absolute top-0 left-0 w-10 h-[3px] bg-wara-orange" />
              <div className="absolute top-0 left-0 w-[3px] h-10 bg-wara-orange" />

              {/* Technical tag — top right */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="font-mono text-[8px] text-white/25 font-bold uppercase tracking-widest">
                  {project.tag}
                </span>
                <div className="w-1.5 h-1.5 bg-wara-orange/40" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 bg-wara-orange" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-wara-orange">
                    {project.location}
                  </span>
                  <span className="w-4 h-[1px] bg-white/20" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-2">
                  {project.name}
                </h3>
                <p className="text-white/40 text-sm font-medium max-w-lg">{project.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-wara-orange group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 flex justify-start">
          <a href="#" className="flex items-center gap-3 text-wara-orange font-bold uppercase tracking-[0.2em] text-[10px] group hover:gap-5 transition-all">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
