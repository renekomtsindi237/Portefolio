"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import {
  ExternalLink,
  Github,
  Gitlab,
  Landmark,
  Church,
  Cloud,
  Wheat,
  Library,
  Clapperboard,
  Droplets,
  Warehouse,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type Category = "Tous" | "Data Engineering" | "Génie logiciel" | "Cloud"

const filters: Category[] = ["Tous", "Data Engineering", "Génie logiciel", "Cloud"]

const projects = [
  {
    title: "MicroRecouv",
    icon: Landmark,
    categories: ["Data Engineering", "Génie logiciel"] as Category[],
    role: "Stage · Openxtech · 2025–2026",
    featured: true,
    description:
      "Plateforme de centralisation, d'analyse et d'aide au recouvrement pour les institutions de microfinance au Cameroun. Les agents saisissent hors ligne, l'API déduplique, le pipeline calcule PAR / COBAC et un score de risque explicable priorise les dossiers.",
    highlights: [
      "Application Flutter offline avec synchronisation idempotente",
      "API Spring Boot, PostgreSQL, isolation multi-IMF",
      "Ingestion Airflow / dbt, Kafka, Spark et scoring XGBoost + SHAP",
    ],
    hardSkills: ["Spring Boot", "Flutter offline", "Angular", "Airflow", "dbt", "PostgreSQL", "Kafka", "Spark", "XGBoost", "SHAP"],
    softSkills: [
      "Analyse de besoin IMF",
      "Ownership bout-en-bout",
      "Priorisation opérationnelle",
      "Explicabilité (SHAP / COBAC)",
      "Livraison incrémentale V0",
    ],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/Stage" }],
  },
  {
    title: "Lakehouse événementiel",
    icon: Warehouse,
    categories: ["Data Engineering"] as Category[],
    role: "Spécialisation Data Engineering",
    featured: true,
    description:
      "Prototype de plateforme data pour le suivi des créances : capture CDC, couches Bronze / Silver / Gold, détection d'impayés en flux et en batch, gouvernance (qualité, lignée, audit, masquage) dans le chemin de traitement.",
    highlights: [
      "CDC PostgreSQL → Redpanda, stockage Delta Lake sur MinIO",
      "dbt + DuckDB pour le recalcul batch et la comparaison flux / SQL",
      "API FastAPI : alertes, catalogue, lignée et dossier probatoire",
    ],
    hardSkills: ["Python", "CDC", "Redpanda", "Delta Lake", "MinIO", "dbt", "DuckDB", "Airflow", "FastAPI", "Règles YAML"],
    softSkills: [
      "Culture de la preuve",
      "Éthique et gouvernance des données",
      "Rigueur (qualité, lignée, audit)",
      "Esprit de synthèse architecturale",
    ],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/Lakehouse" }],
  },
  {
    title: "AquaSensus",
    icon: Droplets,
    categories: ["Génie logiciel", "Data Engineering"] as Category[],
    role: "Projet personnel",
    featured: true,
    description:
      "Plateforme collaborative de suivi et de maintenance prédictive des forages communautaires. Les habitants signalent, le comité priorise, un moteur explicable alerte avant la panne — sans capteurs IoT ni saisie de volumes d'eau.",
    highlights: [
      "Backend Java 21 / Spring et PWA Angular, mobile Flutter",
      "Pipeline Python pour la santé des ouvrages",
      "Déploiement Docker Compose (PostgreSQL, proxy Nginx)",
    ],
    hardSkills: ["Java 21", "Spring Boot", "Angular PWA", "Flutter", "Python", "PostgreSQL", "Docker", "Nginx"],
    softSkills: [
      "Empathie utilisateur terrain",
      "Arbitrage sous contrainte",
      "Communication multi-acteurs",
      "Orientation impact réel",
    ],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/Aquasensus" }],
  },
  {
    title: "TP Cloud — Plateforme Analytics",
    icon: Cloud,
    categories: ["Cloud"] as Category[],
    role: "Projet académique",
    featured: false,
    description:
      "Plateforme analytics conteneurisée avec portail unifié : instances Matomo derrière load balancer, observabilité complète et sauvegarde automatisée vers S3.",
    highlights: [
      "Traefik, HTTPS, Nginx et portail Angular / FastAPI",
      "Prometheus, Grafana, Loki, Alertmanager",
      "CI/CD : build, push et déploiement multi-instances",
    ],
    hardSkills: ["Docker", "Traefik", "Nginx", "Angular", "FastAPI", "Prometheus", "Grafana", "Loki", "S3"],
    softSkills: [
      "Rigueur d'exploitation",
      "Documentation transmissible",
      "Anticipation des incidents",
      "Autonomie technique",
    ],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/TP_Cloud" }],
  },
  {
    title: "ServantAssist",
    icon: Church,
    categories: ["Génie logiciel"] as Category[],
    role: "Plateforme complète",
    featured: false,
    description:
      "Gestion des servants d'autel de la Basilique Marie Reine des Apôtres de Mvolyé : plannings, formations, activités liturgiques. Backend Clean Architecture, application web et mobile, infrastructure Docker.",
    highlights: [
      "FastAPI, PostgreSQL, Redis, authentification JWT",
      "Front Angular et application Flutter",
      "CI avec lint, tests, couverture et déploiement par branche",
    ],
    hardSkills: ["FastAPI", "Clean Architecture", "Angular", "Flutter", "PostgreSQL", "Redis", "JWT", "Docker"],
    softSkills: [
      "Écoute d'un besoin communautaire",
      "Esprit d'équipe (multi-dépôts)",
      "Discipline qualité / CI",
      "Documentation pour transmission",
    ],
    links: [
      { label: "Backend", url: "https://github.com/renekomtsindi237/servantassist-backend" },
      { label: "Web", url: "https://github.com/renekomtsindi237/servantassist-web" },
      { label: "Mobile", url: "https://github.com/renekomtsindi237/servantasist-mobile" },
      { label: "Infra", url: "https://github.com/renekomtsindi237/servantassist-platform" },
    ],
  },
  {
    title: "AgriPrix Cameroun",
    icon: Wheat,
    categories: ["Génie logiciel"] as Category[],
    role: "Projet personnel",
    featured: false,
    description:
      "Application web pour suivre l'évolution des prix des produits agricoles (manioc, maïs, plantains) au Cameroun en les croisant avec les conditions météorologiques.",
    highlights: ["Collecte et visualisation de séries temporelles de prix", "Interface Flask et graphiques Chart.js"],
    hardSkills: ["Python", "Flask", "Chart.js"],
    softSkills: ["Esprit de synthèse", "Orientation décision (prix / météo)"],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/agriprix_cameroun" }],
  },
  {
    title: "Bibliothèque Numérique Camerounaise",
    icon: Library,
    categories: ["Génie logiciel"] as Category[],
    role: "Projet personnel",
    featured: false,
    description:
      "Plateforme de lecture numérique dédiée à la littérature camerounaise et africaine : catalogue, recherche, authentification JWT et stockage des œuvres sur object storage.",
    highlights: ["API Node.js / Express et PostgreSQL", "Stockage Cloudflare R2, accès JWT"],
    hardSkills: ["Node.js", "Express", "PostgreSQL", "Cloudflare R2", "JWT"],
    softSkills: ["Sens du service public culturel", "Responsabilité d'accès", "Autonomie produit"],
    links: [{ label: "Dépôt", url: "https://github.com/renekomtsindi237/Backend_biblio" }],
  },
  {
    title: "Cineyang",
    icon: Clapperboard,
    categories: ["Génie logiciel"] as Category[],
    role: "Projet personnel",
    featured: false,
    description:
      "Écosystème autour d'une plateforme de films et séries : bot Telegram qui annonce les nouveautés et site de téléchargement.",
    highlights: ["Bot Telegram et site Next.js", "Supabase et stockage objet AWS S3"],
    hardSkills: ["Next.js", "Telegram API", "Supabase", "AWS S3"],
    softSkills: ["Ownership produit", "Automatisation utile", "Itération rapide"],
    links: [
      { label: "Bot Telegram", url: "https://github.com/renekomtsindi237/CineyangBot" },
      { label: "Site", url: "https://github.com/renekomtsindi237/cine-eyang-download-main" },
    ],
  },
]

