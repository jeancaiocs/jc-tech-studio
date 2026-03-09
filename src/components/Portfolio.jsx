import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { projects } from '../constants/data'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-2xl overflow-hidden relative cursor-pointer"
      style={{ aspectRatio: '16/11', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Background */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        style={{ background: project.bg }}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center p-6">
          <div className="text-5xl mb-3">{project.emoji}</div>
          <div className="font-syne font-extrabold text-xl text-white">{project.name}</div>
          <div className="text-xs text-[#64748b] mt-1.5">{project.category}</div>
          <div className="flex gap-2 justify-center mt-4">
            <div className="w-10 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
            <div className="w-16 h-1.5 rounded-full bg-white/10" />
            <div className="w-8 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>
      </motion.div>

      {/* Always visible label */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 py-5"
        style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 100%)' }}
      >
        <span
          className="text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full inline-block mb-2"
          style={{ background: project.tagColor, border: `1px solid ${project.tagBorder}`, color: project.tagText }}
        >
          {project.category}
        </span>
        <div className="font-syne font-bold text-base">{project.name}</div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-7"
        style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.4) 50%, transparent 100%)' }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span
          className="text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full inline-block mb-2 w-fit"
          style={{ background: project.tagColor, border: `1px solid ${project.tagBorder}`, color: project.tagText }}
        >
          {project.category}
        </span>
        <div className="font-syne font-bold text-base">{project.name}</div>
        <div className="text-sm text-[#94a3b8] mt-1.5">{project.desc}</div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 mt-3.5 text-sm font-semibold text-[#22d3ee] no-underline"
        >
          Ver detalhes →
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[120px]" style={{ background: '#080b12' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          tag="💼 Portfólio"
          title='Projetos que <span class="grad-text">geraram resultados</span>'
          sub="Cada projeto foi construído com propósito e entregou retorno real."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
