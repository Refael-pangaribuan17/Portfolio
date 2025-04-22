
import { GraduationCap, Briefcase, Award, BadgeCheck, Book, Star, Trophy } from "lucide-react";
import { Card } from "./ui/card";

const ACADEMIC = {
  degree: "D3 Teknologi Komputer",
  institution: "Institut Teknologi Del",
  year: "2025 (On Going)",
  description: "Fokus pada pengembangan keterampilan praktis dalam bidang teknologi komputer dan jaringan.",
  courses: ["Jaringan Komputer", "Cloud Computing", "Cyber Security", "Database Management"],
  icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
};

const INTERNSHIPS = [
  {
    year: 2024,
    position: "Network Engineer Intern",
    company: "PT Telekomunikasi Indonesia",
    desc: "Membantu dalam perancangan dan monitoring jaringan perusahaan serta troubleshooting issue jaringan.",
    icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
  },
  {
    year: 2023,
    position: "Cloud Infrastructure Intern",
    company: "Amazon Web Services (AWS) Indonesia",
    desc: "Berpartisipasi dalam migrasi aplikasi ke AWS dan optimasi layanan cloud.",
    icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
  }
];

const ACHIEVEMENTS = [
  {
    year: 2023,
    title: "Juara 2 Network Design Competition",
    desc: "Meraih peringkat 2 tingkat nasional dalam lomba desain jaringan komputer.",
    icon: <Award className="w-7 h-7 text-yellow-400" />,
  },
  {
    year: 2022,
    title: "Sertifikasi CompTIA Network+",
    desc: "Memperoleh sertifikasi internasional CompTIA Network+ di bidang jaringan.",
    icon: <BadgeCheck className="w-7 h-7 text-yellow-400" />,
  },
  {
    year: 2021,
    title: "Finalis Cyber Security CTF",
    desc: "Masuk finalis lomba Capture The Flag tingkat universitas.",
    icon: <Award className="w-7 h-7 text-yellow-400" />,
  },
];

export function PrestasiAkademikSection() {
  return (
    <section id="achievements" className="w-full py-20 bg-background/80 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            Prestasi &amp; Akademik
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perjalanan akademik dan pencapaian yang telah diraih dalam bidang teknologi komputer
          </p>
        </div>

        {/* Academic Section */}
        <Card className="mb-16 p-8 bg-card/50 backdrop-blur border-yellow-400/20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                {ACADEMIC.icon}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-1">{ACADEMIC.degree}</h3>
                  <p className="text-lg text-muted-foreground">{ACADEMIC.institution}</p>
                  <p className="text-yellow-400/80 font-semibold">{ACADEMIC.year}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{ACADEMIC.description}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Book className="w-5 h-5 text-yellow-400" />
                Mata Kuliah Utama
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {ACADEMIC.courses.map((course, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-yellow-400/10"
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Internships Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-yellow-400" />
            Pengalaman Internship
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {INTERNSHIPS.map((intern, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300 border-yellow-400/20 animate-fade-in"
                style={{animationDelay: `${idx * 150}ms`}}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-yellow-400/10">
                    {intern.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400">{intern.position}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {intern.company} • {intern.year}
                    </p>
                    <p className="text-sm text-muted-foreground/90">{intern.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            Prestasi
          </h3>
          <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 to-transparent" />
          <div className="space-y-8">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div 
                key={idx}
                className="relative pl-16 animate-fade-in"
                style={{animationDelay: `${idx * 200}ms`}}
              >
                <div className="absolute left-0 top-0 p-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                  <BadgeCheck className="w-6 h-6 text-yellow-400" />
                </div>
                <Card className="p-6 bg-card/50 backdrop-blur border-yellow-400/20">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-yellow-400">{ach.year}</span>
                    <h4 className="text-lg font-semibold">{ach.title}</h4>
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
