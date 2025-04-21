
import { GraduationCap, Briefcase, Award, BadgeCheck } from "lucide-react";

const ACADEMIC = {
  degree: "D3 Teknologi Komputer",
  institution: "Institut Teknologi Del",
  year: "2025 (On Going)",
  icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
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
    <section id="achievements" className="w-full py-16 md:py-20 bg-background relative">
      <div className="container mx-auto max-w-5xl px-4 md:px-0 flex flex-col gap-14">
        {/* Judul Section */}
        <div className="mb-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-left text-yellow-400 tracking-tight animate-fade-in">
            Prestasi &amp; Akademik
          </h2>
          <div className="mb-8 text-lg text-muted-foreground animate-fade-in">
            Pencapaian akademik, pengalaman internship, dan prestasi relevan dalam bidang teknologi.
          </div>
        </div>

        {/* Akademik */}
        <div className="animate-fade-in flex flex-col md:flex-row gap-7">
          <div className="flex-1 flex flex-col items-center md:items-start gap-4 glass-morphism p-7 rounded-2xl border border-yellow-900/10 shadow-lg bg-card/80">
            <div className="flex items-center gap-4">
              <span>{ACADEMIC.icon}</span>
              <div>
                <div className="text-xl font-bold text-yellow-200">{ACADEMIC.degree}</div>
                <div className="text-md text-muted-foreground">{ACADEMIC.institution}</div>
                <div className="text-sm text-yellow-400 font-semibold">{ACADEMIC.year}</div>
              </div>
            </div>
            <hr className="w-full border-yellow-900/10 my-2" />
            <div className="w-full">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-yellow-400" />
                Pengalaman Internship
              </div>
              <div className="flex flex-col gap-3">
                {INTERNSHIPS.map((intern, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/60 shadow border border-yellow-900/10 hover:scale-105 hover:shadow-lg hover:bg-yellow-900/5 transition-all animate-fade-in"
                    style={{animationDelay: `${idx * 120 + 50}ms`}}
                  >
                    <span>{intern.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-yellow-100">{intern.position}</div>
                      <div className="text-xs text-yellow-400">{intern.year} • {intern.company}</div>
                      <div className="text-sm text-muted-foreground">{intern.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prestasi */}
        <div className="animate-fade-in">
          <div className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <Award className="w-7 h-7 text-yellow-400" /> Prestasi
          </div>
          {/* Timeline Achievements */}
          <ol className="relative border-l-2 border-yellow-700/60 ml-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <li key={idx} className="pl-8 mb-10 last:mb-0 relative animate-fade-in" style={{animationDelay: `${idx * 80 + 80}ms`}}>
                <span className="absolute left-[-20px] top-2 flex items-center justify-center">
                  <div className="rounded-full bg-yellow-400/90 p-2 shadow">{ach.icon}</div>
                </span>
                <span className="text-xs text-yellow-400 font-medium">{ach.year}</span>
                <div className="font-semibold text-lg text-yellow-100">{ach.title}</div>
                <div className="text-muted-foreground text-sm">{ach.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
