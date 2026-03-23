import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, ChevronDown } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDE: CONTACT INFO — Dark Panel */}
        <div className="lg:w-[45%] bg-wara-black px-6 lg:px-16 py-24 lg:py-32 relative">
          {/* Orange accent bar — top */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-wara-orange" />
          {/* Orange accent bar — left */}
          <div className="absolute left-0 top-[15%] w-[5px] h-[25%] bg-wara-orange" />

          {/* Oversized section number */}
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <span className="text-[6rem] font-black leading-none text-stroke-orange select-none opacity-20 font-mono">07</span>
          </div>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-wara-orange" />
              <span className="font-mono text-wara-orange text-[10px] font-bold tracking-[0.3em] uppercase">
                07 / Get In Touch
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-3">
              Let's Build <br />Together
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[3px] w-12 bg-wara-orange" />
              <div className="h-[3px] w-4 bg-wara-orange/30" />
            </div>
            <p className="text-white/30 text-sm font-medium mb-12 max-w-md leading-relaxed">
              Have a question about our products or need a custom quote? We're here to help you build better.
            </p>

            <div className="space-y-7">
              {[
                { icon: MapPin, label: "Location", value: "Industrial Area 1, Shuwaikh,\nKuwait City, Kuwait", color: "wara-orange" },
                { icon: Phone, label: "Phone", value: "+965 2222 3333", color: "wara-orange" },
                { icon: Mail, label: "Email", value: "info@wara-kw.com", color: "wara-orange" },
                { icon: Clock, label: "Hours", value: "Saturday - Thursday\n8:00 AM - 8:00 PM", color: "wara-orange" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-white/5 flex items-center justify-center shrink-0 relative">
                    <item.icon className="w-4 h-4 text-wara-orange" />
                    <div className="absolute top-0 left-0 w-1.5 h-[1.5px] bg-wara-orange" />
                    <div className="absolute top-0 left-0 w-[1.5px] h-1.5 bg-wara-orange" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">{item.label}</h4>
                    <p className="text-white/70 font-bold uppercase tracking-tight text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-mono text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">WhatsApp</h4>
                  <p className="text-white/70 font-bold uppercase tracking-tight text-sm mb-3">+965 9999 8888</p>
                  <a href="https://wa.me/96599998888" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] hover:bg-[#1eb954] transition-colors">
                    <MessageCircle className="w-3 h-3" /> Chat Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: FORM — Light Panel */}
        <div className="lg:w-[55%] bg-wara-light px-6 lg:px-16 py-24 lg:py-32 relative">
          {/* Orange dot grid — decorative */}
          <div className="absolute top-12 right-12 hidden lg:grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 ${i % 2 === 0 ? 'bg-wara-orange/20' : 'bg-wara-black/5'}`} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-black text-wara-black uppercase tracking-tight mb-10">Send Us a Message</h3>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: "Full Name", type: "text", placeholder: "Enter your name" },
                  { label: "Phone Number", type: "tel", placeholder: "+965 XXXX XXXX" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-mono text-[8px] font-bold text-wara-dark/25 uppercase tracking-[0.2em] block mb-3">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder}
                      className="w-full bg-transparent border-b-2 border-wara-black/10 px-0 py-3 text-sm font-bold text-wara-black focus:outline-none focus:border-wara-orange transition-colors placeholder:text-wara-black/15 placeholder:font-medium" />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-mono text-[8px] font-bold text-wara-dark/25 uppercase tracking-[0.2em] block mb-3">Email Address</label>
                <input type="email" placeholder="email@example.com"
                  className="w-full bg-transparent border-b-2 border-wara-black/10 px-0 py-3 text-sm font-bold text-wara-black focus:outline-none focus:border-wara-orange transition-colors placeholder:text-wara-black/15 placeholder:font-medium" />
              </div>

              <div>
                <label className="font-mono text-[8px] font-bold text-wara-dark/25 uppercase tracking-[0.2em] block mb-3">Subject</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b-2 border-wara-black/10 px-0 py-3 text-sm font-bold text-wara-black focus:outline-none focus:border-wara-orange transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Product Quote</option>
                    <option>Bulk Order</option>
                    <option>Delivery Question</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-wara-black/20 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="font-mono text-[8px] font-bold text-wara-dark/25 uppercase tracking-[0.2em] block mb-3">Message</label>
                <textarea rows={4} placeholder="How can we help you?"
                  className="w-full bg-transparent border-b-2 border-wara-black/10 px-0 py-3 text-sm font-bold text-wara-black focus:outline-none focus:border-wara-orange transition-colors resize-none placeholder:text-wara-black/15 placeholder:font-medium"></textarea>
              </div>

              <button className="bg-wara-orange text-white py-5 px-12 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-wara-orange/90 transition-all">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[400px] w-full relative grayscale contrast-110 hover:grayscale-0 transition-all duration-1000">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.56843615456!2d47.9332243!3d29.3537243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf859039366667%3A0x6a6a6a6a6a6a6a6a!2sShuwaikh%20Industrial%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1711111111111!5m2!1sen!2skw"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"></iframe>
        <div className="absolute inset-0 pointer-events-none bg-wara-orange/5 mix-blend-multiply" />
        {/* Orange top border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-wara-orange" />
      </div>
    </section>
  );
};
