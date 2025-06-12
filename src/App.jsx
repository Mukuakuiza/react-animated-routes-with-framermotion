// import './App.css'
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
