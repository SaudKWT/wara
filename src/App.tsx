import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductCategories } from "./components/ProductCategories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProcessSection } from "./components/ProcessSection";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
