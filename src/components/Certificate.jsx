

// import React from "react";
// import cert1 from "../assets/certificate1.jpeg";
// import cert2 from "../assets/certificate2.jpeg";
// import cert3 from "../assets/certificate3.jpg";

// const certificates = [
//   {
//     title: "Cyber Security Workshop",
//     issuer: "Devi Ahilya Vishwavidyalaya",
//     image: cert1,
//   },
//   {
//     title: "Artificial Intelligence Beginners Guide",
//     issuer: "Simplilearn SkillUp",
//     image: cert2,
//   },
//   {
//     title: "OOPS With C++",
//     issuer: "Coding Ninjas",
//     image: cert3,
//   },
// ];

// const Certificate = () => {
//   return (
//     <section id="certifications" className="py-20 bg-black">
      
//       <div className="container mx-auto px-6">
//       <h2 className="text-3xl font-bold text-center mb-4">
//         <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 
//           bg-clip-text text-transparent">
//             Certifications
//           </span>
//       </h2>

//       <p className="text-white text-center max-w-2xl mx-auto mb-16 text-xl font-semibold">
//           Certificates that showcase my learning and achievements
//         </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-5xl mx-auto">

//         {certificates.map((cert, index) => (
//           <div
//             key={index}
//             className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 max-w-md mx-auto"
//           >

//             {/* <img
//               src={cert.image}
//               alt={cert.title}
//               className="w-full h-40 object-cover bg-white"
//             /> */}

//             <div className="w-full h-44 bg-white flex items-center justify-center">
//               <img
//                  src={cert.image}
//                  alt={cert.title}
//                  className="max-h-full max-w-full"
//               />
//            </div>

//             <div className="p-5 text-center">
              
//               <h3 className="text-lg font-semibold text-white">
//                 {cert.title}
//               </h3>

//               <p className="text-gray-400 mb-4">
//                 {cert.issuer}
//               </p>

              
//                <a
//               href="#certifications"
//               className="inline-block mt-4 px-4 py-2 text-sm border border-white rounded-lg 
//                font-medium hover:bg-white hover:text-black transition "
//              >
//              View Certificates
//              </a> 

             

//             </div>

//           </div>
//         ))}

//       </div>
//       </div>

//     </section>
//   );
// };

// export default Certificate;

import React from "react";
import { motion } from "framer-motion";
import cert1 from "../assets/certificate1.jpeg";
import cert2 from "../assets/certificate2.jpeg";
import cert3 from "../assets/certificate3.jpg";

const certificates = [
  {
    title: "Cyber Security Workshop",
    issuer: "Devi Ahilya Vishwavidyalaya",
    image: cert1,
  },
  {
    title: "Artificial Intelligence Beginners Guide",
    issuer: "Simplilearn SkillUp",
    image: cert2,
  },
  {
    title: "OOPS With C++",
    issuer: "Coding Ninjas",
    image: cert3,
  },
];

const Certificate = () => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <p className="text-white text-center max-w-2xl mx-auto mb-16 text-xl font-semibold">
          Certificates that showcase my learning and achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 max-w-md mx-auto"
            >
              <div className="w-full h-44 bg-white flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {cert.issuer}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-sm border border-white rounded-lg font-medium hover:bg-white hover:text-black transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certificate;
