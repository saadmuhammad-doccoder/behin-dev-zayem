import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { MdKeyboardArrowRight, MdMenu, MdClose } from "react-icons/md";

import { useState } from "react";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-10">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-2 w-[120px] h-[40px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Middle: Navigation Links - Hidden on smaller screens */}
      <div
        className={`space-x-10 bg-gray-800 rounded-full px-4 py-4 items-center border border-gray-500 leading-tight hidden lg:flex ${
          isOpen && "bg-gray-800"
        }`}
      >
        <a
          href="#stories"
          className="text-teal-400 hover:text-teal-400 bg-slate-600 p-2 rounded-full px-4"
        >
          STORIES
        </a>
        <a href="#events" className="hover:text-teal-400">
          EVENTS
        </a>
        <a href="#community" className="hover:text-teal-400">
          COMMUNITY
        </a>

        {/* Dropdown */}
        <div className="relative group">
          <button className="hover:text-teal-400 flex items-center">
            About ▾
          </button>
          <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-6 rounded shadow-lg w-[200px] h-[200px] ">
            <a
              href="#about-us"
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
            >
              <CiHome /> <span>Contribute</span>
              <MdKeyboardArrowRight className="opacity-1" />
            </a>
            <a
              href="#about-us"
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
            >
              <IoCallOutline /> <span>Courses</span>
              <MdKeyboardArrowRight className="opacity-1" />
            </a>
            <a
              href="#about-us"
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
            >
              <ImPower /> <span>Career</span>
              <MdKeyboardArrowRight className="opacity-1" />
            </a>
            <a
              href="#about-us"
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
            >
              <IoIosUnlock /> <span>About Us</span>
              <MdKeyboardArrowRight className="opacity-1" />
            </a>
          </div>
        </div>
      </div>

      <Button className="bg-teal-400 text-black rounded-full px-6 py-4 hover:bg-teal-500 flex items-center gap-x-2 ">
        <span>LETS START -ITS FREE</span>
        <FaArrowRightLong />
      </Button>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 p-4 lg:hidden">
          <a href="#stories" className="text-teal-400 hover:text-teal-400">
            STORIES
          </a>
          <a href="#events" className="hover:text-teal-400">
            EVENTS
          </a>
          <a href="#community" className="hover:text-teal-400">
            COMMUNITY
          </a>
          <div className="relative group">
            <button className="hover:text-teal-400 flex items-center">
              About ▾
            </button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-8 rounded shadow-lg w-[200px] h-[200px]">
              <a
                href="#about-us"
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
              >
                <CiHome /> <span>Contribute</span>
                <MdKeyboardArrowRight className="opacity-1" />
              </a>
              <a
                href="#about-us"
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
              >
                <IoCallOutline /> <span>Courses</span>
                <MdKeyboardArrowRight className="opacity-1" />
              </a>
              <a
                href="#about-us"
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
              >
                <ImPower /> <span>Career</span>
                <MdKeyboardArrowRight className="opacity-1" />
              </a>
              <a
                href="#about-us"
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 space-x-2 group"
              >
                <IoIosUnlock /> <span>About Us</span>
                <MdKeyboardArrowRight className="opacity-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
