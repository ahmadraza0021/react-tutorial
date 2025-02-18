import React from 'react';
import nike_logo from '../assets/nike_logo.png';
const BrandNav = () => {
  return (
    <div className='flex justify-around h-20 items-center bg-gray-50'>
        <img src={nike_logo} alt="Nike Logo" className='w-20'/>
            <ul className='flex gap-12 font-semibold uppercase'>
                <li className='hover:text-purple-700'>Menu</li>
                <li className='hover:text-purple-700'>Location</li>
                <li className='hover:text-purple-700'>About</li>
                <li className='hover:text-purple-700'>Contact</li>
            </ul>
        <button className='bg-red-600 font-semibold px-4 pb-2 text-xl text-white border-red-700 border-2 hover:text-black'>Login</button>
    </div>
  )
}

export default BrandNav;