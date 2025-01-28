"use client"

import { useState, useEffect } from "react"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>Moscow Time:</span>
      <span className="font-mono">
        {time.toLocaleTimeString('en-US', { 
          timeZone: 'Europe/Moscow',
          hour12: false 
        })}
      </span>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
            >
              Dmitri Kalinov
            </motion.div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building high-performance systems with Russian precision
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/yourusername" },
              { icon: Twitter, href: "https://twitter.com/yourusername" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { icon: Mail, href: "mailto:dmitri@example.com" },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full hover:bg-muted transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform" />
                </motion.a>
              )
            })}
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <Clock />
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Dmitri Kalinov. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
} 