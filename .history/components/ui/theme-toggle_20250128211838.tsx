"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Render both icons but hide one based on theme */}
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-none dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-0 scale-0 transition-none dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}