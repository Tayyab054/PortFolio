import React from 'react'

function Footer() {
    return (
        <div className='bg-black text-white  px-2 py-20 lg:px-40'>
            <div className='flex'>
                <div className="flex-1">

                    <h2 className='font-bold py-4 text-3xl'>Tayyab Ali</h2>
                    <p>
                        <p className="">©{new Date().getFullYear()} Portfolio. All rights reserved.</p>
                    </p>
                </div>
                <div className="flex-1">
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            required
                            className="w-full rounded-lg p-2 bg-gray-900 text-white border border-transparent focus:outline-none focus:border-teal-400"
                            placeholder="Enter your Email"
                        />
                        <button
                            type="submit"
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

        </div>

    )
}

export default Footer
