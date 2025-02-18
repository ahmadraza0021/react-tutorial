import React from "react";
import High_Quality from '../assets/High_Quality.png'
import Warrany_protection from '../assets/Warrany_protection.png'
import Free_Shipping from '../assets/Free_Shipping.png'
import Need_Help from '../assets/Need_Help.png'

const VelvetoHero4 = () => {
  return (
    <div className="flex justify-center gap-x-32 bg-[#003926] text-white py-10">
      <div className="flex items-center gap-x-2">
        <img src={High_Quality} alt="No Image" className="w-10"/>
        <div className="flex flex-col">
          <h2 className="font-semibold">High Quality</h2>
          <p className="text-sm">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <img src={Warrany_protection} alt="No Image" className="w-8" />
        <div className="flex flex-col">
          <h2 className="font-semibold">Warrany Protection</h2>
          <p className="text-sm">Life time</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <img src={Free_Shipping} alt="No Image" className="w-10" />
        <div className="flex flex-col">
          <h2 className="font-semibold">Free Shipping</h2>
          <p className="text-sm">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <img src={Need_Help} alt="No Image" className="w-10" />
        <div className="flex flex-col">
          <h2 className="font-semibold">Need Help?</h2>
          <p className="text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default VelvetoHero4;
