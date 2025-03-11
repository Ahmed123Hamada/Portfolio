 // Add this directive at the top of the fileimport React, { useState } from 'react'
"use client";
// icon material ui
import HomeIcon from "@mui/icons-material/Home";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { useState } from "react";
import TypedText from "./TypedText";
import Image from "next/image";
import heroImg from  "../assets/img/hero.png";
import portfolioImg from "../assets/img/my-profile-img.jpg";

function Main() {
      const [isOpen, setIsOpen] = useState(false);
      const [active, setActive] = useState('home');
      const menuItems = [
        { id: "home", label: "Home", icon: <HomeIcon /> },
        { id: "about", label: "About", icon: <ArticleOutlinedIcon /> },
        { id: "resume", label: "Resume", icon: <WorkOutlineOutlinedIcon /> },
        { id: "portfolio", label: "Portfolio", icon: <SchoolOutlinedIcon /> },
        { id: "contact", label: "Contact", icon: <ContactMailOutlinedIcon /> },
      ];
      
    
  return (
    <div id="home" className="w-full min-h-screen">
    <Image src={heroImg} alt="Hero Image"
      className="w-full h-[100vh] object-cover brightness-50 no-repeat bg-left "
    />

<div
  className="text-3xl text-sky-100 text-center font-[sans-serif] shadow-blue-300 shadow-sm
    p-4 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    max-md:text-2xl max-md:p-2 max-md:rounded-xl max-sm:w-[90%] max-sm:text-lg"
>
  <TypedText />
</div>


    <div>
      {isOpen && (
        ///animation for open menu  ///
        <nav
          data-aos="fade-right"
          className="bg-gray-300 translate-x-0 duration-500 shadow-lg  shadow-orange-200 h-screen fixed top-0 left-0 min-w-[300px] py-10 px-4 font-[sans-serif] overflow-auto z-50
                 transition-all  ease-in-out
             "
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              isOpen
                ? "fixed top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-2xl shadow-lg z-50  opacity-100 transition-opacity duration-300 pointer-events-auto "
                : "opacity-0 transition-opacity duration-300 pointer-events-none  "
            }
          >
            <span>
              <CloseIcon />
            </span>
          </button>

<Image
        src={portfolioImg}
        alt="Profile Image"
        className="mx-auto w-[100px] rounded-full circle  shadow-lg border-4 border-gray-600"
      />

      <h1 className="text-2xl font-bold text-center mt-4">Ahmed Hamada</h1>
      <div className="flex justify-center items-center gap-4 mt-4 divide-x  divide-gray-600 duration-500 ">
        <div className="px-12 py-4 bg-blue-100/60  rounded-xl flex items-center justify-between gap-4">
       <a
          href="https://www.facebook.com/profile.php?id=100055875888322"
          className="hover:text-blue-600 duration-500 hover:rotate-45 "
        >
          <Facebook />
        </a>{" "}
        <a href="/" className="hover:text-blue-400 duration-500 ">
          <Twitter />
        </a>{" "}
        <a
          href="www.linkedin.com/in/ahmed-hamada-662922211 "
          className="hover:text-blue-600 duration-500 "
        >
          <LinkedIn />
        </a>{" "}
        <a href="/" className="hover:text-red-500 duration-500 ">
          <Instagram />
        </a>
      </div>
      </div>
          

          <ul className="mt-6">
            <li>
              <a
                href="#home"
                onClick={() => (setActive("home"), setIsOpen(!isOpen))}
                className={`text-sm flex items-center gap-3 px-4 py-3 rounded transition-all ${
                  active === "home"
                    ? "text-blue-600 font-bold bg-blue-100"
                    : "text-black hover:text-blue-600 hover:bg-blue-50"
                }`}                

              >
                <HomeIcon />
                <span >Home</span>
              </a>
            </li>
          </ul>
          {/* information section */}

          <div className="mt-6">
            <h6 className="text-blue-600 text-sm font-bold px-4">
              Information
            </h6>
            <ul className="mt-3">
              <li>
                <a
                  href="#about"
                  onClick={() =>(setActive("about"), setIsOpen(!isOpen))}
                  className={`text-sm flex items-center gap-3 px-4 py-3 rounded transition-all ${
                    active === "about"
                      ? "text-blue-600 font-bold bg-blue-100"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] mr-4"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={() => (setActive("resume"), setIsOpen(!isOpen))}
                  className={`text-sm flex items-center gap-3 px-4 py-3 rounded transition-all ${
                    active === "resume"
                      ? "text-blue-600 font-bold bg-blue-100"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                                  >
                  <ArticleOutlinedIcon />
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => (setActive("portfolio"), setIsOpen(!isOpen))}
                  className={`text-sm flex items-center gap-3 px-4 py-3 rounded transition-all ${
                    active === "portfolio"
                      ? "text-blue-600 font-bold bg-blue-100"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <WorkOutlineOutlinedIcon />
                  <span>Portfolio</span>
                </a>
              </li>
            </ul>
          </div>
          {/* more skills */}
          <div className="mt-6">
            <h6 className="text-blue-600 text-sm font-bold px-4">
              More Skills
            </h6>
            <ul className="mt-3">
              <li>
                <a
                  href="#skills"
                  onClick={() => (setActive("skills"), setIsOpen(!isOpen))}
                  className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all gap-3"
                >
                  <SchoolOutlinedIcon />
                  <span>IT Projects</span>
                </a>
              </li>
              <li>
                <a
                onClick={() => (setActive("skills"), setIsOpen(!isOpen))}
                  href="#skills"
                  className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all gap-3"
                >
                  <AutoAwesomeOutlinedIcon />
                  <span>Graphic Design</span>
                </a>
              </li>
            </ul>
          </div>
          {/* actions */}
          <div className="mt-6">
            <h6 className="text-blue-600 text-sm font-bold px-5">
              Actions
            </h6>
            <ul className="mt-3">
              <li>
                <a
                  href="#contact" 
                  onClick={() => (setActive("contact"), setIsOpen(!isOpen))}
                  className={`text-sm flex items-center gap-3 px-4 py-3 rounded transition-all ${
                    active === "contact"
                      ? "text-blue-600 font-bold bg-blue-100"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                                  >
                  <ContactMailOutlinedIcon />
                  <span>Contact Me</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
        {/* ///////button for open menu//// */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            !isOpen
              ? "fixed top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-2xl shadow-lg  opacity-100 transition-opacity duration-300 z-50 pointer-events-auto hidden max-lg:block"
              : "opacity-0 transition-opacity duration-300 pointer-events-none"
          }
        >
          <span>
            <MenuIcon />
          </span>
        </button>
  </div>
  )
}

export default Main;
