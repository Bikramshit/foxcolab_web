"use client"

import { motion } from "framer-motion"
import { Lock, Video, MessageCircle, Moon, Smartphone, Zap } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption on every message. Only you and your recipient can read it.",
  },
  {
    icon: Video,
    title: "HD Video & Audio Calls",
    description: "Crystal-clear communication with ultra-low latency technology.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Messaging",
    description: "Instant message delivery with read receipts and typing indicators.",
  },
  {
    icon: Moon,
    title: "Dark Mode Interface",
    description: "Beautiful dark theme optimized for your eyes and battery life.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Sync",
    description: "Seamlessly sync across iOS, Android, Web, and Desktop.",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Delivery",
    description: "Optimized for speed with average delivery under 100ms.",
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground dark:text-slate-400">
            Everything you need for secure, private communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-card dark:bg-slate-800/40 border border-primary/20 dark:border-emerald-500/20 hover:border-primary/40 dark:hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-emerald-500/5 dark:to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 dark:group-hover:shadow-emerald-500/50 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground dark:text-slate-400 group-hover:text-foreground dark:group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
