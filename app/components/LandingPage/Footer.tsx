"use client"

import { motion } from "framer-motion"
import { Lock } from "lucide-react"

export default function Footer() {
  const links = [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ]

  return (
    <footer className="bg-muted/50 dark:bg-slate-950/50 border-t border-border dark:border-emerald-500/20 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground dark:text-white">Foxcolab</span>
            </div>
            <p className="text-muted-foreground dark:text-slate-400 text-sm">Private communication for everyone.</p>
          </div>

          {[
            { title: "Product", items: ["Features", "Security", "Pricing"] },
            { title: "Company", items: ["About", "Blog", "Careers"] },
            { title: "Legal", items: ["Privacy", "Terms", "Contact"] },
          ].map((col, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-bold text-foreground dark:text-white">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border dark:border-slate-800 pt-8 flex flex-col justify-center sm:flex-row justify-between items-center text-muted-foreground dark:text-slate-400 text-sm">
          <p>&copy; 2025 Foxcolab Technologies. All rights reserved.</p>
        
        </div>
      </motion.div>
    </footer>
  )
}
