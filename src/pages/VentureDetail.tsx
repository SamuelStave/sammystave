
import { useParams, Link } from 'react-router-dom'
import content from '../data/content.json'

export default function VentureDetail(){
  const { id } = useParams()
  const venture = content.ventures.find(v=>v.id===id)
  if(!venture) return <div className="max-w-[1280px] mx-auto px-6 py-20">Venture not found. <Link to="/ventures" className="underline">Back</Link></div>
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
      <Link to="/ventures" className="text-sm text-muted hover:text-text">← All ventures</Link>
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 mt-8">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-gold">{venture.tagline} • {venture.status}</div>
          <h1 className="font-display text-[56px] leading-[0.9] mt-3">{venture.name}</h1>
          <p className="font-display text-[24px] leading-tight mt-6 max-w-[22ch]">{venture.short}</p>
          <p className="text-muted leading-relaxed mt-6 max-w-[50ch]">{venture.long}</p>
          <div className="flex flex-wrap gap-2 mt-8">
            {venture.focus.map((f:string)=><span key={f} className="text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-line">{f}</span>)}
          </div>
        </div>
        <div className="bg-surface border border-line rounded-[24px] p-8">
          <h3 className="font-display text-[24px]">Partner / Invest / Join</h3>
          <p className="text-sm text-muted mt-3">RGPN is for artists, Spelbum for commerce partners, Stave Industries for long-term investors. Tell us where you fit.</p>
          <Link to="/contact" className="mt-6 h-11 px-6 rounded-full bg-text text-bg text-sm font-medium inline-flex items-center hover:bg-white">Start Conversation</Link>
          <div className="mt-8 pt-8 border-t border-line text-[12px] text-muted space-y-2">
            <div>Next phases: Dedicated pitch decks, traction metrics, team page</div>
            <div>Contact: {content.profile.email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
