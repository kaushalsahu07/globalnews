import Navbar from './components/Navbar'
import './index.css'
import Business from './pages/Business'
import Home from './pages/Home'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import Entertainment from './pages/Entertainment'

function App() {

  return (
    <>
     <Navbar />
     <main>
     <Home />
     <Business />
     <Sports />
     <Technology />
     <Entertainment />
     </main>
    </>
   )
}

export default App
