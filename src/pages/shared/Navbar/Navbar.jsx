import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'; // Your existing logo

const Navbar = () => {
    // State to manage mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // Array of navigation links for easy mapping
    const navLinks = [
        { title: 'Services', path: '/services' },
        { title: 'Coverage', path: '/coverage' },
        { title: 'About Us', path: '/about' },
        { title: 'Pricing', path: '/pricing' },
        { title: 'Be a Rider', path: '/rider' },
    ];

    // Function to close the mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 rounded-2xl mb-15">
            {/* Main container with max-width */}
            <div className=" mx-auto px-5 sm:px-6 lg:px-6 py-3 sm:py-4 lg:py-3">
                <div className="flex justify-between items-center h-16">

                    {/* 1. Logo (Left Side) */}
                    <div className="shrink-0">
                        <Link to="/" className='flex' onClick={handleLinkClick}>
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                alt="ZapShift Logo"
                            />
                            <p className='font-urbanist font-extrabold text-3xl mt-4 -ml-3'>Profast</p>
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation Links (Center) */}
                    <div className="hidden md:flex md:items-center gap-9 text-base font-urbanist font-medium">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.title}
                                to={link.path}
                                // This 'className' function is provided by NavLink
                                // It automatically applies styles based on 'isActive'
                                className={({ isActive }) =>
                                    isActive
                                        ? ' font-bold rounded-full px-5 py-3 bg-[#CAEB66]' // Active link style
                                        : ' font-medium' // Default link style
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>

                    {/* 3. Desktop Buttons (Right Side) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="
                bg-white 
                text-green-600 
                font-medium 
                px-4 
                py-2 
                rounded-md 
                border 
                border-green-600 
                hover:bg-green-50
                transition duration-150
              "
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="
                bg-green-600 
                text-white 
                font-medium 
                px-4 
                py-2 
                rounded-md 
                hover:bg-green-700
                transition duration-150
              "
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* 4. Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="
                inline-flex 
                items-center 
                justify-center 
                p-2 
                rounded-md 
                text-gray-400 
                hover:text-gray-500 
                hover:bg-gray-100 
                focus:outline-none 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-green-500
              "
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for "Menu" (hamburger) */}
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                // Icon for "Close" (X)
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* 5. Mobile Menu (Dropdown Panel) */}
            <div
                className={`
          md:hidden 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} 
          overflow-hidden
        `}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.title}
                            to={link.path}
                            onClick={handleLinkClick} // Close menu on click
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-green-50 text-green-600 block px-3 py-2 rounded-md text-base font-medium' // Active mobile
                                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium' // Default mobile
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
                {/* Buttons in mobile menu */}
                <div className="px-5 pb-4 space-y-3">
                    <Link
                        to="/login"
                        onClick={handleLinkClick}
                        className="
                block 
                w-full 
                text-center 
                bg-white 
                text-green-600 
                font-medium 
                px-4 
                py-2 
                rounded-md 
                border 
                border-green-600 
                hover:bg-green-50
              "
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        onClick={handleLinkClick}
                        className="
                block 
                w-full 
                text-center 
                bg-green-600 
                text-white 
                font-medium 
                px-4 
                py-2 
                rounded-md 
                hover:bg-green-700
              "
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;