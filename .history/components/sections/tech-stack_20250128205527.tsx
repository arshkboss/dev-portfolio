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
          {/* Main container */}
          <div className="relative  bg-background/95 p-6 overflow-hidden">
            {/* Left inset shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-3
              bg-gradient-to-r from-black/[0.05] to-transparent 
              " 
            />
            
            {/* Right inset shadow 
            <div className="absolute right-0 top-0 bottom-0 w-20 
              bg-gradient-to-l from-black/[0.5] to-transparent 
              blur-[2px]" 
            />/**/}
            
            {/* Content container */}
            <div className="relative">
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
                       rounded-lg backdrop-blur-sm
                      
                      "
                    >
                      <Icon icon={tech.icon} className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Subtle bottom shadow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-2 bg-black/5 blur-lg rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}