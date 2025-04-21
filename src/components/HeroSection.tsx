import { ArrowDown, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "./TypingAnimation";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center font-poppins pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-2">
              <TypingAnimation />
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hi, I&apos;m <span className="text-primary">Refael</span> Pangaribuan
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl">
              Tech enthusiast specializing in network and security systems with a passion for IoT, cloud, and virtualization.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                download 
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transform hover:-translate-y-1"
                )}
              >
                <ArrowDown size={20} />
                Download CV
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  "bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:-translate-y-1"
                )}
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/5 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                    alt="Refael Pangaribuan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 -m-4 bg-primary/20 rounded-full blur-md"></div>
              <div className="absolute top-0 right-0 w-10 h-10 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 -left-5 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-foreground/60 mb-2">Scroll down</span>
          <div className="w-5 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
