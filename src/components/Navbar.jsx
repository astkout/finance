import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Determine scroll direction
      const isScrollingUp = currentScrollPos < prevScrollPos;

      // Update the visibility state
      setIsVisible((prevIsVisible) => {
        // Always show navbar if the menu is open
        if (isMenuOpen) return true;

        // Hide the navbar when scrolling down and show it when scrolling up
        return isScrollingUp || currentScrollPos < 50;
      });

      // Save the current scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, prevScrollPos]);

  return (
    <div className={`fixed top-0 left-0 right-0 bg-[#000300] z-10 transition-all ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold text-[#00df9a]">FINANCE.</h1>
        <ul className={`flex ${isMenuOpen ? "hidden" : "visible"} md:flex hidden`}>
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Pricing</li>
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
              <li className="p-4 border-b">Pricing</li>
              <li className="p-4 border-b">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
