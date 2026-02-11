import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[hsl(220,40%,13%)]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(199,89%,48%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[hsl(199,89%,48%)]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-[hsl(199,89%,48%)]/30 bg-[hsl(199,89%,48%)]/10 px-4 py-1.5">
          <span className="text-sm font-medium text-[hsl(199,89%,48%)]">
            Disponivel para novas oportunidades
          </span>
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-[hsl(0,0%,100%)] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Lucas Sousa Silva
        </h1>

        <p className="mt-4 font-heading text-lg font-medium text-[hsl(199,89%,48%)] sm:text-xl md:text-2xl">
          Desenvolvedor Front-end & Full Stack
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[hsl(214,20%,70%)] sm:text-lg">
          Criando interfaces modernas e sistemas web completos com React,
          JavaScript, Node.js e Tailwind CSS. Transformando ideias em
          experiencias digitais.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[hsl(199,89%,48%)] px-6 py-3 text-sm font-semibold text-[hsl(0,0%,100%)] transition-all hover:bg-[hsl(199,89%,42%)] hover:shadow-lg hover:shadow-[hsl(199,89%,48%)]/25"
          >
            Ver Projetos
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[hsl(214,20%,30%)] bg-transparent px-6 py-3 text-sm font-semibold text-[hsl(214,20%,80%)] transition-all hover:border-[hsl(199,89%,48%)]/50 hover:text-[hsl(0,0%,100%)]"
          >
            Entrar em contato
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/Lucas-SousaS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(214,20%,50%)] transition-colors hover:text-[hsl(199,89%,48%)]"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-sousa-0796a4308/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(214,20%,50%)] transition-colors hover:text-[hsl(199,89%,48%)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://wa.me/5511951173391?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(214,20%,50%)] transition-colors hover:text-[hsl(199,89%,48%)]"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
