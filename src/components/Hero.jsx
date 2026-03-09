import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP, stats } from '../constants/data'

function CountUp({ end, suffix, duration = 1500 }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(end / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= end) {
            el.textContent = end + suffix
            clearInterval(timer)
          } else {
            el.textContent = start + suffix
          }
        }, 16)
      }
    }, { threshold: 0.3 })
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix, duration])

  return (
    <span
      ref={ref}
      className="font-syne text-4xl font-extrabold"
      style={{
        background: 'linear-gradient(135deg, #c084fc, #22d3ee)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      0{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Orbs */}
      <div
        className="absolute rounded-full pointer-events-none animate-float-slow"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: -150, right: -100,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none animate-float-medium"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: 0, left: -80,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none animate-float-fast"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '50%', right: '30%',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <div className="max-w-[820px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-[13px] font-medium text-[#a78bfa]"
            style={{
              border: '1px solid rgba(124,58,237,0.3)',
              background: 'rgba(124,58,237,0.08)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot"
              style={{ boxShadow: '0 0 8px #22c55e' }}
            />
            Disponível para novos projetos
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold leading-[1.05] tracking-tight mb-7"
            style={{ fontSize: 'clamp(44px, 7vw, 88px)' }}
          >
            Seu site precisa<br />
            <span className="grad-text">vender.</span><br />
            Não apenas existir.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#94a3b8] font-light leading-[1.7] mb-11 max-w-[580px]"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            Crio experiências digitais que transformam visitantes em clientes. Design estratégico, performance real e obsessão por resultados — desde a primeira linha de código.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle size={18} />
              Solicitar orçamento
            </a>
            <a href="#portfolio" className="btn-ghost">
              Ver projetos
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-12 mt-[72px] pt-10 flex-wrap"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <CountUp end={s.num} suffix={s.suffix} />
                <div className="text-[13px] text-[#64748b] mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748b] text-[11px] tracking-[0.1em] uppercase">
        <div
          className="w-px h-10 animate-scroll-line"
          style={{ background: 'linear-gradient(to bottom, #64748b, transparent)' }}
        />
        scroll
      </div>
    </section>
  )
}
