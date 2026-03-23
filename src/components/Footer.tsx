import { WaraLogo } from "./Logo";
import { WPattern } from "./WPattern";
import { Instagram, Twitter, MessageCircle, Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-wara-black text-white relative overflow-hidden">
      {/* Orange top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-wara-orange" />
      <WPattern opacity={0.02} color="white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        {/* NEWSLETTER */}
        <div className="py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-white/10">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-2">Stay Updated</h3>
            <p className="font-mono text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">
              Get the latest products and offers delivered to your inbox
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="YOUR EMAIL ADDRESS"
              className="bg-white/5 border border-white/10 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-wara-orange transition-colors w-full sm:min-w-[300px] text-white placeholder:text-white/15" />
            <button className="bg-wara-orange hover:bg-wara-orange/90 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
              Subscribe <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 COLUMNS */}
        <div className="py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand */}
          <div className="space-y-8">
            <WaraLogo light />
            <p className="text-white/30 text-sm leading-relaxed font-medium">
              Built With You. Quality building materials sourced for Kuwait's extreme conditions.
            </p>
            <div className="flex gap-3">
              {[Instagram, MessageCircle, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-wara-orange hover:border-wara-orange transition-all relative">
                  <Icon className="w-4 h-4" />
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-[1px] bg-wara-orange" />
                  <div className="absolute top-0 left-0 w-[1px] h-1.5 bg-wara-orange" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-wara-orange" />
              <h4 className="font-mono text-wara-orange text-[9px] font-bold uppercase tracking-[0.3em]">Quick Links</h4>
            </div>
            <ul className="space-y-4">
              {["Products", "About Us", "Projects", "Contact", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/30 hover:text-wara-orange text-sm font-bold uppercase tracking-[0.1em] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-wara-orange" />
              <h4 className="font-mono text-wara-orange text-[9px] font-bold uppercase tracking-[0.3em]">Categories</h4>
            </div>
            <ul className="space-y-4">
              {["Cement & Dry Mixes", "Adhesives & Sealants", "Tools & Equipment", "Safety Gear", "Fasteners", "Paint & Finishes"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-white/30 hover:text-wara-orange text-sm font-bold uppercase tracking-[0.1em] transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-wara-orange" />
              <h4 className="font-mono text-wara-orange text-[9px] font-bold uppercase tracking-[0.3em]">Contact</h4>
            </div>
            <ul className="space-y-5">
              {[
                { icon: MapPin, text: "Industrial Area 1, Shuwaikh,\nKuwait City, Kuwait" },
                { icon: Phone, text: "+965 2222 3333\n+965 9999 8888 (WhatsApp)" },
                { icon: Mail, text: "info@wara-kw.com" },
                { icon: Clock, text: "Sat - Thu: 8AM - 8PM\nFriday: Closed" },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex gap-3">
                  <Icon className="w-3.5 h-3.5 text-wara-orange shrink-0 mt-0.5" />
                  <span className="text-white/30 text-sm font-medium whitespace-pre-line">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/15">
          <p>&copy; 2026 Wara Building Materials. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-wara-orange transition-colors">Privacy Policy</a>
            <span className="text-white/5">|</span>
            <a href="#" className="hover:text-wara-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
