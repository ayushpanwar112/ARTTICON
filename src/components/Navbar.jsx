import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-600 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="text-3xl font-bold text-white hover:text-emerald-100 transition-all duration-300">
            ARTTICON 2026
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/register" 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/register')
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg hover:shadow-xl'
              }`}
            >
              Register Now
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/20 pt-4">
            <Link 
              to="/" 
              className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors mb-2" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/register" 
              className="block py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300" 
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
