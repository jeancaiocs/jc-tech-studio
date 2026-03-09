import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { solutions } from '../constants/data'

export default function Solucao() {
  return (
    <section id="solucao" className="py-[120px]" style={{ background: '#050508' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          tag="✅ A solução"
          title='Como eu <span class="grad-text">resolvo isso</span>'
          sub="Cada projeto é construído com uma estratégia clara e execução impecável."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(124,58,237,0.1)' }}
              className="card-base"
              style={{ cursor: 'default' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }}
              />
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl mb-5"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.2)',
                }}
              >
                {s.icon}
              </div>
              <h3 className="font-syne font-bold text-lg mb-2.5">{s.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-[1.65]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
