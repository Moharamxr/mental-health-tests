import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8 px-4 lg:px-8">
      <div className="text-5xl lg:text-3xl font-bold text-blue-800">
        LOGO
      </div>
      <ul className="flex justify-center items-center space-x-7 lg:space-x-10">
        <NavItem text="Learn About Mental Health" />
        <NavItem text="Tests" />
        <NavItem text="About Us" />
      </ul>
      <div className="text-lg font-bold text-blue-800 cursor-pointer">
        LOGIN
      </div>
    </nav>
  );
};

const NavItem = ({ text }) => {
  return (
    <li className="font-bold text-blue-800 cursor-pointer border-b-4 border-transparent hover:border-orange-400 transition-colors ease-in">
      {text}
    </li>
  );
};

export default Navbar;
