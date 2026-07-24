import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CvPdfPage } from './pages/CvPdfPage'
import { PokemonAPIPage } from './pages/PokemonAPIPage'
import { HackathonYnovPage } from './pages/HackathonYnovPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/cvpdf" element={<CvPdfPage/>}/>
        <Route path="/projects/pokemonapi" element={<PokemonAPIPage/>}/>
        <Route path="/projects/hackathonynov" element={<HackathonYnovPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
