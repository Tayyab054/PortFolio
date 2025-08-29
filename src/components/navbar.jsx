import React, { useState } from "react";
function Navbar() {
  return (
    <nav className="fixed left-0 w-full bg-black  text-white shadow-md z-50 px-6 md:px-18 lg:px-32">
      <div className="container flex px-2 justify-center md:justify-between items-center mx-auto">
        <div className=" text-2xl font-bold hidden md:inline ">Tayyab Ali</div>
        <div className="space-x-6 ">
          <div><img src="" alt="" /></div>
          <a href="#hero" className="hover:text-teal-300">Home</a>
          <a href="#About" className="hover:text-teal-300">About</a>
          <a href="#Servecies" className="hover:text-teal-300">Servecies</a>
          <a href="#Projects" className="hover:text-teal-300">Projects</a>
          <a href="#Contacts" className="hover:text-teal-300">Contact</a>
        </div>
        <button className="bg-gradient-to-t from-green-500 to-blue-500 hidden md:inline transform-3d transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"><a href="#Contacts">Contact Me</a></button>
      </div>
    </nav>
  );
}

export default Navbar
