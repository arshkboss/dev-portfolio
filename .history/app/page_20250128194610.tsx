"use client"

import { AboutSection } from "@/components/sections/about"
import { TechStackSection } from "@/components/sections/tech-stack"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 pt-20">
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  )
} 