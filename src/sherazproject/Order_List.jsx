import React from 'react'
import filter_icon from '../assets/filter_icon.png';
import reset_filter from '../assets/reset_filter.png';

const Order_List = () => {
  return (
    <div>
        <h1 className='text-3xl font-semibold'>Order Lists</h1>
        <div className='flex items-center gap-3 border-2 rounded-xl max-w-xl font-semibold'>
        <img className='w-10' src={filter_icon} alt="filter-icon" />
        <h3>Filter By </h3>
        <select>
            <option value="">Date</option>
        </select>
        <select>
            <option value="">Order Type</option>
        </select>
        <select>
            <option value="">Order Status</option>
        </select>
        <img className='w-2 h-3' src={reset_filter} alt="refresh_icon" />
        <h3 className='text-red-500'>Reset Filter</h3>
        </div>

        <table className='border-2 mt-5 ml-5'>
          <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>DATE</th>
            <th>TYPE</th>
            <th>STATUS</th>
            </tr>
            <hr className='w-20'/>  
          </thead>
          <tbody>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <hr />
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <button className='text-[#00B69B] bg-green-200 font-bold px-4 py-2 rounded-lg'>Completed</button>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Order_List