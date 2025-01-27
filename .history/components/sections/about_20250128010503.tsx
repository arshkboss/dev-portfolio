"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, Twitter, Mail } from "lucide-react"
import Image from "next/image"

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
            <div className="flex items-center gap-8">
              <div className="relative w-24 h-24">
                <Image
                  src="/avatar.jpg" // Make sure to add your image to public folder
                  alt="Developer Avatar"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold">Dmitri Kalinov</h2>
                    <p className="text-muted-foreground">Senior Software Engineer</p>
                  </div>
                  <div className="flex gap-6">
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
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a Full-Stack Developer with expertise in high-performance systems and distributed computing. 
              With a strong background in computer science and years of experience in developing complex 
              technical solutions, I specialize in building scalable, efficient, and reliable software systems.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <span className="text-2xl font-bold">5+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <span className="text-2xl font-bold">50+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <span className="text-2xl font-bold">20+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}