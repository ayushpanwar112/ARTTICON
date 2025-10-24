import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', phone: '', designation: '', experience: '', specialization: '' })
  const [status, setStatus] = useState(null)
  const formRef = useRef()
  const navigate = useNavigate()



  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('http://localhost:4000/form/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('submitted')
        setForm({ name: '', email: '', organization: '', phone: '', designation: '', experience: '', specialization: '' })
        setTimeout(() => navigate('/'), 1200)
      } else {
        setStatus(data.error || 'error')
      }
    } catch (err) {
      setStatus('network-error')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form ref={formRef} className="bg-white p-10 rounded-3xl shadow-2xl space-y-8 border border-gray-100" onSubmit={submit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={update} 
            required 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={update} 
            required 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            placeholder="Enter your email address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hospital/Institution *</label>
            <input 
              name="organization" 
              value={form.organization} 
              onChange={update} 
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              placeholder="Your hospital or medical institution"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              name="phone" 
              value={form.phone} 
              onChange={update} 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              placeholder="Your phone number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Professional Designation *</label>
            <select 
              name="designation" 
              value={form.designation} 
              onChange={update} 
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            >
              <option value="">Select your designation</option>
              <option value="radiation_therapist">Radiation Therapist</option>
              <option value="medical_physicist">Medical Physicist</option>
              <option value="radiation_oncologist">Radiation Oncologist</option>
              <option value="dosimetrist">Dosimetrist</option>
              <option value="rt_technologist">RT Technologist</option>
              <option value="quality_assurance">QA Specialist</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
            <select 
              name="experience" 
              value={form.experience} 
              onChange={update} 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            >
              <option value="">Select experience</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="11-15">11-15 years</option>
              <option value="15+">15+ years</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Area of Specialization</label>
          <select 
            name="specialization" 
            value={form.specialization} 
            onChange={update} 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
          >
            <option value="">Select specialization (optional)</option>
            <option value="external_beam">External Beam Radiation Therapy</option>
            <option value="brachytherapy">Brachytherapy</option>
            <option value="stereotactic">Stereotactic Radiosurgery/Radiotherapy</option>
            <option value="pediatric">Pediatric Radiation Therapy</option>
            <option value="treatment_planning">Treatment Planning</option>
            <option value="quality_assurance">Quality Assurance & Safety</option>
            <option value="research">Research & Development</option>
            <option value="general">General Practice</option>
          </select>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Registration...
              </>
            ) : (
              <>
                Submit Registration
                <span className="ml-2">🚀</span>
              </>
            )}
          </button>
        </div>

        {status === 'submitted' && (
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
            <p className="text-green-700 font-semibold text-center flex items-center justify-center">
              <span className="text-2xl mr-3">🎉</span>
              Registration successful! Redirecting to home...
            </p>
          </div>
        )}
        
        {status && status !== 'sending' && status !== 'submitted' && (
          <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl shadow-lg">
            <p className="text-red-700 font-semibold text-center flex items-center justify-center">
              <span className="text-2xl mr-3">⚠️</span>
              {status}
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
