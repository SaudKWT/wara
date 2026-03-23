import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WaraLogoMark } from "./Logo";

const stats = [
  { value: "38+", label: "Years of Experience" },
  { value: "500+", label: "Products Available" },
  { value: "#1", label: "In Kuwait" },
  { value: "24/7", label: "Customer Support" },
];

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Building Image — scaled up 125% to fill more viewport */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero-image.jpg"
          alt="Modern buildings in Kuwait"
          className="absolute top-0 left-0 w-[125%] h-auto object-contain origin-top-left"
        />
      </motion.div>

      {/* Gentle fade to white on right only */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90 z-[1] lg:block hidden" />

      {/* ORANGE ACCENT BAR — Left Edge */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "60%" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-0 top-[20%] w-[6px] bg-wara-orange z-10"
      />

      {/* Technical Marker — Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-24 left-6 z-10 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 border border-wara-orange/40" />
          <span className="font-mono text-[9px] text-wara-dark/30 uppercase tracking-widest">
            KW—29.3753°N 47.9775°E
          </span>
        </div>
      </motion.div>

      {/* Vertical Side Text — Left */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.5em] text-wara-dark/15 whitespace-nowrap"
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        >
          Building Materials
        </span>
      </div>

      {/* OVERSIZED SECTION NUMBER — Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-28 left-6 lg:left-12 z-10 hidden lg:block"
      >
        <span className="text-[12rem] font-black leading-none text-stroke-orange select-none">
          01
        </span>
      </motion.div>

      {/* Main Content — Right Side */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 lg:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl lg:max-w-2xl text-right"
        >
          {/* Technical Tag Label */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-end gap-3 mb-6"
          >
            <div className="h-[1px] w-14 bg-wara-orange" />
            <span className="font-mono text-wara-orange text-[11px] font-bold tracking-[0.3em] uppercase">
              Est. 1985 — Kuwait
            </span>
          </motion.div>

          {/* Main Heading — scaled up */}
          <h1 className="text-[16vw] lg:text-[8.5rem] xl:text-[10rem] font-black leading-[0.83] tracking-tighter uppercase mb-8">
            <span className="text-wara-black block">Built</span>
            <span className="text-wara-black block">With</span>
            <span className="text-wara-orange block">You</span>
          </h1>

          {/* Orange accent line under heading */}
          <div className="flex items-center justify-end gap-4 mb-8">
            <div className="h-[3px] w-24 bg-wara-orange" />
            <div className="h-[3px] w-10 bg-wara-orange/30" />
            <div className="h-[3px] w-4 bg-wara-orange/15" />
          </div>

          <p className="text-sm lg:text-base text-wara-dark/50 max-w-md ml-auto mb-10 font-medium leading-relaxed">
            Quality building materials for Kuwait's toughest conditions.
            Engineered for strength, built for the future.
          </p>

          <div className="flex flex-wrap items-center justify-end gap-5">
            <a
              href="#contact"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-wara-dark/30 border-b border-wara-dark/15 hover:text-wara-orange hover:border-wara-orange transition-all pb-1"
            >
              Contact Us
            </a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-wara-orange text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Decorative Logo Mark Watermark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-10 right-0 -z-10 hidden lg:block"
          >
            <WaraLogoMark size={400} />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Row — Bottom with orange accent */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-0 left-0 w-full z-20"
      >
        <div className="h-[3px] w-full bg-wara-orange" />
        <div className="bg-wara-black">
          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-6 lg:px-10 py-7 flex flex-col gap-1 ${
                  index < stats.length - 1 ? "lg:border-r border-white/10" : ""
                }`}
              >
                <span className="text-3xl lg:text-4xl font-black text-wara-orange tracking-tighter font-mono">
                  {stat.value}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-28 lg:bottom-24 right-6 lg:right-12 flex flex-col items-center gap-2 z-30"
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-wara-dark/25">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-wara-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
};
