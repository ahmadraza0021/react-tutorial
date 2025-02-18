import React from 'react'
import list_icon1 from '../assets/list_icon1.jpeg';
import list_icon2 from '../assets/list_icon2.jpeg';
const DesignComponent = () => {
  return (
    <div className='w-[33%] bg-white rounded-tl-[3rem] rounded-br-[3rem] px-12 py-16'>
              <h3 className='font-semibold text-xl'>Starter Plan</h3>
              <p className='text-sm pt-3 pb-7'>Ideal for small businesses an startups looking to establish an online presence.</p>  
              <ul className='leading-10 font-semibold'>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon1} alt="list_icon1"/>
                <li>Basic Web Development</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon1} alt="list_icon1"/>
                <li>E-Conmmerce Store Setup</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon1} alt="list_icon1"/>
                <li>Up to 5 Pages</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon1} alt="list_icon1"/>
                <li>SEO-Ready Templates</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon1} alt="list_icon1"/>
                <li>Basic Maintenance</li>
                </div>
              </ul>
              <h1 className='pt-6 text-4xl font-bold'>$699.00<span className='text-sm'>/Month</span></h1>
            </div>
  )
}

export default DesignComponent