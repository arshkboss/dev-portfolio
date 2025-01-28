"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

// Comprehensive list of modern tech stack
const technologies = [
  {
    name: "Next.js",
    icon: "akar-icons:nextjs-fill",
  },
  {
    name: "React",
    icon: "simple-icons:react",
  },
  {
    name: "TypeScript",
    icon: "file-icons:typescript",
  },
  {
    name: "Node.js",
    icon: "bxl:nodejs",
  },
  {
    name: "PostgreSQL",
    icon: "lineicons:postgresql",
  },
  {
    name: "MongoDB",
    icon: "lineicons:mongodb",
  },
  {
    name: "Docker",
    icon: "lineicons:docker",
  },
  {
    name: "GraphQL",
    icon: "file-icons:graphql",
  },
  {
    name: "Python",
    icon: "lineicons:python",
  },
  {
    name: "AWS",
    icon: "lineicons:aws",
  }
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 overflow-hidden max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-left">Tech Stack</h2>
        <div className="relative">
          {/* Outer container with inset shadow */}
          <div className="relative rounded-xl bg-background/80 backdrop-blur-sm p-6
            shadow-[inset_0_0_15px_rgba(0,0,0,0.1)]
            before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]
            after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-background/80 after:via-transparent after:to-background/80"
          >
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/90 to-transparent z-10" />
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/90 to-transparent z-10" />
            
            {/* Content container */}
            <div className="relative overflow-hidden">
              <motion.div
                animate={{
                  x: [0, "-100%"]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                className="flex gap-8"
              >
                {[...technologies, ...technologies].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex flex-col items-center gap-2 min-w-[100px]"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center relative
                      before:absolute before:inset-0 before:rounded-lg before:bg-muted/50 before:backdrop-blur-sm
                      hover:before:bg-muted/80 before:transition-colors
                      shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                    >
                      <Icon icon={tech.icon} className="w-8 h-8 relative z-10" />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom shadow for depth */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[98%] h-4 bg-black/10 blur-lg rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}