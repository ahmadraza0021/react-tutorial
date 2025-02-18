import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#cae7d5] h-[340px] max-w-[100vw] pt-8">
      <div className="flex justify-around gap-32">
        <div>
          <h2 className="font-bold">Customer Services</h2>
          <h3>Contact Us</h3>
          <h3>FAQ's</h3>
          <h3>Order and delivery</h3>
          <h3>Returns and refunds</h3>
          <h3>Payment and pricing</h3>
          <h3>Cryptocurrency payments</h3>
          <h3>Promotions terms and conditions</h3>
        </div>
        <div>
          <h2 className="font-bold">About Velveto</h2>
          <h3>About us</h3>
          <h3>velveto partner boutique</h3>
          <h3>Careers</h3>
          <h3>Modern salvery statement</h3>
          <h3>velveto app</h3>
          <h3>Cryptocurrency payments</h3>
          <h3>Promotions terms and conditions</h3>
        </div>
        <div>
          <h2 className="font-bold">Discount and membership</h2>
          <h3>Refer a friend</h3>
          <h3>velveto membership</h3>
          <h2 className="font-bold">Follow us</h2>
          <div className="flex gap-x-3">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="pt-7 pb-3">
        <hr className="border-white"/>
      </div>
      <div className="flex gap-x-8 px-[74px] underline pb-3">
        <h3>Privacy policy</h3>
        <h3>Terms and conditions</h3>
        <h3>Accessibility</h3>
        <h3>Sitemap</h3>
      </div>
      <p className="flex justify-center">Copyright © 2024 velveto</p>
    </div>
  );
};

export default Footer;
