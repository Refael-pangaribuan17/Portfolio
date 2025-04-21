
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border font-poppins">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold">
              <span className="text-primary">Refael</span>.
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-foreground/70">
            <a 
              href="#home"
              className="hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a 
              href="#about"
              className="hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a 
              href="#projects"
              className="hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-foreground/60">
          &copy; {currentYear} Refael Pangaribuan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
