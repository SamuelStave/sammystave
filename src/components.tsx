import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, socials, platforms, type Link as L } from './data'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = r.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={r} className={`rv ${on ? 'in' : ''} ${className}`}>{children}</div>
}
export function Seo({ title, desc }: { title: string; desc: string }) {
  useEffect(() => { document.title = title; document.querySelector('meta[name=description]')?.setAttribute('content', desc) }, [title, desc])
  return null
}
export const Head = ({ t, p }: { t: string; p: string }) => (
  <header className="phead wrap"><h1 className="grad s">{t}</h1><p className="lead">{p}</p></header>
)
export const Buttons = ({ items }: { items: L[] }) => (
  <div className="row">{items.map((x, i) => <a key={x.name} className={`btn ${i < 3 ? 'g' : 'g'}`} href={x.url} target="_blank" rel="me noopener noreferrer">{x.name}</a>)}</div>
)
type Field = { name: string; label: string; type?: 'text' | 'email' | 'textarea' | 'select'; options?: string[] }
export function MailForm({ fields, subject, cta }: { fields: Field[]; subject: string; cta: string }) {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = fields.map(f => `${f.label}: ${d.get(f.name)}`).join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  if (sent) return <div className="glass note">Thank you. Your email app should open with your message ready to send. If it did not, write to {site.email}.</div>
  return (
    <form className="form" onSubmit={submit}>
      {fields.map(f => (
        <label key={f.name}>{f.label}
          {f.type === 'textarea' ? <textarea name={f.name} rows={5} required />
            : f.type === 'select' ? <select name={f.name}>{f.options!.map(o => <option key={o}>{o}</option>)}</select>
            : <input name={f.name} type={f.type ?? 'text'} required />}
        </label>
      ))}
      <button className="btn p" type="submit">{cta}</button>
    </form>
  )
}
const nav = [['/', 'Home'], ['/music', 'Music'], ['/ventures', 'Ventures'], ['/about', 'About'], ['/contact', 'Contact']]
export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  return (
    <>
      <div className="bg" aria-hidden><i /><i /><i /></div>
      <header className="nav glass">
        <div className="wrap bar">
          <Link to="/" className="logo">Sammystave</Link>
          <button className="menu" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
          <nav className={open ? 'open' : ''} aria-label="Main">
            {nav.map(([to, n]) => <NavLink key={to} to={to} end>{n}</NavLink>)}
            <Link className="btn p sm" to="/contact">Book now</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="foot">
        <div className="wrap fgrid">
          <div><div className="logo">Sammystave</div><p>Gospel songwriter, producer, web developer and founder from Nigeria.</p></div>
          <div><h4>Pages</h4>{nav.map(([to, n]) => <Link key={to} to={to}>{n}</Link>)}</div>
          <div><h4>Listen</h4>{platforms.map(p => <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>)}</div>
          <div><h4>Follow</h4>{socials.slice(0, 3).map(p => <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>)}<a href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>
        <div className="wrap copy">&copy; {new Date().getFullYear()} Sammystave. All rights reserved.</div>
      </footer>
    </>
  )
}
