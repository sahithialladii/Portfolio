// import React from 'react';
// import profile from '../assets/img/profile.JPG';

// const About = () => {
//     return (
//         <div className="min-h-screen bg-gray-100 px-6 py-12">
//             <div className="max-w-6xl mx-auto">

//                 {/* Intro Section with Image */}
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">
//                     {/* Image */}
//                     <img
//                         src={profile}
//                         alt="Profile"
//                         className="w-80 h-100 object-cover rounded-2xl shadow-lg"
//                     />

//                     {/* About Text */}
//                     <div className="flex-1">
//                         <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-teal-400 inline-block pb-2">About Me</h1>
//                         <p className="text-lg text-gray-700 leading-relaxed mt-4">
//                             Hi, I'm <span className="text-teal-600 font-semibold">Alladi Sahithi</span>, a passionate and curious tech learner dedicated to building user-friendly digital experiences. I enjoy crafting responsive web interfaces using modern frameworks and am diving deep into AI and ML. I'm currently enhancing my skills through internships, projects, and open-source contributions while staying updated with the latest in technology.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Skills Section */}
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">Skills</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
//                     {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Python', 'Machine Learning'].map((skill, index) => (
//                         <div
//                             key={index}
//                             className="bg-white shadow-md rounded-xl p-4 text-center text-gray-700 font-medium hover:bg-teal-50 transition duration-200"
//                         >
//                             {skill}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Tools Section */}
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools I Use</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                     {['VS Code', 'GitHub', 'Figma', 'Google Colab', 'Postman', 'Excel', 'Canva', 'ChatGPT'].map((tool, index) => (
//                         <div
//                             key={index}
//                             className="bg-white shadow-md rounded-xl p-4 text-center text-gray-700 font-medium hover:bg-teal-50 transition duration-200"
//                         >
//                             {tool}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;









// import React from 'react';
// import { motion } from 'framer-motion';
// import profile from '../assets/img/profile.JPG';

// const About = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12">
//             <div className="max-w-6xl mx-auto">

//                 {/* Intro Section with Image */}
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">
//                     {/* Image */}
//                     <img
//                         src={profile}
//                         alt="Profile"
//                         className="w-80 h-100 object-cover rounded-2xl shadow-lg"
//                     />

//                     {/* About Text */}
//                     <div className="flex-1">
//                         <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-400 inline-block pb-2">About Me</h1>
//                         <p className="text-lg text-gray-700 leading-relaxed mt-4">
//                             Hi, I'm <span className="text-teal-600 font-semibold">Alladi Sahithi</span>, a passionate and curious tech learner dedicated to building user-friendly digital experiences. I enjoy crafting responsive web interfaces using modern frameworks and am diving deep into AI and ML. I'm currently enhancing my skills through internships, projects, and open-source contributions while staying updated with the latest in technology.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Skills Section */}
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">Skills</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
//                     {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Python', 'Machine Learning'].map((skill, index) => (
//                         <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
//                             transition={{ type: 'spring', stiffness: 300 }}
//                             className="bg-white shadow-md rounded-xl p-4 text-center text-gray-700 font-medium cursor-pointer"
//                         >
//                             {skill}
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Tools Section */}
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools I Use</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                     {['VS Code', 'GitHub', 'Figma', 'Google Colab', 'Postman', 'Excel', 'Canva', 'ChatGPT'].map((tool, index) => (
//                         <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
//                             transition={{ type: 'spring', stiffness: 300 }}
//                             className="bg-white shadow-md rounded-xl p-4 text-center text-gray-700 font-medium cursor-pointer"
//                         >
//                             {tool}
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;







import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/img/profile.JPG';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Intro Section with Image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">
                    {/* Image */}
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-80 h-100 object-cover rounded-2xl shadow-lg"
                    />

                    {/* About Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-indigo-600 inline-block pb-2">
                            About Me
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            Hi, I'm <span className="text-indigo-800 font-semibold">Alladi Sahithi</span>, a passionate and curious tech learner dedicated to building user-friendly digital experiences. I enjoy crafting responsive web interfaces using modern frameworks and am diving deep into AI and ML. I'm currently enhancing my skills through internships, projects, and open-source contributions while staying updated with the latest in technology.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-4 border-indigo-600 inline-block mt-10">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                    {['Python', 'HTML', 'React', 'Tailwind CSS', 'CSS','Git', 'Machine Learning'].map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white shadow-md rounded-xl p-4 text-center text-gray-800 font-medium cursor-pointer"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>

                {/* Tools Section */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-4 border-indigo-600 inline-block">Tools I Use</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {['VS Code', 'GitHub', 'Excel', 'Canva', 'ChatGPT','Postman'].map((tool, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white shadow-md rounded-xl p-4 text-center text-gray-800 font-medium cursor-pointer"
                        >
                            {tool}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;

