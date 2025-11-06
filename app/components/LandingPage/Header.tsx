"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Lock, Sun, Moon, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/50 dark:bg-slate-950/50 border-b border-primary/20 dark:border-emerald-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Image src={"/Foxcolab_logo.webp"}  alt="" height={100} width={100} quality={100}  className="rounded-md"
                priority />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Foxcolab
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-muted-foreground dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#security"
            className="text-muted-foreground dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 transition-colors"
          >
            Security
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 transition-colors"
          >
            How it Works
          </a>
        </nav>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
          )}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"><Download/> Download</Button>
        </div>
      </div>
    </motion.header>
  )
}
