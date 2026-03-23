import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { WPattern } from "./WPattern";

export const CTABanner = () => {
  return (
    <section className="relative bg-wara-black py-32 lg:py-40 px-6 lg:px-20 text-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover opacity-10 grayscale" referrerPolicy="no-referrer" />
      </div>
      {/* Orange top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-wara-orange" />
      <WPattern opacity={0.03} color="#f24e01" />

      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4">
          Ready to Build?
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[3px] w-12 bg-wara-orange" />
          <div className="h-[3px] w-4 bg-wara-orange/30" />
        </div>
        <p className="text-sm text-white/30 font-mono mb-12 uppercase tracking-[0.2em]">Get a free quote for your next project</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto bg-wara-orange text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
            Request Quote
          </motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:border-wara-orange transition-colors">
            <Phone className="w-4 h-4" />
            Call Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
