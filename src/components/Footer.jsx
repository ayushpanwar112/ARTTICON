import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              ARTTICON 2026
            </h3>
            <p className="text-gray-200 text-base leading-relaxed mb-6">
              11th International & 30th National Conference of Association of Radiation Therapists 
              and Technologists of India. Advancing excellence in radiation therapy and technology.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm">📧</span>
              </button>
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm">🐦</span>
              </button>
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm">💼</span>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-300 transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/register" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-300 transition-colors"></span>
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-300 transition-colors"></span>
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-300 transition-colors"></span>
                  Speakers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">info@artticon2026.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📞</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Convention Center<br/>Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ARTTICON 2026. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
