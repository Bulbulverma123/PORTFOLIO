

import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="pt-20 pb-20 bg-black"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 
          bg-clip-text text-transparent inline-block">
          About Me
          </span>
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto mb-16 text-xl font-semibold">
          Get to know more about my background and passion
        </p>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">

            <div className="relative w-64 h-64 md:w-80 md:h-80">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-800 to-white opacity-60 blur-lg"></div>

              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className="relative w-full h-full object-cover rounded-full z-10"
                src={assets.profileImg}
                alt="profile"
              />

            </div>

          </div>

          {/* Text */}
          <div className="md:w-1/2 max-w-xl">

            <h3 className="text-2xl font-semibold mb-5">
              My Journey
            </h3>

            <p className="text-gray-300 mb-5 leading-relaxed ">
              Hi, I'm Bulbul Verma, a passionate full-stack web developer skilled
              in building modern, responsive, and user-friendly web applications.
              I work with technologies like React, Tailwind CSS, JavaScript,
              Node.js, Express.js, and MongoDB to create clean, efficient,
              and scalable solutions.
            </p>

            <p className="text-gray-300 mb-5 leading-relaxed">
              My journey in web development started with curiosity about how
              websites work, which gradually turned into a strong interest in
              creating interactive and meaningful digital experiences.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Apart from coding, I enjoy exploring new technologies, learning
              new frameworks, and continuously improving my development skills.
            </p>

            <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 border border-purple-600 rounded-lg 
            font-medium hover:bg-purple-600/20 transition"
          >
            explore Projects
          </a>


          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default About
