import React, { useState } from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const SERVICE_ID  = "service_76phae7"
const TEMPLATE_ID = "template_uqfstgs"
const PUBLIC_KEY  = "oSdeMSMtJ6_pdafRe"

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:  form.name,
        from_email: form.email,
        message:    form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    })
    .catch((err) => {
      console.error('EmailJS Error:', err)
      setStatus('error')
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-black"
    >
      <div className='container mx-auto px-6'>
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto mb-16 text-xl font-semibold">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block text-white mb-2'>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white'
                  placeholder="Enter your name"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className='block text-white mb-2'>Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white'
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
              <div>
                <label className='block text-white mb-2'>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white'
                  placeholder="Enter your message"
                  required
                />
              </div>

              {status === 'success' && <p className="text-green-400">✅ Message sent successfully!</p>}
              {status === 'error'   && <p className="text-red-400">❌ Kuch error aaya, dobara try karo.</p>}

              <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple-600/20 transition cursor-pointer disabled:opacity-50'
              >
                {status === 'sending' ? 'Sending...' : 'Send Email'}
              </button>
            </form>
          </div>

          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaMapMarkerAlt /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Address</h3>
                <p className='text-gray-400'>Indore, (M.P.)</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaEnvelope /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>bulbulverma6266@gmail.com</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'><FaPhone /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 6266124807</p>
              </div>
            </div>
            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4'>
                <a href="#" className='w-12 h-12 border border-white text-white rounded-md bg-transparent flex items-center justify-center hover:bg-white hover:text-black transition duration-300'><FaGithub /></a>
                <a href="#" className='w-12 h-12 border border-white text-white rounded-md bg-transparent flex items-center justify-center hover:bg-white hover:text-black transition duration-300'><FaLinkedin /></a>
                <a href="#" className='w-12 h-12 border border-white text-white rounded-md bg-transparent flex items-center justify-center hover:bg-white hover:text-black transition duration-300'><FaFacebook /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact