import React from 'react'
import airplan from '../assets/airplan.png'
import bankcsharp from '../assets/bank.jpeg'
import bankcpp from '../assets/bankcpp.png'
import calculater from '../assets/calculater.png'
import door from '../assets/door.png'
import portfolio from '../assets/portfolio.png'
import passwordmanager from '../assets/passwordmanager.png'

const project = [
    {
        id: 1,
        name: "Password Manager",
        tecno: "React.js",
        image: passwordmanager,
        githubsource: "https://github.com/Tayyab054/PasswordManager",
        githublive: "https://tayyab054.github.io/PasswordManager/"

    },
    {
        id: 2,
        name: "Portfolio",
        tecno: "React.js",
        image: portfolio,
        githubsource: "https://github.com/Tayyab054/PortFolio",
        githublive: "https://tayyab054.github.io/PortFolio/"

    },
    {
        id: 3,
        name: "Door shop",
        tecno: "HTML & CSS",
        image: door,
        githubsource: "https://github.com/Tayyab054/Old-and-new-window-retailer-website-html-Css",
        githublive: "https://tayyab054.github.io/Old-and-new-window-retailer-website-html-Css/"

    },
    {
        id: 4,
        name: "Calculator",
        tecno: "Window Form C#",
        image: calculater,
        githubsource: "https://github.com/Tayyab054/Simple-Calculator-Window-Form-c-",
        githublive: "https://github.com/Tayyab054/Simple-Calculator-Window-Form-c-"

    },
    {
        id: 5,
        name: "Bank Management System",
        tecno: "C++ Console base",
        image: bankcpp,
        githubsource: "https://github.com/Tayyab054/Bank-Management-system-c-project-simple",
        githublive: "https://github.com/Tayyab054/Bank-Management-system-c-project-simple"

    },
    {
        id: 6,
        name: "AirPlane Management System",
        tecno: "C# Console base",
        image: airplan,
        githubsource: "https://github.com/Tayyab054/Bank-Management-system",
        githublive: "https://github.com/Tayyab054/Bank-Management-system"

    },
    {
        id: 7,
        name: "Bank Management System",
        tecno: "Window Form C#",
        image: bankcsharp,
        githubsource: "https://github.com/Tayyab054/Bank-Management-system",
        githublive: "https://github.com/Tayyab054/Bank-Management-system"

    }
];
function Projects() {
    return (
        <div className='bg-black text-white  px-2 py-20 lg:px-20 text-center' id="Projects">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-xl font-bold  mb-12 sm:text-4xl'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {project.map(projects => (
                        <div key={projects.id}
                            className='bg-gray-900 rounded-lg  flex flex-col justify-between  transform transition-transform duration-300 hover:scale-105'>
                            <img src={projects.image} alt={projects.name} className='rounded-t-md  w-full object-cover mb-4 h-48 border-1 border-teal-300' />
                            <h3 className=' bg-gradient-to-r from-gray-600 to-pink-600 bg-clip-text  text-transparent'>{projects.name}</h3>
                            <p className=' bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent '>{projects.tecno}</p>
                            <div className='flex flex-row md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4 px-4 pb-4'>
                                <button className='bg-teal-900  rounded-lg hover:bg-amber-400  '><a href={projects.githubsource} target='./blank' className='px-2'>Source Code</a></button>
                                <button className='bg-teal-900  rounded-lg hover:bg-amber-400 ' ><a href={projects.githublive} target='./blank' className='px-2'>View Live</a></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
