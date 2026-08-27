import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { GraduationCap, Award, Briefcase, ScrollText, Landmark, Warehouse, Droplets, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const formations = [
  {
    title: "Cycle d'ingénieur — option génie logiciel",
    institution: "Institut universitaire Saint Jean du Cameroun (IUSJC)",
    status: "Depuis 2022 · 5e année (2026–2027)",
    description:
      "Entrée en 2022 dans le cycle d'ingénieur de conception, filière informatique / systèmes d'information, option génie logiciel. Cinquième année en cours, avec un recentrage volontaire sur l'ingénierie des données en plus du développement d'applications.",
    skills: ["Génie logiciel", "Bases de données", "Algorithmique", "Architecture logicielle", "Gestion de projet"],
    icon: GraduationCap,
  },
  {
    title: "Baccalauréat série D",
    institution: "Diplôme secondaire",
    status: "2021",
    description:
      "Série D, obtenu en 2021. Entrée au cycle d'ingénieur de l'IUSJC l'année suivante (2022).",
    skills: ["Série D", "Cycle secondaire"],
    icon: ScrollText,
  },
  {
    title: "Stage 4e année — génie logiciel et data engineering",
    institution: "Openxtech",
    status: "Mai 2026 – Septembre 2026",
    description:
      "Conception et mise en œuvre de MicroRecouv : applications (saisie hors ligne, API, interfaces) et chaîne data engineering (pipeline analytique PAR / COBAC, scoring de recouvrement). Projet de fin d'études, version V0 livrée.",
    skills: ["Spring Boot", "Flutter", "Angular", "Airflow", "dbt", "PostgreSQL", "Scoring de risque"],
    icon: Briefcase,
  },
  {
    title: "Stage 3e année — TrustFolio",
    institution: "Trust SARL",
    status: "Juin 2025 – Août 2025",
    description:
      "Stage de développement logiciel (2 mois) sur le projet TrustFolio : backend, frontend et analyse de données, en conditions d'entreprise.",
    skills: ["Développement logiciel", "Backend", "Frontend", "Analyse de données"],
    icon: Briefcase,
  },
  {
    title: "Stage 1re année",
    institution: "Flore Services",
    status: "Juin 2023 – Juillet 2023",
    description:
      "Première immersion professionnelle en entreprise (2 mois), en 1re année du cycle d'ingénieur.",
    skills: ["Immersion professionnelle", "Entreprise"],
    icon: Briefcase,
  },
  {
    title: "IBM Data Engineering Professional Certificate",
    institution: "IBM",
    status: "Obtenu",
    description:
      "Parcours professionnel complet : Python, SQL, ETL, entrepôts, NoSQL, Spark, Airflow / Kafka, capstone et préparation aux entretiens. Mis en pratique sur le lakehouse événementiel et le pipeline MicroRecouv.",
    skills: ["ETL", "Data warehousing", "Apache Spark", "SQL", "Airflow", "Kafka"],
    icon: Award,
  },
  {
    title: "Microsoft Fabric Data Engineer",
    institution: "Microsoft",
    status: "Obtenu",
    description:
      "Certification Microsoft Fabric Data Engineer : fondations et environnement, préparation des données pour l'analytique, orchestration de pipelines. Complète le socle IBM vers une plateforme data cloud Microsoft.",
    skills: ["Microsoft Fabric", "Pipelines", "Préparation de données", "Analytics"],
    icon: Award,
  },
]

const featuredProjects = [
  {
    title: "MicroRecouv",
    role: "Projet de stage · Openxtech",
    icon: Landmark,
    summary:
      "Plateforme de collecte, d'analyse et d'aide au recouvrement pour les institutions de microfinance au Cameroun. Les agents saisissent hors ligne, l'API déduplique les dossiers, le pipeline calcule PAR / COBAC et un score de risque explicable priorise les créances à traiter.",
    skills: ["Spring Boot", "Flutter offline", "Angular", "Airflow", "dbt", "PostgreSQL", "XGBoost / SHAP"],
    href: "https://github.com/renekomtsindi237/Stage",
  },
  {
    title: "Lakehouse événementiel",
    role: "Spécialisation data engineering",
    icon: Warehouse,
    summary:
      "Prototype de plateforme data pour le suivi des créances : capture CDC depuis PostgreSQL, couches Bronze / Silver / Gold (Delta Lake), contrôles de qualité avant promotion, puis API FastAPI pour les alertes, la lignée et l'audit. Montre le chemin complet d'une donnée métier jusqu'à une décision exploitable.",
    skills: ["CDC", "Redpanda", "Delta Lake", "dbt", "DuckDB", "Airflow", "FastAPI"],
    href: "https://github.com/renekomtsindi237/Lakehouse",
  },
  {
    title: "AquaSensus",
    role: "Projet personnel",
    icon: Droplets,
    summary:
      "Suivi et maintenance prédictive des forages communautaires, sans capteurs IoT. Les habitants signalent, le comité priorise, un moteur explicable alerte avant la panne. Backend Java 21 / Spring, PWA Angular, application Flutter et pipeline Python, déployés en Docker.",
    skills: ["Java 21", "Spring Boot", "Angular PWA", "Flutter", "Python", "Docker"],
    href: "https://github.com/renekomtsindi237/Aquasensus",
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
                Formation académique depuis le baccalauréat série D (2021), cycle d&apos;ingénieur à Saint Jean, stages en
                entreprise et certifications — le tout aligné sur un profil d&apos;élève ingénieur logiciel qui se
                spécialise en data engineering.
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

            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-foreground heading-professional">Trois projets principaux</h2>
                <p className="text-muted-foreground max-w-3xl leading-relaxed body-professional">
                  Un même fil : livrer un produit utile, puis rendre les données exploitables.{" "}
                  <span className="text-foreground font-medium">MicroRecouv</span> est la plateforme métier (saisie,
                  API, scoring de recouvrement). Le{" "}
                  <span className="text-foreground font-medium">lakehouse événementiel</span> est l&apos;architecture
                  data (CDC, couches médallion, qualité, lignée).{" "}
                  <span className="text-foreground font-medium">AquaSensus</span> est le produit d&apos;ingénierie
                  terrain (forages, alerte avant panne, sans IoT). Ensemble, ils montrent génie logiciel et data
                  engineering sur des cas réels.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {featuredProjects.map((project) => {
                  const Icon = project.icon
                  return (
                    <article
                      key={project.title}
                      className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional flex flex-col"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex flex-col flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors subheading-professional">
                              {project.title}
                            </h3>
                            <p className="text-xs text-primary font-medium mt-1">{project.role}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed body-professional flex-1">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-lg font-mono border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <Button asChild variant="outline" size="sm" className="w-fit">
                          <a href={project.href} target="_blank" rel="noopener noreferrer">
                            Voir le dépôt
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </article>
                  )
                })}
              </div>

              <p className="text-sm text-muted-foreground">
                Les autres réalisations (cloud, ServantAssist, etc.) sont sur la page{" "}
                <Link href="/projets" className="text-primary underline-offset-2 hover:underline">
                  Projets
                </Link>
                .
              </p>
            </div>

            <div className="mt-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Certificats & certifications</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Les attestations IBM, badges et certificats Microsoft Fabric sont hébergées sur Cloudflare R2 et
                  prévisualisées dans une galerie dédiée.
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
