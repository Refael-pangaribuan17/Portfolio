import { Cloud, Shield, Cpu, Code, Monitor, Terminal } from "lucide-react";
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
                I'm Refael Pangaribuan, a Technology & Web Development Enthusiast
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sebagai mahasiswa D3 Teknologi Komputer yang passionate, saya menggabungkan keahlian dalam pengembangan web dengan pemahaman mendalam tentang teknologi jaringan dan keamanan. Dengan fokus pada full stack development, saya mahir dalam menciptakan solusi web yang inovatif menggunakan teknologi modern seperti React, Node.js, dan cloud services.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Keahlian saya mencakup pengembangan aplikasi web responsif, manajemen database, implementasi keamanan web, dan integrasi layanan cloud. Saya percaya bahwa kombinasi antara pemahaman teknologi jaringan dan kemampuan pengembangan web modern adalah kunci untuk menciptakan solusi digital yang handal dan aman.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {[
                  "Full Stack Development",
                  "React & Node.js",
                  "Database Design",
                  "Web Security",
                  "RESTful APIs",
                  "Cloud Services",
                  "Responsive Design",
                  "Version Control",
                  "Agile Development"
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

        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-xl text-primary font-medium mb-3">My Expertise</h2>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Technical Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Code size={32} />}
              title="Web Development"
              description="Full stack development menggunakan React, Node.js, dan teknologi web modern untuk menciptakan aplikasi yang responsif dan scalable."
            />
            <SkillCard 
              icon={<Cloud size={32} />}
              title="Cloud & Networking"
              description="Design dan management infrastruktur jaringan, deployment cloud, dan optimasi performa aplikasi web."
            />
            <SkillCard 
              icon={<Shield size={32} />}
              title="Web & Network Security"
              description="Implementasi keamanan web, manajemen vulnerabilitas, dan pengamanan infrastruktur jaringan."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
