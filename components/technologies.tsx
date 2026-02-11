"use client"

const technologies = [
  { name: "React", iconPath: "/icons/react-brands-solid.svg" },
  { name: "JavaScript", iconPath: "/icons/square-js-brands-solid.svg" },
  { name: "HTML", iconPath: "/icons/html5-brands-solid.svg" },
  { name: "CSS", iconPath: "/icons/css3-brands-solid.svg" },
  { name: "Tailwind", iconPath: "/icons/tailwind-css-brands-solid.svg" },
  { name: "Node.js", iconPath: "/icons/node-js-brands-solid.svg" },
  { name: "Database", iconPath: "/icons/database-solid.svg" },
  { name: "Git", iconPath: "/icons/git-alt-brands-solid.svg" },
  { name: "TypeScript", iconPath: "/icons/typescript-brands-solid.svg"},
]


export function Technologies() {
  return (
    <section id="technologies" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Stack
          </p>

          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Tecnologias
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
            >
              {/* Icon */}
              <div className="transition-transform duration-200 group-hover:scale-110">
                <img
                  src={tech.iconPath}
                  alt={tech.name}
                  loading="lazy"
                  className="h-8 w-8 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-card-foreground text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
