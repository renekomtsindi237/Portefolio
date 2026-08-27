"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import type { CertificationAsset, CertificationTrack } from "@/lib/certifications"

const filters: Array<"Tous" | CertificationTrack> = ["Tous", "IBM Data Engineering", "Microsoft Fabric"]

export default function CertificationsPage() {
  const [items, setItems] = useState<CertificationAsset[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [track, setTrack] = useState<"Tous" | CertificationTrack>("Tous")
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch("/api/certifications")
      .then(async (res) => {
        if (!res.ok) throw new Error("Impossible de charger les certifications")
        return res.json() as Promise<{ items: CertificationAsset[] }>
      })
      .then((data) => {
        if (!cancelled) setItems(data.items || [])
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const visible = useMemo(() => {
    if (track === "Tous") return items
    return items.filter((item) => item.track === track)
  }, [items, track])

  useEffect(() => {
    setActive(null)
  }, [track])

  useEffect(() => {
    if (active === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null)
      if (event.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % visible.length))
      if (event.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active, visible.length])

  const current = active !== null ? visible[active] : null

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground heading-professional">
                Certificats & certifications
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl text-pretty body-professional">
                Professional Certificate IBM Data Engineering, modules associés, et parcours Microsoft Fabric. Cliquez
                une carte pour prévisualiser le PDF.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les certifications">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setTrack(filter)}
                    aria-pressed={track === filter}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      track === filter
                        ? "bg-warm-gradient text-white border-transparent"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground" aria-live="polite">
                {loading ? "Chargement…" : `${visible.length} attestation${visible.length > 1 ? "s" : ""}`}
                {track !== "Tous" ? ` · ${track}` : ""}
              </p>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            {loading && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-72 rounded-2xl bg-muted/60 border border-border animate-pulse" />
                ))}
              </div>
            )}

            {!loading && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((item, index) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group text-left bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 card-professional"
                  >
                    <div className="aspect-[4/3] bg-muted/40 relative overflow-hidden">
                      <iframe
                        title={item.title}
                        src={`${item.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        className="h-[140%] w-full pointer-events-none border-0 origin-top scale-[1.01]"
                        loading="lazy"
                      />
                      {item.featured && (
                        <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-full bg-primary text-primary-foreground">
                          Certification
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">{item.issuer}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {current && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-background rounded-2xl border border-border overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-border">
              <div className="min-w-0">
                <p className="font-semibold text-foreground truncate">{current.title}</p>
                <p className="text-xs text-muted-foreground">
                  {current.issuer} · {active! + 1} / {visible.length}
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Button variant="ghost" size="icon" asChild>
                  <a href={current.src} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir l'original">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setActive(null)} aria-label="Fermer">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative bg-muted/30 min-h-[50vh]">
              <iframe title={current.title} src={`${current.src}#toolbar=1&view=FitH`} className="w-full h-[78vh] bg-background" />
              {visible.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80"
                    onClick={() => setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length))}
                    aria-label="Précédent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80"
                    onClick={() => setActive((i) => (i === null ? i : (i + 1) % visible.length))}
                    aria-label="Suivant"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
