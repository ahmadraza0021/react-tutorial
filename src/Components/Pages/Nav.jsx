import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex gap-x-8 justify-center items-center h-16 bg-slate-500 font-bold text-white'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Nav