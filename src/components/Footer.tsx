
import content from '../data/content.json'
export default function Footer(){
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="font-display text-xl">sammystave</div>
          <p className="text-muted text-sm mt-2 max-w-sm">Gospel songwriter, producer and founder building at the intersection of music, technology and enterprise.</p>
          <p className="text-[12px] text-muted mt-4">{content.profile.email} • {content.profile.location}</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-widest text-muted">Music</div>
            <a href={content.platforms.spotify} className="block hover:text-gold">Spotify</a>
            <a href={content.platforms.boomplay} className="block hover:text-gold">Boomplay</a>
            <a href={content.platforms.youtube} className="block hover:text-gold">YouTube</a>
          </div>
          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-widest text-muted">Ventures</div>
            <div className="text-muted">Stave Industries Inc.</div>
            <div className="text-muted">RGPN</div>
            <div className="text-muted">Spelbum</div>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-[11px] tracking-widest uppercase text-muted">© {new Date().getFullYear()} Sammystave — sammystave.me</div>
    </footer>
  )
}
