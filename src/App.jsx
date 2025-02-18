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
import VelvetoNav from "./Velveto/VelvetoNav";
import Footer from "./Velveto/Footer";
import Hero4 from "./Velveto/VelvetoHero4";
import VelvetoHero4 from "./Velveto/VelvetoHero4";
import VelvetoHero5 from "./Velveto/VelvetoHero5";
import BrandNav from "./Brand_Page/BrandNav";
import BrandHero from "./Brand_Page/BrandHero";
import Order_List from "./sherazproject/Order_List";
import Design from "./sherazproject/Design";
import Insights from "./sherazproject/Insights";
import Component from "./sherazproject/Component";
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

//        get bg-img direct from public folder
//  <div className="bg-[url('shoe.png')] bg-cover bg-center h-40 w-40"></div>
//        get bg-img from src folder
//  <div className="bg-[url('../src/assets/nike_shoe_pic.png')] bg-cover bg-center h-40 w-40"></div>
//       get img direct from public folder
//       <img src="Logo.png" alt="" />
//       get img from src
//  <img src="../src/assets/Component/Logo.png" alt="" /> 


    // project2
    // <>
    // <div><Newnavbar/></div>
    // <div><Newhero/></div>
    // </>

    //fetchdata
    // <div> <Data/> </div>

    // <BrowserRouter>
    // <Nav/>
    // <Routes>
    //   <Route path='/' element = {<Home/>}/>
    //   <Route path='/about' element = {<About/>}/>
    //   <Route path='/contact' element = {<Contact/>}/>
    // </Routes>
    // </BrowserRouter>

    // <div><Cards/></div>
     
    //Velveto
    // <>
    // <div><VelvetoNav/></div>
    // <div><VelvetoHero4/></div>
    // <div><VelvetoHero5/></div>
    // <div><Footer/></div>
    // </>
    // <>
    // <div><BrandNav/></div>
    // <div><BrandHero/></div>
    // </>
    
    // <>
    // <div><Order_List/></div>
    // </>

    // <>
    // <div><Design/></div>
    // </>

    <>
    <div><Component/></div>
    </>
  );
};

export default App;
