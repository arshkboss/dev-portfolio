"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

// Comprehensive list of modern tech stack
const technologies = [
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Redis",
    icon: "logos:redis",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "GraphQL",
    icon: "logos:graphql",
  },
  {
    name: "Rust",
    icon: "logos:rust",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Go",
    icon: "logos:go",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Kubernetes",
    icon: "logos:kubernetes",
  }
]

// Create infinite scroll effect by duplicating the array
const infiniteScroll = [...technologies, ...technologies]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 overflow-hidden max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Tech Arsenal</h2>
      
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8"
        >
          {infiniteScroll.map((tech, index) => (
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
    </section>
  )
}