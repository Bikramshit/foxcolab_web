"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PhoneMockup from "./PhoneMockup"
import Image from "next/image"


export default function Hero({ scrollY }: { scrollY: number }) {
  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
  {/* Ambient glow gradients */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent dark:from-primary/30 dark:via-secondary/25 blur-3xl opacity-40 animate-pulse-slow" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-gradient-to-r from-secondary/20 via-primary/20 to-transparent dark:from-secondary/30 dark:via-primary/25 blur-3xl opacity-40 animate-pulse-slow" />
  </div>

  {/* Floating soft particles */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      animate={{ y: [0, -25, 0] }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      className="absolute top-24 left-12 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20"
    />
    <motion.div
      animate={{ y: [0, 25, 0] }}
      transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      className="absolute bottom-16 right-12 w-64 h-64 rounded-full blur-3xl bg-gradient-to-tr from-secondary/10 to-transparent dark:from-secondary/20"
    />
  </div>

  {/* Main content */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 sm:px-8 lg:px-12 relative z-10 mt-[5rem]">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block backdrop-blur-xl px-4 py-2 mt-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-primary dark:text-emerald-300 shadow-sm"
      >
        🔒 End-to-End Encrypted
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white"
      >
        Chat Without Limits.
        <br />
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Stay Truly Private.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-xl text-neutral-600 dark:text-slate-300 max-w-xl leading-relaxed"
      >
        Lightning-fast, zero tracking, and protected by cutting-edge encryption.  
        Experience the next generation of private communication.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
        >
          Download App
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border border-primary/50 text-primary hover:bg-primary/10 dark:text-emerald-300 dark:border-emerald-400/50 dark:hover:bg-emerald-400/10 backdrop-blur-xl transition-all"
        >
          Start Secure Chat
        </Button>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-3 gap-6 pt-10 border-t border-border/40 dark:border-slate-700/50"
      >
        {[
          { label: "Active Users", value: "10M+", color: "text-primary dark:text-emerald-400" },
          { label: "Uptime", value: "99.9%", color: "text-secondary dark:text-cyan-400" },
          { label: "Countries", value: "150+", color: "text-primary dark:text-emerald-400" },
        ].map((item, i) => (
          <div key={i} className="space-y-2">
            <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
            <div className="text-sm text-neutral-600 dark:text-slate-400">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    {/* Phone Mockup / Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 shadow-2xl border border-black/5 dark:border-white/10 transition-colors duration-500">
        <div className="rounded-[2rem] overflow-hidden backdrop-blur-2xl bg-white/10 dark:bg-white/5">
          <Image
            src="/Mobile_screen.webp"
            alt="Secure Chat Preview"
            width={400}
            height={800}
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
      <div className="absolute -bottom-8 -left-10 w-40 h-40 bg-gradient-to-tr from-primary/20 to-transparent dark:from-primary/30 blur-2xl opacity-50 animate-float-slow" />
    </motion.div>
  </div>
</section>

//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/80 to-background/60">
//   {/* Soft gradient lights */}
//   <div className="absolute inset-0 -z-10">
//     <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent blur-3xl opacity-40 animate-pulse-slow" />
//     <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-gradient-to-r from-secondary/30 via-primary/20 to-transparent blur-3xl opacity-40 animate-pulse-slow" />
//   </div>

//   {/* Floating particles (optional aesthetic) */}
//   <div className="absolute inset-0 pointer-events-none overflow-hidden">
//     <motion.div
//       animate={{ y: [0, -20, 0] }}
//       transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//       className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
//     />
//     <motion.div
//       animate={{ y: [0, 30, 0] }}
//       transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
//       className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
//     />
//   </div>

//   {/* Content */}
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 sm:px-8 lg:px-12 relative z-10 mt-[5rem]">
//     {/* Text Section */}
//     <motion.div
//       initial={{ opacity: 0, x: -40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="space-y-8"
//     >
//       <motion.span
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="inline-block backdrop-blur-xl px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary dark:text-emerald-300 shadow-md"
//       >
//         🔒 End-to-End Encrypted
//       </motion.span>

//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight  text-black dark:text-white"
//       >
//         Chat Without Limits.
//         <br />
//         <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//           Stay Truly Private.
//         </span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="text-lg sm:text-xl text-muted-foreground dark:text-slate-300 max-w-xl leading-relaxed"
//       >
//         Lightning-fast, zero tracking, and protected by cutting-edge encryption.  
//         Welcome to the future of secure conversations.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="flex flex-col sm:flex-row gap-4 pt-4"
//       >
//         <Button
//           size="lg"
//           className="bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base shadow-lg hover:shadow-primary/30 transition-all duration-300"
//         >
//           Download App
//           <ArrowRight className="w-5 h-5 ml-2" />
//         </Button>
//         <Button
//           size="lg"
//           variant="outline"
//           className="border border-primary/50 text-primary hover:bg-primary/10 dark:text-emerald-300 dark:border-emerald-400/50 dark:hover:bg-emerald-400/10 backdrop-blur-xl transition-all"
//         >
//           Start Secure Chat
//         </Button>
//       </motion.div>

//       {/* Stats */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="grid grid-cols-3 gap-6 pt-10 border-t border-border/40 dark:border-slate-700/50"
//       >
//         {[
//           { label: "Active Users", value: "10M+", color: "text-primary dark:text-emerald-400" },
//           { label: "Uptime", value: "99.9%", color: "text-secondary dark:text-cyan-400" },
//           { label: "Countries", value: "150+", color: "text-primary dark:text-emerald-400" },
//         ].map((item, i) => (
//           <div key={i} className="space-y-2">
//             <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
//             <div className="text-sm text-muted-foreground dark:text-slate-400">{item.label}</div>
//           </div>
//         ))}
//       </motion.div>
//     </motion.div>

//     {/* Image / Device Mockup */}
//     <motion.div
//       initial={{ opacity: 0, x: 40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="relative flex justify-center lg:justify-end"
//     >
//       <div className="relative rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 shadow-2xl border">
//         <div className="rounded-[2rem] overflow-hidden backdrop-blur-2xl bg-white/5">
//           <Image
//             src="/Mobile_screen.webp"
//             alt="Secure Chat Preview"
//             width={400}
//             height={800}
//             className="object-cover"
//             quality={100}
//           />
//         </div>
//       </div>
//       <div className="absolute -bottom-8 -left-10 w-40 h-40 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50 animate-float-slow" />
//     </motion.div>
//   </div>
// </section>

    // <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    //   {/* Animated background elements - adaptive to theme */}
    //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //     <motion.div
    //       animate={{ y: scrollY * 0.5 }}
    //       className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen opacity-10 dark:opacity-10 blur-3xl"
    //     />
    //     <motion.div
    //       animate={{ y: scrollY * 0.3 }}
    //       className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-screen opacity-10 dark:opacity-10 blur-3xl"
    //     />
    //   </div>

    //   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
    //     <motion.div
    //       initial={{ opacity: 0, x: -50 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //       className="space-y-8"
    //     >
    //       <div className="space-y-4">
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ delay: 0.2, duration: 0.6 }}
    //           className="inline-block"
    //         >
    //           <span className="px-4 py-2 rounded-full bg-primary/10 dark:bg-emerald-500/10 border border-primary/30 dark:border-emerald-500/30 text-primary dark:text-emerald-300 text-sm font-medium">
    //             🔒 End-to-End Encrypted
    //           </span>
    //         </motion.div>
    //         <motion.h1
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ delay: 0.3, duration: 0.6 }}
    //           className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground dark:text-white leading-tight"
    //         >
    //           Chat Freely.{" "}
    //           <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    //             Stay Private.
    //           </span>
    //         </motion.h1>
    //         <motion.p
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ delay: 0.4, duration: 0.6 }}
    //           className="text-xl text-muted-foreground dark:text-slate-300 max-w-xl"
    //         >
    //           Military-grade encryption. Zero data tracking. Lightning-fast delivery. Experience the future of private
    //           communication.
    //         </motion.p>
    //       </div>

    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.5, duration: 0.6 }}
    //         className="flex flex-col sm:flex-row gap-4 pt-4"
    //       >
    //         <Button
    //           size="lg"
    //           className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
    //         >
    //           Download App
    //           <ArrowRight className="w-5 h-5 ml-2" />
    //         </Button>
    //         <Button
    //           size="lg"
    //           variant="outline"
    //           className="border-primary/50 text-primary hover:bg-primary/10 font-semibold text-base dark:border-emerald-500/50 dark:text-emerald-300 dark:hover:bg-emerald-500/10 bg-transparent"
    //         >
    //           Start Secure Chat
    //         </Button>
    //       </motion.div>

    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.6, duration: 0.6 }}
    //         className="grid grid-cols-3 gap-4 pt-8 border-t border-border dark:border-slate-700/50"
    //       >
    //         <div className="space-y-2">
    //           <div className="text-2xl font-bold text-primary dark:text-emerald-400">10M+</div>
    //           <div className="text-sm text-muted-foreground dark:text-slate-400">Active Users</div>
    //         </div>
    //         <div className="space-y-2">
    //           <div className="text-2xl font-bold text-secondary dark:text-cyan-400">99.9%</div>
    //           <div className="text-sm text-muted-foreground dark:text-slate-400">Uptime</div>
    //         </div>
    //         <div className="space-y-2">
    //           <div className="text-2xl font-bold text-primary dark:text-emerald-400">150+</div>
    //           <div className="text-sm text-muted-foreground dark:text-slate-400">Countries</div>
    //         </div>
    //       </motion.div>
    //     </motion.div>

    //     <motion.div
    //       initial={{ opacity: 0, x: 50 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //       className="relative"
    //     >

    //       <Image src={"/Mobile_screen.webp"} alt="" height={100} width={100} quality={100} />
    //       {/* <PhoneMockup /> */}
    //     </motion.div>
    //   </div>
    // </section>
  )
}
