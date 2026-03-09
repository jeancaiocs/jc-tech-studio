import { motion } from 'framer-motion'
import { WHATSAPP, diffs } from '../constants/data'

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-[120px]" style={{ background: '#050508' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">💎 Diferenciais</span>
            <h2
              className="font-syne font-extrabold tracking-tight leading-[1.15] mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Por que me contratar e não uma agência genérica?
            </h2>
            <p className="text-[#94a3b8] text-[17px] leading-[1.75]">
              Enquanto agências grandes dividem atenção entre dezenas de clientes, você fala diretamente comigo — o desenvolvedor que vai colocar a mão no seu projeto, do início ao fim.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-9 inline-flex"
            >
              Vamos conversar →
            </a>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {diffs.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: 'rgba(124,58,237,0.35)', boxShadow: '0 8px 32px rgba(124,58,237,0.08)' }}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s' }}
              >
                <div
                  className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))',
                    border: '1px solid rgba(124,58,237,0.2)',
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <div className="font-syne font-bold text-base mb-1">{d.title}</div>
                  <div className="text-[13px] text-[#94a3b8] leading-[1.6]">{d.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
