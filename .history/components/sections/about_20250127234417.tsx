"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, Twitter, Mail } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            
            <div className="flex justify-end gap-6">
            <h2 className="text-3xl font-bold text-left">About Me</h2>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a Full-Stack Web Developer with a passion for creating professional
              websites and applications. With several years of experience in web
              development, I specialize in building modern, responsive, and
              user-friendly solutions.
            </p>
            
            
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}