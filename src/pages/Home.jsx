import React from "react";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import WaterDrop from "../assets/bubble-red.png";

const Home = () => {
  const supportItems = {
    "Things to try on your own": {
      
      text: "Dozens of community-sourced tools, filtered for the help you need. Take back control.",
    },
    "Connect with others": {
     
      text: "Interact with others who have dealt with or are dealing with the same issues as you.",
    },
    "Find a Provider": {
   
      text: "Vetted (and used) by MHA staff. From telemedicine to traditional talk therapy to yoga and more.",
    },
    "Learn about treatments": {
     
      text: "Learn more about mental health conditions, recommended steps towards recovery, and where to find help.",
    },
  };
  
  return (
    <div className="space-y-10 p-4 lg:p-8">
      {/* Header Section */}
      <header className="bg-blue-100/70 rounded-3xl lg:rounded-ss-none  p-10 lg:p-14">
        <h1 className="text-4xl lg:text-7xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
          MHT Screening
        </h1>
        <p className="text-gray-500 text-xl mb-5 ">
          Take the first steps to mental health! <br />
          Information, resources, and free & confidential mental health
          screening.
        </p>
        <PrimaryBtn text="TAKE A MENTAL HEALTH TEST" />
      </header>

      {/* Test Section */}
      <section>
        <h2 className="font-bold text-3xl lg:text-5xl text-blue-800 leading-relaxed mb-10">
          Take a Mental Health Test
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {["ADHD", "Anxiety", "Depression"].map((item) => (
            <div
              key={item}
              className="bg-blue-100/70 rounded-3xl p-8 flex items-center justify-between flex-col space-y-5 cursor-pointer hover:bg-blue-200/70 transition-colors ease-in"
            >
              <span className="text-xl font-bold text-blue-800">
                {item} Test
              </span>
              <PrimaryBtn text="TAKE TEST" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-50 grid grid-cols-6 rounded-2xl p-8">
        <h2 className="col-span-full font-bold text-5xl text-center lg:text-5xl text-red-500 opacity-80 leading-relaxed mb-10">
          Find Support that Works for you
        </h2>
        {Object.keys(supportItems).map((item, index) => (
          <div
            key={index}
            className={`col-span-3 bg-red-50 hover:bg-white rounded-2xl p-8 gap-3`}
          >
            <img src={WaterDrop} className="w-20" />
            <h4 className="font-bold text-2xl lg:text-3xl text-red-500 opacity-80  mt-2">
              {item}
            </h4>
            <p className="text-gray-600 font-semibold py-5">
              {supportItems[item].text}
            </p>
          </div>
        )
        )}
        
        
        {/* <div className="col-start-2 col-end-4 bg-red-50 hover:bg-white rounded-2xl p-8 gap-3">
          <img src={WaterDrop} className="w-20" />
          <h4 className="font-bold text-2xl lg:text-3xl text-red-500 opacity-80  mt-2">Things to try on your own</h4>
          <p className="text-gray-600 font-semibold py-5">Dozens of community-sourced tools, filtered for the help you need. Take back control.</p>
        </div>
        <div className="col-start-5 col-end-7 bg-red-50 hover:bg-white rounded-2xl p-8">
          <img src={WaterDrop} className="w-20" />
        </div> */}
      </section>

      {/* Resources Section */}
      <section className="col-span-full bg-red-50 p-8 mx-auto rounded-3xl">
        <h2 className="text-3xl text-red-800 font-bold mb-5">
          Mental Health Resources
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque, nisl a volutpat viverra, mi nunc ultrices purus, in
          pellentesque elit ligula sit amet est. Nullam scelerisque, nisl a
          volutpat viverra, mi nunc ultrices purus, in pellentesque elit ligula
          sit amet est.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 p-8 mx-auto rounded-3xl">
        <h2 className="text-3xl text-blue-800 font-bold mb-5">
          What People Are Saying
        </h2>
        <div className="space-y-5">
          {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
            <blockquote
              key={index}
              className="bg-white p-5 rounded-xl shadow-md"
            >
              <p className="text-gray-700 italic">
                "This website has been incredibly helpful for me. The tests are
                easy to take and the resources are very informative."
              </p>
              <cite className="text-blue-800 font-bold mt-3 block">
                - {name}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 p-8 mx-auto rounded-3xl">
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

export default Home;
