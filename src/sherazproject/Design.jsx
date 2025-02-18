import React from 'react'
import list_icon1 from '../assets/list_icon1.jpeg';
import list_icon2 from '../assets/list_icon2.jpeg';
import DesignComponent from './DesignComponent';
// import list_icon2 from ''
// src\assets\list_icon2.jpeg

const Design = () => {
  return (
    <div className='w-[100%] h-auto bg-[#340832] gap-5 inline-block'>
        <button className='rounded-full bg-white font-medium text-[#4A2848] px-4 py-2 flex mx-auto mt-10 mb-5' >Our Pricing</button>
        <h1 className='text-white font-bold text-4xl text-center'>Our popular pricing package</h1>
        <div className='w-[100%] flex gap-16 px-14 py-14'>
                             {/* child1 */}
            <DesignComponent/>
                                {/* child2       */}
            <div className='w-[33%] bg-[#4A2848] text-white rounded-tl-[3rem] rounded-br-[3rem] px-12 py-16'>
              <h3 className='font-semibold text-xl'>Starter Plan</h3>
              <p className='text-sm pt-3 pb-7'>Ideal for small businesses an startups looking to establish an online presence.</p>  
              <ul className='leading-10 font-semibold'>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon2} alt="list_icon2"/>
                <li>Basic Web Development</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon2} alt="list_icon2"/>
                <li>E-Conmmerce Store Setup</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon2} alt="list_icon2"/>
                <li>Up to 5 Pages</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon2} alt="list_icon2"/>
                <li>SEO-Ready Templates</li>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-4 h-4' src={list_icon2} alt="list_icon2"/>
                <li>Basic Maintenance</li>
                </div>
              </ul>
              <h1 className='pt-6 text-4xl font-bold'>$699.00<span className='text-sm'>/Month</span></h1>
            </div>
                                {/* child3 */}
            <DesignComponent/>
        </div>
    </div>
  )
}

export default Design