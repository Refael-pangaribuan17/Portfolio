
import { Award, GraduationCap, BookOpen, BadgeCheck } from "lucide-react";

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

const ACADEMIC = {
  degree: "D3 Teknologi Komputer",
  institution: "Institut Teknologi Del",
  year: "2025 (On Going)",
  icon: <GraduationCap className="w-7 h-7 text-yellow-400" />,
};

const COURSES = [
  {
    year: 2024,
    name: "Google IT Support Professional",
    provider: "Coursera",
    icon: <BookOpen className="w-6 h-6 text-yellow-300" />,
  },
  {
    year: 2023,
    name: "AWS Cloud Practitioner Essentials",
    provider: "Amazon Web Services",
    icon: <BookOpen className="w-6 h-6 text-yellow-300" />,
  },
  {
    year: 2022,
    name: "Intro to IoT",
    provider: "Cisco Networking Academy",
    icon: <BookOpen className="w-6 h-6 text-yellow-300" />,
  },
];

export function PrestasiAkademikSection() {
  return (
    <section 
      id="achievements"
      className="w-full py-16 md:py-20 bg-background relative"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-0">
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-left text-yellow-400 tracking-tight animate-fade-in">
          Prestasi &amp; Akademik
        </h2>
        <div className="mb-10 text-muted-foreground animate-fade-in">
          Pencapaian penting dalam perjalanan akademik & karir teknologi saya, serta kursus-kursus penunjang yang relevan.
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Prestasi - Timeline */}
          <div className="flex-1 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <Award className="w-6 h-6 text-yellow-400" /> Prestasi
            </h3>
            <ol className="relative border-l border-yellow-500/30 ml-2">
              {ACHIEVEMENTS.map((ach, idx) => (
                <li key={idx} className="mb-8 pl-6 last:mb-0 animate-fade-in" style={{animationDelay: `${idx * 100}ms`}}>
                  <span className="absolute left-0 -ml-4 flex items-center justify-center">
                    {ach.icon}
                  </span>
                  <span className="text-sm text-yellow-400 font-medium">{ach.year}</span>
                  <div className="font-semibold text-lg">{ach.title}</div>
                  <div className="text-muted-foreground text-sm">{ach.desc}</div>
                </li>
              ))}
            </ol>
          </div>
          {/* Akademik & Kursus */}
          <div className="flex-1 flex flex-col gap-7 animate-fade-in">
            {/* Akademik/Gelar */}
            <div className="p-6 rounded-xl bg-card shadow-lg border border-yellow-900/10 flex gap-4 items-center">
              <div>{ACADEMIC.icon}</div>
              <div>
                <div className="font-bold text-yellow-300">{ACADEMIC.degree}</div>
                <div className="text-sm text-muted-foreground">{ACADEMIC.institution}</div>
                <div className="text-xs text-yellow-400">{ACADEMIC.year}</div>
              </div>
            </div>
            {/* Kursus */}
            <div>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <BookOpen className="w-5 h-5 text-yellow-300" /> Kursus &amp; Pelatihan
              </h4>
              <ul className="flex flex-col gap-3">
                {COURSES.map((course, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-yellow-900/10 hover:scale-105 hover:bg-yellow-900/10 transition-all animate-fade-in" style={{animationDelay: `${idx * 120 + 100}ms`}}>
                    <span>{course.icon}</span>
                    <span className="flex-1">
                      <span className="font-medium">{course.name}</span>
                      <span className="block text-xs text-muted-foreground">{course.provider}</span>
                    </span>
                    <span className="text-xs text-yellow-400">{course.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
