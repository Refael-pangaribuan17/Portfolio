import { Github, ExternalLink, Recycle, Gamepad, FireExtinguisher, Hospital, Hotel } from "lucide-react";
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
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full p-6 flex flex-col justify-end">
        <div className="space-y-4">
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
      title: "Smart Waste Separator",
      description: "Innovative SolidWorks design for an automated waste bin that efficiently separates metal and non-metal waste materials using advanced sensor technology and mechanical automation.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["SolidWorks", "3D Design", "Automation", "Sustainability"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Interactive C Language Game",
      description: "A console-based interactive game developed in C programming language, featuring dynamic gameplay mechanics, score tracking, and engaging user interactions.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["C Language", "Game Development", "Console Application", "Programming"],
      githubLink: "https://github.com"
    },
    {
      title: "IoT Gas & Fire Detection System",
      description: "Advanced IoT-based system for real-time detection of gas leaks and fire hazards, featuring instant alerts, mobile notifications, and emergency response integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["IoT", "Sensors", "Safety", "Real-time Monitoring"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Toba Health Facilities Portal",
      description: "WordPress-based healthcare facilities directory for the Toba region, providing detailed information about medical services, locations, and availability.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      tags: ["WordPress", "Healthcare", "Web Development", "Directory"],
      githubLink: "https://github.com"
    },
    {
      title: "Hotel Booking System",
      description: "Comprehensive Laravel-based hotel booking platform with real-time availability checking, secure payment integration, and automated booking management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Laravel", "PHP", "Booking System", "Web Application"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 font-poppins relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
