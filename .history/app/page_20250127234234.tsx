"use client"

import { Link } from 'react-scroll';
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { AboutSection } from "@/components/sections/about"
import { TechStackSection } from "@/components/sections/tech-stack"
import { ExperienceSection } from "@/components/sections/experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-6">
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer hover:text-primary"
            >
              About
            </Link>
            <Link
              to="tech-stack"
              smooth={true}
              className="cursor-pointer hover:text-primary"
            >
              Tech Stack
            </Link>
            <Link
              to="experience"
              smooth={true}
              className="cursor-pointer hover:text-primary"
            >
              Experience
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-20">
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
      </div>
    </main>
  )
} 