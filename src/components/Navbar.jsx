import React, { useState } from 'react';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
     <>
        <nav className='bg-black w-full h-20 flex items-center justify-between px-6 relative'>
            <div className="text-[var(--highlight-color)] font-bold text-[20px] hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faEarthAmericas} className="animate-spin-slow" /> {" "}
                <span className="hover:text-[var(--primary-color)] transition-colors">GlobalNews</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-[var(--highlight-color)] text-2xl transform transition-transform duration-300 hover:scale-110"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="transition-transform duration-300" />
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-5 text-[var(--highlight-color)] text-[18px]">
                {['Home', 'Business', 'Sports', 'Technology', 'Entertainment'].map((item, index) => (
                    <li key={item} className="transform transition-all duration-300 hover:scale-110">
                        <a 
                            href={`#${item.toLowerCase()}`}
                            className="relative hover:text-[var(--primary-color)] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[var(--primary-color)] after:left-0 after:-bottom-1 after:rounded-full after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <div 
                className={`${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
                } md:hidden absolute top-20 left-0 right-0 bg-black flex-col items-center justify-center h-[20rem] gap-6 border-t border-gray-700 z-50 transition-all duration-300 ease-in-out transform`}
                style={{ display: isMenuOpen ? 'flex' : 'flex' }}
            >
                {['Home', 'Business', 'Sports', 'Technology', 'Entertainment', 'Contact'].map((item, index) => (
                    <a 
                        key={item}
                        href={item === 'Contact' ? 'mailto:kaushal.r.sahu@outlook.com?subject=Let\'s Talk' : `#${item.toLowerCase()}`}
                        className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-all duration-300 transform hover:translate-x-2"
                        style={{ 
                            opacity: isMenuOpen ? 1 : 0,
                            transform: `translateX(${isMenuOpen ? '0' : '-20px'})`,
                            transition: `all 300ms ease-in-out ${index * 100}ms`
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="button hover:scale-110 transition-transform duration-300 hidden md:block">
                <a 
                    href="mailto:kaushal.r.sahu@outlook.com?subject=Let's Talk" 
                    className="text-[var(--highlight-color)] font-bold relative overflow-hidden group px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                    <span className="relative z-10 group-hover:text-[var(--highlight-color)] transition-colors duration-300">
                        Contact
                    </span>
                    <div className="absolute inset-0 bg-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
            </div>
        </nav>
     </>
    );
}

export default Navbar;