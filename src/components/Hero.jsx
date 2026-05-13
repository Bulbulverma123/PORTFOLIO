

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