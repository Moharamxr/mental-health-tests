import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
        <span>&copy; 2024 MHT Screening. All rights reserved.</span>
        <div className="space-x-5">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
