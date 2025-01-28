import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { NavBarDemo } from "@/components/nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

const setScrollbarWidth = `
  (function() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--removed-scroll-width', scrollbarWidth + 'px');
  })();
`

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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <script dangerouslySetInnerHTML={{ __html: setScrollbarWidth }} />
        <header>
          <link rel="icon" href="/D2.ico" sizes="any" />
        </header>
        <ThemeProvider>
          <NavBarDemo />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 