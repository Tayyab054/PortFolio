import React from 'react'
import timage from '../assets/ta.png'

function about() {
    return (

        <div className='bg-black text-white py-20' id='About'>
            <div className='container max-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row item-center md:space-x-12 '>
                    <img src={timage} className='w-72 h-80 rounded object-top object-cover mb-8 md:mb-0' alt="" />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tayyab</span>. love creating modern, responsive, and eye-catching websites. I mainly work with React, Tailwind CSS, and JavaScript, and I enjoy turning ideas into interactive designs. Coding for me is not just about building apps — it’s about solving problems and making things easier and more fun for people.</p>
                        <div className='space-y-4 '>
                            <div className='flex items-center  space-x-8'>
                                <label htmlFor="html&css" className='w-2/12 ' >HTML & CSS</label>
                                <div className='grow bg-teal-900 h-2.5 rounded-4xl'>
                                    <div className='bg-gradient-to-r from-teal-500 to-pink-500 rounded-full h-2.5 transform transition-transform hover:duration-300 scale-105 w-11/12 '>
                                    </div>
                                </div>
                            </div>


                            <div className='flex items-center space-x-8'>
                                <label htmlFor="html&css" className='w-2/12' >JavaScript</label>
                                <div className='grow bg-teal-900 h-2.5 rounded-4xl'>
                                    <div className='bg-gradient-to-r from-teal-500 to-pink-500 rounded-full h-2.5 transform transition-transform hover:duration-300 scale-105 w-10/12 '>
                                    </div>
                                </div>

                            </div>

                            <div className='flex items-center space-x-8'>
                                <label htmlFor="html&css" className='w-2/12' >React.Js</label>
                                <div className='grow bg-teal-900 h-2.5 rounded-4xl'>
                                    <div className='bg-gradient-to-r from-teal-500 to-pink-500 rounded-full h-2.5 transform transition-transform hover:duration-300 scale-105 w-9/12 '>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-12 flex justify-between text-center'>
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
