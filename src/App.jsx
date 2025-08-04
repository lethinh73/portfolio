import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-100 bg-gray-900 overflow-x-hidden scroll-smooth">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#374151',
            color: '#fff',
            border: '1px solid #4B5563',
            borderRadius: '12px',
            fontSize: '14px',
            padding: '16px',
          },
          success: {
            style: {
              background: '#059669',
              border: '1px solid #10B981',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#059669',
            },
          },
          error: {
            style: {
              background: '#DC2626',
              border: '1px solid #EF4444',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#DC2626',
            },
          },
        }}
      />
    </div>
  )
}

export default App
