'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Enlaces superpuestos */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
            </Link>
          )}
        </div>

        {/* Badge de proyecto destacado */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
              Destacado
            </span>
          </div>
        )}
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <Github className="w-3 h-3" />
              Código
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div>
          {/* Título de la sección */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades en desarrollo web moderno,
              desde aplicaciones completas hasta componentes especializados.
            </p>
          </motion.div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA adicional */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="https://github.com/Cris21men"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              Ver más en GitHub
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}