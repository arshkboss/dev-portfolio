"use client"

import { motion, useAnimationControls } from "framer-motion"
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
  const controls = useAnimationControls()

  return (
    <section id="tech-stack" className="py-20 overflow-hidden max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-left">Tech Stack</h2>
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
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center gap-2 min-w-[100px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon icon={tech.icon} className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}