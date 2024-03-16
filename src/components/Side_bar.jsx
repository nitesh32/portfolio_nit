import React, { useState,useContext} from "react";
import logo from "../assets/images/logo.webp";
import profile from "../assets/images/profile.webp";
import {StateContext} from "./Layout";

function Side_bar() {
  const {hello} = useContext(StateContext);
  return (
    <div className="border-[#565656] border h-auto  xl:w-4/5 w-full rounded-3xl p-7 flex flex-col items-center">
      <div className="h-10 w-full flex flex-row items-end justify-between mb-7">
        <div className="h-full w-32 ">
          <img src={logo} alt="img" className="pt-1" />
        </div>
        <span className="font-bold  text-base leading-5 max-w-110 max-h-36 ">
          Web Developer
        </span>
      </div>
      <img
        src={profile}
        alt="img"
        className="h-56 w-60 grayscale  m-auto mb-11 rounded-3xl object-cover opacity-75 brightness-125"
      />
      <h2 className="text-2xl font-light font-sans mb-3 leading-5">
        nit8339@gmail.com
      </h2>
      <h2 className="text-2xl font-light font-sans leading-5 mb-7">
        Bhiwani in Hariyana, India
      </h2>

      <p className="mb-6 text-[#999999] ">Competitive Programmer</p>

      <ul className="h-12 w-full flex gap-2 items-center justify-center mb-8">
        <li className="h-12 w-12 border-2 border-[#999999]  rounded-full flex items-center justify-center hover:border-[#28e98c] ease-in-out duration-300">
          <a href="" className="w-full h-full flex items-center justify-center text-[#999999] hover:text-[#28e98c] ease-in-out duration-300">
            <i className="fa-brands fa-github fa-xl "></i>
          </a>
        </li>
        <li className="h-12 w-12 border-2 border-[#999999]  rounded-full flex items-center justify-center hover:border-[#28e98c] ease-in-out duration-300">
          <a href="" className="w-full h-full flex items-center justify-center text-[#999999] hover:text-[#28e98c] ease-in-out duration-300">
          <i className="fa-brands fa-twitter fa-xl"></i>
          </a>
        </li>
        <li className="h-12 w-12 border-2 border-[#999999]  rounded-full flex items-center justify-center hover:border-[#28e98c] ease-in-out duration-300">
          <a href="" className="w-full h-full flex items-center justify-center text-[#999999] hover:text-[#28e98c] ease-in-out duration-300">
          <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </li>
        <li className="h-12 w-12 border-2 border-[#999999]  rounded-full flex items-center justify-center hover:border-[#28e98c] ease-in-out duration-300">
          <a href="" className="w-full h-full flex items-center justify-center text-[#999999] hover:text-[#28e98c] ease-in-out duration-300">
          <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
        </li>
      </ul>

      <div className="h-14 w-full flex items-center justify-center cursor-pointer">
      <a  onClick={hello} className="h-full w-full border-2 border-[#28e98c] bg-[#28e98c] rounded-full px-auto text-black hover:text-[#28e98c] hover:bg-black flex items-center justify-center ease-in-out duration-300">
        <i className="fa-solid fa-envelope fa-xl"></i>&nbsp;
        HIRE ME!
      </a>
      </div>
      
      




    </div>
  );
}

export default Side_bar;
