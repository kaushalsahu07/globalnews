import Navbar from './components/Navbar'
import './index.css'
import Business from './pages/Business'
import Home from './pages/Home'
import Sports from './pages/Sports'
import Technology from './pages/Technology'

function App() {

  return (
    <>
     <Navbar />
     <main>
     <Home />
     <Business />
     <Sports />
     <Technology />
     </main>
    </>
   )
}

export default App
