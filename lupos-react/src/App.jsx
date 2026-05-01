import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedBg from './components/AnimatedBg'
import Home from './pages/Home'
import About from './pages/About'
import Lore from './pages/Lore'
import Download from './pages/Download'

export default function App() {
  return (
    <HashRouter>
      <AnimatedBg />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/lore"    element={<Lore />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </HashRouter>
  )
}
