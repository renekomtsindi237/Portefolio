import { Navigation } from "@/components/navigation"
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const formations = [
  {
    title: "IBM Data Engineering",
    institution: "Coursera",
    status: "En cours",
    description:
      "Formation professionnelle couvrant les fondamentaux de l'ingénierie des données, ETL, bases de données, et architecture de données.",
    skills: ["ETL", "Data Warehousing", "Apache Spark", "SQL avancé", "Python pour Data"],
    icon: Award,
  },
  {
    title: "Ingénieur en formation",
    institution: "Institut Saint Jean du Cameroun",
    status: "4e année",
    description: "Formation d'ingénieur de conception avec spécialisation en informatique et systèmes d'information.",
    skills: ["Génie logiciel", "Algorithmique", "Bases de données", "Réseaux", "Gestion de projet", "etc"],
    icon: GraduationCap,
  },
  {
    title: "Développement Fullstack",
    institution: "Auto-formation",
    status: "Continu",
    description:
      "Apprentissage autonome des technologies web modernes et des frameworks populaires pour le développement frontend et backend.",
    skills: ["Angular", "React", "Spring Boot", "Django", "React Native", "etc"],
    icon: BookOpen,
  },
  {
    title: "Introduction au Machine Learning",
    institution: "Auto-formation",
    status: "Débutant",
    description: "Exploration des concepts fondamentaux du Machine Learning et de l'intelligence artificielle.",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Visualisation"],
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
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Formation</h1>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty body-professional">
                Mon parcours académique et mes formations continues pour rester à jour avec les dernières technologies.
              </p>
            </div>

            <div className="space-y-8">
              {formations.map((formation, index) => {
                const Icon = formation.icon
                return (
                  <div
                    key={formation.title}
                    className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                              {formation.title}
                            </h2>
                            <span className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                              {formation.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors duration-300">
                            {formation.institution}
                          </p>
                          <div className="w-0 group-hover:w-16 h-0.5 bg-warm-gradient transition-all duration-500 mt-2"></div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 body-professional">
                          {formation.description}
                        </p>

                        <div>
                          <p className="text-sm text-muted-foreground mb-3 font-medium">Compétences acquises :</p>
                          <div className="flex flex-wrap gap-2">
                            {formation.skills.map((skill, skillIndex) => (
                              <span
                                key={skill}
                                className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-lg font-mono border border-primary/20 hover:border-primary/40 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                                style={{ animationDelay: `${skillIndex * 50}ms` }}
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

            {/* Additional Info */}
            <div className="mt-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Philosophie d'apprentissage</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Je crois fermement en l'apprentissage continu et l'adaptation aux nouvelles technologies. Mon approche
                  combine formation académique structurée et auto-formation pratique à travers des projets concrets. Je
                  m'efforce de rester à jour avec les dernières tendances en développement logiciel et en data
                  engineering.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <a
                    href="https://www.coursera.org/professional-certificates/ibm-data-engineer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link"
                  >
                    Voir la formation IBM Data Engineering
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
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
