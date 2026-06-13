import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
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
          I'm an aspiring software developer with a strong interest in front-end development.
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
