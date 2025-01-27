import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { NavBarDemo } from "@/components/nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: " Dmitri Kalinov | Senior Software Engineer",
  description: "Senior Software Engineer | Full Stack Developer | DevOps Engineer | Cloud Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header>
        <link rel="icon" href="/D2.ico" sizes="any" />
        </header>
        <ThemeProvider>
          <NavBarDemo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 