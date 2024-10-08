import React from 'react'
import redux from '../assets/redux.png'
import tour from '../assets/tour.png'
import unsplash from '../assets/unsplash.png'
import { FaGlobe } from "react-icons/fa";
const Hero3 = () => {
  return (
    <div className='bg-gray-50 pb-40'>
      <div className="flex flex-col gap-y-4 py-20 px-12">
        <h3 className="font-semibold text-3xl tracking-wider">Web Creations</h3>
        <hr className="border-gray-300"/>
      </div>
                                {/* main div */}
      <div className=' flex justify-center items-center'>
        <div className='grid gap-y-14 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 max-w-[90vw]'>
                                {/* 1div                                          by default scale-100 hota ha */}
            <div className='flex flex-col gap-y-6 max-w-[80vw] rounded-lg border bg-white hover:scale-110 transition duration-300 cursor-pointer shadow-md'>
                <img src={redux} alt="No Image" className='rounded-t-lg'/>
                <div className='p-6 flex flex-col gap-y-4 text-justify'>
                <h4 className='font-semibold text-lg'>First Project</h4>
                <p>Experience Redux's power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
                <div className="text-3xl pb-4 hover:text-black transition duration-500 text-slate-500">
                  <FaGlobe/>
                </div>
                </div>
            </div>
                                {/* 2div */}
            <div className='flex flex-col gap-y-6 max-w-[80vw] rounded-lg border bg-white hover:scale-110 transition duration-300 cursor-pointer shadow-md '>
                <img src={tour} alt="No Image" className='rounded-t-lg'/>
                <div className='p-6 flex flex-col gap-y-4 text-justify'>
                <h4 className='font-semibold text-lg'>Second Project</h4>
                <p>Explore dynamic content manipulation with this project featuring a card displaying text. Increase word count with a click, revealing more content. Easily remove the card for a streamlined user experience</p>
                <div className="text-3xl pb-4 hover:text-black transition duration-500 text-slate-500">
                  <FaGlobe/>
                </div>
                </div>
            </div>
                                {/* 3div */}
            <div className='flex flex-col gap-y-6 max-w-[80vw] rounded-lg border bg-white hover:scale-110 transition duration-300 cursor-pointer shadow-md'>
                <img src={unsplash} alt="No Image" className='rounded-t-lg'/>
                <div className='p-6 flex flex-col gap-y-4 text-justify'>
                <h4 className='font-semibold text-lg '>Third Project</h4>
                <p>Discover stunning visuals with ease using this project powered by the Unsplash API. Utilizing Axios, search for images effortlessly through a sleek search bar interface.</p>
                <div className="text-3xl pb-4 hover:text-black transition duration-500 text-slate-500">
                  <FaGlobe/>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero3