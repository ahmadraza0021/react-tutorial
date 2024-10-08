import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-green-100 sm:flex sm:pt-9 gap-16 items-center py-5 px-12'>
        <div className='font-bold text-4xl'>
            <h1>Web<span className='text-green-700'>Dev</span></h1>
        </div>
        <div className='flex gap-x-4 text-lg'>
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
        </div>
    </div>
  )
}

export default Navbar