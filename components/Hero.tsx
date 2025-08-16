'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Contenido principal */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{}}
          animate={{}}
          transition={{
            staggerChildren: 0.1
          }}
        >
          {/* Avatar */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Efecto de brillo giratorio */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin" 
                   style={{ animationDuration: '3s' }}>
                <div className="w-full h-full rounded-full bg-background m-[2px]"></div>
              </div>
            </div>
          </motion.div>

          {/* Nombre */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Título */}
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Descripción */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {personalInfo.description}
          </motion.p>

          {/* Ubicación */}
          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar</span>
            </Link>
            
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
            </Link>
            
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll para explorar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
    </section>
  )
}