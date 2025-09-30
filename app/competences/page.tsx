import { Navigation } from "@/components/navigation"
import { Code2, Database, Layers, Wrench, BarChart3, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Langages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C/C++"],
  },
  {
    title: "Frameworks & Bibliothèques",
    icon: Layers,
    skills: ["Angular", "React", "React Native (Expo)", "Spring Boot", "Django", "Flask"],
  },
  {
    title: "Data & Machine Learning (débutant)",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow (débutant)", "Matplotlib"],
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase","supabase", "SQLite", "Redis", "Stockage Cloud"],
  },
  {
    title: "Outils & DevOps",
    icon: Wrench,
    skills: ["Git", "Docker", "GitLab CI/CD", "Linux"],
  },
  {
    title: "Autres",
    icon: Globe,
    skills: ["API REST", "Chart.js", "Intégration APIs externes"],
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
                    className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                            {category.title}
                          </h2>
                          <div className="w-0 group-hover:w-16 h-0.5 bg-warm-gradient transition-all duration-500 mt-1"></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className="px-3 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-sm rounded-lg font-mono border border-primary/20 hover:border-primary/40 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                            style={{animationDelay: `${skillIndex * 50}ms`}}
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
                Learning et les technologies cloud pour élargir mes compétences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
