import { Navigation } from "@/components/navigation"
import { GraduationCap, Award, BookOpen, Briefcase, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const formations = [
  {
    title: "Cycle d'ingénieur — option génie logiciel",
    institution: "Institut universitaire Saint Jean du Cameroun (IUSJC)",
    status: "5e année · 2026–2027",
    description:
      "Formation d'ingénieur de conception, filière informatique / systèmes d'information, option génie logiciel. Cinquième année du cycle, avec un recentrage volontaire sur l'ingénierie des données en plus du développement d'applications.",
    skills: ["Génie logiciel", "Bases de données", "Algorithmique", "Architecture logicielle", "Gestion de projet"],
    icon: GraduationCap,
  },
  {
    title: "Stage 4e année ingénieur — MicroRecouv",
    institution: "Openxtech",
    status: "2025–2026",
    description:
      "Conception et mise en œuvre d'une solution de recouvrement pour institutions de microfinance : saisie terrain hors ligne, API métier, pipeline analytique (PAR, COBAC, scoring) et interfaces web / mobile. Projet de fin d'études, version V0 livrée dans le dépôt Stage.",
    skills: ["Spring Boot", "Flutter", "Angular", "Airflow", "dbt", "PostgreSQL", "Scoring de risque"],
    icon: Briefcase,
  },
  {
    title: "IBM Data Engineering Professional Certificate",
    institution: "Coursera · IBM",
    status: "Obtenu",
    description:
      "Parcours professionnel complet : Python, SQL, ETL, entrepôts, NoSQL, Spark, Airflow / Kafka, capstone et préparation aux entretiens. Mis en pratique sur le lakehouse événementiel et le pipeline MicroRecouv.",
    skills: ["ETL", "Data warehousing", "Apache Spark", "SQL", "Airflow", "Kafka"],
    icon: Award,
  },
  {
    title: "Microsoft Fabric — fondations, préparation et orchestration",
    institution: "Microsoft",
    status: "Obtenu",
    description:
      "Trois attestations : fondations et gestion d'environnement Fabric, préparation des données pour l'analytique, orchestration de pipelines. Complète le socle IBM vers une plateforme data cloud Microsoft.",
    skills: ["Microsoft Fabric", "Pipelines", "Préparation de données", "Analytics"],
    icon: Award,
  },
  {
    title: "Projets d'approfondissement",
    institution: "Auto-formation guidée par les dépôts",
    status: "Continu",
    description:
      "Apprentissage par la construction : lakehouse médallion, observabilité cloud, Clean Architecture, PWA et maintenance prédictive. Chaque brique est rattachée à un dépôt public, pas à une simple liste de tutoriels.",
    skills: ["Delta Lake", "Docker", "Prometheus / Grafana", "FastAPI", "Tests"],
    icon: BookOpen,
  },
]

export default function FormationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Parcours</h1>
              <p className="text-lg text-muted-foreground max-w-3xl text-pretty body-professional">
                Formation académique, stage en entreprise et certifications obtenues — le tout aligné sur un profil
                d&apos;élève ingénieur logiciel qui se spécialise en data engineering.
              </p>
            </div>

            <div className="space-y-8">
              {formations.map((formation, index) => {
                const Icon = formation.icon
                return (
                  <div
                    key={formation.title}
                    className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                              {formation.title}
                            </h2>
                            <span className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/20">
                              {formation.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground font-medium">{formation.institution}</p>
                          <div className="w-0 group-hover:w-16 h-0.5 bg-warm-gradient transition-all duration-500 mt-2"></div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed body-professional">{formation.description}</p>

                        <div>
                          <p className="text-sm text-muted-foreground mb-3 font-medium">Compétences mobilisées :</p>
                          <div className="flex flex-wrap gap-2">
                            {formation.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-lg font-mono border border-primary/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Certificats & certifications</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Les attestations (modules Coursera, badges IBM, autres certificats) sont hébergées sur Cloudflare
                  R2 et prévisualisées dans une galerie dédiée.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-warm-gradient text-white border-0">
                    <a href="/certifications">Voir la galerie</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
