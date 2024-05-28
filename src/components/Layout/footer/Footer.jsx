import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 text-white p-6 mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
        <span>&copy; 2024 MHT Screening. All rights reserved.</span>
        <div className="space-x-5">
          <a onClick={()=>navigate('/privacy')} className="hover:underline cursor-pointer">
            Privacy Policy
          </a>
          <a onClick={()=>navigate('/terms')} className="hover:underline cursor-pointer">
            Terms of Service
          </a>
          <a onClick={()=>navigate('/contact')} className="hover:underline cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
