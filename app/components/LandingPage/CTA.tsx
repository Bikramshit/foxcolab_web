"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-r from-primary to-secondary">
          <div className="relative bg-gradient-to-br from-background dark:from-slate-900 to-muted/20 dark:to-slate-950 rounded-3xl p-12 text-center space-y-6">
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white">
                Your Privacy. Your Control.
              </h2>
              <p className="text-xl text-muted-foreground dark:text-slate-400 mt-4">
                Join millions of users who trust Foxcolab for truly private communication.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
