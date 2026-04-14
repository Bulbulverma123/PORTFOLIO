// import React from 'react'
// import { motion } from 'framer-motion'
// import { assets } from '../assets/assets'

// const Skills = () => {
//   return (
//     <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1, ease: 'easeOut' }}
//     viewport={{ once: false, amount:0.2}}
//     id='skills'
//     className='py-20 bg-black'
//     >
//         <div className='container mx-auto  px-6'>
//           <h2 className='text-3xl font-bold text-center mb-4'>
//             <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 
//               bg-clip-text text-transparent inline-block">
//                Technologies I use
//             </span>
//           </h2>
//         <p className='text-gray-400  text-lg text-center max-w-2xl mx-auto mb-16'>
//          Technologies and tools I use to build modern, scalable, and interactive websites.</p>
 

//  {/* frontend */}
//  <div className="grid  md:grid-cols-2 gap-16 ">

//   <div>
//     <h3 className='text-xl font-semibold text-white text-center mb-10'>
//       Frontend
//     </h3>
//     <div className='grid grid-cols-2 gap-10 text-center'>
//         <div>
//            <img src={assets.htmlLogo} className="w-16 mx-auto"/>
//              <p className="mt-3 text-white">HTML5</p>
//              <p>Markup language for structuring web pages</p>
//         </div>

//         <div>
//       <img src={assets.cssLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">CSS3</p>
//       <p className='mt-3 text-gray-100'>Styling language for web design</p>
//     </div>

//     <div>
//       <img src={assets.jsLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">JavaScript</p>
//       <p>Programming language for interactive web</p>
//     </div>

//     <div>
//       <img src={assets.reactLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">React</p>
//       <p className="text-sm text-gray-400">Library for building user interfaces</p>
//     </div>

//      <div>
//       <img src={assets.tailwindLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">Tailwind CSS</p>
//       <p>Utility-first CSS framework</p>
//     </div>

//      <div>
//       <img src={assets.bootstrapLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">Bootstrap</p>
//       <p>CSS framework for responsive design</p>
//     </div>
//     </div>
//   </div>
  
//   {/* backend */}
  
//   <div>
//     <h3 className=' text-xl font-semibold text-white text-center mb-10'>
//       Backend
//     </h3>

//     <div className=' grid grid-cols-2 gap-10 text-center'>
//       <div>
//          <img src={assets.nodeLogo} className="w-16 mx-auto"/>
//           <p className="mt-3 text-white">NodeJS</p>
//           <p>JavaScript runtime for server-side development</p>
//       </div>

//       <div>
//     <img 
//       src={assets.expressLogo} 
//      alt="Express" 
//      className="w-16 mx-auto bg-white p-2 rounded"
//    />
//     <p className="mt-3 text-white">Express</p>
//     <p>Web framework for Node.js</p>
//   </div>

//    <div>
//       <img src={assets.mongoLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">MongoDB</p>
//       <p>NoSQL document database</p>
//     </div>

//     <div>
//       <img src={assets.mysqlLogo} className="w-16 mx-auto"/>
//       <p className="mt-3 text-white">MySQL</p>
//       <p>Relational database management system</p>
//     </div>


//     </div>

//   </div>
  

// </div>
// </div>
      
//     </motion.div>
//   )
// }

// export default Skills


import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-black"
    >

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Technologies I use
          </span>
        </h2>

        <p className='text-white text-center max-w-2xl mx-auto mb-16 text-xl font-semibold'>
          Technologies and tools I use to build modern, scalable, and interactive websites.
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-white text-center mb-12">
              Frontend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-12 text-center">

              <div className="space-y-2  cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.htmlLogo}
                 className="w-16 h-16 mx-auto "/>
                <p className="text-white font-medium">HTML5</p>
                <p className="text-sm text-gray-400">Markup language for structuring web pages</p>
              </div>

               <div className="space-y-2  cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.cssLogo}
                 className="w-16 h-16 mx-auto "/>
                <p className="text-white font-medium">CSS3</p>
                <p className="text-sm text-gray-400">Styling language for web design</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.jsLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">JavaScript</p>
                <p className="text-sm text-gray-400">Programming language for interactive web</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.reactLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">React</p>
                <p className="text-sm text-gray-400">Library for building user interfaces</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.tailwindLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">Tailwind CSS</p>
                <p className="text-sm text-gray-400">Utility-first CSS framework</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.bootstrapLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">Bootstrap</p>
                <p className="text-sm text-gray-400">CSS framework for responsive design</p>
              </div>

            </div>
          </div>


          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-white text-center mb-12">
              Backend
            </h3>

            <div className="grid  grid-cols-2 sm:grid-cols-2 gap-12 text-center">

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.nodeLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">NodeJS</p>
                <p className="text-sm text-gray-400">JavaScript runtime for server-side development</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img
                  src={assets.expressLogo}
                  className="w-16 h-16 mx-auto bg-white p-2 rounded"
                />
                <p className="text-white font-medium">Express</p>
                <p className="text-sm text-gray-400">Web framework for Node.js</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.mongoLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">MongoDB</p>
                <p className="text-sm text-gray-400">NoSQL document database</p>
              </div>

              <div className="space-y-2 cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img src={assets.mysqlLogo} className="w-16 h-16 mx-auto"/>
                <p className="text-white font-medium">MySQL</p>
                <p className="text-sm text-gray-400">Relational database management system</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default Skills
