import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'
import SlideUpOnScroll from './components/slideuponscroll'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />

        <section id="about">
          <SlideUpOnScroll>
            <About />
          </SlideUpOnScroll>
        </section>

        <section id="skills">
          <SlideUpOnScroll>
            <Skills />
          </SlideUpOnScroll>
        </section>

        <section id="projects">
          <SlideUpOnScroll>
            <Projects />
          </SlideUpOnScroll>
        </section>

        <section id="experience">
          <SlideUpOnScroll>
            <Experience />
          </SlideUpOnScroll>
        </section>

        <section id="contact">
          <SlideUpOnScroll>
            <Contact />
          </SlideUpOnScroll>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
