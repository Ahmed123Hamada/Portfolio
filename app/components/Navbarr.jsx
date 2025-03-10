
"use client";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Image from "next/image";
import portfolioImg from "../assets/img/my-profile-img.jpg";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

function Navbarr() {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "about", label: "About", icon: <ArticleOutlinedIcon /> },
    { id: "skills", label: "More Skills", icon: <AutoAwesomeOutlinedIcon /> },
    { id: "resume", label: "Resume", icon: <WorkOutlineOutlinedIcon /> },
    { id: "portfolio", label: "Portfolio", icon: <SchoolOutlinedIcon /> },
    { id: "contact", label: "Contact Me", icon: <ContactMailOutlinedIcon /> },
  ];

  return (
    <nav className="bg-gray-300 shadow-lg shadow-orange-200 h-screen fixed top-0 left-0 min-w-[330px] py-10 px-4 font-[sans-serif] overflow-auto z-50 transition-all duration-300 ease-in-out
     max-lg:hidden
    ">
      <Image
        src={portfolioImg}
        alt="Profile Image"
        className="mx-auto w-[100px] rounded-full circle  shadow-lg border-4 border-gray-600"
      />

      <h1 className="text-2xl font-bold text-center mt-4">Ahmed Hamada</h1>
      <div className="flex justify-center items-center gap-4 mt-4 divide-x  divide-gray-600 duration-500 ">
        <div className="px-12 py-4 bg-blue-100 rounded-full flex items-center justify-center gap-4">
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
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`text-sm flex items-center  gap-3 px-4 py-3 rounded transition-all ${
                active === item.id ? "text-blue-600 font-bold bg-blue-100" : "text-black hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbarr;
