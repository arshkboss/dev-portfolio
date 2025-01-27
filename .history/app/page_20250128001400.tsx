"use client"

import { Link } from 'react-scroll';
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { AboutSection } from "@/components/sections/about"
import { TechStackSection } from "@/components/sections/tech-stack"
import { ExperienceSection } from "@/components/sections/experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      

      <div className="container mx-auto px-4 pt-20">
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
      </div>
    </main>
  )
} 