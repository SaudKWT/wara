import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  { id: 1, text: "The cement quality is outstanding. Handles Kuwait's summer heat without cracking. My go-to supplier now.", author: "Ahmad K.", role: "General Contractor, Kuwait City", rating: 5 },
  { id: 2, text: "Fast delivery and fair prices. The adhesives work perfectly for our tiling projects. Highly recommended.", author: "Mohammed R.", role: "Tiling Specialist, Salmiya", rating: 5 },
  { id: 3, text: "Finally a building materials store that understands what works in our climate. Professional and reliable.", author: "Sarah M.", role: "Interior Designer, Hawally", rating: 5 },
];

export const Testimonials = () => {
  return (
    <section className="bg-wara-light py-32 lg:py-40 px-6 lg:px-20 relative overflow-hidden">
      {/* Orange accent bar — left edge */}
      <div className="absolute left-0 top-[15%] w-[5px] h-[25%] bg-wara-orange hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-wara-orange" />
              <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
                07 / Reviews
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-wara-black uppercase tracking-tighter">
              Trusted By Builders
            </h2>
          </motion.div>
          <div className="hidden lg:flex items-center gap-2 flex-1 ml-12">
            <div className="h-[1px] flex-1 bg-wara-black/10" />
            <div className="w-2 h-2 border border-wara-orange/30 rotate-45" />
          </div>
        </div>

        {/* Testimonial Cards — Industrial Tag Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 flex flex-col group relative"
            >
              {/* Orange corner accents */}
              <div className="absolute top-0 left-0 w-8 h-[3px] bg-wara-orange" />
              <div className="absolute top-0 left-0 w-[3px] h-8 bg-wara-orange" />

              {/* Technical review tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-wara-orange text-wara-orange" />
                  ))}
                </div>
                <span className="font-mono text-[8px] text-wara-dark/15 font-bold uppercase">
                  REV—{String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="text-base font-medium text-wara-dark/70 leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-6 border-t border-wara-black/5">
                <h4 className="font-black text-wara-black uppercase tracking-tight text-sm">
                  {testimonial.author}
                </h4>
                <p className="font-mono text-[8px] text-wara-dark/25 uppercase tracking-[0.2em] mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
