
export default function SongCard({ song }: { song:any }){
  return (
    <div className="group bg-surface border border-line rounded-[16px] overflow-hidden hover:border-gold/30 transition">
      <div className="aspect-square bg-surface2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#201E1B] to-[#0E0E0C] group-hover:from-[#25221E] group-hover:to-[#151310] transition" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-3xl tracking-tight">{song.title}</span>
        </div>
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-bg/70 backdrop-blur px-2.5 py-1 rounded-full border border-line">{song.type}</div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="font-medium leading-none">{song.title}</div>
          <div className="text-[12px] text-muted mt-1">{song.year}</div>
        </div>
        <div className="flex gap-2">
          <a href={song.spotify||'#'} className="w-8 h-8 grid place-items-center rounded-full border border-line hover:bg-text hover:text-bg transition text-[11px]">↗</a>
        </div>
      </div>
    </div>
  )
}
