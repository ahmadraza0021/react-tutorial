import React from "react";
import Card from "./Card";
const list = [
  {
    name: "Ahmad",
    id: "0",
  },
  {
    name: "Usman",
    id: "1",
  },
  {
    name: "Hassan",
    id: "2",
  },
  {
    name: "Mustafa",
    id: "3",
  },
];
const Cards = () => {
  return (
    <div className="bg-pink-600 h-[100vh] ">
      <div className="flex justify-center gap-3 h-20 items-center  border-[3px] border-black rounded-md bg-gray-500 text-white font-bold font-serif">
        {list.map((li) => {
          return <Card {...li} key={li.id} />; //{...li} is a spread operator
        })};
      </div>
    </div>
  );
};

export default Cards;

// import React from 'react'
// import Card from './Card';
// const list = [
//     {
//         name : 'name',
//         id : 'id'
//     },
//     {
//         name : 'name1',
//         id : 'id1'
//     },
//     {
//         name : 'name2',
//         id : 'id2'
//     },
//     {
//         name : 'name3',
//         id : 'id3'
//     },
//     {
//         name : 'name4',
//         id : 'id4'
//     }
// ];

// const Cards = () => {
//   return (
//         <div className=''>
//         {list.map((li)=>{
//             return <Card {...li} key={li.id} /> //using spread operator {...li}
//         })}
//     </div>

//   )
// }

// export default Cards
