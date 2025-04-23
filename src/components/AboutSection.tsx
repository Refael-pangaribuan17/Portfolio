
import { Code, Cloud, Shield, Terminal, Database, Award, Laptop, Monitor, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

// Focused skill category cards
type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  skills: string[];
};

function SkillFocusCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-background/30 backdrop-blur-lg p-6 transition-all duration-500 hover:transform hover:-translate-y-1 shadow-xl border border-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-secondary/15 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h3>
        <ul className="list-disc list-inside text-foreground/80 text-sm space-y-1 pl-2">
          {skills.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-3">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            My Technology Story
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14 mb-20">
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all">
                <AspectRatio ratio={4/5} className="bg-muted flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/6c7b8875-04d9-47ef-8bda-e665b2b0a918.png"
                    alt="Personal Portrait"
                    className="w-full h-full object-cover object-center brightness-105 contrast-105"
                    style={{ background: "linear-gradient(135deg, #2e026d20 20%, #13aed680 100%)" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=400&h=500&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </AspectRatio>
              </div>
              <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-tr from-primary/30 to-secondary/20 opacity-70 scale-105" />
              <div className="absolute top-5 -right-3 w-16 h-16 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-300" />
            </div>
          </div>

          <div className="w-full lg:w-3/5 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Hi, I'm Refael Pangaribuan — Creative Web & Software Developer
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am passionate about web development, system automation, and emerging technology. As a Computer Technology undergrad, my journey centers on modern website creation, powerful web infrastructures, and secure networks.<br />
                My hands-on experience spans scalable full-stack development, cloud computing, and real-time IoT platforms. I specialize in translating complex challenges into innovative, seamless user experiences.<br />
                I also enjoy building automation and machine vision solutions (like Hikrobot & PLCs), always focusing on blending digital creativity with practical engineering.
              </p>
              
              {/* Skill Focus Cards - not combined, each area individual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <SkillFocusCard 
                  icon={<Code size={22} />}
                  title="Frontend Web Development"
                  skills={[
                    "React & Next.js (SPA/PWA)",
                    "Tailwind CSS & UI Libraries",
                    "Responsive Design",
                    "Accessible UI/UX",
                    "Performance Optimization"
                  ]}
                />
                <SkillFocusCard 
                  icon={<Monitor size={22} />}
                  title="Backend & APIs"
                  skills={[
                    "Node.js, Express, RESTful APIs",
                    "Authentication & Authorization",
                    "Database Integration (SQL/NoSQL)",
                    "Cloud Deployment (Vercel, AWS)",
                    "SEO & Security"
                  ]}
                />
                <SkillFocusCard 
                  icon={<Terminal size={22} />}
                  title="Networking & Security"
                  skills={[
                    "Network Architecture",
                    "Firewall/Security Implementation",
                    "Vulnerability Assessment",
                    "Monitoring & Troubleshooting"
                  ]}
                />
                <SkillFocusCard 
                  icon={<Cloud size={22} />}
                  title="Cloud Systems & IoT"
                  skills={[
                    "AWS, GCP, Azure",
                    "IoT Device Integration",
                    "Data Streaming",
                    "Real-Time Analytics"
                  ]}
                />
                <SkillFocusCard 
                  icon={<Laptop size={22} />}
                  title="Automation & Vision"
                  skills={[
                    "PLC Control Systems",
                    "Industrial IoT",
                    "Machine Vision (Hikrobot)",
                    "Automated Testing"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

