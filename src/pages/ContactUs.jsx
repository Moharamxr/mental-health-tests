import React, { useState } from "react";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import { sendEmail } from "../services/auth.service";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidate = () => {
    return formData.name && formData.email && formData.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidate()) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await sendEmail(formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(error?.response?.data?.error || "An error occurred");
      setTimeout(() => {
        setError(null);
      }, 3000);
      console.error("Failed to send email", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <section
        className="bg-blue-50 p-8 lg:p-14 mx-auto rounded-3xl max-w-7xl"
        id="contact"
      >
        <h2 className="text-3xl text-gray-800 font-bold mb-5">Contact Us</h2>
        {success && (
          <p className="text-green-600 text-center font-semibold">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 text-center font-semibold">{error}</p>
        )}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <PrimaryBtn
            text={loading ? "Sending message..." : "SEND MESSAGE"}
            type="submit"
          />
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
