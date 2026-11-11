import Image from "next/image";
import {
  ArrowDown,
  Bike,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.2 0h3.6V11h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.7v5.9h-3.8v-5.2c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.3H9.5V9.4Z" />
    </svg>
  );
}

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

const skillGroups = [
  {
    title: "Frontend & web",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend & mobile",
    icon: Terminal,
    skills: ["C#", ".NET MAUI", "XAML", "Java", "Spring Boot", "Python", "C++"],
  },
  {
    title: "Datos & herramientas",
    icon: Database,
    skills: ["PostgreSQL", "SQL", "Git", "GitHub", "GitKraken", "Jira", "Confluence"],
  },
];

const CONTACT_EMAIL = "enriquegarciasorribes@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/enrique-garc%C3%ADa-sorribes-190242378";
const GITHUB_URL = "https://github.com/Enriquegs187";

const proficiency = [
  { name: "C# / .NET MAUI", level: 70, note: "Práctica en Torrecid y proyectos", color: "#5eead4" },
  { name: "React / Next.js", level: 65, note: "Proyectos académicos y personales", color: "#67e8f9" },
  { name: "Tailwind / CSS", level: 65, note: "Maquetación de interfaces", color: "#a5b4fc" },
  { name: "Java / Spring", level: 55, note: "Base académica y práctica", color: "#c4b5fd" },
  { name: "Python", level: 60, note: "Fundamentos y práctica académica", color: "#f0abfc" },
  { name: "PostgreSQL / SQL", level: 60, note: "Consultas y modelado relacional", color: "#7dd3fc" },
  { name: "C++", level: 55, note: "Fundamentos de programación", color: "#fdba74" },
  { name: "Git & colaboración", level: 65, note: "Flujos básicos de colaboración", color: "#86efac" },
];

