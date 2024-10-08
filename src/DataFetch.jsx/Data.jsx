import axios from "axios";
import React, { useEffect, useState } from "react";
import Child from "./Child";
const url = "https://www.course-api.com/react-tours-project";
const Data = () => {
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    try {
      // fetch method
      // const res = await fetch(url);
      // const data = await res.json();
      // setTours(data);
      // console.log(data);      
      // first install axios than use axios        npm i axios
      //axios method 
      const res = await axios(url);
      setTours(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  console.log(tours);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-red-100 max-w-[95vw]">
      {tours.map((link) => {
        return <Child {...link} key={link.id}/>
      })}
      </div>
    </div>
  );
};

export default Data;
