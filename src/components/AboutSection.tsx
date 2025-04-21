
import { Cloud, Shield, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-secondary/50 backdrop-blur-md rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 font-poppins relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/95"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Get to Know Me Better</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Technology" 
                className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-3/5 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">I'm Refael Pangaribuan, a Technology Student</h2>
            <p className="text-foreground/80 mb-6">
              As a passionate D3 Computer Technology student, I embark on a journey of constant learning and exploration in the ever-evolving tech landscape. With a keen eye for detail and a natural curiosity for understanding how systems work, I've developed specialized knowledge in networking architectures, cybersecurity frameworks, IoT development, cloud infrastructure, and virtualization technologies.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines theoretical knowledge with hands-on practice, enabling me to bridge the gap between academic concepts and real-world applications. I believe in the power of technology to transform lives and industries, and I'm committed to contributing meaningfully to this transformation through innovative solutions and robust implementations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Networking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Cyber Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Internet of Things</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Cloud Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Virtualization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>System Administration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-xl text-primary font-medium mb-2">My Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Shield size={28} />}
              title="Cyber Security"
              description="Implementation of security protocols, vulnerability assessment, penetration testing, and security monitoring systems."
            />
            <SkillCard 
              icon={<Cloud size={28} />}
              title="Cloud & Networking"
              description="Design and management of network infrastructure, cloud deployment models, and optimization of network performance."
            />
            <SkillCard 
              icon={<Cpu size={28} />}
              title="IoT & Virtualization"
              description="Development of IoT solutions, virtual machine configuration, hypervisor management, and container orchestration."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
