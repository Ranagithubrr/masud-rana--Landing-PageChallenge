import './App.css'
import About from './components/about/About'
import Featured from './components/featured/Featured'
import Hero from './components/herosection/Hero'
import Navbar from './components/navbar/Navbar'
import Steps from './components/steps/Steps'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Featured />
      <About />
    </>
  )
}

export default App
