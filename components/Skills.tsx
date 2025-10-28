'use client'

import { motion } from 'framer-motion'
import { skills, projects } from '@/data/portfolio'
import { useState } from 'react'

// Variantes de animación
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

interface CategorySectionProps {
  title: string
  skills: typeof skills
  colorClass: string
}

function CategorySection({ title, skills, colorClass }: CategorySectionProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Título de categoría */}
      <h3 className={`text-xl font-bold mb-6 ${colorClass}`}>
        {title}
      </h3>

      {/* Pills/Tags */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`group relative px-5 py-3 rounded-full bg-card border border-border hover:border-${colorClass.split('-')[1]}-500/50 transition-all duration-300 cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 10px 30px -10px rgba(147, 51, 234, 0.3)'
            }}
          >
            {/* Contenido del tag */}
            <div className="flex items-center gap-2">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium text-sm group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>

            {/* Efecto glow en hover */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
              initial={false}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  // Agrupar skills por categoría
  const frontendSkills = skills.filter(s => s.category === 'frontend')
  const backendSkills = skills.filter(s => s.category === 'backend')
  const toolsSkills = skills.filter(s => s.category === 'tools')
  const designSkills = skills.filter(s => s.category === 'design')

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Título de la sección */}
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear experiencias digitales 
              excepcionales y soluciones robustas.
            </p>
          </motion.div>

          {/* Categorías */}
          <div className="max-w-5xl mx-auto">
            {frontendSkills.length > 0 && (
              <CategorySection
                title="Frontend"
                skills={frontendSkills}
                colorClass="text-blue-500"
              />
            )}

            {backendSkills.length > 0 && (
              <CategorySection
                title="Backend"
                skills={backendSkills}
                colorClass="text-green-500"
              />
            )}

            {toolsSkills.length > 0 && (
              <CategorySection
                title="Tools"
                skills={toolsSkills}
                colorClass="text-orange-500"
              />
            )}

            {designSkills.length > 0 && (
              <CategorySection
                title="Design"
                skills={designSkills}
                colorClass="text-pink-500"
              />
            )}
          </div>

          {/* Estadísticas adicionales */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {skills.length}+
              </div>
              <div className="text-muted-foreground">Tecnologías</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {projects.length}+
              </div>
              <div className="text-muted-foreground">Proyectos</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                3+
              </div>
              <div className="text-muted-foreground">Años experiencia</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Pasión</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
