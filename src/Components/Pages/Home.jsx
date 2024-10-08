import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    // console.log(count);
    // console.log(counter);
     //useEffect control Rerendering
    useEffect(()=>{
        console.log(count);
        console.log(counter);   
    }, [count])
  return (
    <div className='flex flex-col'>
    <div>Home Page</div>
    <Link to={'/about'}>About</Link>
    <div className='flex flex-col justify-center items-center h-[70vh] gap-y-5'>
      <div className='border-2 border-black w-36 rounded-md text-center bg-red-500 py-1'>
        <div>{count}</div>
        <div className='font-bold'><button onClick={()=>setCount(count+1)}>Count</button></div>
      </div>
    <div className='border-2 border-black w-36 rounded-md text-center bg-blue-500 py-1'>
      <div>{counter}</div>
      <div className='font-bold'><button onClick={()=>setCounter(counter+1)}>Counter</button></div>
    </div>
    </div>
    </div>
  )
}

export default Home