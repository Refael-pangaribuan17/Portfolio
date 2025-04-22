
import { Cloud, Shield, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 via-secondary/20 to-background/30 backdrop-blur-sm p-6 transition-all duration-500 hover:transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mb-6 transform transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h3>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 font-poppins relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-3">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Discover My Story
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Enhanced Image Container with New Image */}
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <AspectRatio ratio={4/5} className="bg-muted">
                  <img 
                    src="/public/lovable-uploads/6349ba89-b06f-4097-bb92-e425be59dc49.png"
                    alt="Portrait" 
                    className="w-full h-full object-cover object-center brightness-105 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </AspectRatio>
              </div>
              {/* Enhanced Decorative Elements */}
              <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-70 scale-110" />
              <div className="absolute top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-300" />
            </div>
          </div>

          {/* Enhanced Content Container */}
          <div className="w-full lg:w-3/5 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                I'm Refael Pangaribuan, a Technology Enthusiast
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As a passionate D3 Computer Technology student, I embark on a journey of constant learning and exploration in the ever-evolving tech landscape. With a keen eye for detail and a natural curiosity for understanding how systems work, I've developed specialized knowledge in networking architectures, cybersecurity frameworks, IoT development, cloud infrastructure, and virtualization technologies.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines theoretical knowledge with hands-on practice, enabling me to bridge the gap between academic concepts and real-world applications. I believe in the power of technology to transform lives and industries, and I'm committed to contributing meaningfully to this transformation through innovative solutions and robust implementations.
              </p>

              {/* Enhanced Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {[
                  "Networking",
                  "Cyber Security",
                  "Internet of Things",
                  "Cloud Computing",
                  "Virtualization",
                  "System Administration"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section with Enhanced Cards */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-xl text-primary font-medium mb-3">My Expertise</h2>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Technical Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Shield size={32} />}
              title="Cyber Security"
              description="Implementation of security protocols, vulnerability assessment, penetration testing, and security monitoring systems."
            />
            <SkillCard 
              icon={<Cloud size={32} />}
              title="Cloud & Networking"
              description="Design and management of network infrastructure, cloud deployment models, and optimization of network performance."
            />
            <SkillCard 
              icon={<Cpu size={32} />}
              title="IoT & Virtualization"
              description="Development of IoT solutions, virtual machine configuration, hypervisor management, and container orchestration."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
