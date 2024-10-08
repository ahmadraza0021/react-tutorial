import React, { useState } from "react";
import { data } from "./data";
import Child from "./Child";
const Parent = () => {
  const [open, setOpen] = useState(data);
  return (
    <div className="bg-pink-600 h-auto flex justify-center items-center">
      <div className="bg-white p-7 w-[30vw] rounded-md flex flex-col gap-y-5">
        <div className="text-2xl text-center ">
          {open.length} <span className="font-bold text-2xl text-blue-500 font-serif">Birthdays Today</span> 
        </div>
        {open.map((items) => {
          return <Child {...items} key={items.id} />;
        })}
        <button onClick={()=>setOpen([])} className="bg-blue-600 py-1 rounded-md text-2xl text-white ring hover:ring-black hover:text-yellow-400 hover:font-bold hover:font-serif">Clear All</button>
      </div>
    </div>
  );
};

export default Parent;
