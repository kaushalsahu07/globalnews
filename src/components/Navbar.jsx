import React, { useState } from 'react';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
     <>
        <nav className='bg-black w-full h-20 flex items-center justify-between px-6 relative'>
            <div className="text-[var(--highlight-color)] font-bold text-[20px]">
                <FontAwesomeIcon icon={faGlobe} /> {' '}GlobalNews
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-[var(--highlight-color)] text-2xl"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-5 text-[var(--highlight-color)] text-[18px]">
                <li><a href="#home" className="hover:text-[var(--primary-color)] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[var(--primary-color)] transition-colors">Business</a></li>
                <li><a href="#blog" className="hover:text-[var(--primary-color)] transition-colors">Sports</a></li>
                <li><a href="#services" className="hover:text-[var(--primary-color)] transition-colors">Technology</a></li>
                <li><a href="#contact" className="hover:text-[var(--primary-color)] transition-colors">Entertainment</a></li>
            </ul>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-20 left-0 right-0 bg-black flex-col items-center py-4 gap-4 border-t border-gray-700 z-50`}>
                <a href="#home" className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors">Home</a>
                <a href="#about" className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors">Business</a>
                <a href="#blog" className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors">Sports</a>
                <a href="#services" className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors">Technology</a>
                <a href="#contact" className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors">Entertainment</a>
                <a href="mailto:kaushal.r.sahu@outlook.com?subject=Let's Talk" className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors">Contact</a>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
                <a 
                    href="mailto:kaushal.r.sahu@outlook.com?subject=Let's Talk" 
                    className="text-[var(--highlight-color)] font-bold hover:text-[var(--primary-color)] transition-colors"
                >
                    Contact
                </a>
            </div>
        </nav>
     </>
    );
}

export default Navbar;