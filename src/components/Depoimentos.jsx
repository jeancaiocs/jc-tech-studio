import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { testimonials } from '../constants/data'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-[120px]" style={{ background: '#080b12' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          tag="⭐ Depoimentos"
          title='O que os clientes <span class="grad-text">falam</span>'
          sub="Resultados reais de quem apostou em uma presença digital profissional."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.3)' }}
              className="card-base"
            >
              <div className="text-yellow-400 text-sm tracking-[2px] mb-4">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-[15px] leading-[1.75] text-[#94a3b8] italic mb-6">{t.text}</p>
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold font-syne flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-syne font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
