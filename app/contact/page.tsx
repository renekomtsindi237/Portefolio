import { Navigation } from "@/components/navigation"
import { Mail, Linkedin, Github, Gitlab, Send, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CV_PDF_URL } from "@/lib/cv"

const contactMethods = [
  {
    name: "Email",
    value: "renekomtsindi7@gmail.com",
    href: "mailto:renekomtsindi7@gmail.com",
    icon: Mail,
    description: "Candidatures, stages, PFE et collaborations",
  },
  {
    name: "CV (PDF)",
    value: "CV-Rene-Komtsindi.pdf",
    href: CV_PDF_URL,
    icon: FileDown,
    description: "Dossier 1 page : apps, pipelines, IBM et Fabric — des preuves, pas une liste.",
  },
  {
    name: "LinkedIn",
    value: "Réné KOMTSINDI",
    href: "https://www.linkedin.com/in/r%C3%A9n%C3%A9-komtsindi-b4052131b/",
    icon: Linkedin,
    description: "Parcours et échanges professionnels",
  },
  {
    name: "GitHub",
    value: "@renekomtsindi237",
    href: "https://github.com/renekomtsindi237",
    icon: Github,
    description: "Dépôts publics : lakehouse, MicroRecouv, AquaSensus",
  },
  {
    name: "GitLab",
    value: "@renekomtsindi",
    href: "https://gitlab.com/renekomtsindi",
    icon: Gitlab,
    description: "Miroir et projets complémentaires",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Contact</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty body-professional">
                Élève ingénieur en 5e année (2026–2027), je cherche un stage de fin d&apos;études ou une mission junior
                en génie logiciel ou data engineering.
              </p>
            </div>

            <a
              href={CV_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-primary/55 bg-gradient-to-br from-primary/20 via-card to-accent/15 p-6 sm:p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-warm-gradient opacity-[0.08] group-hover:opacity-[0.14] transition-opacity" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="shrink-0 p-4 rounded-2xl bg-warm-gradient text-white shadow-lg">
                  <FileDown className="h-8 w-8" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                    Dossier candidat · 1 page
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground heading-professional">
                    Ce n&apos;est pas un CV d&apos;étudiant parmi d&apos;autres.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    Génie logiciel et data engineering déjà mis en production : MicroRecouv, lakehouse, IBM,
                    Fabric. Une page dense, sans remplissage — pour un recruteur qui veut juger sur pièces.
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-warm-gradient text-white font-semibold shadow-md">
                  Ouvrir le CV
                  <FileDown className="ml-2 h-4 w-4" />
                </span>
              </div>
            </a>

            <div className="grid md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-start gap-4">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                            {method.name}
                          </h2>
                          <div className="w-0 group-hover:w-12 h-0.5 bg-warm-gradient transition-all duration-500 mt-1"></div>
                        </div>
                        <p className="text-muted-foreground font-mono text-sm">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="inline-flex p-3 bg-primary/10 rounded-full">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Ce que je peux apporter</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un profil capable de livrer une application (Spring, Angular, Flutter, React Native) et la chaîne de données
                  qui la rend utile (Airflow, dbt, lakehouse, qualité). Idéal pour une équipe data, un éditeur
                  métier ou une IMF / fintech qui a besoin d&apos;ingénierie de bout en bout.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button size="lg" asChild>
                    <a href="mailto:renekomtsindi7@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Envoyer un email
                    </a>
                  </Button>
                  <Button size="lg" className="bg-warm-gradient text-white border-0" asChild>
                    <a href={CV_PDF_URL} target="_blank" rel="noopener noreferrer">
                      <FileDown className="mr-2 h-4 w-4" />
                      Ouvrir le CV — preuves à l&apos;appui
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Disponible</span> pour un stage de 5e année, un PFE
                  ou une mission junior — Yaoundé et remote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
