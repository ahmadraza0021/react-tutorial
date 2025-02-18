import React from 'react'
import pic1 from '../assets/Component/pic1.png'
import date1 from '../assets/Component/date1.png'
import date2 from '../assets/Component/date2.png'
import Icon from '../assets/Component/Icon.png'
import tagIcon from '../assets/Component/tagIcon.png.png'
import Read_More from '../assets/Component/Read_More.png'
import Arrow from '../assets/Component/Arrow.png'
import Minus from '../assets/Component/Minus.png'
import Plus from '../assets/Component/Plus.png'
import Send_Icon from '../assets/Component/Send_Icon.png'
import Phone from '../assets/Component/Phone.png'

const Component = () => {
  return (
    <div className='w-[100%] h-auto bg-[#D3CDD2] py-8'>
        <button className='bg-[#DEDAE5] text-[#4A2848] px-5 py-3 rounded-full flex mx-auto mb-4 font-semibold'>News & Article</button>
        <h1 className='text-4xl font-bold text-center pb-7'>Read our latest insights</h1>
        <div className='w-[100%] flex justify-evenly'>
                  {/* div1 */}
            <div className='w-[330px] flex justify-center relative h-[400px]'>
                <img className='w-[330px] h-[260px] rounded-2xl' src={pic1} alt="No Image" />
                <img className='w-[63px] h-[80px] absolute top-0 right-0' src={date1} alt="No Image" />

                <div className='absolute bg-white w-[300px] h-auto rounded-2xl bottom-0 p-8'>
                  <div className='flex gap-5'>
                    <div className='flex items-center gap-x-4'>
                      <img className='w-[16px] h-[18px]' src={Icon} alt="No Image" />
                      <p className='text-[#737373]'>By Admin</p>
                    </div>
                    <div className='flex items-center gap-x-[10px]'>
                      <img className='w-[16px] h-[18px]' src={tagIcon} alt="No Image" />
                      <p className='text-[#726B7D]'>technology</p>
                    </div>
                  </div>
                  <h1 className='text-lg font-bold pt-5 pb-6 text-[#051634]'>Tackling the Changes of Retail Industry</h1>
                  <div className='flex items-center gap-x-2'>
                  <p className='font-semibold text-[#051634]'>Read More</p>
                  <img className='w-[8px] h-[14px]' src={Read_More} alt="No Image" />
                  </div>
                </div>
            </div>
                {/* div2 */}
                <div className='w-[330px] flex justify-center relative h-[400px]'>
                <img className='w-[330px] h-[260px] rounded-2xl' src={pic1} alt="No Image" />
                <img className='w-[63px] h-[80px] absolute top-0 right-0' src={date2} alt="No Image" />

                <div className='absolute bg-white w-[300px] h-auto rounded-2xl  bottom-0 p-8'>
                  <div className='flex gap-5'>
                    <div className='flex items-center gap-x-4'>
                      <img className='w-[16px] h-[18px]' src={Icon} alt="No Image" />
                      <p className='text-[#737373]'>By Admin</p>
                    </div>
                    <div className='flex items-center gap-x-[10px]'>
                      <img className='w-[16px] h-[18px]' src={tagIcon} alt="No Image" />
                      <p className='text-[#726B7D]'>Solutions</p>
                    </div>
                  </div>
                  <h1 className='text-lg font-bold pt-5 pb-6 text-[#051634]'>Keep Your Business Safe & Ensure High Availability.</h1>
                  <div className='flex items-center gap-x-2'>
                  <p className='font-semibold text-[#051634]'>Read More</p>
                  <img className='w-[8px] h-[14px]' src={Read_More} alt="No Image" />
                  </div>
                </div>
            </div>
                  {/* div3 */}
                <div className='w-[330px] flex justify-center relative h-[400px]'>
                <img className='w-[330px] h-[260px] rounded-2xl' src={pic1} alt="No Image" />
                <img className='w-[63px] h-[80px] absolute top-0 right-0' src={date2} alt="No Image" />

                <div className='absolute bg-white w-[300px] h-auto rounded-2xl bottom-0 p-8'>
                  <div className='flex gap-5'>
                    <div className='flex items-center gap-x-4'>
                      <img className='w-[16px] h-[18px]' src={Icon} alt="No Image" />
                      <p className='text-[#737373]'>By Admin</p>
                    </div>
                    <div className='flex items-center gap-x-[10px]'>
                      <img className='w-[16px] h-[18px]' src={tagIcon} alt="No Image" />
                      <p className='text-[#726B7D]'>Solutions</p>
                    </div>
                  </div>
                  <h1 className='text-lg font-bold pt-5 pb-6 text-[#051634]'>Which Yoga Hybrid Is Right For You ?</h1>
                  <div className='flex items-center gap-x-2'>
                  <p className='font-semibold text-[#051634]'>Read More</p>
                  <img className='w-[8px] h-[14px]' src={Read_More} alt="No Image" />
                  </div>
                </div>
            </div>
        </div>
        <button className='bg-[#4A2848] text-white rounded-full flex mx-auto items-center text-xl font-semibold pl-8 py-1 gap-x-10 justify-center mt-16 mb-20'>View All<img className='w-12 h-12' src={Arrow} alt="No Image" /></button>
        <h1 className='text-5xl font-semibold text-center'>Frequently Asked Question</h1>
        <p className='text-center pt-5 pb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam <br /> fringilla libero rutrum lobortis.</p>

         <div className='flex flex-col mx-auto border-2 rounded-xl w-[47rem] bg-white mb-5 py-6'>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold pr-8'>01</h1>
        <h2 className='text-lg font-semibold pr-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</h2>
        <img className='w-10 h-10' src={Minus} alt="No Image" />
        </div>
        <p className='pl-[100px] text-[#000000A8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet<br />quam fringilla libero rutrum lobortis.Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        </div>
        <div className='flex items-center mx-auto justify-center border-2 rounded-xl w-[47rem] bg-white py-6'>
        <h1 className='text-3xl font-bold pr-8'>02</h1>
        <h2 className='text-lg font-semibold pr-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</h2>
        <img className='w-10 h-10' src={Plus} alt="No Image" />
        </div> 

        <button className='bg-[#4A2848] text-white rounded-full flex mx-auto items-center text-xl font-semibold pl-8 py-1 gap-x-9 justify-center mt-16 mb-20'>Load More<img className='w-12 h-12' src={Arrow} alt="No Image" /></button>

        <div className='bg-[#340831] text-white'>
        <div className='flex items-center gap-x-7 justify-center bg-zinc-700 h-32 rounded-br-[2rem] rounded-bl-[2rem]'>
            <p className='text-md'>Newsletter</p>
            <div className='flex bg-white border rounded-full pl-6 w-[23rem] h-14 gap-x-28'>
                <input className='outline-none' type="email" name="email" id="email" placeholder='Your Email' />
                <button><img className='w-10 h-10' src={Send_Icon} alt="No Image" /></button>
            </div>
        </div>

        <div className='w-[100%] flex justify-around py-10'>
          {/* div1 */}
          <div>
            <img className='w-32' src="../src/assets/Component/Logo.png" alt="" />
            <p className='w-60 pb-4'>Your trusted partner in pioneering IT solutions and service</p>
            <div className='flex items-center gap-x-2'>
              <img src={Phone} alt="No Image" className='w-9 h-9' />
                <div className='text-sm'>
                  <p>Make a call</p>
                  <p>(307)555-0133</p>
                </div>
            </div>
          </div>
          {/* div2 */}
          <div>
          <h3 className='font-semibold text-xl pb-4'>Quick Link</h3>
          <div className='flex flex-col gap-y-2'>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>Service</p>
          </div>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>Contact Us</p>
          </div>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>Testimonial</p>
          </div>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>About Us</p>
          </div>
          </div>
          </div>
          {/* div3 */}
          <div>
          <h3 className='font-semibold text-xl pb-4'>Our Services</h3>
          <div className='flex flex-col gap-y-2'>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>web Development</p>
          </div>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>IT Consultancy</p>
          </div>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>UI/UX Design</p>
          </div>
            <div className='flex items-center gap-x-1 '>
              <img className='w-5' src="../src/assets/Component/Angle_Bracket.png" alt="No Image" />
              <p>Cybersecurity</p>
          </div>
          </div>
          </div>
          {/* div4 */}
          <div>
            <h3 className='font-semibold text-xl pb-4'>Follow Us</h3>
            <p className='w-52 pb-4'>The latest news, articles, sent to your inbox weekly.</p>
            <div className='flex gap-x-3'>
              <img className='w-9 border rounded-md border-gray-400' src="../src/assets/Component/f_icon.png" alt="No Image" />
              <img className='w-9 border rounded-md border-gray-400' src="../src/assets/Component/t_icon.png" alt="No Image" />
              <img className='w-9 border rounded-md border-gray-400' src="../src/assets/Component/l_icon.png" alt="No Image" />
              <img className='w-9 border rounded-md border-gray-400' src="../src/assets/Component/p_icon.png" alt="No Image" />
            </div>
          </div>
        </div>    
          <div className='flex justify-between px-6 py-7 bg-zinc-700 w-[90%] mx-auto rounded-tr-md rounded-tl-md'>
            <p>Copyright 2024 - All Rights Reserved By Sheraian</p>
            <div className='flex gap-x-5'>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Component