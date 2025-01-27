import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { NavBar } from "@/components/tubelight-navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Modern developer portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { name: "About", url: "#about" },
    { name: "Tech Stack", url: "#tech-stack" },
    { name: "Experience", url: "#experience" },
    { name: "Contact", url: "#contact" },
  ]
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar items={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 