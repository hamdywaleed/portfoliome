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
        <SlideUpOnScroll>
          <About />
        </SlideUpOnScroll>

        <SlideUpOnScroll>
          <Skills />
        </SlideUpOnScroll>


        <SlideUpOnScroll>
          <Projects />
        </SlideUpOnScroll>

        <SlideUpOnScroll>
          <Experience />
        </SlideUpOnScroll>

        <SlideUpOnScroll>
          <Contact />
        </SlideUpOnScroll>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
