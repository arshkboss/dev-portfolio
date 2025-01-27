"use client"

import { Home, User, Briefcase,  Phone } from 'lucide-react'
import { NavBar } from "@/components/tubelight-navbar"
 
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Contact  ', url: '#contact', icon: Phone }
  ]

  return <NavBar items={navItems} />
}