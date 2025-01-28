"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 0 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <section id="contact" className="py-20 relative z-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        <Card className="max-w-5xl mx-auto">
          <CardHeader>
            <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" required className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {[
                      { icon: Mail, text: "dmitri.devk@gmail.com", href: "mailto:fluidpixls@gmail.com" },
                      { icon: Phone, text: "+7 (911) 911-911", href: "tel:+7911911911" },
                      { icon: MapPin, text: "Saint Petersburg, Russia" }
                    ].map((item) => (
                      <motion.div
                        key={item.text}
                        variants={item}
                        className="group bg-muted hover:bg-primary/5 hover:shadow-sm duration-300 rounded-full px-4 py-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-background group-hover:bg-primary/10 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          {item.href ? (
                            <a href={item.href} className="text-sm hover:text-primary transition-colors">
                              {item.text}
                            </a>
                          ) : (
                            <span className="text-sm">{item.text}</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
} 