"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  company: string
  duration: string
  role: string
  description: string
  longDescription: string
  techStack: string[]
  image: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "High-Load Trading Platform",
    company: "QuantTech Solutions",
    duration: "Jan 2023 - Present",
    role: "Lead System Architect",
    description: "Architected a high-frequency trading platform processing 1M+ transactions per second",
    longDescription: "Engineered a cutting-edge trading platform utilizing Rust and CUDA for ultra-low latency operations. Implemented advanced algorithmic trading strategies and real-time market analysis systems.",
    techStack: ["Rust", "CUDA", "C++", "PostgreSQL", "Redis", "Kubernetes"],
    image: "/projects/trading.png"
  },
  {
    id: 2,
    title: "Distributed ML Pipeline",
    company: "AI Dynamics",
    duration: "June 2022 - Dec 2022",
    role: "Senior Backend Engineer",
    description: "Built distributed machine learning infrastructure handling petabytes of data",
    longDescription: "Developed a scalable ML pipeline processing petabytes of data using distributed computing. Implemented fault-tolerant architecture with automatic recovery mechanisms.",
    techStack: ["Python", "TensorFlow", "Kubernetes", "Apache Kafka", "MongoDB"],
    image: "/projects/ml-pipeline.png"
  },
  {
    id: 3,
    title: "Blockchain Protocol",
    company: "CryptoTech Labs",
    duration: "Jan 2022 - May 2022",
    role: "Protocol Engineer",
    description: "Developed core protocol features for a Layer 2 blockchain solution",
    longDescription: "Implemented critical protocol-level features for a high-performance Layer 2 blockchain. Optimized consensus mechanisms and reduced transaction confirmation times by 70%.",
    techStack: ["Solidity", "Rust", "Go", "WebAssembly", "TypeScript"],
    image: "/projects/blockchain.png"
  }
]

export function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-start max-w-4xl mx-auto">Engineering Achievements</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line - aligned to left */}
        <div className="absolute left-0 h-full w-0.5 bg-gradient-to-b from-primary/50 to-primary/5" />

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
              
              {/* Project Card - always on right */}
              <div className="ml-8 w-full" onClick={() => setSelectedProject(project)}>
                <div className="group cursor-pointer bg-white/5 rounded-lg p-4 hover:shadow-lg transition-all">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white">View Details</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.company}</p>
                    <p className="text-sm text-muted-foreground">{project.duration}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="relative h-48 md:h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Role</h4>
                  <p className="text-muted-foreground">{selectedProject.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Description</h4>
                  <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}