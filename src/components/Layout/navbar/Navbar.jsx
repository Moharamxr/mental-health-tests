import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLoginOpen(false);
  };
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-4 lg:px-8 bg-white shadow-md">
      <div
        onClick={() => navigate("/")}
        className="text-3xl lg:text-5xl font-bold text-blue-800 cursor-pointer"
      >
        <img src={Logo} className="w-2"  />
        {/* MHT */}
      </div>
      
      <div className="hidden lg:flex justify-center items-center space-x-7 lg:space-x-10">
        <NavItem text="Learn About Mental Health" link="/" />
        <NavItem text="Tests" link="/tests" />
        <NavItem text="Contact Us" link="/contact" />
        <NavItem text="About Us" link="/about" />

        <NavItem text="Terms&Conditions" link="/terms" />
      </div>
      <div className="relative hidden lg:block">
        <button
          onClick={() => navigate("/login")}
          className="lg:block text-lg font-bold text-blue-800 cursor-pointer"
        >
          LOGIN
        </button>

        {isLoginOpen && (
          <div className="absolute top-full -left-72  w-80  bg-blue-100 rounded-2xl rounded-se-none shadow-lg p-4">
            <h4 className="text-2xl font-semibold text-blue-800 cursor-pointer pb-5">
              Log In To Your Account
            </h4>
            <LoginForm />
          </div>
        )}
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="flex flex-col space-y-1">
          <span className="block w-6 h-1 bg-blue-800"></span>
          <span className="block w-6 h-1 bg-blue-800"></span>
          <span className="block w-6 h-1 bg-blue-800"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-5 py-5 ">
            <NavItem text="Learn About Mental Health" link="/" />
            <NavItem text="Tests" link="/tests" />
            <NavItem text="Contact Us" link="/contact" />
            <NavItem text="About Us" link="/about" />
            <NavItem text="Terms&Conditions" link="/terms" />
            <button
              onClick={() => navigate("/login")}
              className="lg:block text-lg font-bold text-blue-800 cursor-pointer"
            >
              LOGIN
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ text, link }) => {
  return (
    <NavLink
      to={link}
      className="font-bold text-blue-800 cursor-pointer border-b-4 border-transparent hover:border-orange-400 transition-colors ease-in"
    >
      {text}
    </NavLink>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-5">
      <input
        type="email"
        placeholder="Email"
        className="border-b-2 border-blue-800 outline-none bg-blue-100 text-blue-900 h-12  w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b-2 border-blue-800 outline-none bg-blue-100 text-blue-900 h-12 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Login
      </button>
    </form>
  );
};

export default Navbar;
