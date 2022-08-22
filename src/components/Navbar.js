import React, { useState } from "react";
import logo from "../assets/mh-logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu((prev) => !prev);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-gradient-to-r from-slate-500 to-indigo-600 text-[#19191E] shadow-lg shadow-indigo-500/20">
      <div>
        <img
          src={logo}
          alt="Masaki Hook"
          style={{ width: "90px", marginBottom: "1rem" }}
        />
      </div>
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div className="md:hidden cursor-pointer" onClick={handleClick}>
        <FaBars className="text-4xl" />
      </div>
      {/* mobile */}
      <ul
        className={
          !menu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#141417] text-[#8585EE] flex flex-col justify-center items-center opacity-90"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="projects"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
      </ul>
      <FaTimes
        onClick={handleClick}
        className={
          !menu
            ? "hidden"
            : "absolute cursor-pointer top-[10px] right-[10px] text-4xl text-[#8585EE] mx-4 my-4"
        }
      />
      {/* social */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-300 to-indigo-600 rounded-md my-2">
            <a
              href="https://www.linkedin.com/in/masaki-hook-600549239/"
              className="text-[#3C3C6B] flex justify-between w-full items-center"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-300 to-indigo-600 rounded-md my-2">
            <a
              href="https://github.com/hookkl21"
              className="text-[#3C3C6B] flex justify-between w-full items-center"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-300 to-indigo-600 rounded-md my-2">
            <a
              href="#contact"
              className="text-[#3C3C6B] flex justify-between w-full items-center"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-300 to-indigo-600 rounded-md my-2">
            <a
              href="https://drive.google.com/file/d/1Tt4EpA37Nvp4yHNb9tX51z0B9OaFqqNc/view?usp=sharing"
              className="text-[#3C3C6B] flex justify-between w-full items-center"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
