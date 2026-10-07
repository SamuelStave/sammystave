import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Home, Music, Ventures, About, Contact } from './pages'
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
