import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Mail, Linkedin, Github, Gitlab } from "lucide-react"

const contacts = [
  {
    name: "Email",
    value: "renekomtsindi7@gmail.com",
    href: "mailto:renekomtsindi7@gmail.com",
    icon: Mail,
    description: "Candidatures, stages, PFE et collaborations",
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
    description: "Dépôts : MicroRecouv, lakehouse, AquaSensus",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Contact</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty body-professional">
                Trois canaux : email, LinkedIn, GitHub. Le CV se consulte sur sa propre page.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((method) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-professional"
                  >
                    <div className="p-3 w-fit bg-primary/10 rounded-xl mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.name}
                    </h2>
                    <p className="text-muted-foreground font-mono text-sm mt-2 break-all">{method.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{method.description}</p>
                  </a>
                )
              })}
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Miroir GitLab :{" "}
              <a
                href="https://gitlab.com/renekomtsindi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline inline-flex items-center gap-1"
              >
                <Gitlab className="h-3.5 w-3.5" />
                @renekomtsindi
              </a>
              {" · "}
              <Link href="/cv" className="text-primary underline-offset-2 hover:underline">
                Consulter le CV
              </Link>
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Disponible</span> pour un stage de 5e année, un PFE
                ou une mission junior — Yaoundé et remote.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
