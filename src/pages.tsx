import { Link } from 'react-router-dom'
import { Reveal, Seo, Head, Buttons, MailForm } from './components'
import { platforms, socials, releases, ventures, site } from './data'

const Cta = ({ t, p, to, b }: { t: string; p: string; to: string; b: string }) => (
  <Reveal className="wrap"><div className="glass cta"><h2>{t}</h2><p>{p}</p><Link className="btn p" to={to}>{b}</Link></div></Reveal>
)
const Releases = () => (
  <div className="grid2">{releases.map(r => (
    <Reveal key={r.title}><article className="glass rel">
      <img src={r.img} alt={`${r.title} cover art`} loading="lazy" />
      <div><h3>{r.title}</h3><small>{r.date}</small><p>{r.note}</p><a className="btn p sm" href={platforms[0].url} target="_blank" rel="noopener noreferrer">Listen</a></div>
    </article></Reveal>))}</div>
)
const Ventures3 = () => (
  <div className="grid3">{ventures.map(v => (
    <Reveal key={v.name}><article className="glass card"><span className="pill">{v.tag}</span><h3>{v.name}</h3><p>{v.text}</p></article></Reveal>))}</div>
)

export function Home() {
  return (<>
    <Seo title="Sammystave | Gospel Artist, Songwriter, Producer and Founder" desc="Nigerian gospel artist, songwriter, music producer, web developer and founder of Spelbum, Stave Industries Inc. and RGPN." />
    <section className="hero wrap">
      <div>
        <span className="pill glass">Gospel · Songwriter · Producer · Founder</span>
        <h1 className="grad">Sammystave</h1>
        <p className="lead">Gospel music across many styles, and businesses built to grow Nigerian talent.</p>
        <div className="row"><Link className="btn p" to="/music">Listen now</Link><Link className="btn g" to="/contact">Work with me</Link></div>
      </div>
      <div className="glass heroart">
        <img src="/images/hero.svg" alt="Abstract sound waves in violet and gold" />
        <div className="stats"><div><b>2018</b><span>First release</span></div><div><b>3</b><span>Ventures</span></div><div><b>5</b><span>Platforms</span></div></div>
      </div>
    </section>
    <section className="wrap sec"><h2>Latest music</h2><Releases />
      <Reveal><Buttons items={platforms} /></Reveal></section>
    <section className="wrap sec"><h2>Building for Nigeria</h2><Ventures3 /></section>
    <section className="wrap sec about2"><Reveal><img className="portrait glass" src="/images/portrait.svg" alt="Portrait of Sammystave" loading="lazy" /></Reveal>
      <Reveal><h2>The man behind the music</h2><p>Sammystave writes and produces gospel songs in many styles. He also builds websites and companies, with one goal: lift people up and open doors for Nigerian creators.</p><Link className="btn g" to="/about">Read the story</Link></Reveal></section>
    <section className="sec"><Cta t="Let’s create something together" p="Bookings, collaborations, music and web projects. Send a message and get a reply." to="/contact" b="Get in touch" /></section>
  </>)
}
export function Music() {
  return (<>
    <Seo title="Music | Sammystave" desc="Gospel music by Sammystave. Listen on YouTube Music, Spotify, Boomplay, SoundCloud and YouTube." />
    <Head t="Music" p="Gospel is the heart. The sound changes from song to song, and Afro gospel is only one of the styles." />
    <section className="wrap sec"><h2>Releases</h2><Releases /></section>
    <section className="wrap sec"><Reveal><div className="glass cta"><h2>Listen everywhere</h2><p>Every released song is on YouTube Music and Boomplay.</p><Buttons items={platforms} /></div></Reveal></section>
    <section className="wrap sec"><h2>The story so far</h2><div className="tl">{releases.map(r => <Reveal key={r.title}><div><b>{r.date}</b><p>“{r.title}”. {r.note}</p></div></Reveal>)}</div></section>
    <section className="sec"><Cta t="Want a song for your event or project?" p="Tell me about it and let’s talk." to="/contact" b="Book Sammystave" /></section>
  </>)
}
export function Ventures() {
  return (<>
    <Seo title="Ventures | Sammystave" desc="Spelbum, Stave Industries Inc. and RGPN: businesses founded by Sammystave to develop Nigeria." />
    <Head t="Ventures" p="Three initiatives, one vision: unfold the potential, talent and resources of Nigeria." />
    <section className="wrap sec"><Ventures3 /></section>
    <section className="wrap sec"><Reveal><div className="glass cta"><h2>How they fit together</h2><p>Spelbum and RGPN are meant to fuel Stave Industries Inc., which is being built into a holding company for many businesses.</p></div></Reveal></section>
    <section className="wrap sec"><Reveal><div className="glass cta"><h2>Web development</h2><p>Websites for artists, businesses and brands.</p><Link className="btn p" to="/contact">Start a project</Link></div></Reveal></section>
    <section className="wrap sec narrow"><h2>Partner or invest</h2><p>Interested in a partnership, an artist signing or a web project? Fill in the form.</p>
      <Reveal><div className="glass pad"><MailForm subject="Venture inquiry" cta="Send inquiry" fields={[
        { name: 'name', label: 'Your name' }, { name: 'email', label: 'Email', type: 'email' },
        { name: 'topic', label: 'Interested in', type: 'select', options: ['Stave Industries Inc.', 'RGPN', 'Spelbum', 'Web development'] },
        { name: 'message', label: 'Message', type: 'textarea' }]} /></div></Reveal></section>
  </>)
}
export function About() {
  return (<>
    <Seo title="About | Sammystave" desc="The story of Sammystave: Nigerian gospel songwriter, music producer, web developer and founder." />
    <Head t="About" p="Songs that lift people up. Businesses that open doors." />
    <section className="wrap sec about2"><Reveal><img className="portrait glass" src="/images/portrait.svg" alt="Portrait of Sammystave" /></Reveal>
      <Reveal><h2>The story</h2><p>Sammystave is a Nigerian gospel artist, songwriter and music producer. He writes and produces across many styles, and Afro gospel is one of them.</p>
        <p>He released his first song, “You Reign,” in March 2018. “Amazing Grace” followed in September 2018. He has kept writing, producing and building since, and he also designs and builds websites.</p>
        <p>He is the founder of Spelbum, Stave Industries Inc. and Rap, Gospel and Praise Nation (RGPN).</p></Reveal></section>
    <section className="wrap sec"><h2>What drives the work</h2><div className="grid3">
      {[['Faith', 'Music that lifts people up and points to God.'], ['Craft', 'Songs written and produced with care, in many styles.'], ['Vision', 'Businesses that unfold Nigeria’s talent and resources.']].map(([t, p]) =>
        <Reveal key={t}><article className="glass card"><h3>{t}</h3><p>{p}</p></article></Reveal>)}</div></section>
    <section className="sec"><Cta t="Work with Sammystave" p="Music, bookings, partnerships and websites." to="/contact" b="Contact me" /></section>
  </>)
}
export function Contact() {
  return (<>
    <Seo title="Contact | Sammystave" desc="Contact Sammystave for bookings, collaborations, music and web projects." />
    <Head t="Contact" p="For bookings, collaborations, music and web projects." />
    <section className="wrap sec cgrid">
      <Reveal><div className="glass pad"><MailForm subject="Website message" cta="Send message" fields={[
        { name: 'name', label: 'Your name' }, { name: 'email', label: 'Email', type: 'email' },
        { name: 'topic', label: 'Topic', type: 'select', options: ['Booking', 'Collaboration', 'Music', 'Web project', 'Partnership', 'Other'] },
        { name: 'message', label: 'Message', type: 'textarea' }]} /></div></Reveal>
      <Reveal><div className="glass pad"><h3>Direct</h3><p><a href={`mailto:${site.email}`}>{site.email}</a></p><h3>Follow</h3><Buttons items={socials} /><h3>Listen</h3><Buttons items={platforms} /></div></Reveal>
    </section>
  </>)
}
