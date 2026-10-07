
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Music from './pages/Music'
import Ventures from './pages/Ventures'
import VentureDetail from './pages/VentureDetail'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/ventures" element={<Ventures/>} />
          <Route path="/ventures/:id" element={<VentureDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
