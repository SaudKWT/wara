import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Products Available", tag: "QTY" },
  { value: "10+", label: "Product Categories", tag: "CAT" },
  { value: "100%", label: "Climate Tested", tag: "TST" },
  { value: "24/7", label: "Customer Support", tag: "SVC" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="w-full overflow-hidden">
      {/* PART A: STATS BAR — Industrial ticket style */}
      <div className="bg-wara-black py-20 lg:py-24 px-6 lg:px-20 relative">
        {/* Orange top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-wara-orange" />

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center lg:items-start text-center lg:text-left lg:px-10 ${
                index < stats.length - 1 ? "lg:border-r border-white/10" : ""
              }`}
            >
              {/* Technical tag */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-wara-orange" />
                <span className="font-mono text-[8px] font-bold text-white/20 uppercase tracking-[0.3em]">
                  {stat.tag}—{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <span className="text-5xl lg:text-7xl font-black text-wara-orange tracking-tighter font-mono mb-1">
                {stat.value}
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PART B: BRAND STORY */}
      <div className="bg-white py-32 lg:py-40 px-6 lg:px-20 relative">
        {/* Orange accent bar — left edge */}
        <div className="absolute left-0 top-[15%] w-[5px] h-[30%] bg-wara-orange hidden lg:block" />

        {/* Decorative Year */}
        <div className="absolute top-16 right-10 lg:right-20 text-[12rem] lg:text-[18rem] font-black text-wara-black/[0.02] select-none pointer-events-none leading-none tracking-tighter font-mono">
          1985
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-stretch gap-0">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[55%] relative"
            >
              <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop"
                  alt="Construction detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Orange corner accents */}
                <div className="absolute top-0 left-0 w-12 h-[3px] bg-wara-orange" />
                <div className="absolute top-0 left-0 w-[3px] h-12 bg-wara-orange" />
                <div className="absolute bottom-0 right-0 w-12 h-[3px] bg-wara-orange" />
                <div className="absolute bottom-0 right-0 w-[3px] h-12 bg-wara-orange" />

                {/* Technical overlay label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-wara-orange" />
                  <span className="font-mono text-[8px] text-white/50 uppercase tracking-widest">
                    Material Testing — Lab Certified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[55%] lg:-ml-16 z-10 flex items-center"
            >
              <div className="bg-white p-8 lg:p-16 lg:shadow-2xl lg:shadow-wara-black/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-wara-orange" />
                  <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
                    03 / Mission
                  </span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-wara-black uppercase tracking-tighter leading-[0.9] mb-4">
                  We Build <br />
                  <span className="text-wara-orange">Trust</span>
                </h2>

                {/* Orange accent bars */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-[3px] w-16 bg-wara-orange" />
                  <div className="h-[3px] w-6 bg-wara-orange/30" />
                  <div className="h-[3px] w-2 bg-wara-orange/15" />
                </div>

                <div className="space-y-5 text-wara-dark/60 text-sm font-medium max-w-xl mb-12 leading-relaxed">
                  <p>
                    Wara was built for Kuwait's builders. Every product in our catalog is
                    selected to withstand extreme heat, humidity, and UV exposure.
                  </p>
                  <p>
                    From residential homeowners to professional contractors, we supply
                    the materials that keep your projects strong, durable, and reliable.
                  </p>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-4 text-wara-orange font-bold uppercase tracking-[0.2em] text-[10px] group"
                >
                  Learn More About Us
                  <div className="w-10 h-10 border border-wara-orange/30 flex items-center justify-center group-hover:bg-wara-orange group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
