import Navbar from './components/Navbar'
import './index.css'
import Business from './pages/Business'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Navbar />
     <main>
     <Home />
     <Business />
     </main>
    </>
   )
}

export default App
