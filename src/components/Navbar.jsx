import { useState } from 'react';
import logo from "../assets/surekha_logo.jpg";
import { FaEnvelope, FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.body.classList.toggle('dark-mode');
  // };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-x2 w-10" src={logo} alt="logo" />
      </div> 
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
        {/* <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar;
