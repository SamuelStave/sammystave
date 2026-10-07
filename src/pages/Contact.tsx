
import { useState } from 'react'
import content from '../data/content.json'

export default function Contact(){
  const [form,setForm]=useState({name:'', email:'', category:'Booking', message:''})
  const mailto = `mailto:${content.profile.email}?subject=${encodeURIComponent(form.category + " - " + form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.name + " (" + form.email + ")")}`

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <h1 className="font-display text-[56px] leading-[0.9]">Let's Work</h1>
          <p className="text-muted mt-4 max-w-[40ch]">For bookings, collaborations, music production, web projects and partnerships.</p>
          
          <div className="mt-10 space-y-6">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted">Email</div>
              <div className="font-display text-xl mt-1">{content.profile.email}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted">Based</div>
              <div className="text-sm mt-1">{content.profile.location}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted">Booking Types</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Gospel Event","Collaboration","Music Production","Web Development","Partnership / Investment"].map(t=><span key={t} className="text-[11px] px-3 py-1.5 rounded-full border border-line">{t}</span>)}
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 rounded-[16px] bg-surface border border-line text-[12px] leading-relaxed text-muted">
            <strong className="text-text">Phase 1:</strong> Form opens your email app. <br/>
            <strong className="text-text">Phase 2:</strong> Direct sending with Resend + spam protection + auto-reply.
          </div>
        </div>

        <div className="bg-surface border border-line rounded-[24px] p-6 lg:p-8">
          <div className="text-[11px] uppercase tracking-widest text-muted">Contact Form</div>
          <div className="grid gap-4 mt-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="h-11 px-4 rounded-full bg-bg border border-line text-sm outline-none focus:border-gold" />
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email address" className="h-11 px-4 rounded-full bg-bg border border-line text-sm outline-none focus:border-gold" />
            </div>
            <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})} className="h-11 px-4 rounded-full bg-bg border border-line text-sm outline-none">
              <option>Booking</option><option>Collaboration</option><option>Music Project</option><option>Web Project</option><option>Partnership</option>
            </select>
            <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} placeholder="Tell me about your event, song, website or partnership idea..." className="p-4 rounded-[16px] bg-bg border border-line text-sm outline-none focus:border-gold" />
            <a href={mailto} className="h-12 grid place-items-center rounded-full bg-text text-bg text-sm font-medium hover:bg-white transition">Send Message</a>
            <p className="text-center text-[11px] text-muted">Or email directly: {content.profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
