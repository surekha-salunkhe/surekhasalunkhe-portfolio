import { useState, useEffect } from 'react';
import logo from "../assets/surekha_logo.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // // Toggle menu open/close
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // // Close the menu when clicking outside or on resizing the screen
  // useEffect(() => {
  //   const handleResize = () => setIsMenuOpen(false);
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-dropdown')) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="relative mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="mailto:smsurekha19@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/surekhasalunkhe19/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/surekha-salunkhe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>

      {/* Menu button */}
      {/* <div className="mobile-menu block md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </div> */}

      {/* // absolute top-full left-0 text-white shadow-lg w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] */}
      {/* Dropdown menu */}
      {/* {isMenuOpen && (
        <div className="menu-dropdown absolute w-screen top-20 ">
          
          <ul className="flex flex-col items-center py-1 border-t border-b border-neutral-800">
            <li className="py-1">
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li className="py-1">
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="py-1">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li className="py-1">
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
