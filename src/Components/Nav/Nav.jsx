import React, { useState, useEffect } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  let lastScrollY = window.scrollY;

 
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsScrolledUp(false); 
    } else {
      setIsScrolledUp(true); 
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const handleSmoothScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); 
    }
  };

  return (
    <nav
      className={`w-full flex justify-center items-center fixed top-0 z-50 transition-transform duration-300 bg-white  ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[100%] md:w-[50%] flex justify-between items-center px-5 mt-5 py-3 rounded-3xl bg-gray-100">
       
        <div className="hidden md:flex w-full justify-evenly text-lg font-semibold">
          <div className="flex justify-between gap-10 items-center">
            <button
              onClick={() => handleSmoothScroll("#about")}
              className="p-1 hover:text-blue-500"
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll("#skills")}
              className="p-1 hover:text-blue-500"
            >
              Skills
            </button>
            <button
              onClick={() => handleSmoothScroll("#projects")}
              className="p-1 hover:text-blue-500"
            >
              Projects
            </button>
          
            <button
              onClick={() => handleSmoothScroll("#coding-profiles")}
              className="p-1 hover:text-blue-500"
            >
              Coding
            </button>
            <button
              onClick={() => handleSmoothScroll("#experience")}
              className="p-1 hover:text-blue-500"
            >
              Experience
            </button>
            <button className="w-fit h-fit pl-4 pr-4 pt-1 pb-1 bg-black rounded-lg text-white hover:bg-gray-800">
              Connect
            </button>
          </div>
        </div>

      
        <div className="md:hidden">
          <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="absolute top-[100%] w-full bg-gray-100 flex flex-col items-center text-lg font-semibold shadow-lg md:hidden">
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="p-2 hover:text-blue-500"
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("#skills")}
            className="p-2 hover:text-blue-500"
          >
            Skills
          </button>
          <button
            onClick={() => handleSmoothScroll("#projects")}
            className="p-2 hover:text-blue-500"
          >
            Projects
          </button>
          <button
            onClick={() => handleSmoothScroll("#coding-profiles")}
            className="p-2 hover:text-blue-500"
          >
            Coding
          </button>
          <button
            onClick={() => handleSmoothScroll("#experience")}
            className="p-2 hover:text-blue-500"
          >
            Experience
          </button>
          <button
            className="w-fit h-fit pl-4 pr-4 pt-1 pb-1 bg-black rounded-lg text-white hover:bg-gray-800 mb-4"
            onClick={() => handleSmoothScroll("#connect")}
          >
            Connect
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
