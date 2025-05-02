import Navbar from './components/Navbar'
import './index.css'
import Business from './pages/Business'
import Home from './pages/Home'
import Sports from './pages/Sports'

function App() {

  return (
    <>
     <Navbar />
     <main>
     <Home />
     <Business />
     <Sports />
     </main>
    </>
   )
}

export default App
