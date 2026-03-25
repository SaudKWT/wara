import { motion } from "motion/react";

const brands = [
  { name: "Sika", logo: "/images/brands/sika.svg" },
  { name: "Jotun", logo: "/images/brands/jotun.svg" },
  { name: "Weber", logo: "/images/brands/weber.svg" },
];

export const BrandsMarquee = () => {
  return (
    <section className="bg-wara-light py-20 lg:py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-wara-orange" />
            <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
              02 / Partners
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-wara-black uppercase tracking-tighter mb-12">
            Brands We Carry
          </h2>
        </motion.div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee items-center py-4">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="mx-8 lg:mx-14 flex-shrink-0 opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 lg:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center py-4" aria-hidden>
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="mx-8 lg:mx-14 flex-shrink-0 opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 lg:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
