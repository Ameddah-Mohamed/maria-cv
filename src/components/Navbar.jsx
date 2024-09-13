import React from "react";

const Navbar = () => {
  return (
    <div className="text-secondary py-4 w-screen flex justify-around items-center ">
      <div className="text-2xl">
        Maria <span className="text-white">Ameddah</span>
      </div>

      <ul className="hidden sm:flex gap-5 text-lg">
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <li key={item} className="relative group">
            <a href={`#${item.toLowerCase()}`} className="relative z-10">
              {item}
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
