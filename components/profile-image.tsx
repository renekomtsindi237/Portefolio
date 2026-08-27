"use client"

import Image from "next/image"
import { useState } from "react"

interface ProfileImageProps {
  className?: string
}

export function ProfileImage({ className = "" }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-4xl font-bold text-primary">RK</span>
          </div>
          <p className="text-sm text-muted-foreground">Image de profil</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
      <div className="relative">
        <Image
          src="/images/profile.jpg"
          alt="Réné Komtsindi — élève ingénieur logiciel"
          width={400}
          height={500}
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
          onError={() => setImageError(true)}
          priority
          quality={90}
        />
        {/* Overlay gradient for professional look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
      </div>
    </div>
  )
}
