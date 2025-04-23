
import { Award, Briefcase, GraduationCap, Book, Star, Monitor, Code, BadgeCheck } from "lucide-react";
import { Card } from "./ui/card";

// Achievement images (use your uploaded or thematic images)
const ACHIEVEMENTS = [
  {
    year: 2024,
    title: "Best Web Developer Award",
    desc: "Recognized for designing an innovative, user-focused web platform at a national competition. Combined technical excellence and creative UI/UX in production-ready code.",
    icon: <Monitor className="w-10 h-10 text-yellow-400" />,
    image: "/lovable-uploads/6c7b8875-04d9-47ef-8bda-e665b2b0a918.png", // Your image for highlight
  },
  {
    year: 2023,
    title: "2nd Place, National Network Design Challenge",
    desc: "Awarded second for architecting robust, scalable computer network solutions under pressure, showcasing a strong foundation in both networking and web infrastructure.",
    icon: <Award className="w-10 h-10 text-yellow-400" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=cover&w=500&q=80"
  },
  {
    year: 2023,
    title: "Full Stack Developer Certificate",
    desc: "Completed an industry-standard Full Stack Web Development program, gaining end-to-end experience from backend architecture to dynamic, interactive front-end engineering.",
    icon: <BadgeCheck className="w-10 h-10 text-yellow-400" />,
    image: null // text-based card if unavailable
  },
  {
    year: 2022,
    title: "CompTIA Network+ Certified",
    desc: "Earned international recognition for networking proficiency, including protocols, security topologies, and network troubleshooting relevant for robust web platforms.",
    icon: <BadgeCheck className="w-10 h-10 text-yellow-400" />,
    image: null
  }
];

const INTERNSHIPS = [
  {
    year: 2024,
    position: "Full Stack Web Developer Intern",
    company: "PT Telekomunikasi Indonesia",
    desc: "Created and optimized scalable web applications using React and Node.js. Supported network monitoring and infrastructure design, fusing backend reliability with intuitive web UI.",
    icon: <Code className="w-8 h-8 text-yellow-400" />
  },
  {
    year: 2023,
    position: "Cloud & Web Platform Intern",
    company: "Amazon Web Services (AWS) Indonesia",
    desc: "Contributed to enterprise-level web system architecture and cloud deployments, automating reliable DevOps workflows and hands-on with website scaling.",
    icon: <Monitor className="w-8 h-8 text-yellow-400" />
  }
];

const DEGREE = {
  degree: "Associate of Computer Technology (A.Sc.)",
  institution: "Institut Teknologi Del",
  year: "2025 (Ongoing)",
  description: "A practical journey developing strong skills in computer technology, web design, modern software engineering, and cloud systems—preparing for high-impact work in web development, networking, and automation.",
  courses: [
    "Web Programming & Technologies",
    "Frontend & Backend Web Engineering",
    "Database Management & SQL",
    "Computer Networking",
    "Cybersecurity Principles",
    "Cloud Service Platforms",
    "Internet of Things Applications",
    "Network System Software",
    "Machine Learning Fundamentals",
    "UX/UI for Web Developers"
  ],
  icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
};

export function PrestasiAkademikSection() {
  return (
    <section id="achievements" className="w-full py-20 bg-background/80 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6 drop-shadow-glow" />
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,219,77,0.9)] animate-pulse"
            style={{
              textShadow: '0px 0px 32px #ffee8c, 0px 2px 18px #ebda7a, 0px 2px 24px #fffacd'
            }}
          >
            Achievements & Academic Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my technology milestones—where web development, creative solutions, and advanced networking shape tomorrow’s innovation.
          </p>
        </div>

        {/* Academic / Degree */}
        <Card className="mb-16 p-8 bg-card/50 backdrop-blur border-yellow-400/20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-5">
                {DEGREE.icon}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-1">{DEGREE.degree}</h3>
                  <p className="text-lg text-muted-foreground">{DEGREE.institution}</p>
                  <p className="text-yellow-400/80 font-semibold">{DEGREE.year}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-5">{DEGREE.description}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <Book className="w-5 h-5 text-yellow-400" />
                Key Courses
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {DEGREE.courses.map((course, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-background/60 border border-yellow-400/10"
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Internships Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-yellow-400" />
            Professional Internships
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {INTERNSHIPS.map((intern, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card/70 backdrop-blur hover:bg-card/80 transition-all duration-300 border-yellow-400/20 animate-fade-in"
                style={{animationDelay: `${idx * 120}ms`}}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-yellow-400/10">
                    {intern.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400">{intern.position}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {intern.company} • {intern.year}
                    </p>
                    <p className="text-sm text-muted-foreground/90">{intern.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Timeline - with improved photo styling */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            Major Achievements
          </h3>
          <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 to-transparent" />
          <div className="space-y-10">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div 
                key={idx}
                className="relative pl-20 animate-fade-in"
                style={{animationDelay: `${idx * 160}ms`}}
              >
                <div className="absolute left-0 top-0 p-3 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                  {ach.icon}
                </div>
                <Card className="p-5 flex items-center gap-7 bg-card/70 backdrop-blur border-yellow-400/20">
                  {ach.image ? (
                    <img 
                      src={ach.image}
                      alt={ach.title}
                      className="w-20 h-20 object-cover object-center rounded-lg border-2 border-yellow-400 shadow-xl bg-yellow-50"
                      style={{ backgroundColor: "#fffbe4", objectFit: "cover" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=200&h=200&q=80";
                      }}
                    />
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-yellow-100 border-2 border-yellow-300 text-yellow-400">
                      <Award className="w-10 h-10" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-yellow-400">{ach.year}</span>
                    <h4 className="text-lg font-bold">{ach.title}</h4>
                    <p className="text-sm text-muted-foreground">{ach.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

