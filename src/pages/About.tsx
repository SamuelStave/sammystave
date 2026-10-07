
import content from '../data/content.json'
export default function About(){
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="aspect-[4/5] rounded-[28px] bg-surface border border-line grid place-items-center text-center p-8">
          <div>
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 grid place-items-center font-display text-3xl">SS</div>
            <div className="mt-6 font-display text-xl">Photo Placeholder</div>
            <div className="text-xs text-muted mt-2">/public/images/sammystave.jpg</div>
          </div>
        </div>
        <div>
          <h1 className="font-display text-[56px] leading-[0.9]">About</h1>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Gospel Artist","Songwriter","Music Producer","Web Developer","Founder"].map(r=><span key={r} className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border border-line">{r}</span>)}
          </div>
          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-widest text-muted">Short Bio — For Press & Profiles</div>
            <p className="font-display text-[22px] leading-[1.2] mt-3">{content.profile.shortBio}</p>
          </div>
          <div className="mt-10">
            <div className="text-[11px] uppercase tracking-widest text-muted">Full Bio</div>
            <p className="text-[15px] leading-relaxed text-muted mt-3 whitespace-pre-line">{content.profile.fullBio}</p>
          </div>
          <div className="mt-10 p-6 rounded-[20px] bg-surface border border-line">
            <div className="text-[11px] uppercase tracking-widest text-muted">Music Note</div>
            <p className="text-sm leading-relaxed mt-2">Sammystave works across many gospel expressions - contemporary worship, praise, Afro-fusion, rap-infused gospel and intimate ballads. Afro gospel is part of the palette, not the whole picture.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
