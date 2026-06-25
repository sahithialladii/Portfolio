// import React from 'react';
// import car from '../assets/img/car.jpeg';
// import AIQPG from '../assets/img/AIQPG.jpg';
// import plant from '../assets/img/plannt.jpg';
// import respiratory from '../assets/img/respiratory.png';
// import bookmyshow from '../assets/img/bookmyshow.png';

// const Projects = () => {
//   const projects = [
//     {
// title: 'Smart Respiratory Health Monitoring System',
// description:
// 'An AI-powered healthcare application designed to monitor and analyze respiratory health using deep learning. The system processes respiratory audio recordings, extracts audio features using Librosa, and utilizes the RDLINet deep learning model to classify respiratory conditions. Built with React for the frontend, Flask for the backend, MySQL for data management, and Socket.IO for real-time communication, the application provides fast and accurate respiratory health assessment through an interactive web interface.',
// tech: ['React', 'Flask', 'MySQL', 'Socket.IO', 'Librosa', 'RDLINet', 'Deep Learning'],
// link: 'https://github.com/sahithialladii/RHMS',
// image: respiratory
// },
//     {
//       title: 'AI-Based Adaptive Assessment System',
//       description:
//         'AI-powered assignment generator personalizes question papers based on class marksheets and uses Gemini and Groq’s LLaMA3 to create two sets of questions—analytical for top students and concept-based for others. Built with Flask, it supports secure login, inputs like subject/topic/questions/marks, stores generated papers in MySQL, and provides PDF preview/download.',
//       tech: ['ML', 'React', 'Data Visualization'],
//       link: 'https://github.com/sahithialladii/AI-QPG.git',
//       image: AIQPG,
//     },
//     {
//       title: 'MotoMart',
//       description:
//         'An e-commerce website for a car store with modern UI, built using React and Tailwind CSS.',
//       tech: ['React', 'Tailwind', 'Routing'],
//       link: 'https://github.com/SiriSamala/CarStore-Project',
//       image: car,
//     },
//     {
// title: 'MovieTicketPro - Movie Ticket Booking System',
// description:
// 'A full-stack movie ticket booking application that allows users to browse movies, view show timings, select seats, and book tickets online. Built using React for the frontend and Spring Boot with MySQL for the backend, the system includes user authentication, movie management, theatre management, show scheduling, and seat booking functionalities with an intuitive user interface.',
// tech: ['React', 'Spring Boot', 'MySQL', 'REST API', 'JWT Authentication'],
// link: 'https://github.com/sahithialladii/Bookmyshow',
// image: bookmyshow
// },

//     {
//       title: 'Plant Disease Detection',
//       description:
//         'A deep learning project that identifies plant diseases from leaf images using a CNN to classify healthy or diseased leaves for early treatment and improved crop health.',
//       tech: ['React', 'Tailwind', 'Routing'],
//       link: 'https://github.com/sahithialladii/plant-disease-detection-using-machinelearning.git',
//       image: plant,
//     },
//     {
// title: 'Festival Log',
// description:
// 'A cultural storytelling and preservation platform developed using Python and Streamlit. The application allows users to document festivals they have personally experienced by uploading original photographs and adding detailed descriptions. It serves as a digital archive that helps preserve cultural traditions, customs, and authentic festival memories from different communities and regions.',
// tech: ['Python', 'Streamlit'],
// link: 'https://github.com/sahithialladii/Festival-log',
// image: 'data:image/jpeg;base64,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'
// }

//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-indigo-600 inline-block pb-2">
//           My Recent Work
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col max-w-sm mx-auto"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-36 object-cover" 
//               />

//               {/* Content */}
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800 mb-1">
//                     {project.title}
//                   </h2>
//                   <p className="text-gray-700 text-sm leading-snug mb-3">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div className="mt-auto">
//                   <div className="flex flex-wrap gap-1 mb-3">
//                     {project.tech.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold"
//                     >
//                       View Project →
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;















