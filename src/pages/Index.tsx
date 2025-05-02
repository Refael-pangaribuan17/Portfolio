
import { useEffect } from "react";
import { 
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
  PrestasiAkademikSection
} from "@/components";

const Index = () => {
  // Set dark mode by default when component mounts
  useEffect(() => {
    // Log to confirm this is executing
    console.log("Setting dark mode by default");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PrestasiAkademikSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
