'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/studio21-logo.png"
              alt="Studio21"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span className="font-bold text-lg md:text-xl gradient-text">
              Studio21
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#proyectos" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </Link>
            <Link 
              href="#habilidades" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Habilidades
            </Link>
            <Link 
              href="mailto:tu@email.com" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}