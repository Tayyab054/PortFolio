import React from 'react'
import timage from '../assets/ta1.jpeg'

function about() {
    return (
        
        <div className='bg-black text-white px-2 py-20 lg:px-20  text-center'  id='About'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-xl font-bold text-center mb-12 sm:text-4xl' >About Me</h2>
                <div className='flex flex-col md:flex-row item-center md:space-x-12 '>
                    <img src={timage} className='w-72 h-70 rounded object-top object-cover mb-8 md:mb-0 '  alt="" />
                    <div className='flex-1'>
                        <p className='text-sm font-semibold mb-8'>Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tayyab</span>. love creating modern, responsive, and eye-catching websites. I mainly work with React, Tailwind CSS, and JavaScript, and I enjoy turning ideas into interactive designs. Coding for me is not just about building apps — it’s about solving problems and making things easier and more fun for people.</p>
                        <div className='space-y-6 '>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-6'>
                                <label className='text-sm font-semibold w-full sm:w-1/4  mb-2 sm:mb-0'>
                                    HTML & CSS.
                                </label>
                                <div className='w-full bg-teal-900 h-2.5 rounded-full'>
                                    <div className='bg-gradient-to-r from-teal-500 to-pink-500 h-2.5 rounded-full w-11/12 transition-transform duration-300 hover:scale-105'></div>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-6'>
                                <label className='text-sm font-semibold w-full sm:w-1/4 whitespace-nowrap mb-2 sm:mb-0'>
                                    JavaScript
                                </label>
                                <div className='w-full bg-teal-900 h-2.5 rounded-full'>
                                    <div className='bg-gradient-to-r from-teal-500 to-pink-500 h-2.5 rounded-full w-10/12 transition-transform duration-300 hover:scale-105'></div>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-6'>
                                <label className='text-sm font-semibold w-full sm:w-1/4 whitespace-nowrap mb-2 sm:mb-0'>
                                    React.Js
                                </label>
                                <div className='w-full bg-teal-900 h-2.5 rounded-full'>
                                    <div className='bg-gradient-to-r from-teal-500 to-pink-500 h-2.5 rounded-full w-9/12 transition-transform duration-300 hover:scale-105'></div>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-12 flex flex-row justify-between text-center gap-3'>
                            <div >
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>1+</h3>
                                <p>Experince</p>
                            </div>
                            <div >
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                                <p>Projects</p>
                            </div>
                            <div >
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>8+</h3>
                                <p>Happy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default about
