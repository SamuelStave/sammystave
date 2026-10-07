
import content from '../data/content.json'
import SongCard from '../components/SongCard'

export default function Music(){
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
      <div className="max-w-3xl">
        <h1 className="font-display text-[56px] leading-[0.9]">Music</h1>
        <p className="font-display text-[24px] leading-tight mt-4">Gospel across many styles. Afro gospel is only one of them.</p>
        <p className="text-muted mt-4 text-[14px] leading-relaxed">Featuring Close, GOD, Pariwo, Away, See, Eli Jah, Lifted and more. 2018 releases excluded from this collection. All songs available on Spotify, Boomplay, YouTube Music, YouTube and SoundCloud.</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {Object.entries(content.platforms).slice(0,5).map(([k,v])=><a key={k} href={v as string} target="_blank" className="text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-line hover:border-text transition">{k}</a>)}
        </div>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {content.songs.map(s=><SongCard key={s.title} song={s} />)}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-16">
        <div className="bg-surface border border-line rounded-[20px] p-6">
          <div className="text-[11px] uppercase tracking-widest text-muted">Spotify Embed</div>
          <div className="mt-4 h-[352px] rounded-xl bg-bg border border-line grid place-items-center text-muted text-sm text-center p-6">Replace src in content.json → embeds.spotifyEmbed<br/>Example: https://open.spotify.com/embed/artist/...</div>
        </div>
        <div className="bg-surface border border-line rounded-[20px] p-6">
          <div className="text-[11px] uppercase tracking-widest text-muted">YouTube / TikTok / Instagram</div>
          <div className="mt-4 space-y-3">
            <div className="h-[200px] rounded-xl bg-bg border border-line grid place-items-center text-muted text-sm">YouTube: Add video IDs to content.json → embeds.youtubeIds</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-[140px] rounded-xl bg-bg border border-line grid place-items-center text-muted text-xs">TikTok embed</div>
              <div className="h-[140px] rounded-xl bg-bg border border-line grid place-items-center text-muted text-xs">Instagram embed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