export default function ProjetsPage() {
  const [active, setActive] = useState<Category>("Tous")

  const counts = useMemo(() => {
    return Object.fromEntries(
      filters.map((filter) => [
        filter,
        filter === "Tous"
          ? projects.length
          : projects.filter((project) => project.categories.includes(filter)).length,
      ]),
    ) as Record<Category, number>
  }, [])

  const visible = useMemo(() => {
    if (active === "Tous") return projects
    return projects.filter((project) => project.categories.includes(active))
  }, [active])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Projets</h1>
              <p className="text-lg text-muted-foreground max-w-3xl text-pretty body-professional">
                Une sélection tirée de mes dépôts GitHub. Filtrez par domaine : tous les projets, data engineering,
                génie logiciel ou cloud.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Filtrer par domaine</p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActive(filter)}
                    aria-pressed={active === filter}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      active === filter
                        ? "bg-warm-gradient text-white border-transparent shadow-md"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {filter}
                    <span className={`ml-2 text-xs ${active === filter ? "text-white/80" : "text-muted-foreground"}`}>
                      {counts[filter]}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground" aria-live="polite">
                Filtre actif :{" "}
                <span className="font-semibold text-foreground">{active}</span>
                {" — "}
                {visible.length} projet{visible.length > 1 ? "s" : ""}
                {active !== "Tous" ? ` en ${active}` : ""}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {visible.map((project, index) => {
                const Icon = project.icon
                return (
                  <div
                    key={project.title}
                    className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md">
                            <Icon className="h-7 w-7 text-warm-gradient drop-shadow-lg" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                                {project.title}
                              </h2>
                              {project.featured && (
                                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-full bg-primary/15 text-primary border border-primary/20">
                                  Phare
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-mono text-muted-foreground mt-1">{project.role}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
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

                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => setActive(category)}
                            className="px-2.5 py-1 text-[11px] rounded-full border border-primary/25 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {category}
                          </button>
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 body-professional">
                        {project.description}
                      </p>

                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-3 pt-1">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Hard skills</p>
                          <div className="flex flex-wrap gap-2">
                            {project.hardSkills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-full font-mono border border-primary/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Soft skills</p>
                          <div className="flex flex-wrap gap-2">
                            {project.softSkills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1.5 bg-muted/60 text-muted-foreground text-xs rounded-full border border-border"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-3">
                        {project.links.map((linkItem) => (
                          <Button
                            key={linkItem.url}
                            variant="outline"
                            size="sm"
                            asChild
                            className="group/link hover:bg-primary/10 hover:border-primary/50"
                          >
                            <a href={linkItem.url} target="_blank" rel="noopener noreferrer">
                              {project.links.length > 1 ? linkItem.label : "Voir le dépôt"}
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

            <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Code source</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Les dépôts publics sont sur GitHub. GitLab sert aussi de miroir pour une partie du travail.
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
