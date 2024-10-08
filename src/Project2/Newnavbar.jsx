import React from 'react'
import { GiWorld } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className='flex justify-between px-6 sm:px-10 md:px-20 lg:px-36 items-center h-20 max-w-[100vw] bg-gradient-to-r from-cyan-700 to-blue-700'>
        <div className='flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-orange-500'>MeharG</h1>
            <GiWorld className='text-xl text-orange-500'/>
        </div>
        <div className='flex gap-14 font-semibold uppercase'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Design</a>
            <a href="#">Contact</a>
        </div>
        <div>
            <input type="search" name="search" id="search" placeholder='Type to Search' className='border border-orange-500 rounded-tl-md rounded-bl-md w-[180px] py-1.5 px-2 ' />
            <button className='border border-orange-500 rounded-tr-md rounded-br-md py-1.5 w-24 bg-orange-500'>Search</button>
        </div>
    </div>
  )
}

export default Navbar