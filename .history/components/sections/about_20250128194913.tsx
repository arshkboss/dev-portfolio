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
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative w-24 h-24">
                <Image
                  src="/dev.png" // Make sure to add your image to public folder
                  alt="Developer Avatar"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                  <div className="text-center sm:text-left">
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
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a
                      href="mailto:your@email.com"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
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
            <div className="grid grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-lg bg-muted p-3 transition-all hover:bg-primary/5">
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-xl font-bold transition-transform group-hover:-translate-y-1">5+</span>
                  <span className="text-xs text-muted-foreground transition-transform group-hover:translate-y-1">Years</span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-muted p-3 transition-all hover:bg-primary/5">
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-xl font-bold transition-transform group-hover:-translate-y-1">50+</span>
                  <span className="text-xs text-muted-foreground transition-transform group-hover:translate-y-1">Projects</span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-muted p-3 transition-all hover:bg-primary/5">
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-xl font-bold transition-transform group-hover:-translate-y-1">20+</span>
                  <span className="text-xs text-muted-foreground transition-transform group-hover:translate-y-1">Clients</span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}