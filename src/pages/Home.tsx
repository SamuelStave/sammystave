
import { Link } from 'react-router-dom'
import content from '../data/content.json'
import SongCard from '../components/SongCard'
import VentureCard from '../components/VentureCard'

export default function Home(){
  return (
    <div>
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 lg:pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted border border-line rounded-full px-3 py-1">Now — Available for bookings & collaborations</div>
            <h1 className="font-display text-[56px] lg:text-[92px] leading-[0.9] tracking-[-0.04em] mt-6">sammystave</h1>
            <p className="font-display text-[28px] lg:text-[36px] leading-[1.05] mt-6 max-w-[18ch]">Gospel songwriter, producer and founder building at the intersection of music, technology and enterprise.</p>
            <p className="text-muted text-[15px] leading-relaxed max-w-[46ch] mt-6">Nigerian gospel across many styles — not boxed into Afro-gospel alone. Writing, producing and building ecosystems for talent and commerce.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/music" className="h-11 px-6 rounded-full bg-text text-bg text-sm font-medium inline-flex items-center hover:bg-white transition">Listen to Music</Link>
              <Link to="/contact" className="h-11 px-6 rounded-full border border-line text-sm inline-flex items-center hover:border-text transition">Book / Collaborate</Link>
            </div>
            <div className="flex gap-6 mt-10 text-[12px] tracking-widest uppercase text-muted">
              <a href={content.platforms.spotify} className="hover:text-text">Spotify</a>
              <a href={content.platforms.boomplay} className="hover:text-text">Boomplay</a>
              <a href={content.platforms.youtube} className="hover:text-text">YouTube</a>
              <a href={content.platforms.soundcloud} className="hover:text-text">SoundCloud</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[28px] bg-surface border border-line overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-surface2 to-bg" />
              <div className="absolute inset-0 grid place-items-center text-center p-8">
                <div>
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 grid place-items-center font-display text-2xl">SS</div>
                  <div className="mt-6 font-display text-2xl">Replace with real photo</div>
                  <div className="text-[12px] text-muted mt-2">Place image at /public/images/sammystave.jpg</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface border border-line rounded-2xl p-4 shadow-2xl hidden lg:block">
              <div className="text-[11px] uppercase tracking-widest text-muted">Latest Release</div>
              <div className="font-display text-xl mt-1">Lifted</div>
              <div className="text-xs text-muted">Available everywhere</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 border-t border-line">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[36px]">Selected Music</h2>
          <Link to="/music" className="text-sm border-b border-line pb-1 hover:border-text">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {content.songs.slice(0,3).map(s=><SongCard key={s.title} song={s} />)}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 border-t border-line">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-gold">Ventures</div>
          <h2 className="font-display text-[40px] leading-[0.95] mt-3">Three initiatives, one mission — unfold Nigeria's potential.</h2>
          <p className="text-muted mt-4">Spelbum and RGPN are built to fuel Stave Industries Inc.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {content.ventures.map(v=><VentureCard key={v.id} venture={v} />)}
        </div>
      </section>
    </div>
  )
}
