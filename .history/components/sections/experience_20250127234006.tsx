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
    title: "E-Commerce Platform",
    company: "TechCorp Inc",
    duration: "Jan 2023 - Present",
    role: "Senior Frontend Developer",
    description: "Built a scalable e-commerce platform with Next.js",
    longDescription: "Led the development of a modern e-commerce platform serving over 100k monthly users. Implemented real-time inventory management, payment processing, and order tracking systems.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "PostgreSQL"],
    image: "/projects/ecommerce.png"
  },
  {
    id: 2,
    title: "Saas Platform",
    company: "Mavn Inc",
    duration: "july 2023 - Dec 2023",
    role: "Senior Frontend Developer",
    description: "Built a Saas Platform for a client",
    longDescription: "Led the development of a modern e-commerce platform serving over 100k monthly users. Implemented real-time inventory management, payment processing, and order tracking systems.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS","Auth0"],
    image: "/projects/ecommerce.png"
  },{
    id: 3,
    title: "E-Commerce Platform",
    company: "TechCorp Inc",
    duration: "Jan 2023 - Present",
    role: "Senior Frontend Developer",
    description: "Built a scalable e-commerce platform with Next.js",
    longDescription: "Led the development of a modern e-commerce platform serving over 100k monthly users. Implemented real-time inventory management, payment processing, and order tracking systems.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "PostgreSQL"],
    image: "/projects/ecommerce.png"
  }
]

export function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 to-primary/5" />

        {/* Project Cards */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              
              {/* Project Card */}
              <div 
                className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="group cursor-pointer">
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