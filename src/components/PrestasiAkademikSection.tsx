
import { Award, Briefcase, GraduationCap, Book, Star, Monitor, Code, BadgeCheck } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

const ACHIEVEMENTS = [
  {
    year: 2024,
    title: "Best Web Developer Award",
    desc: "Recognition for delivering an innovative, user-centric web platform at a national competition.",
    icon: <Monitor className="w-6 h-6 text-yellow-400" />,
    image: "/lovable-uploads/6c7b8875-04d9-47ef-8bda-e665b2b0a918.png",
  },
  {
    year: 2023,
    title: "2nd National Network Design Winner",
    desc: "Built scalable, resilient networks—awarded for technical excellence under pressure.",
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    image: "/lovable-uploads/b9d1f378-aafe-4286-b779-ff33b562a627.png"
  },
  {
    year: 2023,
    title: "Full Stack Developer Certificate",
    desc: "Completed full stack program—mastered backend engineering and interactive user interfaces.",
    icon: <BadgeCheck className="w-6 h-6 text-yellow-400" />,
    image: null
  },
  {
    year: 2022,
    title: "CompTIA Network+ Certified",
    desc: "Internationally certified for strong networking, security, and troubleshooting expertise.",
    icon: <BadgeCheck className="w-6 h-6 text-yellow-400" />,
    image: null
  }
];

const INTERNSHIPS = [
  {
    year: 2024,
    position: "Full Stack Web Developer Intern",
    company: "PT Telekomunikasi Indonesia",
    desc: "Developed scalable web apps with React and Node.js, supporting infrastructure monitoring.",
    icon: <Code className="w-6 h-6 text-yellow-400" />
  },
  {
    year: 2023,
    position: "Cloud & Web Platform Intern",
    company: "Amazon Web Services (AWS) Indonesia",
    desc: "Assisted in enterprise cloud deployments and website scaling automation.",
    icon: <Monitor className="w-6 h-6 text-yellow-400" />
  }
];

const DEGREE = {
  degree: "Associate of Computer Technology (A.Sc.)",
  institution: "Institut Teknologi Del",
  year: "2025 (Ongoing)",
  description: "Comprehensive training in computer technology, web design, software engineering, and cloud systems—preparing for a career in web development and automation.",
  courses: [
    "Web Programming & Technologies",
    "Frontend & Backend Dev",
    "Database Management (SQL)",
    "Computer Networking",
    "Cybersecurity Basics",
    "Cloud Computing",
    "Internet of Things",
    "Network System Software",
    "Machine Learning",
    "UX/UI for Web"
  ],
  icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
};

export function PrestasiAkademikSection() {
  // State for enlarged modal preview
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section id="achievements" className="w-full py-20 bg-background/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 relative">
        <div className="text-center mb-16 select-none animate-fade-in">
          <Award
            className="w-14 h-14 mx-auto mb-5 drop-shadow-glow text-yellow-400 animate-pulse"
            style={{
              filter: "drop-shadow(0 0 18px #fffacda8) drop-shadow(0 0 24px #ffe06677)",
              opacity: 0.95,
            }}
          />
          <h2
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-100 bg-clip-text text-transparent select-none"
            style={{
              textShadow: "0 0 16px #ffd700,0 0 48px #ffea99, 0 2px 18px #ebda7a",
              letterSpacing: "0.02em",
              filter: "brightness(1.15) drop-shadow(0 0 16px #fffbe8)",
              WebkitTextStroke: "1px #ffe06690"
            }}
          >
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected highlights in my web development, networking, and automation journey.
          </p>
        </div>
        {/* Academic / Degree */}
        <Card className="mb-12 p-8 bg-card/50 backdrop-blur border-yellow-400/20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-3">
                {DEGREE.icon}
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-1">{DEGREE.degree}</h3>
                  <p className="text-md text-muted-foreground">{DEGREE.institution}</p>
                  <p className="text-yellow-400/80 font-semibold">{DEGREE.year}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">{DEGREE.description}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold mb-3">
                <Book className="w-5 h-5 text-yellow-400" />
                Relevant Courses
              </h4>
              <div className="grid grid-cols-2 gap-2">
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
        {/* Internships */}
        <div className="mb-14">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-yellow-400" />
            Internships
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {INTERNSHIPS.map((intern, idx) => (
              <Card
                key={idx}
                className="p-5 bg-card/70 backdrop-blur hover:bg-card/80 transition-all duration-300 border-yellow-400/20 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-yellow-400/10">
                    {intern.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-yellow-400">{intern.position}</h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {intern.company} • {intern.year}
                    </p>
                    <p className="text-xs text-muted-foreground/80">{intern.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Major Achievements: split, smaller icons, clickable photo */}
        <div className="relative">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-yellow-400" />
            Major Achievements
          </h3>
          <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 to-transparent" />
          <div className="space-y-9">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div
                key={idx}
                className="relative pl-20 animate-fade-in"
                style={{ animationDelay: `${idx * 130}ms` }}
              >
                <div className="absolute left-0 top-0 p-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                  {/* Smaller achievement icon */}
                  {ach.icon}
                </div>
                <Card className="p-4 flex items-center gap-6 bg-card/70 backdrop-blur border-yellow-400/20">
                  {ach.image ? (
                    <button
                      className="w-14 h-14 group outline-none focus:ring-2 ring-yellow-400 rounded-lg"
                      onClick={() => setPreview(ach.image!)}
                      tabIndex={0}
                      title="Click to enlarge"
                    >
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="w-full h-full object-cover object-center rounded-lg border border-yellow-400 shadow-md bg-yellow-50 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: "#fffbe4" }}
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/lovable-uploads/b9d1f378-aafe-4286-b779-ff33b562a627.png";
                        }}
                      />
                    </button>
                  ) : (
                    <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-400">
                      <Award className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-yellow-400">{ach.year}</span>
                    <h4 className="text-base font-bold">{ach.title}</h4>
                    <p className="text-xs text-muted-foreground">{ach.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {/* Modal preview for achievement photo */}
          {preview && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-fade-in"
              onClick={() => setPreview(null)}
              tabIndex={-1}
              style={{ cursor: "zoom-out" }}
            >
              <img
                src={preview}
                alt="Enlarged achievement"
                className="max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-yellow-400"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
