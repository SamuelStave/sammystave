
import content from '../data/content.json'
import VentureCard from '../components/VentureCard'
import { useState } from 'react'

export default function Ventures(){
  const [form,setForm]=useState({name:'', org:'', interest:'Partner', message:''})
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
      <div className="max-w-3xl">
        <h1 className="font-display text-[56px] leading-[0.9]">Ventures</h1>
        <p className="font-display text-[24px] leading-tight mt-4">Building systems that make talent and commerce thrive in Nigeria.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {content.ventures.map(v=><VentureCard key={v.id} venture={v} />)}
      </div>

      <div className="mt-16 bg-surface border border-line rounded-[24px] p-8 lg:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <div>
          <h3 className="font-display text-[32px] leading-[0.95]">How they connect</h3>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-4"><span className="w-28 text-[11px] uppercase tracking-widest px-3 py-2 rounded-full bg-bg border border-line text-center">RGPN</span><span className="text-muted">→</span><span className="text-sm">Grooms talent, builds catalog</span></div>
            <div className="flex items-center gap-4"><span className="w-28 text-[11px] uppercase tracking-widest px-3 py-2 rounded-full bg-bg border border-line text-center">Spelbum</span><span className="text-muted">→</span><span className="text-sm">Moves product, learns commerce</span></div>
            <div className="h-px bg-line ml-14 my-2 w-[40%]" />
            <div className="flex items-center gap-4"><span className="w-28 text-[11px] uppercase tracking-widest px-3 py-2 rounded-full bg-gold text-bg text-center">Stave Inc.</span><span className="text-muted">→</span><span className="text-sm">Parent holding company</span></div>
          </div>
        </div>
        <div className="bg-bg border border-line rounded-[20px] p-6">
          <div className="text-[11px] uppercase tracking-widest text-muted">Partnership Inquiry</div>
          <div className="grid gap-3 mt-4">
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="h-11 px-4 rounded-full bg-surface border border-line text-sm outline-none focus:border-gold" />
            <input value={form.org} onChange={e=>setForm({...form,org:e.target.value})} placeholder="Organization" className="h-11 px-4 rounded-full bg-surface border border-line text-sm outline-none focus:border-gold" />
            <select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} className="h-11 px-4 rounded-full bg-surface border border-line text-sm outline-none">
              <option>Partner</option><option>Investor</option><option>Artist</option><option>Business Client</option>
            </select>
            <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your interest in RGPN / Spelbum / Stave Industries" rows={4} className="p-4 rounded-[16px] bg-surface border border-line text-sm outline-none focus:border-gold" />
            <a href={`mailto:${content.profile.email}?subject=Partnership - ${form.interest}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.name + " (" + form.org + ")")}`} className="h-11 grid place-items-center rounded-full bg-text text-bg text-sm font-medium hover:bg-white transition">Send Partnership Inquiry</a>
            <p className="text-[11px] text-muted text-center">Sends via your email app for now. Direct sending in Phase 2.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
