import React from 'react';
import flipcart from '../assets/flipcart.png'
import amazon from '../assets/amazon.png'
import nike_shoe_pic from '../assets/nike_shoe_pic.png';
const BrandHero = () => {
  return (
    <div className='flex items-center py-10 px-40'>
        <div className='w-[40rem] p-4'>
        <h1 className='font-bold text-7xl pb-6 font-serif hover:text-blue-500'>YOUR FEET DESERVE THE BEST</h1>
        <p className='w-80 hover:text-red-500'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='flex gap-5 py-4 '>
            <button className='bg-red-600 text-white px-3 pb-1 border-red-700 border-2 font-semibold hover:text-black'>Shop Now</button>
            <button className='px-3 pb-1 border-2 font-semibold text-gray-500 hover:text-black'>Category</button>
        </div>
        <p>Also Available On</p>
        <div className='flex w-6 gap-4 pt-2'>
            <img src={flipcart} alt="Flipcart"/>
            <img src={amazon} alt="Amazon" />
        </div>
        </div>
        <div>
            <img src={nike_shoe_pic} alt="Nike_Shoe_Pic" className='w-[46rem]'/>
        </div>
    </div>
  )
};

export default BrandHero;