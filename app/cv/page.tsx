import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  CV_PDF_URL,
  PROFILE_HEADLINE,
  PROFILE_SUMMARY,
} from "@/lib/cv"
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Download,
  Eye,
  Github,
  GraduationCap,
  Linkedin,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "CV — Réné Alban KOMTSINDI",
  description: PROFILE_SUMMARY,
}

const snapshot = [
  {
    title: "Formation",
    href: "/formation#formation",
    icon: GraduationCap,
    items: [
      "Cycle d'ingénieur, option génie logiciel — IUSJC, depuis 2022",
      "5e année 2026–2027 · Baccalauréat série D, 2021",
    ],
  },
  {
    title: "Expériences",
    href: "/formation#experiences",
    icon: Briefcase,
    items: [
      "Openxtech — MicroRecouv, génie logiciel et data engineering (4e année)",
      "Trust SARL — TrustFolio, développement logiciel (3e année)",
      "Flore Services — première immersion (1re année)",
    ],
  },
  {
    title: "Compétences",
    href: "/competences",
    icon: Code2,
    items: [
      "Software Engineering — APIs, backends, web et mobile",
      "Data Engineering — pipelines ETL/ELT, orchestration, qualité",
    ],
  },
  {
    title: "Certifications",
    href: "/formation#certifications",
    icon: Award,
    items: [
      "IBM Data Engineering Professional Certificate",
      "Microsoft Fabric Data Engineer",
      "Apache Spark / PySpark / Scala · Snowflake",
    ],
  },
]

export default function CvPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-12 animate-fade-in">
          <header className="space-y-6">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary">Mon CV</p>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">
                Réné Alban <span className="text-warm-gradient">KOMTSINDI</span>
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-medium">{PROFILE_HEADLINE}</p>
              <p className="text-sm font-mono text-muted-foreground">
                Software Engineering &amp; Data Engineering
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl body-professional">
              {PROFILE_SUMMARY}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-warm-gradient text-white border-0 shadow-lg">
                <a href="#apercu">
                  <Eye className="mr-2 h-4 w-4" />
                  Voir mon CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/50">
                <a href={CV_PDF_URL} download="CV-KOMTSINDI-Rene.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger mon CV (PDF)
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a
                  href="https://www.linkedin.com/in/r%C3%A9n%C3%A9-komtsindi-b4052131b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="https://github.com/renekomtsindi237" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </header>

          <section className="grid sm:grid-cols-2 gap-4">
            {snapshot.map((block) => {
              const Icon = block.icon
              return (
                <Link
                  key={block.title}
                  href={block.href}
                  className="group bg-card/80 border border-border/50 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 card-professional"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {block.title}
                    </h2>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Link>
              )
            })}
          </section>

          <p className="text-sm text-muted-foreground max-w-3xl">
            Le CV ci-dessous est la synthèse. Les preuves — architecture, code, choix techniques — sont sur{" "}
            <Link href="/projets" className="text-primary underline-offset-2 hover:underline">
              Projets
            </Link>
            ,{" "}
            <Link href="/formation" className="text-primary underline-offset-2 hover:underline">
              Parcours
            </Link>{" "}
            et{" "}
            <Link href="/competences" className="text-primary underline-offset-2 hover:underline">
              Compétences
            </Link>
            .
          </p>

          <section id="apercu" className="space-y-4 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-foreground heading-professional">Aperçu du CV</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Document 1 page, consultable ici. Le téléchargement PDF reste disponible.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={CV_PDF_URL} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-3.5 w-3.5" />
                    Plein écran
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-warm-gradient text-white border-0">
                  <a href={CV_PDF_URL} download="CV-KOMTSINDI-Rene.pdf">
                    <Download className="mr-2 h-3.5 w-3.5" />
                    Télécharger
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-primary/30 bg-card shadow-xl">
              <object
                data={`${CV_PDF_URL}#view=FitH&toolbar=0`}
                type="application/pdf"
                className="w-full h-[min(160vh,1180px)] bg-muted/30"
                aria-label="Aperçu du CV de Réné Alban KOMTSINDI"
              >
                <iframe
                  src={`${CV_PDF_URL}#view=FitH`}
                  title="Aperçu du CV"
                  className="w-full h-[min(160vh,1180px)] border-0"
                />
              </object>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button asChild variant="outline">
                <a href={CV_PDF_URL} download="CV-KOMTSINDI-Rene.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger le CV
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a
                  href="https://www.linkedin.com/in/r%C3%A9n%C3%A9-komtsindi-b4052131b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="https://github.com/renekomtsindi237" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3 p-5 rounded-2xl border border-border bg-card/60">
            <Workflow className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              Accueil → Parcours → Projets → Compétences → CV → Contact.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
