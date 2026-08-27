'use client';

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import SplitText from "@/components/ui/split-text"
import { Github, Gitlab, Linkedin, Mail, ArrowRight, MapPin, Code, Database, Briefcase, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ProfileImage } from "@/components/profile-image"
import Particles from "@/components/ui/Particles"
import { CV_PDF_URL } from "@/lib/cv"

const highlights = [
  {
    icon: Code,
    text: "5e année d'ingénierie, option génie logiciel — année académique 2026–2027",
  },
  {
    icon: Briefcase,
    text: "Stage chez Openxtech : plateforme de recouvrement MicroRecouv (apps, API, pipelines)",
  },
  {
    icon: Database,
    text: "Spécialisation Data Engineering : IBM Professional Certificate, lakehouse, Fabric",
  },
]

const featuredProjects = [
  {
    title: "MicroRecouv",
    tag: "Stage · Openxtech",
    summary: "Collecte offline, API Spring Boot, entrepôt dbt/Airflow et scoring de risque pour IMF camerounaises.",
  },
  {
    title: "Lakehouse événementiel",
    tag: "Data Engineering",
    summary: "Chaîne CDC → Bronze / Silver / Gold, qualité des données et alertes d'impayés en quasi temps réel.",
  },
  {
    title: "AquaSensus",
    tag: "Génie logiciel",
    summary: "Suivi et maintenance prédictive des forages communautaires : Spring, Angular, Flutter et pipeline Python.",
  },
]

const favoriteTechs = [
  "Java / Spring Boot",
  "Python / FastAPI",
  "Angular",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "Airflow · dbt",
  "Docker",
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <ThemedParticles />

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">Yaoundé · Ouvert au remote</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight heading-professional">
                  <SplitText text="Réné" delay={0.2} />{" "}
                  <SplitText
                    text="KOMTSINDI"
                    className="text-warm-gradient"
                    delay={0.5}
                  />
                </h1>

                <p className="text-xl sm:text-2xl text-primary font-medium text-professional-lg">
                  Élève ingénieur logiciel — 5e année · option génie logiciel · Data Engineering
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty body-professional">
                Je conçois des systèmes complets : APIs, applications web et mobile, puis la chaîne de données
                qui les alimente. Mon fil conducteur est le même que sur le terrain — recouvrement microfinance,
                forages communautaires, analytics cloud : rendre l&apos;information fiable, traçable et actionnable.
              </p>

              <div className="space-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground pt-1">{item.text}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="group bg-warm-gradient hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/projets">
                    Voir les projets
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-primary hover:text-white hover:bg-warm-gradient hover:border-primary border-2 border-primary/50 transition-all duration-300 font-semibold">
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>

              <a
                href={CV_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border-2 border-primary/55 bg-gradient-to-br from-primary/20 via-card to-accent/15 p-5 sm:p-6 shadow-xl hover:border-primary hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-warm-gradient opacity-[0.08] group-hover:opacity-[0.14] transition-opacity" />
                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-warm-gradient text-white shadow-lg">
                    <FileDown className="h-7 w-7" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                      Dossier candidat · 1 page
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                      Ce n&apos;est pas un CV d&apos;étudiant parmi d&apos;autres.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Apps et pipelines déjà livrés en entreprise, lakehouse, IBM Data Engineering, Microsoft Fabric.
                      Une page. Chaque ligne a une preuve.
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-warm-gradient text-white font-semibold shadow-md group-hover:opacity-95">
                    Ouvrir le CV
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a
                    href="https://www.linkedin.com/in/r%C3%A9n%C3%A9-komtsindi-b4052131b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a
                    href="https://gitlab.com/renekomtsindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitLab"
                  >
                    <Gitlab className="h-6 w-6 text-primary" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a
                    href="https://github.com/renekomtsindi237"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a href="mailto:renekomtsindi7@gmail.com" aria-label="Email">
                    <Mail className="h-6 w-6 text-primary" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:hidden animate-fade-in mb-8">
              <ProfilePanel />
            </div>

            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative">
                  <ProfilePanel />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 space-y-6 animate-fade-in">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground heading-professional">Projets phares</h2>
                <p className="text-muted-foreground mt-1">Ce que je peux montrer concrètement, pas une liste de technologies.</p>
              </div>
              <Button asChild variant="ghost" className="hidden sm:inline-flex text-primary">
                <Link href="/projets">
                  Tous les projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Link
                  key={project.title}
                  href="/projets"
                  className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-professional"
                >
                  <p className="text-xs font-mono text-primary mb-2">{project.tag}</p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

function ThemedParticles() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = !mounted || resolvedTheme !== "light"

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -10, pointerEvents: "none" }}>
      <Particles
        key={isDark ? "dark" : "light"}
        particleColors={isDark ? ["#ffffff", "#f5e6d3"] : ["#8b3a2a", "#b4532a"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className=""
      />
    </div>
  )
}

function ProfilePanel() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <ProfileImage className="w-48 h-60 mx-auto lg:w-full lg:max-w-sm lg:h-[28rem] hover:scale-105 transition-transform duration-500" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-warm-gradient rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-warm-gradient rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 professional-shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm text-muted-foreground font-mono">Ouvert aux stages et PFE 2026–2027</span>
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between gap-4 border-b border-border/40 pb-2">
              <span>Formation</span>
              <span className="text-foreground font-medium text-right">Ingénieur · génie logiciel</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-border/40 pb-2">
              <span>Année</span>
              <span className="text-foreground font-medium text-right">5e · 2026–2027</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-border/40 pb-2">
              <span>Orientation</span>
              <span className="text-foreground font-medium text-right">Data Engineering</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Établissement</span>
              <span className="text-foreground font-medium text-right">IUSJ — Cameroun</span>
            </li>
          </ul>

          <div className="border-t border-border/50 pt-4">
            <p className="text-sm text-muted-foreground mb-3 font-medium text-center lg:text-left">Stack de production</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {favoriteTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-full font-mono border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
