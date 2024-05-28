import React from "react";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";

const ContactUs = () => {
  return (
    <div className="p-10">
      <section
        className="bg-blue-50 p-8 lg:p-14 mx-auto rounded-3xl max-w-7xl"
        id="contact"
      >
        <h2 className="text-3xl text-gray-800 font-bold mb-5">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <PrimaryBtn text="SEND MESSAGE" />
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
