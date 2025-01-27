"use client"

import { useEffect, useState } from "react"
import { Link } from 'react-scroll'
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", to: "about" },
  { name: "Tech Stack", to: "tech-stack" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-background/80 backdrop-blur-lg rounded-full border px-8 py-3">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
                className={cn(
                  "cursor-pointer text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.to && "text-primary"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
} 