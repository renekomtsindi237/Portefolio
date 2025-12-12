'use client';

import Link from "next/link"
import TextType from "@/components/ui/text-type"
import SplitText from "@/components/ui/split-text"
import { Github, Gitlab, Linkedin, Mail, ArrowRight, Sparkles, Code, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ProfileImage } from "@/components/profile-image"
import Particles from "@/components/ui/Particles"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Particles Background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -10, pointerEvents: 'none' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
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

        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">Développeur passionné</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight heading-professional">
                  <SplitText text="Rene" delay={0.2} />{" "}
                  <SplitText
                    text="Komtsindi"
                    className="text-warm-gradient"
                    delay={0.5}
                  />
                </h1>

                <TextType
                  text="Ingénieur en formation | Développeur Fullstack & Data Engineer Junior"
                  className="text-xl sm:text-2xl text-primary font-medium text-professional-lg"
                  typingSpeed={75}
                  pauseDuration={3000}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={true}
                />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty body-professional">
                Je suis passionné par la conception de solutions numériques innovantes, allant des applications web aux
                systèmes de données. Mon objectif est de créer des outils utiles aussi bien pour la recherche académique
                que pour des besoins réels.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Étudiant en 4e année à l'Institut universitaire Saint Jean du Cameroun</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Formation IBM Data Engineering (Coursera)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Débutant en Data Engineering et Machine Learning</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="group bg-warm-gradient hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/projets">
                    Voir mes projets
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-primary hover:text-white hover:bg-warm-gradient hover:border-primary border-2 border-primary/50 transition-all duration-300 font-semibold">
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a
                    href="https://www.linkedin.com/in/rene-komtsindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-primary hover:text-warm-gradient transition-colors" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a
                    href="https://gitlab.com/renekomtsindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitLab"
                  >
                    <Gitlab className="h-6 w-6 text-primary hover:text-warm-gradient transition-colors" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a
                    href="https://github.com/Airfox24528"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 text-primary hover:text-warm-gradient transition-colors" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-primary/40">
                  <a href="mailto:renekomtsindi7@gmail.com" aria-label="Email">
                    <Mail className="h-6 w-6 text-primary hover:text-warm-gradient transition-colors" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Profile Image and Stats */}
            <div className="lg:hidden animate-fade-in mb-8">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <ProfileImage className="w-48 h-60 mx-auto hover:scale-105 transition-transform duration-500" />
                    {/* Floating elements around the image */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-warm-gradient rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-warm-gradient rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>

                {/* Mobile Stats Card */}
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 professional-shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">Actuellement disponible</span>
                    </div>

                    {/* Animated progress bars */}
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Développement Fullstack</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-warm-gradient rounded-full animate-pulse" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Data Engineering (connaissances théoriques)</span>
                          <span>25%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-warm-gradient rounded-full animate-pulse delay-300" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Machine Learning</span>
                          <span>25%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-warm-gradient rounded-full animate-pulse delay-700" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-4 mt-4">
                      <p className="text-sm text-muted-foreground mb-3 font-medium text-center">Technologies favorites</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {["Python (Django/FastAPI/Flask)", "Angular", "TypeScript", "Node.js/Express.Js/Next.Js", "Spring Boot + Java"].map((tech, index) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-full font-mono border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image and Stats */}
            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                {/* Enhanced background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-2xl animate-pulse delay-500"></div>

                <div className="relative space-y-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <ProfileImage className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-500" />
                    {/* Floating elements around the image */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-warm-gradient rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-warm-gradient rounded-full animate-pulse delay-300"></div>
                  </div>

                  {/* Stats Card */}
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 professional-shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">Actuellement disponible</span>
                      </div>

                      {/* Animated progress bars */}
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Développement Fullstack</span>
                            <span>85%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-warm-gradient rounded-full animate-pulse" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Data Engineering</span>
                            <span>35%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-warm-gradient rounded-full animate-pulse delay-300" style={{ width: '35%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Machine Learning</span>
                            <span>25%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-warm-gradient rounded-full animate-pulse delay-700" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-4 mt-4">
                      <p className="text-sm text-muted-foreground mb-3 font-medium">Technologies favorites</p>
                      <div className="flex flex-wrap gap-2">
                        {["Python (Django/FastAPI/Flask)", "Angular", "TypeScript", "Node.js/Express.js/Next.js", "Spring Boot + Java"].map((tech, index) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-muted-foreground text-xs rounded-full font-mono border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
