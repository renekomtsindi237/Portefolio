import { Navigation } from "@/components/navigation"
import {
  Code2,
  Database,
  Layers,
  Wrench,
  BarChart3,
  Workflow,
  Users,
  FileText,
  Compass,
  Briefcase,
  MessageSquare,
  Shield,
  Scale,
  BookOpen,
} from "lucide-react"

const hardSkillCategories = [
  {
    title: "Génie logiciel",
    icon: Code2,
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Java 21",
      "Spring Boot",
      "JavaScript / TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Flutter / Dart",
      "Node.js / Express",
    ],
  },
  {
    title: "Data Engineering",
    icon: Workflow,
    skills: [
      "Apache Airflow",
      "Apache Kafka",
      "Apache Spark",
      "dbt",
      "Delta Lake",
      "DuckDB",
      "Microsoft Fabric",
      "ETL / ELT",
      "CDC",
      "Architecture médallion",
      "Qualité & lignée des données",
    ],
  },
  {
    title: "Bases de données & stockage",
    icon: Database,
    skills: ["PostgreSQL", "SQL", "MySQL", "NoSQL", "Redis", "MongoDB", "MinIO / S3", "Cloudflare R2"],
  },
  {
    title: "Cloud, DevOps & observabilité",
    icon: Wrench,
    skills: ["Docker / Compose", "Linux / Shell", "Traefik", "Nginx", "Prometheus", "Grafana", "GitHub Actions", "Git"],
  },
  {
    title: "Data science & analytics",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "XGBoost", "SHAP", "Spark ML", "Cognos / Looker", "Feature engineering"],
  },
  {
    title: "Conception & qualité",
    icon: Layers,
    skills: ["API REST", "Clean Architecture", "UML", "JWT", "pytest", "Playwright", "Flyway"],
  },
]

const essentialSoftLabels = [
  "Analyse de besoin",
  "Esprit de synthèse",
  "Autonomie",
  "Responsabilité",
  "Esprit d'équipe",
  "Communication",
  "Agilité de livraison",
  "Rigueur",
  "Orientation résultat",
  "Adaptabilité",
]

const complementarySoftLabels = [
  "Éthique des données",
  "Arbitrage sous contrainte",
  "Priorisation opérationnelle",
  "Documentation transmissible",
  "Empathie utilisateur",
  "Culture de la preuve",
]

const softSkills = [
  {
    title: "Analyse de besoin et cadrage",
    kind: "Essentielle",
    icon: Compass,
    evidence: "MicroRecouv · AquaSensus · cahiers de conception",
    description:
      "Transformer un problème métier flou en périmètre, règles et V0. Exemples : IMF (collecte hors ligne, PAR, COBAC) et forages (signalement sans litres ni capteurs). Je ne commence pas par la stack, je commence par ce qui doit changer pour l'utilisateur.",
  },
  {
    title: "Responsabilité de bout en bout",
    kind: "Essentielle",
    icon: Briefcase,
    evidence: "Stage Openxtech · ServantAssist · AquaSensus",
    description:
      "Porter un système complet — API, web, mobile, données, déploiement — jusqu'à un livrable utilisable. Le stage MicroRecouv n'est pas un ticket isolé : c'est une chaîne que je peux expliquer, faire tourner et défendre.",
  },
  {
    title: "Rigueur et culture de la preuve",
    kind: "Essentielle",
    icon: FileText,
    evidence: "Lakehouse · CI ServantAssist · TP Cloud",
    description:
      "Une alerte, un score ou une mise en production doivent pouvoir se vérifier. Comparaison flux / batch, règles de qualité, tests, couverture, journal d'audit, retour d'incidents : je documente ce qui est vrai, pas seulement ce qui est prévu.",
  },
  {
    title: "Communication avec le métier",
    kind: "Essentielle",
    icon: MessageSquare,
    evidence: "Openxtech · comités AquaSensus · Basilique (ServantAssist)",
    description:
      "Parler à un agent de collecte, un responsable d'agence, un comité de quartier ou une DSI sans noyer la décision. Adapter le niveau de détail, reformuler le besoin, faire valider une règle avant de la coder.",
  },
  {
    title: "Esprit d'équipe et livraison incrémentale",
    kind: "Essentielle",
    icon: Users,
    evidence: "Stage · multi-dépôts · CI par branche",
    description:
      "Découper le travail (backend, front, data, infra), laisser une trace pour la personne suivante, livrer un V0 plutôt qu'attendre le parfait. L'agilité ici, c'est le rythme : incrément, revue, ajustement.",
  },
  {
    title: "Autonomie et apprentissage dirigé",
    kind: "Essentielle",
    icon: BookOpen,
    evidence: "IBM Data Engineering · Microsoft Fabric · lakehouse",
    description:
      "Aller chercher une compétence quand le projet l'exige, puis la figer (certificat, module, prototype). Le Professional Certificate IBM et Fabric ne remplacent pas le code : ils structurent ce que je mets ensuite en pratique.",
  },
  {
    title: "Éthique et gouvernance des données",
    kind: "Complémentaire",
    icon: Shield,
    evidence: "Lakehouse (masquage, lignée) · COBAC · AquaSensus",
    description:
      "Ne pas collecter ce qu'on ne peut pas garantir. Isolation multi-IMF, masquage selon le rôle, dossier probatoire, refus des volumes d'eau inventés sur le terrain. La donnée personnelle et réglementaire n'est pas un détail d'implémentation.",
  },
  {
    title: "Arbitrage sous contrainte",
    kind: "Complémentaire",
    icon: Scale,
    evidence: "AquaSensus (pas d'IoT) · offline MicroRecouv · V0",
    description:
      "Choisir volontairement moins de technologie quand le contexte l'impose : pas de capteur cher, pas de réseau permanent, un moteur explicable plutôt qu'un modèle opaque. C'est de l'ingénierie, pas de la restriction.",
  },
]

