"use client"

import { motion } from "framer-motion"

export default function PhoneMockup() {
  const messages = [
    { text: "Hey, are you there?", time: "2:34 PM", user: "other" },
    { text: "Yes! Just finished the meeting", time: "2:35 PM", user: "self" },
    { text: "🎉 Great! Want to call?", time: "2:36 PM", user: "other" },
  ]

  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      className="relative w-72 h-96"
    >
      {/* Phone frame */}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
        {/* Screen */}
        <div className="absolute inset-2 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden">
          {/* Status bar */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm px-4 py-2 flex justify-between items-center text-xs text-slate-300 border-b border-emerald-500/10">
            <span>9:41</span>
            <span>●●●●●</span>
          </div>

          {/* Chat */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex ${msg.user === "self" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-xs ${
                    msg.user === "self"
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-medium"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-2"
            >
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-1 bg-slate-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Input area */}
          <div className="bg-gradient-to-t from-slate-950/50 to-transparent backdrop-blur-sm p-4 border-t border-emerald-500/10">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-slate-800/50 border border-emerald-500/20 rounded-full px-4 py-2 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <span className="text-slate-950 font-bold">→</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl pointer-events-none"
        />
      </div>
    </motion.div>
  )
}
