import { Navigation } from "@/components/navigation"
import { Code2, Database, Layers, Wrench, BarChart3, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Langages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Dart", "SQL", "C/C++"],
  },
  {
    title: "Frameworks & Bibliothèques",
    icon: Layers,
    skills: ["Angular", "Next.js", "React", "Flutter", "React Native (Expo)", "FastAPI", "Spring Boot", "Node.js / Express", "Django", "Flask"],
  },
  {
    title: "Data & Machine Learning (débutant)",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow (débutant)", "Matplotlib"],
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "SQLite", "Redis", "Cloudflare R2 / AWS S3"],
  },
  {
    title: "Outils & DevOps",
    icon: Wrench,
    skills: ["Git", "Docker", "Traefik", "Prometheus / Grafana", "GitLab CI/CD", "Linux"],
  },
  {
    title: "Autres",
    icon: Globe,
    skills: ["API REST", "JWT", "Telegram Bot API", "Chart.js", "Intégration APIs externes"],
  },
]

export default function CompetencesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Compétences</h1>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty body-professional">
                Un aperçu des technologies et outils que j'utilise pour créer des solutions numériques innovantes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.title}
                    className="magic-bento-card magic-bento-card--border-glow group relative overflow-hidden bg-card/95 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      border: '3px solid transparent',
                      backgroundImage: 'linear-gradient(oklch(0.08 0.01 0), oklch(0.08 0.01 0)), linear-gradient(135deg, oklch(0.5 0.18 15), oklch(0.6 0.15 45), oklch(0.7 0.12 60))',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    {/* Enhanced background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15 opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* Warm glow effect */}
                    <div className="absolute inset-0 bg-warm-gradient opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>

                    <div className="relative z-10 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30">
                          <Icon className="h-5 w-5 text-warm-gradient drop-shadow-lg" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-bold text-foreground group-hover:text-warm-gradient transition-all duration-300 subheading-professional">
                            {category.title}
                          </h2>
                          <div className="w-0 group-hover:w-20 h-1 bg-warm-gradient transition-all duration-500 mt-0.5 rounded-full shadow-sm"></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1.5 bg-gradient-to-r from-primary/15 to-accent/15 text-muted-foreground text-xs rounded-lg font-mono border border-primary/30 hover:border-primary/60 hover:bg-primary/25 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${skillIndex * 50}ms` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">En apprentissage continu</h2>
              <p className="text-muted-foreground leading-relaxed">
                Je suis actuellement en formation IBM Data Engineering sur Coursera, où j'approfondis mes connaissances
                en ingénierie des données, ETL, et architecture de données. Je continue également à explorer le Machine
                Learning et les technologies cloud pour élargir mes compétences. Je suis actuellement en 4e année dans mon cycle de formation en filière ingénierie des systèmes d'information.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
