import React from 'react'
import { FaFacebook, FaT } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";

const Newhero = () => {
  return (
    
    <div className='flex justify-between px-6 sm:px-10 md:px-20 lg:px-36 items-center gap-x-40 py-[86px] text-white bg-gradient-to-r from-purple-700 to-pink-700'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-4xl font-bold font-serif tracking-wider'>Web Design &<br/><span className='text-orange-500 text-5xl'>Development</span> <br /> Course </h1>
            <p className='tracking-wider font-medium'>Web Design is a specialisation of the design stream. They also use HTML,<br /> CSS, WYSIWYG editing software, mark up validations etc.,<br /> to create design elements.</p>
            <button className='border border-orange-500 rounded-lg bg-orange-500 font-semibold text-black py-1 w-36 uppercase'>Join Us</button>
        </div>
                    {/* Form */}
        <div className='flex flex-col border border-black rounded-2xl p-6 gap-6 text-center bg-black'>
            <h1 className='bg-white border rounded-lg text-orange-500 py-1 w-56 font-bold text-xl '>Login Here</h1>
            <input type="email" name="email" id="email" placeholder='Enter Email Here' className='border-b border-orange-500 bg-black text-white'/>
            <input type="password" name="pass" id="pass" placeholder='Enter Password Here' className='border-b border-orange-500 bg-black'/>
            <button className='bg-orange-500 border border-orange-500 rounded-lg text-black py-1 w-56 font-bold text-md'>Login</button>
            <div className='text-white flex flex-col gap-y-3 text-sm font-semibold'>
                <div>
                <p>Don't have an account?</p>
                <p><span className='text-orange-500'>Sign up</span> here</p>
                </div>
                <p>Login with</p>
            </div>
            <div className='flex gap-4 justify-center text-2xl'>
                <FaFacebook fill='white'/>
                <IoLogoInstagram fill='white'/>
                <FaTwitter fill='white'/>
                <FaGoogle fill='white'/>
                <FaSkype fill='white'/>
            </div>
        </div>
    </div>
  )
}

export default Newhero