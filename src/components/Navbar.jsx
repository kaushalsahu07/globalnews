import React from 'react';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
     <>
        <nav className='bg-black w-full h-20 flex items-center justify-evenly px-10'>
           <div className="text-[var(--highlight-color)] font-bold text-[20px]"> <FontAwesomeIcon icon={faGlobe} /> {' '}GlobalNews</div>
           <ul className="flex gap-5 text-[var(--highlight-color)] text-[18px]">
               <li><a href="#home">Home</a></li>
               <li><a href="#about">Business</a></li>
               <li><a href="#blog">Sports</a></li>
               <li><a href="#services">Technology</a></li>
               <li><a href="#contact">Entertainment</a></li>
           </ul>
           <div className="button font-bold">
            <a href="mailto:kaushal.r.sahu@outlook.com?subject=Let's Talk">Contact</a>
           </div>
        </nav>
     </>
    );
}

export default Navbar;