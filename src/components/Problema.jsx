import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { problems } from '../constants/data'

export default function Problema() {
  return (
    <section id="problema" className="py-[120px]" style={{ background: '#080b12' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          tag="⚡ O problema"
          title='Seu site atual está<br/><span class="grad-text">te custando dinheiro</span>'
          sub="A maioria dos sites não converte porque ignora o que realmente importa."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(239,68,68,0.3)' }}
              className="card-base"
              style={{ cursor: 'default' }}
            >
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl mb-5"
                style={{
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                {p.icon}
              </div>
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.7), transparent)' }}
              />
              <h3 className="font-syne font-bold text-lg mb-2.5">{p.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-[1.65]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
