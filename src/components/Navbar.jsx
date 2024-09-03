import React from "react";

const Navbar = () => {
  return (
    <div className="text-secondary py-4 w-screen flex justify-around items-center ">
      <div className="text-2xl ">
        Maria <span className="text-white">Ameddah</span>{" "}
      </div>

      <ul className="hidden sm:flex gap-5 text-lg">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Journey</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
