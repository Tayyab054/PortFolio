import React from 'react'

const Service = [
    {
        id: 1,
        title: "Web Designer",
        description: "Responsible for designing the layout and visual appearance of websites."
    },
    {
        id: 2,
        title: "Frontend Developer",
        description: "Builds the client-side of web applications using HTML, CSS, and JavaScript."
    },
    {
        id: 3,
        title: "Backend Developer",
        description: "Handles server-side logic, databases, and application integration."
    },
    {
        id: 4,
        title: "Full Stack Developer",
        description: "Works on both frontend and backend parts of a web application."
    },
    {
        id: 5,
        title: "UI/UX Designer",
        description: "Designs user interfaces and ensures optimal user experience."
    },
    {
        id: 6,
        title: "Project Manager",
        description: "Oversees projects, coordinates teams, and ensures timely delivery."
    },

];
function Services() {
    return (

        <div className='bg-black text-white  px-2 py-20 lg:px-20 text-center' id="Servecies">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-xl font-bold  mb-12 sm:text-4xl'>My Services</h2>
                <div className='grid grid-rows md:grid-rows-2 lg:grid-cols-3 gap-8'>
                    {Service.map(Service => (
                        <div key={Service.id}
                            className='bg-gray-900 px-6 pb-6 rounded-lg hover:border hover:border-amber-500 transform transition-transform duration-300 hover:scale-105'>
                            <div className=' bg-gradient-to-r from-gray-600 to-yellow-600 bg-clip-text text-right text-2xl text-transparent font-bold'>
                                {Service.id}
                            </div>
                            <h3 className=' bg-gradient-to-r from-gray-600 to-pink-600 bg-clip-text text-center px-2 text-2xl text-transparent'>
                                {Service.title}
                            </h3>
                            <p className=' bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-center px-2 text-transparent'>{
                                Service.description}
                            </p>
                            <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-700'>Read More</a>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
}
export default Services
