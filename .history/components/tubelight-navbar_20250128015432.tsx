"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ui/theme-toggle"
import { useTheme } from "next-themes"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isOverDark, setIsOverDark] = useState(true)
  const navRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const navElement = navRef.current
    if (!navElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Get background color of the element behind the navbar
          const rect = entry.boundingClientRect
          const el = document.elementFromPoint(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2
          )
          if (el) {
            const bgColor = window.getComputedStyle(el).backgroundColor
            // Convert RGB to brightness
            const rgb = bgColor.match(/\d+/g)
            if (rgb) {
              const brightness = (Number(rgb[0]) * 299 + Number(rgb[1]) * 587 + Number(rgb[2]) * 114) / 1000
              setIsOverDark(brightness < 128)
            }
          }
        })
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    )

    observer.observe(navElement)
    return () => observer.disconnect()
  }, [])

  const textColorClass = isOverDark ? "text-white" : "text-foreground"

  return (
    <nav 
      ref={navRef}
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-muted/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                isOverDark ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon 
                  size={18} 
                  strokeWidth={2.5} 
                  className={isOverDark ? "text-white" : "text-foreground"} 
                />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full pointer-events-none">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2 pointer-events-none" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 pointer-events-none" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2 pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
