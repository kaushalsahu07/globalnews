import React from 'react';
import '../index.css'
const Navbar = () => {
    return (
     <>
        <nav className='bg-black w-full h-20 flex items-center justify-evenly px-10'>
           <div className="text-white">NowNew</div>
           <ul className="flex gap-5 text-white">
               <li><a href="#home">Home</a></li>
               <li><a href="#about">Business</a></li>
               <li><a href="#blog">Sports</a></li>
               <li><a href="#services">Technology</a></li>
               <li><a href="#contact">Entertainment</a></li>
           </ul>
           <div className="button">
            <a href="mailto:kaushal.r.sahu@outlook.com?subject=Let's Talk">Contact</a>
           </div>
        </nav>
     </>
    );
}

export default Navbar;