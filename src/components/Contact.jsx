import React, { useState } from "react";


function Contact() {
    return (
    <div className='bg-black text-white px-2 py-20 lg:px-20 ' id='Contacts'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-xl font-bold text-center mb-12 sm:text-4xl' >Contact</h2>
            <div className='flex flex-col md:flex-row item-center md:space-x-12 '>
                <div className='flex-1 space-y-3'>
                    <h3 className=' bg-gradient-to-r from-teal-600 to-green-900 font-bold bg-clip-text px-2 text-2xl text-transparent'>Let's Talk</h3>
                    <p>I am open to discussing web development Project</p>
                    <div className='flex items-center '>
                        <lord-icon
                            src="https://cdn.lordicon.com/awjeikyj.json"
                            trigger="hover"
                            colors="primary:#16c79e"
                        >
                        </lord-icon><span><a href="mailto:2024cs491@student.uet/edu.pk">2024cs491@student.uet.edu.pk</a></span>
                    </div>
                    <div className='flex items-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/fpvaxfly.json"
                            trigger="hover"
                            colors="primary:#16c79e"
                        >
                        </lord-icon><span>92249586382</span>

                    </div>
                    <div className="flex items-center space-x-2">
                        <img src=" https://img.icons8.com/?size=100&id=13800&format=png&color=#3EAF83" className='h-9' ontact alt="error icon location" />
                        <span>Punjab Gujranwala</span>
                    </div>

                </div>

                <div className='flex-1 space-x-3 pt-8'>
                    <form  className="space-y-4">
                    <div>
                        <label htmlFor="name">You Name</label>
                        <input type="text" required name="name"  className='w-full rounded-lg p-2 bg-gray-900 text-white  border border-transparent focus:outline-none focus:border-teal-400' placeholder='Enter your Name' />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required  className='w-full rounded-lg p-2 bg-gray-900 text-white  border border-transparent focus:outline-none focus:border-teal-400' placeholder='Enter your Email' />
                    </div>
                    <div>
                        <label htmlFor="messege">Messege</label>
                        <textarea type="messege" name="message"required  className='w-full rounded-lg p-2 bg-gray-900 text-white  border border-transparent focus:outline-none focus:border-teal-400' placeholder='Enter your Messege' rows={3} />
                    </div>
                    <button type="submit" className='bg-teal-900  rounded-lg hover:bg-amber-400 px-6 font-semibold py-2' >Send</button>
                    </form>
                </div>
            </div>

        </div>
    </div>

    )
}

export default Contact
