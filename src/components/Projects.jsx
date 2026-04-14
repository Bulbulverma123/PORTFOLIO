import React from 'react'
import { motion} from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../assets/assets'

const Projects = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1, ease: 'easeOut' }}
     viewport={{ once: false, amount: 0.2 }}
     id='projects'
     className='py-20 bg-black'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 
          bg-clip-text text-transparent inline-block">
          My Projects
          </span>
          </h2>
          <p className='text-white text-center max-w-2xl mx-auto mb-16 text-xl font-semibold'>
            Projects that showcase my skills in building modern web applications</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
            max-w-5xl mx-auto'>
              {/* projects */}
              {
                projects.map((project, index)=>(
                  <ProjectCard key={index} {...project}/>
                ))
              }

            </div>

      </div>
      
    </motion.div>
  )
}

export default Projects
