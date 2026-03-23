import { motion } from "motion/react";
import { Search, FileText, Truck } from "lucide-react";

const steps = [
  { id: "01", title: "Browse & Select", description: "Explore our curated catalog of 500+ building materials, all tested for Kuwait's climate", icon: Search },
  { id: "02", title: "Get a Quote", description: "Request a custom quote for your project. We offer competitive pricing for bulk orders", icon: FileText },
  { id: "03", title: "We Deliver", description: "Fast delivery across Kuwait. From our warehouse to your construction site", icon: Truck },
];

export const ProcessSection = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Process Steps */}
      <div className="bg-wara-light py-32 lg:py-40 px-6 lg:px-20 relative">
        {/* Orange accent bar — right edge */}
        <div className="absolute right-0 top-[20%] w-[5px] h-[25%] bg-wara-orange hidden lg:block" />

        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-wara-orange" />
                <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
                  06 / Process
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-wara-black uppercase tracking-tighter">
                How We Work
              </h2>
            </motion.div>
            <div className="hidden lg:flex items-center gap-2 flex-1 ml-12">
              <div className="h-[1px] flex-1 bg-wara-black/10" />
              <div className="w-2 h-2 border border-wara-orange/30 rotate-45" />
              <span className="font-mono text-[8px] text-wara-dark/25 uppercase tracking-widest">3 Steps</span>
            </div>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-wara-black/5 z-0">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="w-full h-full bg-wara-orange origin-left" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Oversized Step Number */}
                  <span className="text-7xl lg:text-8xl font-black text-stroke-orange tracking-tighter mb-6 block font-mono">
                    {step.id}
                  </span>

                  <div className="w-12 h-12 bg-wara-orange/5 flex items-center justify-center mb-6 group-hover:bg-wara-orange transition-colors duration-500 relative">
                    <step.icon className="w-6 h-6 text-wara-orange group-hover:text-white transition-colors duration-500" />
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-2 h-[2px] bg-wara-orange" />
                    <div className="absolute top-0 left-0 w-[2px] h-2 bg-wara-orange" />
                  </div>

                  <h3 className="text-xl font-black text-wara-black uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-wara-dark/50 text-sm font-medium leading-relaxed max-w-sm">{step.description}</p>

                  {/* Technical tag */}
                  <div className="flex items-center gap-2 mt-6">
                    <div className="w-1 h-1 bg-wara-orange/30" />
                    <span className="font-mono text-[7px] text-wara-dark/20 uppercase tracking-widest">
                      Step—{step.id}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
