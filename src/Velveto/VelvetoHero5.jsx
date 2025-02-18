import React from 'react'

const VelvetoHero5 = () => {
  return (
    <div className='flex justify-around gap-x-[365px] bg-black py-14'>
        <div className='text-white flex flex-col gap-y-5'>
            <h1 className='text-2xl font-bold font-serif'>NEVER MISS A THING</h1>
            <p className='text-sm'>Sign up for promotions, tallored new arrivals, stock updates and more - <br/> straight to your inbox</p>
        </div>
        <div className='text-white flex flex-col gap-y-5'>
            <div>
            <h1 className='text-2xl font-bold font-serif'>Email Me</h1>
            <p className='text-sm'>Enter your email and we'll send you a link to <br/> download the free app</p>
            </div>
            <input type="text" name="" id="" placeholder='Example@example.com' className='border rounded-lg px-10 py-2'/>
            <button className='border rounded-lg w-40 px-5 py-2 bg-[#006341]'>Send me</button>
        </div>
    </div>
  )
}

export default VelvetoHero5