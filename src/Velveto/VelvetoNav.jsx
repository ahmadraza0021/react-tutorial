import React from "react";
import velveto from "../assets/velveto.png";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

const VelvetoNav = () => {
  return (
    <div className="bg-[#cae7d5] h-36">
      <div className="flex justify-center pt-2">
        <img src={velveto} alt="No Image" className="w-40" />
      </div>
      {/* flex-wrap is used to wrap flex items onto multiple lines */}
      <div className="flex flex-col justify-center font-semibold">
        {/* First row of links */}
        <div className=" max-w-7xl mx-auto">
        <div className="flex gap-x-8">
          <a className="hover:text-white transition duration-500" href="#">Women</a>
          <a className="hover:text-white transition duration-500" href="#">Men</a>
          <a className="hover:text-white transition duration-500" href="#">Kids</a>
          <a className="hover:text-white transition duration-500" href="#">Home</a>
        </div>

        {/* Force the next anchors to start on a new line */}

        {/* Second row of links, using the same width and alignment */}
        <div className="flex gap-x-8 items-center justify-around w-full"> {/* Set width and alignment */}
          <div className="flex gap-x-8">
            <a className="hover:text-white transition duration-500" href="#">New in</a>
            <a className="hover:text-white transition duration-500" href="#">Brands</a>
            <a className="hover:text-white transition duration-500" href="#">Clothing</a>
            <a className="hover:text-white transition duration-500" href="#">Shoes</a>
            <a className="hover:text-white transition duration-500" href="#">Bags</a>
            <a className="hover:text-white transition duration-500" href="#">Accessories</a>
            <a className="hover:text-white transition duration-500" href="#">Jewelry</a>
            <a className="hover:text-white transition duration-500" href="#">Homeware</a>
            <a className="hover:text-white transition duration-500" href="#">Pre-owned</a>
            <a className="hover:text-white transition duration-500" href="#">Sale</a>
          </div>
          <div className="flex gap-x-4 text-3xl">
          <FaGlobe className="hover:text-white transition duration-500"/>
          <IoLogoHtml5 className="hover:text-white transition duration-500"/>
          <FaJs className="hover:text-white transition duration-500"/>
          <IoLogoReact className="hover:text-white transition duration-500"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VelvetoNav;
