import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Scene3D from '@/components/Scene3D'

export default function Home() {
  return (
    <>
      {/* Escena 3D de fondo */}
      <Scene3D />
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
      </div>
    </>
  )
}