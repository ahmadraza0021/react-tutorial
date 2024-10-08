import React from "react";
import Cards from "./Components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Nav from "./Components/Pages/Nav";
import Parent from "./Project1/Parent";
import Navbar from "./Portfolio/Navbar";
import Hero from "./Portfolio/Hero";
import Hero1 from "./Portfolio/Hero1";
import Hero2 from "./Portfolio/Hero2";
import Hero3 from "./Portfolio/Hero3";
import Data from "./DataFetch.jsx/Data";
import Newnavbar from './Project2/Newnavbar';
import Newhero from "./Project2/Newhero";
const App = () => {
  return (
    // <div><Data/></div>
    // portfolio fragment
    // <> 
    // <div><Navbar/></div>
    // <div><Hero/></div>
    // <div><Hero1/></div>
    // <div><Hero2/></div>
    // <div><Hero3/></div>
    // </>
    
    //project1
    // <div><Parent/></div>

    //project2
    // <>
    // <div><Newnavbar/></div>
    // <div><Newhero/></div>
    // </>

    //fetchdata
    // <div> <Data/> </div>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>

    // <div><Cards/></div>
  );
};

export default App;
