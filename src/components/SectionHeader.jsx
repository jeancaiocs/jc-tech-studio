import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-[72px]"
    >
      <span className="section-tag">{tag}</span>
      <h2
        className="font-syne font-extrabold tracking-tight leading-[1.15]"
        style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p className="text-[#94a3b8] mt-4 text-[17px] max-w-[500px] mx-auto">{sub}</p>
      )}
    </motion.div>
  )
}
