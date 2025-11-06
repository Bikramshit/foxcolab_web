"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye } from "lucide-react"

export default function Security() {
  return (
    <section
      id="security"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/10 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-primary dark:bg-emerald-500 rounded-full mix-blend-screen opacity-5 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4">
            Security You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground dark:text-slate-400">
            Multiple layers of protection for your conversations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "End-to-End Encryption",
              desc: "Messages are encrypted on your device before transmission",
            },
            {
              icon: Shield,
              title: "Zero-Knowledge Architecture",
              desc: "We cannot access your messages even if we wanted to",
            },
            {
              icon: Eye,
              title: "No Data Tracking",
              desc: "Your privacy is respected. No ads, no data selling.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <motion.div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-primary/30 dark:shadow-emerald-500/30">
                <item.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground dark:text-white">{item.title}</h3>
              <p className="text-muted-foreground dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Encryption visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-primary/10 dark:bg-emerald-500/10 border border-primary/20 dark:border-emerald-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {["Message", "Encryption", "Transmission", "Decryption"].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3 flex-1">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground"
                >
                  {i + 1}
                </motion.div>
                <span className="text-foreground dark:text-slate-300 font-medium text-center">{step}</span>
                {i < 3 && (
                  <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
