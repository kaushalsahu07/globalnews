import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'))
const Business = lazy(() => import('./pages/Business'))
const Sports = lazy(() => import('./pages/Sports'))
const Technology = lazy(() => import('./pages/Technology'))
const Entertainment = lazy(() => import('./pages/Entertainment'))
const Search = lazy(() => import('./pages/Search'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
  </div>
)

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
