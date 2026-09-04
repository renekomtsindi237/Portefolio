'use client';

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import SplitText from "@/components/ui/split-text"
import { Github, Gitlab, Linkedin, Mail, ArrowRight, MapPin, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ProfileImage } from "@/components/profile-image"
import Particles from "@/components/ui/Particles"
import { PROFILE_SUMMARY } from "@/lib/cv"

const siteMap = [
  { name: "Accueil", href: "/", desc: "Présentation, double casquette, projets principaux" },
  { name: "Parcours", href: "/formation", desc: "Formation, expériences, certifications" },
  { name: "Projets", href: "/projets", desc: "Software Engineering + Data Engineering" },
  { name: "Compétences", href: "/competences", desc: "Les deux piliers techniques" },
  { name: "CV", href: "/cv", desc: "Aperçu + téléchargement" },
  { name: "Contact", href: "/contact", desc: "LinkedIn, GitHub, email" },
]

const dualHat = [
  {
    icon: Code,
    title: "Software Engineering",
    text: "Backends, APIs, applications web et mobile — Java/Spring, Angular, Flutter, React, Node.js.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    text: "Pipelines ETL/ELT, CDC, orchestration, qualité des données — Airflow, dbt, Spark, lakehouse (ADLS / Event Hubs), Fabric, Snowflake.",
  },
]

const featuredProjects = [
  {
    title: "MicroRecouv",
    tag: "Projet phare · Software & Data",
    summary: "Collecte offline, API Spring Boot, entrepôt dbt/Airflow et scoring de risque pour IMF camerounaises.",
  },
  {
    title: "Lakehouse événementiel",
    tag: "Projet personnel · Data & Software",
    summary: "CDC Postgres → Event Hubs, Delta sur ADLS Gen2 ; alertes d'impayés calculées sur le PC, complément du batch COBAC.",
  },
  {
    title: "AquaSensus",
    tag: "Projet personnel · Software & Data",
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
  "ADLS · Event Hubs",
  "Spark · Snowflake",
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
                <p className="text-sm font-mono text-muted-foreground">
                  Software Engineering &amp; Data Engineering
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty body-professional">
                {PROFILE_SUMMARY}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {dualHat.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="p-4 bg-card border border-border rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <h2 className="font-semibold text-foreground">{item.title}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="group bg-warm-gradient hover:opacity-90 text-white border-0 shadow-lg">
                  <Link href="/formation">
                    Parcours
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-primary border-2 border-primary/50">
                  <Link href="/projets">Projets</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <Link href="/cv">CV</Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>

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

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in">
            {siteMap.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border/60 bg-card/60 px-4 py-3 hover:border-primary/50 transition-colors"
              >
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 space-y-6 animate-fade-in">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground heading-professional">Projets principaux</h2>
                <p className="text-muted-foreground mt-1">
                  MicroRecouv combine les deux piliers. Lakehouse et AquaSensus sont des projets personnels.
                </p>
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
              <span className="text-foreground font-medium text-right">Software &amp; Data</span>
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
