import React, { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black text-white px-8 md:px-18 lg:px-32">
      <div className="container flex py-2 justify-center md:justify-between items-center mx-auto">
        <div className=" text-2xl font-bold hidden md:inline ">Tayyab Ali</div>
        <div className="space-x-6 ">
          <a href="#home" className="hover:text-teal-300">Home</a>
          <a href="#About" className="hover:text-teal-300">About</a>
          <a href="#Skill" className="hover:text-teal-300">Skill</a>
          <a href="#Projects" className="hover:text-teal-300">Projects</a>
          <a href="#Contact" className="hover:text-teal-300">Contact</a>
        </div>
        <button className="bg-gradient-to-t from-green-500 to-blue-500 hidden md:inline transform-3d transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact Me</button>
      </div>
    </nav>
  );
}

export default Navbar
