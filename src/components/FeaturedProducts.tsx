import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

const products = [
  { id: 1, name: "Gray Cement Based Adhesive", size: "25KG", price: "12.000", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop", isWaraBranded: true },
  { id: 2, name: "Quick Dry Satin Finish", size: "5L", price: "8.500", image: "https://images.unsplash.com/photo-1562592306-5496732626af?q=80&w=1000&auto=format&fit=crop", isWaraBranded: true },
  { id: 3, name: "Heavy Duty Caulk Gun", size: "Standard", price: "4.250", image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1000&auto=format&fit=crop", isWaraBranded: false },
  { id: 4, name: "Structural Steel Bolts", size: "100 Pack", price: "15.000", image: "https://images.unsplash.com/photo-1530124560676-44bc91ec60f6?q=80&w=1000&auto=format&fit=crop", isWaraBranded: false },
  { id: 5, name: "Premium Safety Helmet", size: "Adjustable", price: "6.750", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop", isWaraBranded: true },
  { id: 6, name: "High-Strength Concrete", size: "40KG", price: "18.000", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop", isWaraBranded: true },
];

export const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-32 lg:py-40 px-6 lg:px-20 overflow-hidden relative">
      {/* Orange accent dot grid — decorative */}
      <div className="absolute top-12 right-12 hidden lg:grid grid-cols-4 gap-3">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 ${i % 3 === 0 ? 'bg-wara-orange/30' : 'bg-wara-black/5'}`} />
        ))}
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-wara-orange" />
            <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
              02 / Popular
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-wara-black uppercase tracking-tighter">
            Best Sellers
          </h2>
        </motion.div>

        <div className="flex items-center gap-3">
          <button onClick={() => scroll("left")} className="w-12 h-12 bg-wara-black flex items-center justify-center text-white hover:bg-wara-orange transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="w-12 h-12 bg-wara-black flex items-center justify-center text-white hover:bg-wara-orange transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 lg:mx-0 lg:px-0">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="min-w-[280px] md:min-w-[310px] lg:min-w-[330px] snap-start group border border-wara-black/5"
          >
            {/* Product Image */}
            <div className="relative h-72 bg-wara-light flex items-center justify-center p-8 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />

              {/* Orange corner accent */}
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-wara-orange" />
              <div className="absolute top-0 left-0 w-[2px] h-6 bg-wara-orange" />

              {product.isWaraBranded && (
                <div className="absolute top-3 right-3 bg-wara-orange text-white px-2.5 py-1 text-[8px] font-mono font-bold uppercase tracking-[0.2em]">
                  WARA
                </div>
              )}

              {/* Technical product number */}
              <span className="absolute bottom-3 right-3 font-mono text-[9px] text-wara-dark/15 font-bold">
                SKU—{String(index + 1).padStart(3, '0')}
              </span>

              {/* Hover slide-up */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-wara-orange text-white py-3 text-[9px] font-bold uppercase tracking-[0.2em]">Add to Inquiry</button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 border-t-[2px] border-wara-orange/0 group-hover:border-wara-orange transition-colors">
              <h3 className="text-sm font-bold text-wara-black uppercase tracking-tight line-clamp-1 mb-1">{product.name}</h3>
              <p className="font-mono text-[9px] text-wara-dark/30 uppercase tracking-[0.15em] mb-3">{product.size}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-wara-black tracking-tighter font-mono">{product.price}</span>
                <span className="text-[9px] font-bold text-wara-dark/30 uppercase">KD</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-start">
        <motion.a href="#" whileHover={{ x: 5 }} className="flex items-center gap-3 text-wara-orange font-bold uppercase tracking-[0.2em] text-[10px] group">
          View All Products
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
};
