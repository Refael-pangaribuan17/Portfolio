
import { Code, Cloud, Network, Shield, Cpu, Monitor, Database, GitBranch } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

// Simple data for tools/languages (all yellow style)
const tools = [
  { name: "C/C++", icon: <Code size={20} />, },
  { name: "CSS", icon: <Code size={20} />, },
  { name: "HTML", icon: <Code size={20} />, },
  { name: "Java", icon: <Code size={20} />, },
  { name: "PHP", icon: <Code size={20} />, },
  { name: "Python", icon: <Code size={20} />, },
  { name: "Git", icon: <GitBranch size={20} />, },
  { name: "Github", icon: <GitBranch size={20} />, },
  { name: "MySQL", icon: <Database size={20} />, },
  { name: "MongoDB", icon: <Database size={20} />, },
  { name: "Laravel", icon: <Cloud size={20} />, },
  { name: "Bootstrap", icon: <Cloud size={20} />, }
];

// All tech skills in English, style & layout per screenshot
const techSkills = [
  { icon: <Code size={24} />, name: "Web Development" },
  { icon: <Cloud size={24} />, name: "Cloud" },
  { icon: <Network size={24} />, name: "Networking" },
  { icon: <Shield size={24} />, name: "Cyber Security" },
  { icon: <Cpu size={24} />, name: "Machine Vision" },
  { icon: <Monitor size={24} />, name: "IoT & Automation" }
];

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
                
                Throughout my studies, I have actively developed skills in various fields, from modern web application development to the integration of IoT systems and machine vision. I have experience using technologies like React and Node.js to build responsive web applications, along with knowledge in database management and cloud services. 
                
                In the IoT space, I am passionate about designing real-time monitoring and control systems with a focus on efficiency and scalability. Additionally, I have studied the fundamentals of cybersecurity to ensure that every solution developed remains secure and reliable. 
                
                In the field of automation, I have a solid understanding of using devices like Hikrobot and integrating them with PLC for visual recognition and quality control systems. I believe that the ability to combine these various technologies is key to addressing the challenges of the Industry 4.0 era.
              </p>
              
              {/* Tools & Languages Title */}
              <div className="mt-8 mb-4">
                <h4 className="text-2xl font-semibold text-primary mb-2 border-b-2 border-primary inline-block pb-1">
                  Tools &amp; Languages
                </h4>
              </div>
              
              {/* Tools/Languages badges */}
              <div className="flex flex-wrap gap-3 mt-2">
                {tools.map((t) => (
                  <span 
                    key={t.name} 
                    className="flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium bg-yellow-400 text-black/90 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-yellow-300 cursor-pointer"
                  >
                    {t.icon}
                    {t.name}
                  </span>
                ))}
              </div>
              
              {/* Technical Skills grid */}
              <div className="mt-8">
                <h4 className="text-2xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block pb-1">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                  {techSkills.map(({ icon, name }, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background/70 border border-primary/20 shadow transition hover:-translate-y-1 hover:shadow-lg duration-300 animate-fade-in">
                      <span className="w-9 h-9 flex items-center justify-center bg-yellow-400/80 text-black rounded-md">
                        {icon}
                      </span>
                      <span className="text-base text-foreground font-semibold">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The previous 'My Expertise' big section is deleted as requested */}
      </div>
    </section>
  );
}
