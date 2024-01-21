import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">FINANCE.</h1>
      <ul className={`flex ${isMenuOpen ? "hidden" : "visible"} md:flex hidden`}>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {isMenuOpen && (
        <div className="fixed left-0 top-0 w-[40%] h-screen border-r border-gray-900 bg-[#000300] transition-all ease-in-out duration-300">
          <h1 className="text-3xl font-bold text-[#00df9a] m-4">FINANCE.</h1>
          <ul className="pt-24 uppercase">
            <li className="p-4 border-b">Home</li>
            <li className="p-4 border-b">About</li>
            <li className="p-4 border-b">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
