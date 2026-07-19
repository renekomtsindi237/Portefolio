import { Navigation } from "@/components/navigation"
import { ExternalLink, Github, Gitlab, Landmark, Church, Cloud, Wheat, Library, Clapperboard } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "MicroRecouv",
    icon: Landmark,
    description:
      "Système intégré de pipeline de données, API REST et applications multiplateforme pour la gestion et le recouvrement de créances dans les institutions de microfinance au Cameroun. Projet réalisé en stage chez Openxtech.",
    stack: ["Angular", "Flutter", "API REST", "Pipeline de données"],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/Stage" }],
  },
  {
    title: "ServantAssist",
    icon: Church,
    description:
      "Plateforme complète de gestion des servants d'autel (plannings, formations, activités liturgiques) pour la Basilique Marie Reine des Apôtres de Mvolyé : backend Clean Architecture, application web et mobile.",
    stack: ["FastAPI", "Angular", "Flutter", "PostgreSQL", "Redis", "Docker"],
    links: [
      { label: "Backend", url: "https://github.com/renekomtsindi237/servantassist-backend" },
      { label: "Web", url: "https://github.com/renekomtsindi237/servantassist-web" },
      { label: "Mobile", url: "https://github.com/renekomtsindi237/servantasist-mobile" },
      { label: "Infra", url: "https://github.com/renekomtsindi237/servantassist-platform" },
    ],
  },
  {
    title: "TP Cloud — Plateforme Analytics",
    icon: Cloud,
    description:
      "Plateforme analytics conteneurisée avec portail unifié : instances Matomo derrière load balancer, monitoring complet (Prometheus, Grafana, Loki) et sauvegarde automatisée sur S3.",
    stack: ["Docker", "Angular", "FastAPI", "Traefik", "Prometheus", "Grafana"],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/TP_Cloud" }],
  },
  {
    title: "AgriPrix Cameroun",
    icon: Wheat,
    description:
      "Application web permettant de suivre l'évolution des prix des produits agricoles (manioc, maïs, plantains) au Cameroun en fonction des conditions météorologiques.",
    stack: ["Python", "Flask", "Chart.js"],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/agriprix_cameroun" }],
  },
  {
    title: "Bibliothèque Numérique Camerounaise",
    icon: Library,
    description:
      "Plateforme de lecture numérique dédiée à la promotion de la littérature camerounaise et africaine : catalogue, recherche avancée, authentification JWT et stockage des œuvres sur Cloudflare R2.",
    stack: ["Node.js", "Express", "PostgreSQL", "Cloudflare R2", "JWT"],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/Backend_biblio" }],
  },
  {
    title: "Cineyang",
    icon: Clapperboard,
    description:
      "Écosystème autour d'une plateforme de films et séries : bot Telegram annonçant automatiquement les nouveautés et site de téléchargement sécurisé.",
    stack: ["Node.js", "Next.js", "Telegram API", "Supabase", "AWS S3"],
    links: [
      { label: "Bot Telegram", url: "https://github.com/renekomtsindi237/CineyangBot" },
      { label: "Site de téléchargement", url: "https://github.com/renekomtsindi237/cine-eyang-download-main" },
    ],
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
              {projects.map((project, index) => {
                const Icon = project.icon
                return (
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
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30">
                          <Icon className="h-7 w-7 text-warm-gradient drop-shadow-lg" />
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
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Voir ${project.title} sur GitHub`}
                        >
                          <Github className="h-5 w-5" />
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
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      {project.links.map((linkItem) => (
                        <Button
                          key={linkItem.url}
                          variant="outline"
                          size="sm"
                          asChild
                          className="group/link hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                        >
                          <a href={linkItem.url} target="_blank" rel="noopener noreferrer" className="group/link">
                            {project.links.length > 1 ? linkItem.label : "Voir le projet"}
                            <ExternalLink className="ml-2 h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                )
              })}
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
                  <a href="https://github.com/renekomtsindi237" target="_blank" rel="noopener noreferrer">
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
