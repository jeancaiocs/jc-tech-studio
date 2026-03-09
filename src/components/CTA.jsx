import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP } from '../constants/data'

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-[120px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.06) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-[#22d3ee] mb-7">
            ⏰ Hora de agir
          </div>

          <h2
            className="font-syne font-extrabold tracking-tight leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            Enquanto você pensa,<br />
            seu concorrente{' '}
            <span className="grad-text">já está vendendo</span>
            <br />
            online.
          </h2>

          <p className="text-[18px] text-[#94a3b8] mb-[52px] max-w-[520px] mx-auto">
            Cada dia sem um site profissional é um dia de receita que vai para a concorrência. Vamos mudar isso agora.
          </p>

          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02, boxShadow: '0 0 100px rgba(124,58,237,0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-[14px] font-syne font-extrabold text-[17px] text-white no-underline relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
              boxShadow: '0 0 60px rgba(124,58,237,0.45)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 50%)' }}
            />
            <MessageCircle size={22} />
            Quero meu site profissional
          </motion.a>

          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            {['Orçamento sem compromisso', 'Resposta em até 2h', 'Sem contrato de fidelidade'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] text-[#64748b]">
                <span className="text-green-400">✓</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
