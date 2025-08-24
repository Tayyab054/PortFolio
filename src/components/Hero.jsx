import React from 'react'
import timage from '../assets/ta.png'
import { Typewriter } from "react-simple-typewriter";
function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={timage} alt="" className='mx-auto mb-8 w-52 h-52 rounded-full object-top object-cover transform  transform transition-transform duration-500 hover:scale-110' />
       <h1 className="text-3xl font-bold">
      I am{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        <Typewriter
          words={["Full-Stack Developer", "Designer",]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
    <p className='text-gray-300 mt-4'>  I am a passionate <span className="text-green-600 font-semibold">Full-Stack Developer </span> 
  with experience in building modern web applications using both frontend and backend technologies.</p>
    <div className="space-x-4 mt-8">
        <button className="bg-gradient-to-r from-green-500 to-blue-500 transform-3d transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact With ME</button>
        <button className="bg-gradient-to-r from-fuchsia-500 to-red-500 transform-3d transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
    </div>
    </div>
    
  )
}

export default Hero
