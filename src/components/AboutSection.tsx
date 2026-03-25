import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="w-full overflow-hidden">
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
                  src="/images/wara-store.jpg"
                  alt="Wara Building Materials storefront"
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
                    01 / About
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
