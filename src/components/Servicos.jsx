import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { services } from '../constants/data'

export default function Servicos() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="servicos" className="py-[120px]" style={{ background: '#080b12' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          tag="🚀 Serviços"
          title='O que eu <span class="grad-text">entrego</span>'
          sub="Soluções completas para cada necessidade do seu negócio digital."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -8, borderColor: 'rgba(124,58,237,0.4)', boxShadow: '0 30px 80px rgba(124,58,237,0.12)' }}
              className="p-10 rounded-3xl relative overflow-hidden cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s' }}
            >
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, transparent 60%)' }}
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="font-syne text-[13px] font-bold tracking-[0.1em] text-[#9d5ff5] mb-5 relative z-10">{s.num}</div>

              {/* Arrow */}
              <motion.div
                className="absolute top-9 right-9 w-9 h-9 rounded-[10px] flex items-center justify-center text-base"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                animate={hovered === i
                  ? { background: '#7c3aed', borderColor: '#7c3aed', rotate: -45 }
                  : { background: 'transparent', borderColor: 'rgba(255,255,255,0.07)', rotate: 0 }
                }
                transition={{ duration: 0.2 }}
              >
                →
              </motion.div>

              <div
                className="w-16 h-16 rounded-[18px] flex items-center justify-center text-3xl mb-6 relative z-10"
                style={{ background: `linear-gradient(135deg, ${s.gradient.replace('from-', '').replace(' to-', ', ')})`, border: `1px solid ${s.border}` }}
              >
                {s.icon}
              </div>
              <h3 className="font-syne font-extrabold text-[22px] mb-3 relative z-10">{s.title}</h3>
              <p className="text-[#94a3b8] text-[15px] leading-[1.7] mb-7 relative z-10">{s.desc}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold tracking-[0.06em] uppercase px-3 py-1.5 rounded-full text-[#94a3b8]"
                    style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
