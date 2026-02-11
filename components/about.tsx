import { Code2, GraduationCap, Rocket } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Sobre mim
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Quem sou eu
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sou um desenvolvedor web com formação em{" "}
              <span className="font-semibold text-foreground">
                Análise e Desenvolvimento de Sistemas
              </span>
              , com foco principal em{" "}
              <span className="font-semibold text-foreground">
                desenvolvimento Front-end
              </span>
              . Trabalho na criação de interfaces modernas, responsivas e bem
              estruturadas utilizando{" "}
              <span className="font-semibold text-foreground">
                React, JavaScript, HTML, CSS e Tailwind CSS
              </span>
              .
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tenho experiência prática no desenvolvimento de sites, landing
              pages e sistemas web, priorizando performance, usabilidade e boa
              experiência do usuário. Busco oportunidades como desenvolvedor
              Front-end júnior ou estagiário para aplicar minhas habilidades e
              evoluir continuamente na área.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(217,71%,25%)]/10">
                <Code2 className="h-5 w-5 text-[hsl(217,71%,25%)]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                Front-end
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Interfaces modernas, responsivas e focadas em UX com React e Tailwind
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(199,89%,48%)]/10">
                <Rocket className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                Noções de Back-end
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Integrações e APIs com Node.js, NestJS e PHP
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(217,71%,25%)]/10">
                <GraduationCap className="h-5 w-5 text-[hsl(217,71%,25%)]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                Formação
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Análise e Desenvolvimento de Sistemas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
