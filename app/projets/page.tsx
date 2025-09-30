import { Navigation } from "@/components/navigation"
import { ExternalLink, Github, Gitlab } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AgriPrix Cameroun",
    emoji: "🌍",
    description:
      "Application permettant de visualiser les données météorologiques et l'évolution des prix agricoles au Cameroun.",
    stack: ["Python", "Django", "Chart.js"],
    link: "https://github.com/Airfox24528/agriprix_cameroun",
    platform: "gitlab",
  },
  {
    title: "ServantAssist",
    emoji: "⛪",
    description:
      "Application mobile destinée aux servants de messe pour faciliter la gestion des plannings et des activités.",
    stack: ["JavaScript", "React Native", "Expo", "Firebase"],
    link: "https://github.com/Airfox24528/servantassit",
    platform: "github",
  },
  {
    title: "BotCineyang",
    emoji: "🎬",
    description:
      "Chatbot intelligent proposant des recommandations de films et séries basées sur les préférences utilisateur.",
    stack: ["Python", "NLP", "APIs externes"],
    link: "https://github.com/Airfox24528/botcineyang",
    platform: "github",
  },
  {
    title: "SafeSave",
    emoji: "💰",
    description: "Application sécurisée de gestion d'épargne et de petites transactions avec authentification robuste.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL"],
    link: "https://github.com/Airfox24528/safesave",
    platform: "gitlab",
  },
]

export default function ProjetsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Projets</h1>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty body-professional">
                Une sélection de mes projets personnels et académiques, démontrant mes compétences en développement
                fullstack et data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {project.emoji}
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                            {project.title}
                          </h2>
                          <div className="w-0 group-hover:w-12 h-0.5 bg-warm-gradient transition-all duration-500 mt-1"></div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Voir ${project.title} sur ${project.platform}`}
                        >
                          {project.platform === "github" ? (
                            <Github className="h-5 w-5" />
                          ) : (
                            <Gitlab className="h-5 w-5" />
                          )}
                        </a>
                      </Button>
                    </div>

                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 body-professional">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-full font-mono border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 cursor-default"
                          style={{animationDelay: `${techIndex * 50}ms`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="group/link hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link">
                          Voir le projet
                          <ExternalLink className="ml-2 h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Plus de projets à venir</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Je travaille constamment sur de nouveaux projets. Suivez-moi sur GitHub et GitLab pour rester informé de
                mes dernières créations.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="https://github.com/Airfox24528" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://gitlab.com/renekomtsindi" target="_blank" rel="noopener noreferrer">
                    <Gitlab className="mr-2 h-4 w-4" />
                    GitLab
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
