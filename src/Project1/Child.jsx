import React from 'react'

const Child = (props) => {
    const {name, age, img} = props;
  return (
    <div className='flex gap-x-3 '>
        <img src={img} alt="" className='w-20 h-20 rounded-full object-cover'/>
        <div className='flex flex-col justify-center'>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    </div>
  )
}

export default Child