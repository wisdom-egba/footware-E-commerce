import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const setNavBar = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-white justify-between h-24 max-w-[1240px] mx-auto px-4 items-center mt-[40px]">
      <h1 className=" w-full text-3xl font-bond text-[#E2703A]">Shu:HUB</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={setNavBar} className= ' block  md:hidden '>
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <div
        className=  {
          nav
            ? "fixed left-0 top-0 w-[40%] bg-[#000300] h-full ease-in-out duration-500 lg:hidden md:hidden"
            : "fixed left-[-100%] "
        }
      >
         <h1 className=" w-full text-3xl font-bond text-[#E2703A] m-4 mt-10">Shu:HUB</h1>
        <ul className="pt-18 uppercase p-4 ">
          <li className="p-4 border-b border-r-gray-200 max-w-sm">Home</li>
          <li className="p-4 border-b border-r-blue-200 max-w-sm">Company</li>
          <li className="p-4 border-b border-r-gray-200 max-w-sm">Resources</li>
          <li className="p-4 border-b border-r-gray-200 max-w-sm ">About</li>
          <li className="p-4 border-b-none border-r-gray-200 max-w-sm ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
