
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-line">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-[22px] tracking-[-0.02em]">sammystave</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase text-muted">
          <NavLink to="/music" className={({isActive})=> isActive ? 'text-text' : 'hover:text-text transition'}>Music</NavLink>
          <NavLink to="/ventures" className={({isActive})=> isActive ? 'text-text' : 'hover:text-text transition'}>Ventures</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'text-text' : 'hover:text-text transition'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'text-text' : 'hover:text-text transition'}>Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="h-9 px-5 rounded-full bg-text text-bg text-[13px] font-medium flex items-center hover:bg-white transition">Book</Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-line">≡</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-surface px-6 py-6 space-y-4">
          <Link to="/music" onClick={()=>setOpen(false)} className="block">Music</Link>
          <Link to="/ventures" onClick={()=>setOpen(false)} className="block">Ventures</Link>
          <Link to="/about" onClick={()=>setOpen(false)} className="block">About</Link>
          <Link to="/contact" onClick={()=>setOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </header>
  )
}
