import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { GraduationCap, Award, Briefcase, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"

type Entry = {
  title: string
  institution: string
  status: string
  description: string
  skills: string[]
  icon: typeof GraduationCap
}

const education: Entry[] = [
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
]

const experiences: Entry[] = [
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
]

const certifications: Entry[] = [
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

function EntryCard({ entry, index }: { entry: Entry; index: number }) {
  const Icon = entry.icon
  return (
    <div
      className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden card-professional"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0">
          <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 subheading-professional">
                {entry.title}
              </h3>
              <span className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/20">
                {entry.status}
              </span>
            </div>
            <p className="text-muted-foreground font-medium">{entry.institution}</p>
          </div>
          <p className="text-muted-foreground leading-relaxed body-professional">{entry.description}</p>
          <div className="flex flex-wrap gap-2">
            {entry.skills.map((skill) => (
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
  )
}

export default function FormationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-16 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">Parcours</h1>
              <p className="text-lg text-muted-foreground max-w-3xl text-pretty body-professional">
                Trois blocs seulement : formation, expériences, certifications. Les projets techniques sont sur la page{" "}
                <Link href="/projets" className="text-primary underline-offset-2 hover:underline">
                  Projets
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a href="#formation" className="px-3 py-1.5 text-sm rounded-full border border-primary/30 text-primary hover:bg-primary/10">
                  Formation
                </a>
                <a href="#experiences" className="px-3 py-1.5 text-sm rounded-full border border-primary/30 text-primary hover:bg-primary/10">
                  Expériences
                </a>
                <a href="#certifications" className="px-3 py-1.5 text-sm rounded-full border border-primary/30 text-primary hover:bg-primary/10">
                  Certifications
                </a>
              </div>
            </div>

            <section id="formation" className="space-y-6 scroll-mt-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">1 · Formation</p>
                <h2 className="text-2xl font-semibold text-foreground heading-professional mt-1">École et diplômes</h2>
              </div>
              <div className="space-y-6">
                {education.map((entry, index) => (
                  <EntryCard key={entry.title} entry={entry} index={index} />
                ))}
              </div>
            </section>

            <section id="experiences" className="space-y-6 scroll-mt-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">2 · Expériences</p>
                <h2 className="text-2xl font-semibold text-foreground heading-professional mt-1">Stages en entreprise</h2>
              </div>
              <div className="space-y-6">
                {experiences.map((entry, index) => (
                  <EntryCard key={entry.title} entry={entry} index={index} />
                ))}
              </div>
            </section>

            <section id="certifications" className="space-y-6 scroll-mt-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">3 · Certifications</p>
                <h2 className="text-2xl font-semibold text-foreground heading-professional mt-1">IBM et Microsoft Fabric</h2>
                <p className="text-muted-foreground mt-1">Deux certifications. La galerie des attestations PDF est à part.</p>
              </div>
              <div className="space-y-6">
                {certifications.map((entry, index) => (
                  <EntryCard key={entry.title} entry={entry} index={index} />
                ))}
              </div>
              <Button asChild className="bg-warm-gradient text-white border-0">
                <Link href="/certifications">Voir la galerie des attestations</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
