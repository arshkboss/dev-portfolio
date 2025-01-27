"use client"

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/tubelight-navbar"
 
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    
  ]

  return <NavBar items={navItems} />
}