'use client'

import { motion } from 'framer-motion'
import { skills, projects } from '@/data/portfolio'
import { useState } from 'react'

interface SkillCardProps {
  skill: typeof skills[0]
  index: number
}

// Definir variantes directamente aquí
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-card rounded-xl p-6 border border-border hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Ícono y nombre */}
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <span className="text-sm text-muted-foreground capitalize">
            {skill.category}
          </span>
        </div>
      </div>

      {/* Barra de nivel */}
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Nivel de experiencia</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={isHovered ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  )
}

function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-accent'
          }`}
        >
          {category === 'all' ? 'Todas' : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  
  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))]
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

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

          {/* Filtros de categoría */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          {/* Grid de habilidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Estadísticas adicionales */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
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