import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Business from './pages/Business'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import Entertainment from './pages/Entertainment'
import './index.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/entertainment" element={<Entertainment />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
