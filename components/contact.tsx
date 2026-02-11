"use client"

import { useState, type FormEvent } from "react"
import { Github, Linkedin, MessageCircle, Send, Mail } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-[hsl(220,40%,13%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(199,89%,48%)]">
            Contato
          </p>
          <h2 className="font-heading text-3xl font-bold text-[hsl(0,0%,100%)] sm:text-4xl text-balance">
            Vamos conversar?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[hsl(199,89%,48%)]" />
          <p className="mx-auto mt-6 max-w-lg text-[hsl(214,20%,65%)]">
            Estou disponivel para oportunidades como desenvolvedor junior ou
            estagiario. Entre em contato!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-xl font-semibold text-[hsl(0,0%,100%)]">
              Redes sociais
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5511951173391?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] p-5 transition-all hover:border-[hsl(142,71%,45%)]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(142,71%,45%)]/10">
                  <MessageCircle className="h-6 w-6 text-[hsl(142,71%,45%)]" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(0,0%,100%)]">
                    WhatsApp
                  </p>
                  <p className="text-sm text-[hsl(214,20%,65%)]">
                    Envie uma mensagem direta
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Lucas-SousaS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] p-5 transition-all hover:border-[hsl(0,0%,70%)]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(0,0%,100%)]/10">
                  <Github className="h-6 w-6 text-[hsl(0,0%,90%)]" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(0,0%,100%)]">GitHub</p>
                  <p className="text-sm text-[hsl(214,20%,65%)]">
                    Confira meus repositorios
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-sousa-0796a4308/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] p-5 transition-all hover:border-[hsl(217,89%,48%)]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(217,89%,48%)]/10">
                  <Linkedin className="h-6 w-6 text-[hsl(217,89%,48%)]" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(0,0%,100%)]">
                    LinkedIn
                  </p>
                  <p className="text-sm text-[hsl(214,20%,65%)]">
                    Conecte-se comigo
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold text-[hsl(0,0%,100%)]">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-[hsl(214,20%,80%)]"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] px-4 py-3 text-sm text-[hsl(0,0%,100%)] outline-none transition-colors placeholder:text-[hsl(214,20%,40%)] focus:border-[hsl(199,89%,48%)]"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-[hsl(214,20%,80%)]"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] px-4 py-3 text-sm text-[hsl(0,0%,100%)] outline-none transition-colors placeholder:text-[hsl(214,20%,40%)] focus:border-[hsl(199,89%,48%)]"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[hsl(214,20%,80%)]"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-[hsl(217,71%,25%)]/30 bg-[hsl(220,35%,16%)] px-4 py-3 text-sm text-[hsl(0,0%,100%)] outline-none transition-colors placeholder:text-[hsl(214,20%,40%)] focus:border-[hsl(199,89%,48%)]"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(199,89%,48%)] px-6 py-3 text-sm font-semibold text-[hsl(0,0%,100%)] transition-all hover:bg-[hsl(199,89%,42%)] hover:shadow-lg hover:shadow-[hsl(199,89%,48%)]/25"
              >
                {submitted ? (
                  <>
                    <Mail size={16} />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
