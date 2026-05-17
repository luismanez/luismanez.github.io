import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Journey from './components/Journey/Journey'
import Expertise from './components/Expertise/Expertise'
import Speaking from './components/Speaking/Speaking'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="speaking">
          <Speaking />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
