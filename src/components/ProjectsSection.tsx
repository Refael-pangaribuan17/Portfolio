
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  index: number;
};

function ProjectCard({ title, description, image, tags, githubLink, demoLink, index }: ProjectCardProps) {
  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-xl h-[450px]",
        "transform transition-all duration-500 hover:scale-105",
        "bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg",
        "border border-yellow-500/20",
        "animate-fade-in shadow-lg hover:shadow-yellow-500/20"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Project Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-end">
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className={cn(
                  "text-xs px-3 py-1 rounded-full",
                  "bg-yellow-500/10 text-yellow-500",
                  "border border-yellow-500/20",
                  "animate-fade-in",
                  "transition-all duration-300 hover:bg-yellow-500/20"
                )}
                style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold font-poppins text-white group-hover:text-yellow-500 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 font-inter line-clamp-3">
            {description}
          </p>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full",
                "bg-yellow-500/10 text-yellow-500",
                "border border-yellow-500/20",
                "transition-all duration-300 hover:bg-yellow-500/20",
                "font-medium"
              )}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full",
                  "bg-yellow-500/10 text-yellow-500",
                  "border border-yellow-500/20",
                  "transition-all duration-300 hover:bg-yellow-500/20",
                  "font-medium"
                )}
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Network Security Monitor",
      description: "A comprehensive monitoring system for detecting and alerting potential security breaches in network infrastructure.",
      image: "https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Network Security", "Monitoring", "Python", "Flask"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "IoT Smart Home System",
      description: "An IoT-based smart home automation system with security features, remote monitoring, and energy optimization capabilities.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["IoT", "Home Automation", "Raspberry Pi", "MQTT"],
      githubLink: "https://github.com"
    },
    {
      title: "Cloud Resource Optimizer",
      description: "A tool that analyzes cloud resource usage patterns and provides recommendations for cost and performance optimization.",
      image: "https://images.unsplash.com/photo-1561441443-f1f164773f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Cloud Computing", "AWS", "Cost Optimization", "Python"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Virtual Lab Environment",
      description: "A comprehensive virtualized lab environment for learning and experimenting with various network configurations and security concepts.",
      image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Virtualization", "Docker", "Kubernetes", "Networking"],
      githubLink: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 font-poppins">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xl text-yellow-500 font-medium animate-fade-in">
            My Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '100ms' }}>
            Featured Projects
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            A showcase of my technical projects in networking, security, IoT, cloud computing, and virtualization.
          </p>
        </div>

        {/* Projects Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <ProjectCard 
                  {...project}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20" />
            <CarouselNext className="relative static bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20" />
          </div>
        </Carousel>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "bg-yellow-500 text-black font-medium",
              "transform transition-all duration-300",
              "hover:bg-yellow-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20"
            )}
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
