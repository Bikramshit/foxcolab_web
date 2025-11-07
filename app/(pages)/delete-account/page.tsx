"use client"

import Footer from "@/app/components/LandingPage/Footer"
import Header from "@/app/components/LandingPage/Header"
import { motion } from "framer-motion"
import { Trash2, Mail, Clock, ShieldCheck } from "lucide-react"

export default function Page() {
  return (
    <>
      <Header />

      <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-muted/40 dark:from-slate-950 dark:to-slate-900 text-foreground mt-[5rem]">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-primary/25 to-secondary/25 blur-3xl opacity-25 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto px-6 py-20">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Delete Your Foxcolab Account
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-10"
          >
            {/* Intro Section */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                At Foxcolab, you can permanently delete your account and all associated data at any time.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Once deleted, your information will be permanently removed from our systems. Please read below to understand the process and what data will be erased.
              </p>
            </div>

            {/* Steps Section */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-card/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Trash2 className="w-6 h-6 text-destructive" />
                  <h3 className="text-lg font-semibold">How to Request Deletion</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>Open the <strong>Foxcolab</strong> app.</li>
                  <li>Go to <strong> Settings → Account → Delete Account</strong>.</li>
                  <li>Confirm deletion. Your account and data will be removed within <strong>30 days</strong>.</li>
                  <li>
                    If you can’t access the app, email us at{" "}
                    <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">
                      contact@foxcolab.com
                    </a>{" "}
                    with your registered mobile number.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-card/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold">Data That Will Be Deleted</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Profile details (name, photo, mobile number)</li>
                  <li>Messages, chat history, and media</li>
                  <li>Files, forms, polls, and forum activity</li>
                  <li>Account settings and preferences</li>
                </ul>
              </motion.div>
            </div>

            {/* Retention Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-500" />
                <h3 className="text-lg font-semibold">Data Retention Policy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We may retain minimal server logs and security-related data for up to <strong>30 days</strong> after account deletion to ensure
                system integrity and prevent fraud. After this period, all remaining data is permanently erased.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-card/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border text-center"
            >
              <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                If you face any issue deleting your account, our support team will assist you promptly.
              </p>
              <a
                href="mailto:contact@foxcolab.com"
                className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
              >
                Contact Support
              </a>
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  )
}
