import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP } from '../constants/data'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 border-b border-white/[0.07]'
            : 'py-5'
        }`}
        style={scrolled ? { background: 'rgba(5,5,8,0.85)', backdropFilter: 'blur(24px)' } : {}}
      >
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-syne font-extrabold text-xl text-[#f1f5f9] no-underline">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 0 12px #7c3aed',
              }}
            />
            JC Tech Studio
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-9 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#94a3b8] no-underline text-sm font-medium hover:text-[#f1f5f9] transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#22d3ee] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-syne font-bold text-sm text-white no-underline px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
              boxShadow: '0 0 20px rgba(124,58,237,0.4)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.6)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.4)'}
          >
            Falar comigo →
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-0.5 bg-[#f1f5f9] rounded transition-all duration-300"
              style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-[#f1f5f9] rounded transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-[#f1f5f9] rounded transition-all duration-300"
              style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 flex flex-col gap-6 p-10"
            style={{ background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(30px)' }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#f1f5f9] no-underline font-syne font-bold text-2xl pb-5 border-b border-white/[0.07]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-[#f1f5f9] no-underline font-syne font-bold text-2xl"
            >
              💬 WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
