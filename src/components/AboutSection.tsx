import { Cloud, Network, Shield, Cpu, Code, Monitor } from "lucide-react";
import { FileCode, Database, GitBranch, Server, Terminal, Globe } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

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
  { name: "MongoDB", icon: <Database size={20} color="#4DB33D" />, color: "bg-[#4DB33D] text-white" },
  { name: "Git", icon: <GitBranch size={20} color="#F05032" />, color: "bg-[#f34f29] text-white" },
  { name: "Github", icon: <GitBranch size={20} color="#24292F" />, color: "bg-[#24292F] text-white" },
  { name: "Arduino", icon: <Cpu size={20} color="#00979C" />, color: "bg-[#00979C] text-white" },
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
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-3">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Discover My Story
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative group">
              <AspectRatio ratio={4 / 5} className="bg-muted">
                <img
                  src="/public/lovable-uploads/6349ba89-b06f-4097-bb92-e425be59dc49.png"
                  alt="Portrait"
                  className="w-full h-full object-cover object-center brightness-105 contrast-105"
                />
              </AspectRatio>
            </div>
          </div>

          <div className="w-full lg:w-3/5 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                I'm Refael Pangaribuan, a Technology Enthusiast
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am a student of Computer Technology at the D3 level with a strong interest in digital technology, particularly in networking, cybersecurity, Internet of Things (IoT), and industrial automation. Throughout my studies, I have actively developed skills in various fields, from modern web application development to the integration of IoT systems and machine vision. I have experience using technologies like React and Node.js to build responsive web applications, along with knowledge in database management and cloud services. In the IoT space, I am passionate about designing real-time monitoring and control systems with a focus on efficiency and scalability. Additionally, I have studied the fundamentals of cybersecurity to ensure that every solution developed remains secure and reliable. In the field of automation, I have a solid understanding of using devices like Hikrobot and integrating them with PLC for visual recognition and quality control systems. I believe that the ability to combine these various technologies is key to addressing the challenges of the Industry 4.0 era.
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
