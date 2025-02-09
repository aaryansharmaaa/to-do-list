import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center my-4 mx-6 px-6 py-4 bg-green-500 rounded-xl shadow-lg'>
            <div className='font-extrabold text-white text-3xl tracking-wide'>
                TO-DO LIST
            </div>

            <ul className='hidden md:flex space-x-8 text-white font-semibold text-lg'>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">Career</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">Blog</a>
                </li>
            </ul>

            <button className='px-4 py-2 bg-amber-400 text-green-900 font-bold rounded-lg shadow-md
                hover:bg-amber-300 transition-all duration-300'>
                Sign Up
            </button>
        </nav>
    );
};

export default Navbar;
