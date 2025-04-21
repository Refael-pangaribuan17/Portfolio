
import { GraduationCap, Award, BadgeCheck, Briefcase } from "lucide-react";

const ACADEMIC = {
  degree: "D3 Teknologi Komputer",
  institution: "Institut Teknologi Del",
  year: "2025 (On Going)",
  icon: <GraduationCap className="w-7 h-7 text-yellow-400" />,
};

const INTERNSHIPS = [
  {
    year: 2024,
    position: "Network Engineer Intern",
    company: "PT Telekomunikasi Indonesia",
    desc: "Membantu dalam perancangan dan monitoring jaringan perusahaan serta troubleshooting issue jaringan.",
    icon: <Briefcase className="w-6 h-6 text-yellow-300" />,
  },
  {
    year: 2023,
    position: "Cloud Infrastructure Intern",
    company: "Amazon Web Services (AWS) Indonesia",
    desc: "Berpartisipasi dalam migrasi aplikasi ke AWS dan optimasi layanan cloud.",
    icon: <Briefcase className="w-6 h-6 text-yellow-300" />,
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
    <section id="achievements" className="w-full py-16 md:py-20 bg-background relative">
      <div className="container mx-auto max-w-4xl px-4 md:px-0">
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-left text-yellow-400 tracking-tight animate-fade-in">
          Prestasi &amp; Akademik
        </h2>
        <div className="mb-10 text-muted-foreground animate-fade-in">
          Pencapaian penting dalam perjalanan akademik & karir teknologi saya, serta pengalaman internship yang relevan.
        </div>
        
        {/* Akademik */}
        <div className="mb-14 animate-fade-in flex flex-col gap-7">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground mb-4">
            <GraduationCap className="w-6 h-6 text-yellow-400" /> Akademik
          </h3>
          <div className="p-6 rounded-xl bg-card shadow-lg border border-yellow-900/10 flex gap-4 items-center">
            <div>{ACADEMIC.icon}</div>
            <div>
              <div className="font-bold text-yellow-300">{ACADEMIC.degree}</div>
              <div className="text-sm text-muted-foreground">{ACADEMIC.institution}</div>
              <div className="text-xs text-yellow-400">{ACADEMIC.year}</div>
            </div>
          </div>
          {/* Pengalaman Internship */}
          <div>
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
              <Briefcase className="w-5 h-5 text-yellow-300" /> Pengalaman Internship
            </h4>
            <ul className="flex flex-col gap-3">
              {INTERNSHIPS.map((intern, idx) => (
                <li key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 p-4 rounded-lg bg-muted/40 border border-yellow-900/10 hover:scale-105 hover:bg-yellow-900/10 transition-all animate-fade-in" style={{animationDelay: `${idx * 120 + 100}ms`}}>
                  <span className="flex-shrink-0">{intern.icon}</span>
                  <span className="flex-1">
                    <span className="font-medium">{intern.position}</span>
                    <span className="block text-xs text-muted-foreground">{intern.company}</span>
                    <span className="block text-xs">{intern.desc}</span>
                  </span>
                  <span className="text-xs text-yellow-400">{intern.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Prestasi */}
        <div className="animate-fade-in">
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
      </div>
    </section>
  );
}
