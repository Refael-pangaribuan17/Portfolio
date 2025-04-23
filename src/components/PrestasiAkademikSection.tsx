
import { Award, Briefcase, GraduationCap, Book, Star, Monitor, Code, BadgeCheck } from "lucide-react";
import { Card } from "./ui/card";

// Achievement images (can use URLs or /lovable-uploads/ for uploaded images)
const ACHIEVEMENTS = [
  {
    year: 2024,
    title: "Best Web Developer Award",
    desc: "Honored for creating an innovative and user-centric web application in a national development competition.",
    icon: <Monitor className="w-7 h-7 text-yellow-400" />,
    image: "/lovable-uploads/6349ba89-b06f-4097-bb92-e425be59dc49.png"
  },
  {
    year: 2023,
    title: "2nd Place in Network Design Competition",
    desc: "Achieved second place in a nation-wide network design challenge.",
    icon: <Award className="w-7 h-7 text-yellow-400" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=cover&w=500&q=80"
  },
  {
    year: 2023,
    title: "Full Stack Development Certification",
    desc: "Attained professional certification in full stack web development.",
    icon: <BadgeCheck className="w-7 h-7 text-yellow-400" />,
    image: null
  },
  {
    year: 2022,
    title: "CompTIA Network+ Certification",
    desc: "Earned international CompTIA Network+ certification in computer networking.",
    icon: <BadgeCheck className="w-7 h-7 text-yellow-400" />,
    image: null
  }
];

const INTERNSHIPS = [
  {
    year: 2024,
    position: "Full Stack Developer Intern",
    company: "PT Telekomunikasi Indonesia",
    desc: "Worked on web applications with React and Node.js. Assisted with network monitoring and architectural design.",
    icon: <Code className="w-6 h-6 text-yellow-400" />
  },
  {
    year: 2023,
    position: "Web & Cloud Infrastructure Intern",
    company: "Amazon Web Services (AWS) Indonesia",
    desc: "Contributed to cloud-based web platform development and optimized AWS services.",
    icon: <Monitor className="w-6 h-6 text-yellow-400" />
  }
];

const DEGREE = {
  degree: "Associate of Computer Technology (D3)",
  institution: "Institut Teknologi Del",
  year: "2025 (On Going)",
  description: "A hands-on program focused on practical skills in computer technology, web development, networking, and cloud infrastructure.",
  courses: [
    "Web Development Fundamentals",
    "Frontend and Backend Programming",
    "Database Management Systems",
    "Computer Networking",
    "Cybersecurity Essentials",
    "Cloud Computing Platforms",
    "Embedded & IoT Systems",
    "Network System Software",
    "Machine Learning Basics"
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
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            Achievements & Academic Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey in computer technology—where innovation, creativity, and web development meet network and cloud expertise.
          </p>
        </div>

        {/* Academic / Degree */}
        <Card className="mb-16 p-8 bg-card/60 backdrop-blur border-yellow-400/20 animate-fade-in">
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
                Main Courses
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
                className="p-6 bg-card/60 backdrop-blur hover:bg-card/80 transition-all duration-300 border-yellow-400/20 animate-fade-in"
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

        {/* Achievements Timeline - with optional photo */}
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
                <div className="absolute left-0 top-0 p-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                  {ach.icon}
                </div>
                <Card className="p-4 flex items-center gap-5 bg-card/60 backdrop-blur border-yellow-400/20">
                  {ach.image ? (
                    <img 
                      src={ach.image}
                      alt={ach.title}
                      className="w-16 h-16 object-cover object-center rounded-md border border-yellow-400/20 shadow"
                      style={{ backgroundColor: "#f4f1e8" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=200&h=200&q=80";
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center rounded-md bg-yellow-100 border border-yellow-300 text-yellow-400">
                      <Award className="w-8 h-8" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-yellow-400">{ach.year}</span>
                    <h4 className="text-base font-semibold">{ach.title}</h4>
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
