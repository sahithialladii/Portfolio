// import React from 'react'
// import { NavLink } from 'react-router-dom'


// const Navbar = () => {
//     const Linksdata = [
//         {
//             title: 'About',
//             path: '/about'
//         },
//         {
//             title: 'Projects',
//             path: '/projects'
//         },
//         {
//             title: 'Resume',
//             path: '/resume'
//         }
//     ]

//     return (
//         <>                       
//          {Linksdata.map((link, index) => (
//                             <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-gray-700 hover:text-white flex justify-center items-center rounded-sm'>
//                                 {link.title}
//                             </NavLink>
//                         ))
//                         }
//         </>
//     )
// }

// export default Navbar









// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // icon library
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const Linksdata = [
//         { title: 'About', path: '/about' },
//         { title: 'Projects', path: '/projects' },
//         { title: 'Contact', path: '/contact' }
//     ];

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="bg-gray-900 text-white shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo or Site Name */}
//                     <Link to='/'>
//                     <div className="text-2xl font-semibold text-blue-400">Sahithi Alladi</div></Link>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex space-x-6">
//                         {Linksdata.map((link, index) => (
//                             <NavLink
//                                 key={index}
//                                 to={link.path}
//                                 className={({ isActive }) =>
//                                     `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 
//                                     ${isActive ? 'bg-teal-600 text-white' : 'hover:bg-teal-500 hover:text-white'}`
//                                 }
//                             >
//                                 {link.title}
//                             </NavLink>
//                         ))}
//                     </div>

//                     {/* Mobile Menu Icon */}
//                     <div className="md:hidden">
//                         <button onClick={toggleMenu} className="focus:outline-none">
//                             {isOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isOpen && (
//                 <div className="md:hidden px-4 pb-3 space-y-2">
//                     {Linksdata.map((link, index) => (
//                         <NavLink
//                             key={index}
//                             to={link.path}
//                             onClick={() => setIsOpen(false)}
//                             className={({ isActive }) =>
//                                 `block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 
//                                 ${isActive ? 'bg-teal-600 text-white' : 'hover:bg-teal-500 hover:text-white'}`
//                             }
//                         >
//                             {link.title}
//                         </NavLink>
//                     ))}
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;







import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // icon library

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Linksdata = [
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-indigo-900  text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Site Name */}
                    <Link to="/">
                        <div className="text-2xl font-semibold text-white">
                            Sahithi Alladi
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {Linksdata.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 
                                    ${
                                        isActive
                                            ? 'bg-indigo-600 text-white'
                                            : 'hover:bg-indigo-600 hover:text-white'
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-3 space-y-2">
                    {Linksdata.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 
                                ${
                                    isActive
                                        ? 'bg-indigo-600 text-white'
                                        : 'hover:bg-indigo-500 hover:text-white'
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

