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
      className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border"
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <footer className="relative py-10 border-t overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                x: [-50, 50, -50],
                y: [-50, 50, -50],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 0],
                x: [50, -50, 50],
                y: [50, -50, 50],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-l from-primary/20 to-primary/5 blur-3xl"
            />
          </div>
        </div>
      </div>

      {/* Footer content with backdrop blur */}
      <div className="relative container max-w-4xl mx-auto px-4">
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
            <p className="text-sm text-muted-foreground text-center md:text-left backdrop-blur-sm">
              Building high-performance systems with Russian precision
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/yourusername" },
              { icon: Twitter, href: "https://twitter.com/yourusername" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { icon: Mail, href: "mailto:your@email.com" }
            ].map((social) => (
              <motion.a
                key={social.href}
                variants={item}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "tween", duration: 0.15 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-4 backdrop-blur-sm">
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