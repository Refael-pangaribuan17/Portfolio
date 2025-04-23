
import { Code, Hash, FileCode, Brackets, Terminal, Cloud, Laptop } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

// Language icon list
const LANGUAGES = [
  { label: "C", icon: Code },
  { label: "C#", icon: Hash },
  { label: "Python", icon: FileCode },
  { label: "JavaScript", icon: Brackets },
  { label: "HTML", icon: Code },
  { label: "CSS", icon: Code },
  { label: "PHP", icon: Code },
];

function LanguageIconRow() {
  return (
    <div className="flex flex-wrap gap-5 mb-8 animate-fade-in">
      {LANGUAGES.map(lang => {
        // Handle both string and function icon cases for lucide-react icons
        const LucideIcon = typeof lang.icon === "string"
          ? require("lucide-react")[lang.icon.charAt(0).toUpperCase() + lang.icon.slice(1)]
          : lang.icon;
        return (
          <div key={lang.label} className="flex flex-col items-center justify-center">
            <span className="bg-gradient-to-br from-primary/50 to-secondary/40 rounded-full p-2 mb-1">
              <LucideIcon size={30} className="text-primary" />
            </span>
            <span className="text-xs font-medium text-foreground/70">{lang.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// Technical skill focus card
type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  skills: string[];
};

function SkillFocusCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-background/30 backdrop-blur-lg p-5 transition-all duration-500 hover:scale-105 shadow-xl border border-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-primary/40 to-secondary/15 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-md">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h3>
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
            Creative Web & Software Developer
          </h3>
        </div>
        {/* Responsive split: tech/skills LEFT, summary/person RIGHT */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 mb-10">
          {/* Left: Skills */}
          <div className="w-full lg:w-1/2">
            <LanguageIconRow />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <SkillFocusCard
                icon={<Code size={20} />}
                title="Frontend Web"
                skills={[
                  "React & Next.js",
                  "Tailwind CSS",
                  "UI/UX & Accessibility",
                  "PWA & SEO",
                  "Performance Tuning"
                ]}
              />
              <SkillFocusCard
                icon={<Terminal size={20} />}
                title="Backend & APIs"
                skills={[
                  "Node.js, Express",
                  "RESTful APIs, Auth",
                  "SQL/NoSQL DB",
                  "Cloud Deployments",
                  "Secure Web Apps"
                ]}
              />
              <SkillFocusCard
                icon={<Terminal size={20} />}
                title="Networks & Security"
                skills={[
                  "Network Design",
                  "Firewall & Security",
                  "Pentesting & Audit",
                  "Monitoring Tools"
                ]}
              />
              <SkillFocusCard
                icon={<Cloud size={20} />}
                title="Cloud & IoT"
                skills={[
                  "AWS, GCP, Azure",
                  "IoT Device Integration",
                  "Data Streaming, Analytics"
                ]}
              />
              <SkillFocusCard
                icon={<Laptop size={20} />}
                title="Automation & Vision"
                skills={[
                  "PLCs & Automation",
                  "Industrial IoT",
                  "Machine Vision (Hikrobot)",
                  "Testing Systems"
                ]}
              />
            </div>
          </div>
          {/* RIGHT: Photo + summary text */}
          <div className="w-full lg:w-1/2 animate-fade-in flex flex-col gap-6 items-center">
            <div className="relative group w-60 mx-auto rounded-2xl overflow-hidden shadow-2xl mb-4">
              <AspectRatio ratio={4/5} className="bg-muted flex items-center justify-center">
                <img
                  src="/lovable-uploads/6c7b8875-04d9-47ef-8bda-e665b2b0a918.png"
                  alt="Personal Portrait"
                  className="w-full h-full object-cover object-center brightness-105 contrast-105"
                  style={{ background: "linear-gradient(135deg, #2e026d20 20%, #13aed680 100%)" }}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/lovable-uploads/b9d1f378-aafe-4286-b779-ff33b562a627.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </AspectRatio>
              <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-tr from-primary/30 to-secondary/20 opacity-70 scale-105" />
              <div className="absolute top-5 -right-3 w-10 h-10 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-300" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Hi, I'm Refael Pangaribuan
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Passionate about web development, automation, and network systems. As a Computer Technology student, I love building modern websites, automating processes, and designing robust cloud and IoT infrastructures. My experience covers full stack, cloud, and security—from APIs to pixel-perfect UX. I also build smart automation and vision solutions, always blending tech with practical engineering impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
