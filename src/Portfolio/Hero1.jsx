import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
const Hero1 = () => {
  return (
    <div className=" bg-slate-50 pb-28 ">
      <div className="flex flex-col gap-y-4 py-20 px-12">
        <h3 className="font-semibold text-3xl tracking-wider">Tech Stack</h3>
        <hr className="border-gray-300"/>
      </div>
      <div className="flex justify-center items-center">
      <div className="grid gap-y-14 md:grid-cols-2 lg:grid-cols-3 gap-x-10 max-w-[90vw]">
                        {/* 1div         */}
        <div className="flex flex-col gap-y-3 max-w-[80vw] text-justify">
          <IoLogoHtml5 className="text-7xl text-[#10b981]"/>
          <h4 className="font-bold text-lg ">HTML&CSS</h4>
          <p className=" text-gray-500">
            Highly skilled in HTML & CSS, adeptly crafting visually appealing
            and responsive websites for optimal user experiences.
          </p>
        </div>
                        {/* 2div */}
        <div className="flex flex-col gap-y-2 max-w-[80vw] text-justify">
          <FaJs className="text-7xl text-[#10b982]"/>
          <h4 className="font-bold text-lg">JavaScript</h4>
          <p className=" text-gray-500">
            Expertise in JavaScript, building interactive and dynamic web
            applications with a focus on seamless user interactions and
            functionality
          </p>
        </div>
                        {/* 3div */}
        <div className="flex flex-col gap-y-2 max-w-[80vw] text-justify">
          <IoLogoReact className="text-7xl text-[#27ad82]"/>
          <h4 className="font-bold text-lg">React</h4>
          <p className="text-gray-500">
            Advanced proficiency in React, developing efficient and interactive
            front-end applications with a strong emphasis on component-based
            architecture.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero1;
