
import { Link } from 'react-router-dom'
export default function VentureCard({ venture }: { venture:any }){
  return (
    <Link to={`/ventures/${venture.id}`} className="group bg-surface border border-line rounded-[20px] p-7 hover:border-gold/40 transition flex flex-col">
      <div className="flex items-start justify-between">
        <div className="text-[11px] uppercase tracking-widest text-gold">{venture.tagline}</div>
        <div className="text-[10px] px-2 py-1 rounded-full border border-line text-muted">{venture.status}</div>
      </div>
      <h3 className="font-display text-[26px] mt-4 leading-[1.1]">{venture.name}</h3>
      <p className="text-[14px] leading-relaxed text-muted mt-3 flex-1">{venture.short}</p>
      <div className="flex flex-wrap gap-2 mt-6">
        {venture.focus.map((f:string)=><span key={f} className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-surface2 border border-line">{f}</span>)}
      </div>
      <div className="mt-6 text-[13px] tracking-wide group-hover:gap-2 flex items-center gap-1">View venture <span>→</span></div>
    </Link>
  )
}
