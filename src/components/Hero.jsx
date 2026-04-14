// // // import React from 'react'
// // // import { motion } from 'framer-motion'
// // // import {assets} from '../assets/assets'

// // // const Hero = () => {
// // //   return (
// // //     <motion.div
// // //       initial={{opacity:0, y:50}}
// // //       whileInView={{opacity:1, y:0}}
// // //       transition={{duration:0.6,ease:'easeOut'}}
// // //       viewport={{once:true}}
// // //       id='home'
// // //       className='min-h-screen flex items-center pt-20 pb-16 
// // //        bg-gradient-to-b from-[#240d3a] via-[#12081f] to-black'
// // //     >
// // //       <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
// // //         {/* left side content */}
// // //         <div className='md:w-1/2 mb-10 md:mb-0'>
// // //         <h1 className='text-2xl md:text-2xl font-medium mb-6'>Hey, there</h1>
// // //         <h1 className='text-2xl md:text-2xl font-medium mb-6'>This is 
// // //           <span className='bg-gradient-to-r from-purple-600 via-purple-400 to-white bg-clip-text text-transparent font-bold'>
// // //         {" "}Bulbul Verma
// // //       </span>
      
// // //         </h1>
// // //         <h2 className='text-5xl md:text-6xl font-semibold mb-8 typewriter'>Full-Stack Web Developer</h2>
// // //         <p className='text-lg text-gray-300 mb-8 max-w-xl leading-relaxed'>
// // //                My goal is to write 
// // //             <span className='font-bold'> maintainable, clean and understandable </span> 
// // //              code that makes development efficient and enjoyable.
// // //         </p>
// // //           <div className='flex space-x-4'>
// // //             <a href="#projects" className='px-6 py-3 border border-purple-600 
// // //             rounded-lg font-medium hover:bg-purple/20 transition
// // //              decoration-purple-300'>View Work</a>
// // //             <a href="#contact" className='px-6 py-3 border border-purple-600 
// // //             rounded-lg font-medium hover:bg-purple/20 transition
// // //              decoration-purple-300'>Contact</a>
// // //           </div>
// // //         </div>
// // //         {/* right side image */}
       
// // //       </div>
      
// // //     </motion.div>
// // //   )
// // // }

// // // export default Hero

// // import React from 'react'
// // import { motion } from 'framer-motion'

// // const Hero = () => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6, ease: 'easeOut' }}
// //       viewport={{ once: true }}
// //       id="home"
// //       className="min-h-screen flex items-center justify-center pt-20 pb-16 
// //       bg-gradient-to-b from-[#240d3a] via-[#12081f] to-black"
// //     >


// //         {/* Content */}
// //         <div className="container mx-auto px-6 flex flex-col items-center text-center pt-20">

// //   <div className="max-w-2xl w-full px-4 sm:px-0">

// //     <h1 className="text-xl sm:text-2xl font-medium mb-4">
// //       Hey, there
// //     </h1>

// //     <h1 className="text-xl sm:text-2xl font-medium mb-6">
// //       This is
// //       <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-white bg-clip-text text-transparent font-bold">
// //         {" "}Bulbul Verma
// //       </span>
// //     </h1>

// //     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 typewriter break-words text-center w-full">
// //       Full-Stack Web Developer
// //     </h2>
     
// //       {/* <div className="flex justify-center">
// //   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 typewriter text-center">
// //     Full-Stack Web Developer
// //   </h2> */}

// //           <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed px-4 sm:px-0">
// //             My goal is to write
// //             <span className="font-bold"> maintainable, clean and understandable </span>
// //             code that makes development efficient and enjoyable.
// //           </p>

// //           {/* Buttons */}
// //           <div className="flex justify-center space-x-4">

// //             <a
// //               href="#projects"
// //               className="px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple-600/20 transition"
// //             >
// //               View Work
// //             </a>

// //             <a
// //               href="#contact"
// //               className="px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple-600/20 transition"
// //             >
// //               Contact
// //             </a>

// //           </div>

// //         </div>

// //       </div>

// //     </motion.div>
// //   )
// // }

// // export default Hero

// import React from 'react'
// import { motion } from 'framer-motion'
// import {assets} from '../assets/assets'

// const Hero = () => {
//   return (
//     <motion.div
//       initial={{opacity:0, y:50}}
//       whileInView={{opacity:1, y:0}}
//       transition={{duration:0.6,ease:'easeOut'}}
//       viewport={{once:true}}
//       id='home'
//       className='min-h-screen flex items-center pt-20 pb-16 
//        bg-gradient-to-b from-[#240d3a] via-[#12081f] to-black'
//     >
//       <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
//         {/* left side content */}
//         <div className='md:w-1/2 mb-10 md:mb-0'>
//         <h1 className='text-2xl md:text-2xl font-medium mb-6'>Hey, there</h1>
//         <h1 className='text-2xl md:text-2xl font-medium mb-6'>This is 
//           <span className='bg-gradient-to-r from-purple-600 via-purple-400 to-white bg-clip-text text-transparent font-bold'>
//         {" "}Bulbul Verma
//       </span>
      
//         </h1>
//         <h2 className='text-5xl md:text-6xl font-semibold mb-8 typewriter'>Full-Stack Web Developer</h2>
//         <p className='text-lg text-gray-300 mb-8 max-w-xl leading-relaxed'>
//                My goal is to write 
//             <span className='font-bold'> maintainable, clean and understandable </span> 
//              code that makes development efficient and enjoyable.
//         </p>
//           <div className='flex space-x-4'>
//             <a href="#projects" className='px-6 py-3 border border-purple-600 
//             rounded-lg font-medium hover:bg-purple/20 transition
//              decoration-purple-300'>View Work</a>
//             <a href="#contact" className='px-6 py-3 border border-purple-600 
//             rounded-lg font-medium hover:bg-purple/20 transition
//              decoration-purple-300'>Contact</a>
//           </div>
//         </div>
//         {/* right side image */}
        

       
//       </div>
      
//     </motion.div>
//   )
// }

// export default Hero

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-[#240d3a] via-[#12081f] to-black
      px-6 sm:px-10 lg:px-20 pt-32 pb-20"
    >
      <div className="max-w-4xl w-full text-center">

        {/* Greeting */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-gray-200">
          Hey, there
        </h1>

        {/* Name */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-200">
          This is
          <span className="ml-2 bg-gradient-to-r from-purple-600 via-purple-400 to-white bg-clip-text text-transparent font-bold">
            Bulbul Verma
          </span>
        </h1>

      
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
font-semibold mb-8 typewriter text-center w-full">
  Full-Stack Web Developer
</h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 
        leading-relaxed mb-10  mt-6 max-w-2xl mx-auto">
          My goal is to write
          <span className="font-bold"> maintainable, clean and understandable </span>
          code that makes development efficient and enjoyable.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="px-6 py-3 border border-purple-600 rounded-lg 
            font-medium hover:bg-purple-600/20 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-purple-600 rounded-lg 
            font-medium hover:bg-purple-600/20 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </motion.section>
  );
};

export default Hero;