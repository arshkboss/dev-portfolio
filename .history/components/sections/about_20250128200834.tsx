"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, Twitter, Mail, MapPin } from "lucide-react"
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
              <motion.div 
                className="relative w-24 h-24 group"
                whileHover="hover"
              >
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary opacity-75"
                  style={{ rotate: 0 }}
                  variants={{
                    hover: {
                      rotate: 360,
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }
                  }}
                />
                
                <motion.div
                  className="absolute -inset-2 rounded-full bg-primary/20 blur-md"
                  variants={{
                    hover: {
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.3, 0.5],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                />

                <motion.div 
                  className="relative z-10 w-full h-full rounded-full overflow-hidden"
                  variants={{
                    hover: {
                      scale: 1.05,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                    style={{ x: "-100%" }}
                    variants={{
                      hover: {
                        x: ["-100%", "100%"],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }
                    }}
                  />
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/dev.png"
                      alt="Developer Avatar"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left space-y-1.5">
                    <h2 className="text-3xl font-bold">Dmitri Kalinov</h2>
                    <p className="text-muted-foreground">Senior Software Engineer</p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      Based in Saint Petersburg, Russia
                    </p>
                  </div>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/yourusername" },
                      { icon: Twitter, href: "https://twitter.com/yourusername" },
                      { icon: Mail, href: "mailto:your@email.com" },
                    ].map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative p-2 rounded-full hover:bg-muted transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I&apos;m a Full-Stack Developer with expertise in high-performance systems and distributed computing. 
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