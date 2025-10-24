import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import heroSvg from '../assets/hero.svg'
import speakerSvg from '../assets/speaker.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef()
  const featuresRef = useRef()
  const speakersRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    )

    // Features animation on scroll
    gsap.fromTo(featuresRef.current.children,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%"
        }
      }
    )

    // Speakers animation
    gsap.fromTo(speakersRef.current.children,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: speakersRef.current,
          start: "top 80%"
        }
      }
    )

    // Stats counter animation
    const statNumbers = statsRef.current.querySelectorAll('.stat-number')
    statNumbers.forEach((el, i) => {
      const finalValue = parseInt(el.textContent)
      gsap.fromTo(el, 
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          },
          onUpdate() {
            el.textContent = Math.ceil(el.textContent)
          }
        }
      )
    })
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-800 via-emerald-700 to-teal-700"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-emerald-800/65 to-teal-900/35"></div>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                ARTTICON<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">2026</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                11th International & 30th National Conference of Association of Radiation Therapists 
                and Technologists of India. Advancing excellence in radiation therapy and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Register Now →
                </Link>
                <button className="px-8 py-4 border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Conference Highlight</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🏥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Expert Faculty</h4>
                      <p className="text-gray-200 text-sm">Leading radiation oncologists & physicists</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Latest Technology</h4>
                      <p className="text-gray-200 text-sm">IMRT, VMAT & Stereotactic techniques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">CME Credits</h4>
                      <p className="text-gray-200 text-sm">Professional development certificates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌟</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Networking</h4>
                      <p className="text-gray-200 text-sm">Connect with 400+ RT professionals</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center text-white">
                    <p className="text-sm text-gray-200 mb-2">Early Bird Registration</p>
                    <p className="text-2xl font-bold">Ends Dec 31, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved separator */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 0L48 8C96 16 192 32 288 37.3C384 43 480 37 576 32C672 27 768 21 864 24C960 27 1056 37 1152 42.7C1248 48 1344 48 1392 48L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="rgb(245 251 247 / 0.5)"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-teal-50/50 via-white to-white relative">
        {/* Smooth transition overlay */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-teal-900/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* Conference Theme Title */}
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Revolutionizing Radiotherapy:
            </h2>
            <p className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-6">
              From Vision to Precision
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join leading radiation therapy professionals as we explore cutting-edge technologies, 
              innovative treatment approaches, and the future of precision radiotherapy.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-teal-600 mb-2">400</div>
              <div className="text-gray-600">RT Professionals</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-emerald-600 mb-2">35</div>
              <div className="text-gray-600">Expert Speakers</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-teal-700 mb-2">20</div>
              <div className="text-gray-600">Technical Sessions</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-emerald-700 mb-2">3</div>
              <div className="text-gray-600">Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Attend?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your expertise in radiation therapy, connect with professionals, and discover the latest technologies
            </p>
          </div>
          
          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced RT Techniques</h3>
              <p className="text-gray-600">Explore the latest innovations in radiation therapy, IMRT, VMAT, and stereotactic treatments from leading medical centers.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Networking</h3>
              <p className="text-gray-600">Connect with radiation therapists, medical physicists, and oncologists from leading cancer centers across India and globally.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Advancement</h3>
              <p className="text-gray-600">Enhance your skills through hands-on workshops, CME credits, and certification programs in radiation therapy.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">State-of-Art Equipment</h3>
              <p className="text-gray-600">Hands-on experience with latest linear accelerators, treatment planning systems, and quality assurance technologies.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">CME Credits</h3>
              <p className="text-gray-600">Earn continuing medical education credits and professional development certificates recognized by ARTTI and medical boards.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Experience</h3>
              <p className="text-gray-600">Immerse yourself in local culture with traditional performances and spiritual activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Speakers</h2>
            <p className="text-xl text-teal-200">Learn from industry pioneers and academic leaders</p>
          </div>
          
          <div ref={speakersRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <img src={speakerSvg} alt="Speaker" className="w-20 h-20 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-center mb-2">Dr. Priya Sharma</h3>
              <p className="text-indigo-200 text-center mb-3">AI Research Director, IIT Delhi</p>
              <p className="text-sm text-gray-300 text-center">Leading expert in machine learning and neural networks with 15+ years of research experience.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <img src={speakerSvg} alt="Speaker" className="w-20 h-20 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-center mb-2">Prof. James Wilson</h3>
              <p className="text-indigo-200 text-center mb-3">Healthcare Innovation, Stanford</p>
              <p className="text-sm text-gray-300 text-center">Pioneer in digital health technologies and personalized medicine approaches.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <img src={speakerSvg} alt="Speaker" className="w-20 h-20 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-center mb-2">Dr. Maria Santos</h3>
              <p className="text-indigo-200 text-center mb-3">Sustainability Expert, MIT</p>
              <p className="text-sm text-gray-300 text-center">Environmental scientist focused on climate change solutions and green technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Schedule</h2>
            <p className="text-xl text-gray-600">Three days packed with insights, learning, and networking</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">Day 1</div>
                <div className="text-gray-600">February 14, 2026</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">9:00 AM - Registration & Welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">10:30 AM - Keynote: Future of RT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">2:00 PM - IMRT & VMAT Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">6:00 PM - Welcome Reception</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Day 2</div>
                <div className="text-gray-600">February 15, 2026</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">9:00 AM - QA & Dosimetry Workshop</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">11:00 AM - Brachytherapy Session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">2:30 PM - Research Presentations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">7:00 PM - Awards Banquet</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-teal-700 mb-2">Day 3</div>
                <div className="text-gray-600">February 16, 2026</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-700 rounded-full"></div>
                  <span className="text-sm text-gray-700">9:00 AM - Stereotactic Radiosurgery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-700 rounded-full"></div>
                  <span className="text-sm text-gray-700">11:30 AM - Technology Exhibition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-700 rounded-full"></div>
                  <span className="text-sm text-gray-700">2:00 PM - ARTTI Awards Ceremony</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-700 rounded-full"></div>
                  <span className="text-sm text-gray-700">4:00 PM - Closing & Future Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss this opportunity to be part of the most innovative conference in the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/register" 
              className="px-10 py-4 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center"
            >
              Register Today
              <span className="ml-2">🎯</span>
            </Link>
            <button className="px-10 py-4 border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Download Brochure
              <span className="ml-2">📄</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
