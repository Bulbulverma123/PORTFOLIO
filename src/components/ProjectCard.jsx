// import { span } from 'framer-motion/client'
import React from 'react'

const ProjectCard = ({title, description, image, tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 
    transition duration-300 cursor-pointer relative'>
        <img src={image} alt={title} className='w-full h-36 object-cover'/>
         {title === "FileMoon" && (
         <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
           Coming Soon
          </span>
        )}
        <div className='p-3'>
             <h3 className='text-lg font-semibold mb-2'>{title}</h3>
             <p className='text-gray-400 text-sm mb-3 line-clamp-2'>{description}</p>
             <div className=' flex flex-wrap gap-2 mb-4'>
                {tech.map((item, index)=>(
                  <span className='px-2 py-1 bg-dark-400 rounded-full text-xs' key={index}>
                    {item}
                  </span>
               ))}
             </div>
             <div className='flex justify-center'>
            <a
              href="#projects"
              className="inline-block mt-4 px-4 py-2 text-sm border border-white rounded-lg 
               font-medium hover:bg-white hover:text-black transition "
             >
             View Projects
             </a>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
