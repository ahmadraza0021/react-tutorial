import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import list_icon1 from "../assets/list_icon1.jpeg";
const Insights = () => {
  return (
    <div className="w-[100%]">
      <button className="bg-[#DEDAE5] text-[#4A2848] px-4 py-2 rounded-full flex mx-auto my-5">News & Article</button>
      <h1 className="text-3xl font-bold text-center">Read our latest insights</h1>
      <div className="w-[100%]">
        <div className="w-[33%] relative flex flex-col items-center">
        <img src={img1} alt="img1" className="w-60 rounded-lg" />
        <div className="w-[95%] mx-auto absolute bottom-[-70px] bg-green-400 rounded-lg  flex flex-col item-centers">
          <div className="flex gap-2">
            <div className="flex gap-3 p-3">
              <img src={list_icon1} alt="list_icon1" className="w-3 h-3" />
              {/* <span className="text-sm w-0">By Admin</span> */}
              <sub className="flex items-center">By Admin</sub>
            </div>
            <div className="flex gap-3 p-3">
              <img src={list_icon1} alt="list_icon1" className="w-3 h-3" />
              {/* <span className="text-sm">Technology</span> */}
              <sub className="flex items-center">Technology</sub>
            </div>
          </div>
            <h1 className="w-34 font-semibold">Tacklik the Changes of Retail Insustry</h1>
            <button>Read More > </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
