"use client"

import { useState, useEffect } from "react"
import Header from "./components/LandingPage/Header"
import Hero from "./components/LandingPage/Hero"
import Features from "./components/LandingPage/Features"
import Security from "./components/LandingPage/Security"
import HowItWorks from "./components/LandingPage/HowItWorks"
import VideoCall from "./components/LandingPage/VideoCall"
import CTA from "./components/LandingPage/CTA"
import Footer from "./components/LandingPage/Footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300">
      <Header />
      <Hero scrollY={scrollY} />
      <Features />
      <Security />
      <HowItWorks />
      <VideoCall />
      <CTA />
      <Footer />
    </div>
  )
}
