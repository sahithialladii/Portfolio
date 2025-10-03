// import React from 'react';
// import car from '../assets/img/car.jpeg'
// import AIQPG from '../assets/img/AIQPG.jpg'
// import plant from '../assets/img/plannt.jpg'
// const Projects = () => {
//   const projects = [
//     {
//       title: 'AI-Based Adaptive Assessment System',
//       description: 'AI-powered assignment generator personalizes question papers based on class marksheets as high performers or struggling learners and uses Gemini and Groq’s LLaMA3 to create two sets of questions—analytical for top students and concept-based for others. Built with Flask, it supports secure login, takes inputs like subject, topic, questions, and total marks, stores generated papers in MySQL, and provides PDF preview/download to promote targeted learning and improved performance.',
//       tech: ['ML', 'React', 'Data Visualization'],
//       link: 'https://github.com/sahithialladii/AI-QPG.git',
//       image: AIQPG,
//     },
//         {
//       title: 'MotoMart',
//       description: 'An e-commerce website for a car store with modern UI, built using React and Tailwind CSS.',
//       tech: ['React', 'Tailwind', 'Routing'],
//       link: 'https://github.com/SiriSamala/CarStore-Project',
//       image: car,
//     },
//             {
//       title: 'Plant Disease Detection',
//       description: 'A deep learning project that identifies plant diseases from leaf images.It uses a Convolutional Neural Network (CNN) to classify images into healthy or diseased categories.The model is trained on a dataset of plant leaf images with various disease labels.This helps in early detection and treatment of plant diseases to improve crop health.',
//       tech: ['React', 'Tailwind', 'Routing'],
//       link: 'https://github.com/sahithialladii/plant-disease-detection-using-machinelearning.git',
//       image: plant,
//     }
//     // Add more projects here...
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-teal-400 inline-block pb-2">
//           My Recent Work
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />

//               {/* Content */}
//               <div className="p-5 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                 </div>

//                 <div className="mt-auto">
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
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
//                       className="text-teal-600 hover:text-teal-800 text-sm font-semibold"
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








// import React from 'react';
// import car from '../assets/img/car.jpeg';
// import AIQPG from '../assets/img/AIQPG.jpg';
// import plant from '../assets/img/plannt.jpg';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'AI-Based Adaptive Assessment System',
//       description:
//         'AI-powered assignment generator personalizes question papers based on class marksheets as high performers or struggling learners and uses Gemini and Groq’s LLaMA3 to create two sets of questions—analytical for top students and concept-based for others. Built with Flask, it supports secure login, takes inputs like subject, topic, questions, and total marks, stores generated papers in MySQL, and provides PDF preview/download to promote targeted learning and improved performance.',
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
//       title: 'Plant Disease Detection',
//       description:
//         'A deep learning project that identifies plant diseases from leaf images. It uses a Convolutional Neural Network (CNN) to classify images into healthy or diseased categories. The model is trained on a dataset of plant leaf images with various disease labels. This helps in early detection and treatment of plant diseases to improve crop health.',
//       tech: ['React', 'Tailwind', 'Routing'],
//       link: 'https://github.com/sahithialladii/plant-disease-detection-using-machinelearning.git',
//       image: plant,
//     },
//     // Add more projects here...
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-indigo-600 inline-block pb-2">
//           My Recent Work
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />

//               {/* Content */}
//               <div className="p-5 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     {project.title}
//                   </h2>
//                   <p className="text-gray-700 mb-4">{project.description}</p>
//                 </div>

//                 <div className="mt-auto">
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
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
//                       className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
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





import React from 'react';
import car from '../assets/img/car.jpeg';
import AIQPG from '../assets/img/AIQPG.jpg';
import plant from '../assets/img/plannt.jpg';

const Projects = () => {
  const projects = [
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
      title: 'Plant Disease Detection',
      description:
        'A deep learning project that identifies plant diseases from leaf images using a CNN to classify healthy or diseased leaves for early treatment and improved crop health.',
      tech: ['React', 'Tailwind', 'Routing'],
      link: 'https://github.com/sahithialladii/plant-disease-detection-using-machinelearning.git',
      image: plant,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-indigo-600 inline-block pb-2">
          My Recent Work
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col max-w-sm mx-auto"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover" 
              />

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-snug mb-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