function SkillCard({
  title,
  icon: Icon,
  skills,
  index,
}: {
  title: string
  icon: typeof Code2
  skills: string[]
  index: number
}) {
  return (
    <div
      className="group relative overflow-hidden bg-card border border-border rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-all duration-300">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
              {title}
            </h3>
            <div className="w-0 group-hover:w-20 h-1 bg-warm-gradient transition-all duration-500 mt-0.5 rounded-full" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1.5 bg-muted/70 text-muted-foreground text-xs rounded-lg font-mono border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CompetencesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-16 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Compétences</h1>
              <p className="text-lg text-muted-foreground max-w-3xl text-pretty body-professional">
                Un mélange d&apos;école d&apos;ingénieur, de stage, de projets personnels et de certifications
                (IBM Data Engineering, Microsoft Fabric) — pas seulement la stack des dépôts GitHub.
              </p>
            </div>

            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground heading-professional">Hard skills</h2>
                <p className="text-muted-foreground mt-1">
                  Langages et outils : projets, cours, Django / React, pipelines et cloud.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hardSkillCategories.map((category, index) => (
                  <SkillCard
                    key={category.title}
                    title={category.title}
                    icon={category.icon}
                    skills={category.skills}
                    index={index}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground heading-professional">Soft skills</h2>
                <p className="text-muted-foreground mt-1 max-w-3xl">
                  Compétences réelles, tirées du stage, des projets et des certifications.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Essentielles</p>
                  <div className="flex flex-wrap gap-2">
                    {essentialSoftLabels.map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1.5 text-xs rounded-full border border-primary/30 bg-primary/10 text-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Complémentaires</p>
                  <div className="flex flex-wrap gap-2">
                    {complementarySoftLabels.map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1.5 text-xs rounded-full border border-border bg-muted/60 text-muted-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.title}
                      className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 card-professional"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-foreground subheading-professional">{skill.title}</h3>
                            <span
                              className={`px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-full border ${
                                skill.kind === "Essentielle"
                                  ? "border-primary/30 text-primary bg-primary/10"
                                  : "border-border text-muted-foreground bg-muted/50"
                              }`}
                            >
                              {skill.kind}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-primary">{skill.evidence}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Positionnement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Développeur fullstack (Python/Django, React, Angular, Spring, Flutter) qui se spécialise en data
                engineering. Ce qui me distingue côté soft skills : cadrer un vrai besoin, livrer un système complet,
                et rendre une décision data explicable (qualité, lignée, contrainte terrain).
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
