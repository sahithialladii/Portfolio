// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
// // import profileImage from '../assets/img/profile.JPG';
// // import { motion } from 'framer-motion';

// // const Home = () => {
// //   return (
// //     <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 md:px-16 py-12 md:py-20">

// //       {/* Text Section */}
// //       <motion.div
// //         className="md:w-[55%] text-center md:text-left ml-32"
// //         initial={{ opacity: 0, x: -50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
// //           👋 Hello, I'm <span className="text-indigo-600">Sahithi Alladi</span>
// //         </h1>
// //         <h2 className="text-xl md:text-2xl ml-20 font-medium text-gray-600 mb-6">
// //           A passionate Web Developer & ML Enthusiast
// //         </h2>
// //         <div className='flex ml-20'><p className="text-gray-700 mb-8  leading-relaxed max-w-lg mx-auto md:mx-0">
// //           I'm an aspiring software developer with a strong interest in front-end development and artificial intelligence.
// //           I love building user-friendly web applications and working on projects that solve real-world problems.
// //         </p></div>

// //         {/* 🔗 View Work Button */}
// //         <Link
// //           to="/projects"
// //           className="inline-flex items-center bg-indigo-600 text-white ml-20 px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
// //         >
// //           View My Work <FaArrowRight className="ml-2" />
// //         </Link>

// //         {/* 🔗 Social Links */}
// //         <div className="mt-8 flex ml-20 justify-center md:justify-start gap-6">
// //           <motion.a
// //             href="https://github.com/sahithialladii"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             whileHover={{ scale: 1.2, rotate: 5 }}
// //             className="text-gray-700 hover:text-black transition text-3xl"
// //             title="GitHub"
// //           >
// //             <FaGithub />
// //           </motion.a>

// //           <motion.a
// //             href="https://www.linkedin.com/in/sahithi-alladi89/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             whileHover={{ scale: 1.2, rotate: -5 }}
// //             className="text-blue-700 hover:text-blue-900 transition text-3xl"
// //             title="LinkedIn"
// //           >
// //             <FaLinkedin />
// //           </motion.a>
// //         </div>
// //       </motion.div>

// //       {/* Image Section */}
// //       <motion.div
// //          className="md:w-[45%] flex justify-center"
// //         initial={{ opacity: 0, x: 50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.8, delay: 0.2 }}
// //       >
// //         <img
// //           src={profileImage}
// //           alt="Sahithi"
// //           className="w-80 h-80 object-cover shadow-xl border-4 border-indigo-300"
// //         />
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Home;








// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { AiOutlineDownload } from 'react-icons/ai';
// import profileImage from '../assets/img/profile.JPG';
// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 md:px-16 py-12 md:py-20">

//       {/* Text Section */}
//       <motion.div
//         className="md:w-[55%] text-center md:text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//           👋 Hello, I'm <span className="text-indigo-600">Sahithi Alladi</span>
//         </h1>
//         <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
//           A passionate Web Developer & ML Enthusiast
//         </h2>

//         <p className="text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
//           I'm an aspiring software developer with a strong interest in front-end development and artificial intelligence.
//           I love building user-friendly web applications and working on projects that solve real-world problems.
//         </p>

//         {/* 🔗 View Work Button */}
//         <div className='flex gap-8'>
//           <div>
//         <Link
//           to="/projects"
//           className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition mb-4"
//         >
//           View My Work <FaArrowRight className="ml-2" />
//         </Link></div>
//         {/* 📄 View Resume Button */}
//           <div><a
//             href="/sahithi_resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             <AiOutlineDownload className="mr-2 text-xl" />
//             View Resume
//           </a></div>
//           </div>

//         {/* 🔗 Social Links + Resume */}
//         <div className="mt-6 flex flex-col items-center md:items-start gap-4">
//           <div className="flex gap-6 text-3xl">
//             <motion.a
//               href="https://github.com/sahithialladii"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="text-gray-700 hover:text-black transition"
//               title="GitHub"
//             >
//               <FaGithub />
//             </motion.a>

//             <motion.a
//               href="https://www.linkedin.com/in/sahithi-alladi89/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: -5 }}
//               className="text-blue-700 hover:text-blue-900 transition"
//               title="LinkedIn"
//             >
//               <FaLinkedin />
//             </motion.a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Image Section
//       <motion.div
//         className="md:w-[45%] flex justify-center mt-10 md:mt-0"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <img
//           src={profileImage}
//           alt="Sahithi"
//           className="w-80 h-80 object-cover shadow-xl border-4 border-indigo-300 rounded-full"
//         />
//       </motion.div> */}
//     </div>
//   );
// };

// export default Home;








import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import profileImage from '../assets/img/profile.JPG';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12 md:px-16 md:py-20 text-center">

      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          👋 Hello, I'm <span className="text-indigo-600">Sahithi Alladi</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
          A passionate Web Developer & ML Enthusiast
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          I'm an aspiring software developer with a strong interest in front-end development and artificial intelligence.
          I love building user-friendly web applications and working on projects that solve real-world problems.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            View My Work <FaArrowRight className="ml-2" />
          </Link>

          <a
            href="/sahithi_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            <AiOutlineDownload className="mr-2 text-xl" />
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl mt-4">
          <motion.a
            href="https://github.com/sahithialladii"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-700 hover:text-black transition"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sahithi-alladi89/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-blue-700 hover:text-blue-900 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;
