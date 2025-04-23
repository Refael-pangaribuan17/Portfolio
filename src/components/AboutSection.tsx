import { Cloud, Network, Shield, Cpu, Code, Monitor } from "lucide-react";
import { Hash, FileCode, Database, GitBranch, Server, Terminal, Globe, Laptop, Lock, FileBadge } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Simple data for icon tools/languages (using available lucide-react icons)
const tools = [
  { name: "C/C++", icon: <FileCode size={20} color="#154484" />, color: "bg-[#154484] text-white" },
  { name: "CSS", icon: <Code size={20} color="#00A6EA" />, color: "bg-[#254bdd] text-white" },
  { name: "HTML", icon: <Code size={20} color="#DE4C25" />, color: "bg-[#e34c26] text-white" },
  { name: "Java", icon: <Code size={20} color="#FFD43B" />, color: "bg-[#f2b143] text-black" },
  { name: "PHP", icon: <Code size={20} color="#858EBB" />, color: "bg-[#8993be] text-white" },
  { name: "Python", icon: <Code size={20} color="#f7e018" />, color: "bg-[#f7e018] text-black" },
  { name: "Bootstrap", icon: <Globe size={20} color="#7911F6" />, color: "bg-[#7633f9] text-white" },
  { name: "Laravel", icon: <Server size={20} color="#F05340" />, color: "bg-[#f55243] text-white" },
  { name: "Nginx", icon: <Server size={20} color="#119B4C" />, color: "bg-[#009639] text-white" },
  { name: "Apache", icon: <Server size={20} color="#CC2139" />, color: "bg-[#d22128] text-white" },
  { name: "MySQL", icon: <Database size={20} color="#005C83" />, color: "bg-[#00758f] text-white" },
  { name: "MariaDB", icon: <Database size={20} color="#00698F" />, color: "bg-[#003545] text-white" },
  { name: "MongoDB", icon: <Database size={20} color="#4DB33D" />, color: "bg-[#4DB33D] text-white" },
  { name: "Canva", icon: <Globe size={20} color="#00C4CC" />, color: "bg-[#00C4CC] text-white" },
  { name: "Figma", icon: <Globe size={20} color="#a259ff" />, color: "bg-[#a259ff] text-white" },
  { name: "Git", icon: <GitBranch size={20} color="#F05032" />, color: "bg-[#f34f29] text-white" },
  { name: "Github", icon: <GitBranch size={20} color="#24292F" />, color: "bg-[#24292F] text-white" },
  { name: "Arduino", icon: <Cpu size={20} color="#00979C" />, color: "bg-[#00979C] text-white" },
  { name: "Ansible", icon: <Terminal size={20} color="#222222" />, color: "bg-[#222222] text-white" },
  { name: "Cisco", icon: <Network size={20} color="#0397d6" />, color: "bg-[#1b63b2] text-white" },
  { name: "Kubernetes", icon: <Server size={20} color="#326de6" />, color: "bg-[#326de6] text-white" },
  { name: "Postman", icon: <Globe size={20} color="#fd6c35" />, color: "bg-[#fd6c35] text-white" },
];

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 via-secondary/20 to-background/30 backdrop-blur-sm p-6 transition-all duration-500 hover:transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mb-5 transform transition-transform duration-500 group-hover:rotate-[20deg]">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h3>
        <p className="text-foreground/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 font-poppins relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section About Me */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-3">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Discover My Story
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <AspectRatio ratio={4 / 5} className="bg-muted">
                  <img 
                    src="/public/lovable-uploads/6349ba89-b06f-4097-bb92-e425be59dc49.png"
                    alt="Portrait" 
                    className="w-full h-full object-cover object-center brightness-105 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </AspectRatio>
              </div>
              <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-70 scale-110" />
              <div className="absolute top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-300" />
            </div>
          </div>

          <div className="w-full lg:w-3/5 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                I'm Refael Pangaribuan, a Technology Enthusiast
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am a student of Computer Technology at the D3 level with a strong interest in digital technology, particularly in networking, cybersecurity, Internet of Things (IoT), and industrial automation.
              </p>
            </div>
          </div>
        </div>

        {/* New Section for Tools */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-xl text-primary font-medium mb-3">My Tools</h2>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Technologies & Frameworks
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tools.map((t) => (
              <span key={t.name} className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold ${t.color}`}>
                {t.icon}
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
