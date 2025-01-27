"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    name: "Next.js",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "React",
    icon: "/tech/react.svg",
  },
  // Add more technologies...
]

// Duplicate the array to create seamless loop
const infiniteScroll = [...technologies, ...technologies]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
      
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
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
              <div className="relative w-12 h-12">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain dark:invert"
                />
              </div>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}