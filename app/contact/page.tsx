import { Navigation } from "@/components/navigation"
import { Mail, Linkedin, Github, Gitlab, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    name: "Email",
    value: "renekomtsindi7@gmail.com",
    href: "mailto:renekomtsindi7@gmail.com",
    icon: Mail,
    description: "Pour toute demande professionnelle ou collaboration",
  },
  {
    name: "LinkedIn",
    value: "Rene Komtsindi",
    href: "https://www.linkedin.com/in/rene-komtsindi",
    icon: Linkedin,
    description: "Connectons-nous professionnellement",
  },
  {
    name: "GitLab",
    value: "@renekomtsindi",
    href: "https://gitlab.com/renekomtsindi",
    icon: Gitlab,
    description: "Découvrez mes projets et contributions",
  },
  {
    name: "GitHub",
    value: "@renekomtsindi",
    href: "https://github.com/Airfox24528",
    icon: Github,
    description: "Explorez mon code open source",
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
                N'hésitez pas à me contacter pour discuter de projets, de collaborations ou simplement pour échanger sur
                la technologie.
              </p>
            </div>

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
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-start gap-4">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                            {method.name}
                          </h2>
                          <div className="w-0 group-hover:w-12 h-0.5 bg-warm-gradient transition-all duration-500 mt-1"></div>
                        </div>
                        <p className="text-muted-foreground font-mono text-sm group-hover:text-foreground/80 transition-colors duration-300">
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="inline-flex p-3 bg-primary/10 rounded-full">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Travaillons ensemble</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Je suis actuellement ouvert aux opportunités de stage, de projets freelance et de collaborations. Si
                  vous avez un projet intéressant ou si vous souhaitez simplement discuter, je serais ravi d'échanger
                  avec vous.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:renekomtsindi7@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Envoyer un email
                  </a>
                </Button>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Actuellement disponible</span> pour des opportunités
                  de stage et des projets freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
