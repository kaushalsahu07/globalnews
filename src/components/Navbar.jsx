import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownItems = [
    { name: "Business", path: "/business" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
    { name: "Entertainment", path: "/entertainment" }
  ];
  
  const mainMenuItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" }
  ];

  return (
    <nav className="bg-[var(--black-color)] w-full h-20 flex items-center justify-between px-6 relative">
      <Link to="/" className="text-[var(--highlight-color)] font-bold text-[20px] hover:scale-110 transition-transform duration-300">
        <FontAwesomeIcon
          icon={faEarthAmericas}
          className="animate-spin-slow"
        />{" "}
        <span className="hover:text-[var(--primary-color)] transition-colors">
          GlobalNews
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--highlight-color)] text-2xl transform transition-transform duration-300 hover:scale-110"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className="transition-transform duration-300"
        />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {/* Regular Menu Items */}
        <ul className="flex gap-5 text-[var(--highlight-color)] text-[18px]">
          {mainMenuItems.map((item) => (
            <li
              key={item.name}
              className="transform transition-all duration-300 hover:scale-110"
            >
              <Link
                to={item.path}
                className="relative hover:text-[var(--primary-color)] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[var(--primary-color)] after:left-0 after:-bottom-1 after:rounded-full after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dropdown Menu */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-[var(--highlight-color)] text-[18px] font-semibold hover:text-[var(--primary-color)] transition-colors duration-300 focus:outline-none">
            Menu
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul className="absolute left-0 w-[10rem] h-[9rem] bg-[var(--black-color)] border border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50 flex flex-col gap-2 py-2">
            {dropdownItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-center text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-colors duration-200 rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        } md:hidden absolute top-20 left-0 right-0 bg-[var(--black-color)] flex-col items-center justify-center h-[20rem] gap-6 border-t border-gray-700 z-50 transition-all duration-300 ease-in-out transform`}
        style={{ display: isMenuOpen ? "flex" : "flex" }}
      >
        {[...mainMenuItems, ...dropdownItems].map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-[var(--highlight-color)] hover:text-[var(--primary-color)] transition-all duration-300 transform hover:translate-x-2"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: `translateX(${isMenuOpen ? "0" : "-20px"})`,
              transition: `all 300ms ease-in-out ${index * 100}ms`,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
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
  );
};

export default Navbar;