import React from "react";

const Child = ({ name, image, info, price }) => {
  return (
    <div className="relative bg-white max-w-[80vw] border rounded-lg hover:scale-105 transition duration-500 shadow-md  ">
      <img src={image} alt="NO Image" className="w-[500px] h-80 object-cover rounded-t-lg" />
      <div className="p-6">
      <h3 className="font-semibold text-lg pb-2">{name}</h3>
      <p className="text-justify">{info}</p>
      <p className="absolute right-3 top-3 text-white bg-green-500 p-3 px-5  rounded-md font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default Child;
