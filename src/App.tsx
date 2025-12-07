import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import { Footer } from './component/Footer'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import BlogDetail from './Pages/BlogDetail'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import RemoveAccount from './Pages/RemoveAccount'
import Investor from './Pages/Investor'

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/remove-account" element={<RemoveAccount />} />
            <Route path="/investor" element={<Investor />} />
          </Routes>
        </main>
        <Footer />

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12 z-50"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </Router>
  )
}

export default App