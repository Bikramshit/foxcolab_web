
"use client"

import { motion } from "framer-motion"
import { Video, Mic, Phone } from "lucide-react"

export default function VideoCall() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/5 dark:bg-slate-950/50 transition-colors duration-300">
      {/* Animated background */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-secondary dark:bg-cyan-500 rounded-full mix-blend-screen opacity-5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4">
            Crystal Clear Video Calls
          </h2>
          <p className="text-xl text-muted-foreground dark:text-slate-400">HD video and audio with holographic UI</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Video call mockup */}
          <div className="relative bg-gradient-to-br from-card to-card dark:from-slate-800 dark:to-slate-900 rounded-3xl p-1 border border-primary/30 dark:border-emerald-500/30">
            <div className="bg-gradient-to-br from-background to-muted dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 rounded-3xl overflow-hidden">
              {/* Main video area */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-muted/30 dark:from-slate-700/30 to-muted dark:to-slate-900/50 flex items-center justify-center">
                {/* Animated mesh background */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="mesh" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="url(#grad)" strokeWidth="0.5" />
                      </pattern>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <rect width="100" height="100" fill="url(#mesh)" />
                  </svg>
                </div>

                {/* Users */}
                <div className="relative z-10 flex gap-4 w-full px-8">
                  {[0, 1].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                      className="flex-1 relative group"
                    >
                      <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 dark:border-emerald-500/50 aspect-video bg-gradient-to-br from-primary/20 dark:from-emerald-900/20 to-secondary/20 dark:to-cyan-900/20 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20"
                        />
                        <span className="absolute bottom-4 left-4 text-sm text-foreground dark:text-slate-300 font-medium">
                          User {i + 1}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-4 p-6 bg-gradient-to-t from-card/50 dark:from-slate-900/50 to-transparent backdrop-blur-sm">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-muted dark:bg-slate-700 hover:bg-muted/80 dark:hover:bg-slate-600 flex items-center justify-center transition-colors"
                >
                  <Mic className="w-6 h-6 text-foreground dark:text-slate-200" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                >
                  <Video className="w-6 h-6 text-primary-foreground" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors"
                >
                  <Phone className="w-6 h-6 text-red-400" />
                </motion.button>
              </div>
            </div>

            {/* Glow effect */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 dark:from-emerald-500/20 to-secondary/20 dark:to-cyan-500/20 rounded-3xl blur-xl pointer-events-none -z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
