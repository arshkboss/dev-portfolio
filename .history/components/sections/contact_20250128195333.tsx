"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section id="contact" className="py-20 relative z-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="group flex items-center gap-3 transition-colors hover:text-primary">
                      <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <a href="mailto:dmitri@example.com" className="text-sm">dmitri@example.com</a>
                    </div>
                    <div className="group flex items-center gap-3 transition-colors hover:text-primary">
                      <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <a href="tel:+7123456789" className="text-sm">+7 (123) 456-789</a>
                    </div>
                    <div className="group flex items-center gap-3 transition-colors hover:text-primary">
                      <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-sm">Saint Petersburg, Russia</span>
                    </div>
                    <div className="group flex items-center gap-3 transition-colors hover:text-primary">
                      <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-sm">UTC+3 (Moscow Time)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
} 