import React from "react";
import car from "../assets/img/car.jpeg";
import AIQPG from "../assets/img/AIQPG.jpg";
import plant from "../assets/img/plannt.jpg";
import respiratory from "../assets/img/respiratory.png";
import bookmyshow from "../assets/img/bookmyshow.png";

const Projects = () => {
  const projects = [
{
title: 'Smart Respiratory Health Monitoring System',
description:
'An AI-powered healthcare application designed to monitor and analyze respiratory health using deep learning. The system processes respiratory audio recordings, extracts audio features using Librosa, and utilizes the RDLINet deep learning model to classify respiratory conditions. Built with React for the frontend, Flask for the backend, MySQL for data management, and Socket.IO for real-time communication, the application provides fast and accurate respiratory health assessment through an interactive web interface.',
tech: ['React', 'Flask', 'MySQL', 'Socket.IO', 'Librosa', 'RDLINet', 'Deep Learning'],
link: 'https://github.com/sahithialladii/RHMS',
image: respiratory
},
    {
      title: 'AI-Based Adaptive Assessment System',
      description:
        'AI-powered assignment generator personalizes question papers based on class marksheets and uses Gemini and Groq’s LLaMA3 to create two sets of questions—analytical for top students and concept-based for others. Built with Flask, it supports secure login, inputs like subject/topic/questions/marks, stores generated papers in MySQL, and provides PDF preview/download.',
      tech: ['ML', 'React', 'Data Visualization'],
      link: 'https://github.com/sahithialladii/AI-QPG.git',
      image: AIQPG,
    },
    {
      title: 'MotoMart',
      description:
        'An e-commerce website for a car store with modern UI, built using React and Tailwind CSS.',
      tech: ['React', 'Tailwind', 'Routing'],
      link: 'https://github.com/SiriSamala/CarStore-Project',
      image: car,
    },
    {
title: 'MovieTicketPro - Movie Ticket Booking System',
description:
'A full-stack movie ticket booking application that allows users to browse movies, view show timings, select seats, and book tickets online. Built using React for the frontend and Spring Boot with MySQL for the backend, the system includes user authentication, movie management, theatre management, show scheduling, and seat booking functionalities with an intuitive user interface.',
tech: ['React', 'Spring Boot', 'MySQL', 'REST API', 'JWT Authentication'],
link: 'https://github.com/sahithialladii/Bookmyshow',
image: bookmyshow
},

    {
      title: 'Plant Disease Detection',
      description:
        'A deep learning project that identifies plant diseases from leaf images using a CNN to classify healthy or diseased leaves for early treatment and improved crop health.',
      tech: ['React', 'Tailwind', 'Routing'],
      link: 'https://github.com/sahithialladii/plant-disease-detection-using-machinelearning.git',
      image: plant,
    },
    {
title: 'Festival Log',
description:
'A cultural storytelling and preservation platform developed using Python and Streamlit. The application allows users to document festivals they have personally experienced by uploading original photographs and adding detailed descriptions. It serves as a digital archive that helps preserve cultural traditions, customs, and authentic festival memories from different communities and regions.',
tech: ['Python', 'Streamlit'],
link: 'https://github.com/sahithialladii/Festival-log',
image: 'data:image/jpeg;base64,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',
demo:'https://huggingface.co/spaces/AlladiSahithi/festival-log'
}
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of AI, Machine Learning, Healthcare, Full Stack and
            Web Development projects that showcase my technical skills and
            problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white/70
                backdrop-blur-lg
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                border
                border-white/50
                flex
                flex-col
              "
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        bg-indigo-100
                        text-indigo-700
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      bg-indigo-600
                      hover:bg-indigo-700
                      text-white
                      py-2.5
                      rounded-xl
                      font-medium
                      transition
                    "
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        text-center
                        border-2
                        border-indigo-600
                        text-indigo-600
                        hover:bg-indigo-600
                        hover:text-white
                        py-2.5
                        rounded-xl
                        font-medium
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
