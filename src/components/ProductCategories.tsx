import { motion } from "motion/react";
import { ArrowRight, Wrench, Droplets, Paintbrush, Layers, Grid3x3, ShieldCheck } from "lucide-react";

const categories = [
  {
    id: "01",
    name: "Cement & Blocks",
    count: "25",
    image: "https://images.unsplash.com/photo-1681880511033-b9582a379ce2?q=80&w=1000&auto=format&fit=crop",
    icon: Layers,
  },
  {
    id: "02",
    name: "Adhesives & Tiling",
    count: "28",
    image: "https://images.unsplash.com/photo-1523413307857-ef24c53571ae?q=80&w=1000&auto=format&fit=crop",
    icon: Droplets,
  },
  {
    id: "03",
    name: "Paint & Finishes",
    count: "34",
    image: "https://images.unsplash.com/photo-1682888813788-bf57c360123e?q=80&w=1000&auto=format&fit=crop",
    icon: Paintbrush,
  },
  {
    id: "04",
    name: "Insulation & Waterproofing",
    count: "18",
    image: "https://images.unsplash.com/photo-1508139143114-4fb27c19cd29?q=80&w=1000&auto=format&fit=crop",
    icon: ShieldCheck,
  },
  {
    id: "05",
    name: "Mesh & Reinforcement",
    count: "50",
    image: "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?q=80&w=1000&auto=format&fit=crop",
    icon: Grid3x3,
  },
  {
    id: "06",
    name: "Tools & Equipment",
    count: "75",
    image: "https://images.unsplash.com/photo-1685320198649-781e83a61de4?q=80&w=1000&auto=format&fit=crop",
    icon: Wrench,
  },
];

export const ProductCategories = () => {
  return (
    <section id="products" className="bg-wara-light py-32 lg:py-40 px-6 lg:px-20 overflow-hidden relative">
      {/* Orange accent bar — right edge */}
      <div className="absolute right-0 top-[10%] w-[5px] h-[40%] bg-wara-orange hidden lg:block" />

      {/* Section Header with technical notation */}
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
              03 / Products
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-wara-black uppercase tracking-tighter">
            What We Supply
          </h2>
        </motion.div>

        {/* Technical line with markers */}
        <div className="hidden lg:flex items-center gap-2 flex-1 ml-12">
          <div className="h-[1px] flex-1 bg-wara-black/10" />
          <div className="w-2 h-2 border border-wara-orange/30 rotate-45" />
          <span className="font-mono text-[8px] text-wara-dark/25 uppercase tracking-widest">
            {categories.length} Categories
          </span>
        </div>
      </div>

      {/* Bento Grid — tall cards on opposite corners, wide card at bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[280px] lg:auto-rows-[260px]">
        {categories.map((category, index) => {
          // index 0: tall left (rows 1-2), index 4: tall right (rows 2-3), index 5: wide bottom (cols 1-2)
          const isTall = index === 0 || index === 4;
          const isWide = index === 5;

          return (
            <motion.a
              key={category.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`group relative overflow-hidden cursor-pointer ${
                isTall ? "md:row-span-2" : ""
              } ${isWide ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wara-black via-wara-black/30 to-transparent" />
              <div className="absolute inset-0 bg-wara-orange/0 group-hover:bg-wara-orange/10 transition-colors duration-500" />

              {/* Orange corner accent — top left */}
              <div className="absolute top-0 left-0 w-8 h-[3px] bg-wara-orange" />
              <div className="absolute top-0 left-0 w-[3px] h-8 bg-wara-orange" />

              {/* Content */}
              <div className="absolute inset-0 p-7 lg:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  {/* Technical tag number */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[8px] text-white/20 uppercase">Cat.</span>
                    <span className="font-mono text-white/15 font-bold text-2xl tracking-tighter">
                      {category.id}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wara-orange" />
                      <p className="font-mono text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">
                        {category.count} Items
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-wara-orange transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-wara-orange group-hover:w-full transition-all duration-500" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
