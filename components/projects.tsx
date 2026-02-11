import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "LineBrindes E-commerce",
    type: "E-commerce",
    description:
      "Plataforma de e-commerce para venda de brindes personalizados, com catálogo de produtos, navegação por categorias e layout focado em conversão.",
    technologies: ["React", "Tailwind", "Vite"],
    highlight: "Interface moderna com foco em UX e vitrine de produtos.",
    image: "/images/project-linebrindes.png",
    github: "https://github.com/Lucas-SousaS/linebrindes-ecommerce",

  },
  {
    title: "Landing Page Dra. Aline",
    type: "Landing Page Profissional",
    description:
      "Landing page para clínica de estética com apresentação de serviços, perfil profissional, seção de procedimentos e agendamento via WhatsApp.",
    technologies: ["React", "Tailwind"],
    highlight:
      "Página de alta conversão com design elegante e foco em captação de clientes.",
    image: "/images/project-dra-aline.png",
    github: "https://github.com/Lucas-SousaS/dra.alinecristina",
    link: "https://dra-alinecristina.vercel.app/"
  },
  {
    title: "Senior Care (TCC)",
    type: "Aplicativo Mobile (TCC)",
    description:
      "Sistema de gestão para cuidados de idosos, com cadastro e organização de informações de pacientes e cuidadores.",
    technologies: ["React Native", "Express", "MySql"],
    highlight: "Projeto acadêmico com interface mobile completa.",
    image: "/images/project-senior-care.png",
    github: "https://github.com/Lucas-SousaS/SeniorCare",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-[hsl(220,40%,13%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(199,89%,48%)]">
            Portfólio
          </p>
          <h2 className="font-heading text-3xl font-bold text-[hsl(0,0%,100%)] sm:text-4xl text-balance">
            Projetos em Destaque
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[hsl(199,89%,48%)]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] transition-all hover:border-[hsl(199,89%,48%)]/40 hover:shadow-xl hover:shadow-[hsl(199,89%,48%)]/5"
            >
              <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="relative aspect-video overflow-hidden md:aspect-auto md:min-h-[320px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Mockup do projeto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,35%,16%)] via-transparent to-transparent md:bg-gradient-to-r" />
                  <span className="absolute top-4 left-4 rounded-full bg-[hsl(199,89%,48%)]/90 px-3 py-1 text-xs font-semibold text-white">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[hsl(214,20%,65%)]">
                    {project.description}
                  </p>

                  <p className="mt-2 text-sm font-medium text-[hsl(199,89%,48%)]/80">
                    {project.highlight}
                  </p>

                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[hsl(217,71%,25%)]/30 px-3 py-1 text-xs font-medium text-[hsl(214,20%,80%)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-lg bg-[hsl(199,89%,48%)] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                      >
                        <ExternalLink size={14} />
                        Ver projeto
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-lg border border-[hsl(214,20%,30%)] px-4 py-2.5 text-sm font-semibold text-[hsl(214,20%,80%)] transition-all hover:border-[hsl(199,89%,48%)]/50 hover:text-white"
                      >
                        <Github size={14} />
                        Ver código
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
