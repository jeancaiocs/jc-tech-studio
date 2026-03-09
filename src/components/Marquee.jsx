import { marqueeItems } from '../constants/data'

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div
      className="py-8 overflow-hidden relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex gap-12 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 font-syne text-sm font-semibold text-[#64748b] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
