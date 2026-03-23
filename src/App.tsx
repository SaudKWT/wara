import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { BrandsMarquee } from "./components/BrandsMarquee";
import { ProductCategories } from "./components/ProductCategories";
import { ProjectsSection } from "./components/ProjectsSection";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { ProcessSection } from "./components/ProcessSection";
import { CTABanner } from "./components/CTABanner";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <BrandsMarquee />
      <ProductCategories />
      <ProjectsSection />
      <FeaturedProducts />
      <ProcessSection />
      <CTABanner />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
