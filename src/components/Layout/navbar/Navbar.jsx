import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo2.jpg";
import { logout } from "../../../services/auth.service";
import { CircularProgress } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      setIsLogoutLoading(true);
      await logout();
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLogoutLoading(false);
    }
  };

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  return (
    <nav className="grid grid-cols-12 items-center py-1 px-4 lg:px-8 bg-white shadow-md relative">
      <div onClick={() => navigate("/")} className="flex items-center cursor-pointer col-span-2 lg:col-span-3">
        <img src={Logo} className="w-20 h-20" alt="MHT Logo" />
        <span className="text-3xl lg:text-4xl font-bold text-blue-800">MHT</span>
      </div>

      <div className="hidden lg:flex justify-center items-center space-x-7 lg:space-x-10 col-span-6">
        <NavItem text="Learn About Mental Health" link="/" />
        <NavItem text="Tests" link="/tests" />
        <NavItem text="Contact Us" link="/contact" />
        <NavItem text="About Us" link="/about" />
        <NavItem text="Terms & Conditions" link="/terms" />
      </div>

      <div className="hidden lg:flex justify-end items-center col-span-3">
        {!isLoggedIn ? (
          <button
            onClick={() => navigate("/login")}
            className="text-lg font-bold text-blue-800 cursor-pointer"
          >
            LOGIN
          </button>
        ) : (
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-50 p-3 cursor-pointer" onClick={() => navigate('/user/tests')}>
              Welcome, {localStorage.getItem("name")}
            </span>
            <button
              onClick={handleLogout}
              className="text-lg font-bold text-blue-800 cursor-pointer"
              disabled={isLogoutLoading}
            >
              {isLogoutLoading ? <CircularProgress size={16} color="inherit" /> : <LogoutIcon />}
            </button>
          </div>
        )}
      </div>

      <div className="lg:hidden col-start-12 flex justify-end">
        <button onClick={toggleMenu} className="flex flex-col space-y-1">
          <span className="block w-6 h-1 bg-blue-800"></span>
          <span className="block w-6 h-1 bg-blue-800"></span>
          <span className="block w-6 h-1 bg-blue-800"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[5.5rem] left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-5 py-5">
            <NavItem text="Learn About Mental Health" link="/" onClick={toggleMenu} />
            <NavItem text="Tests" link="/tests" onClick={toggleMenu} />
            <NavItem text="Contact Us" link="/contact" onClick={toggleMenu} />
            <NavItem text="About Us" link="/about" onClick={toggleMenu} />
            <NavItem text="Terms & Conditions" link="/terms" onClick={toggleMenu} />
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  navigate("/login");
                  toggleMenu();
                }}
                className="text-lg font-bold text-blue-800 cursor-pointer"
              >
                LOGIN
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-lg font-bold text-blue-800 cursor-pointer"
                disabled={isLogoutLoading}
              >
                {isLogoutLoading ? <CircularProgress size={16} color="inherit" /> : "Logout"}
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ text, link, onClick }) => {
  return (
    <NavLink
      to={link}
      className="font-bold text-blue-800 cursor-pointer border-b-4 border-transparent hover:border-orange-400 transition-colors ease-in"
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};

export default Navbar;