const projects = [
  {
    number: "01",
    type: "Experiencia · Torrecid",
    title: "Gestión de paletización industrial",
    description:
      "MIgración de aplicación para gestionar la paletización en un entorno industrial",
    stack: [".NET MAUI", "C#", "XAML"],
    icon: Layers3,
    accent: "teal",
  },
  {
    number: "02",
    type: "Experiencia · Torrecid",
    title: "Escáner QR e integración con Octoplant",
    description:
      "Aplicación móvil para escanear códigos QR de maquinaria y conectar la inspección de equipos con la plataforma industrial Octoplant.",
    stack: [".NET MAUI", "C#", "Octoplant"],
    icon: Code2,
    accent: "blue",
  },
  {
    number: "03",
    type: "PROYECTO ACADÉMICO · UJI",
    title: "Club Esportiu",
    description: "Aplicación web que simula un sistema de gestión de carreras y clubes deportivos.",
    stack: ["Java", "Spring Boot", "HTML5", "CSS3", "Maven"],
    icon: GraduationCap,
    accent: "teal",
  },
  {
    number: "04",
    type: "PROYECTO ACADÉMICO · UJI",
    title: "GlovoRunBike",
    description:
      "Videojuego desarrollado en Unity para la asignatura de Gráficos y Multimedia que simula la dinámica y gestión de repartos de entregas.",
    stack: ["Unity", "C#", "GameDev"],
    icon: Database,
    accent: "blue",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}

function ProficiencyRing({
  name,
  level,
  note,
  color,
  index,
}: {
  name: string;
  level: number;
  note: string;
  color: string;
  index: number;
}) {
  const circumference = 2 * Math.PI * 42;
  const progress = (level / 100) * circumference;

  return (
    <article
      className="skill-ring-card group"
      style={{ animationDelay: `${index * 75}ms` }}
      aria-label={`${name}: ${level} por ciento`}
    >
      <div className="relative mb-5 flex items-center justify-center">
        <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="5"
          />
          <circle
            className="skill-ring-progress"
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            style={{ filter: `drop-shadow(0 0 7px ${color}55)` }}
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-2xl font-semibold tracking-tight text-zinc-100">{level}</span>
          <span className="text-sm text-zinc-500">%</span>
        </div>
      </div>
      <h3 className="text-sm font-medium text-zinc-100">{name}</h3>
      <p className="mt-1.5 text-xs leading-5 text-zinc-500">{note}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0c] text-zinc-100">
      <div className="page-glow pointer-events-none fixed inset-0 -z-0" aria-hidden="true" />
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Enrique García Sorribes, inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-wide text-teal-200">
              EG
            </span>
            <span className="hidden text-sm font-medium text-zinc-300 sm:inline">
              Enrique García Sorribes
            </span>
          </a>
          <nav aria-label="Navegación principal" className="flex items-center gap-5 text-xs text-zinc-400 sm:gap-7 sm:text-sm">
            <a className="nav-link" href="#sobre-mi">Sobre mí</a>
            <a className="nav-link" href="#experiencia">Experiencia</a>
            <a
              className="hidden rounded-full border border-white/10 px-4 py-2 text-zinc-200 transition hover:border-teal-300/30 hover:bg-teal-300/5 hover:text-teal-100 sm:inline-flex"
              href="#contacto"
            >
              Contactar
            </a>
          </nav>
        </header>

        <section id="inicio" className="mx-auto grid w-full max-w-6xl scroll-mt-12 items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-10 lg:pb-32">
          <div className="order-2 animate-rise-in lg:order-1">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/15 bg-teal-300/[0.06] px-3 py-1.5 text-xs font-medium text-teal-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
              </span>
              Disponible para prácticas de fin de grado
            </div>
            <p className="mb-4 text-sm font-medium tracking-wide text-zinc-400">
              Estudiante en 4º de Ingeniería Informática
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-white sm:text-6xl lg:text-[4.5rem]">
              Enrique García Sorribes
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
              <span className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1">Software Developer</span>
              <span className="text-zinc-700">/</span>
              <span className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1">.NET · Web</span>
            </div>
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Me interesa el desarrollo de software y la resolución de problemas reales. Busco prácticas para aplicar mi formación, aprender de un equipo y seguir ganando experiencia.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-200 px-5 text-sm font-semibold text-zinc-950 transition duration-200 hover:scale-[1.02] hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
              >
                <Download className="h-4 w-4" /> Descargar CV
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <LinkedinMark />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <GithubMark />
              </a>
            </div>
            <a href="#sobre-mi" className="mt-12 inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-300">
              Conoce mi perfil <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="profile-frame animate-float relative">
              <div className="absolute -inset-8 rounded-full bg-teal-400/[0.06] blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.015] p-3 shadow-2xl shadow-black/50">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src="/fotoOrla.JPG"
                    width={380}
                    height={460}
                    priority
                    alt="Enrique García Sorribes"
                    className="h-[300px] w-[250px] object-cover object-center transition duration-500 hover:scale-[1.04] sm:h-[360px] sm:w-[300px]"
                  />
                </div>
                <div className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111316]/95 px-4 py-3 shadow-xl backdrop-blur">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-300/10 text-teal-200">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium text-zinc-100">Experiencia real</span>
                    <span className="mt-0.5 block text-[11px] text-zinc-500">Desarrollo en entorno industrial</span>
                  </span>
                </div>
                <div className="absolute -right-5 top-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111316]/90 text-teal-200 shadow-xl backdrop-blur">
                  <Code2 className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.07] px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
            {[
              ["4", "curso de Ingeniería Informática"],
              ["2", "proyectos en entorno industrial"],
              ["8", "tecnologías con práctica"],
              ["∞", "ganas de seguir aprendiendo"],
            ].map(([value, label]) => (
              <div key={label} className="px-4 py-5 first:pl-0 sm:px-7 sm:py-6 lg:first:pl-0">
                <p className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">{value}</p>
                <p className="mt-1 text-[10px] leading-4 text-zinc-500 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Sobre mí" title="Tecnología, equipo y constancia." />
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin className="h-4 w-4 text-teal-200/80" /> Benicasim, España
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                <iframe
                  title="Mapa de Benicàssim, España"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.02%2C40.02%2C0.14%2C40.10&layer=mapnik&marker=40.05%2C0.06"
                  className="h-52 w-full"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pt-1">
              <p className="text-lg leading-8 text-zinc-300">
                Soy estudiante de último curso de Ingeniería Informática, a punto de graduarme, con una buena base académica y experiencia práctica en Torrecid. Allí he podido aplicar lo aprendido en proyectos de software para un entorno industrial. Me gusta entender los problemas y seguir aprendiendo mientras construyo soluciones útiles.
              </p>
              <p className="mt-5 leading-7 text-zinc-400">
                Soy extrovertido y disfruto trabajando en equipo, comunicándome con claridad y aprendiendo de quienes me rodean. Fuera del código, el gimnasio y el enduro/descenso en BTT me enseñan disciplina, foco y a superarme con cabeza ante cada reto.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <Sparkles className="mb-3 h-4 w-4 text-teal-200" />
                  <p className="text-sm font-medium text-zinc-200">Comunicación y equipo</p>
                  <p className="mt-1.5 text-xs leading-5 text-zinc-500">Colaboración cercana, actitud abierta y objetivos compartidos.</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <Bike className="mb-3 h-4 w-4 text-teal-200" />
                  <p className="text-sm font-medium text-zinc-200">Disciplina y resiliencia</p>
                  <p className="mt-1.5 text-xs leading-5 text-zinc-500">Constancia para afrontar retos y mejorar un poco cada día.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
            <SectionHeading
              eyebrow="Habilidades"
              title="Herramientas para construir."
              description="Conocimientos desarrollados durante la carrera y en proyectos prácticos. Sigo reforzando esta base y aprendiendo con cada reto."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="skill-group-card">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200/10 bg-teal-200/[0.06] text-teal-100">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-sm font-medium text-zinc-100">{group.title}</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="tech-chip">{skill}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="dominio" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Nivel de experiencia"
              title="Una base en constante crecimiento."
              description="Porcentajes orientativos de mi autoevaluación, basados en la formación académica y la práctica en proyectos, incluida mi experiencia en Torrecid. No representan un dominio avanzado y seguirán evolucionando con el aprendizaje."
            />
            <div className="mb-10 hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-teal-200 shadow-[0_0_12px_rgba(94,234,212,0.7)]" />
              Pasa el cursor para explorar
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {proficiency.map((skill, index) => (
              <ProficiencyRing key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </section>

        <section id="experiencia" className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
            <SectionHeading
              eyebrow="Proyectos"
              title="Software conectado con el mundo real."
              description="Proyectos académicos y experiencia en Torrecid, aplicando desarrollo de software en contextos diversos."
            />
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article key={project.number} className={`project-card accent-${project.accent}`}>
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-teal-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-zinc-600">{project.number}</span>
                    </div>
                    <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">{project.type}</p>
                    <h3 className="mt-3 text-xl font-medium leading-7 tracking-tight text-zinc-100">{project.title}</h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-6 text-zinc-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="tech-chip">{item}</span>
                      ))}
                    </div>
                    <div className="mt-7 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-xs text-zinc-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-200" /> Desarrollo aplicado
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="formacion" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow="Formación" title="Una base para seguir creciendo." />
            <div className="relative border-l border-white/10 pl-7">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-teal-200 ring-4 ring-[#090a0c]" />
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2 text-teal-100">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-[0.12em]">Grado universitario</span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium text-zinc-100">Grado en Ingeniería Informática</h3>
                  <p className="mt-2 text-sm text-zinc-400">Universidad · 2022 — Presente</p>
                </div>
                <span className="w-fit rounded-full border border-teal-200/15 bg-teal-200/[0.06] px-3 py-1.5 text-xs text-teal-100">
                  4º curso · fase final
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl scroll-mt-16 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(94,234,212,0.11),transparent_55%)]" />
            <div className="relative mx-auto max-w-2xl">
              <p className="section-eyebrow">Contacto</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                ¿Buscáis a alguien con ganas de aportar?
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
                Estoy buscando una empresa donde completar mis prácticas de fin de grado, afrontar retos reales y crecer junto a un buen equipo.
              </p>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-teal-200 px-5 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-teal-100"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-zinc-600 sm:flex-row sm:px-8 lg:px-10">
            <p>© 2026 Enrique García Sorribes</p>
            
          </div>
        </footer>
      </div>
    </main>
  );
}
