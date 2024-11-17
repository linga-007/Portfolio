import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast , ToastContainer } from "react-toastify"; // You can install this for the toast notification

// Import the Toastify CSS in your index.js or App.js
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContact = (e) => {
    e.preventDefault();

   
    emailjs
      .sendForm(
        "service_zxzt1c7", 
        "template_enj9qbu", 
        e.target,
        "N3K3nWM1NzXQuXKj4" 
      )
      .then(
        (result) => {
         
          toast.success("Mail sent successfully!", {
            
            autoClose: 3000,
          });
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          toast.error("Error sending mail. Please try again.", {
            
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <>
      <div className="flex mt-20 justify-center items-center w-full h-fit flex-col gap-10">
        <ToastContainer />
        <div>
          <p className="font-semibold text-4xl md:text-7xl">Contact Me</p>
        </div>
        <div>
          <p className="font-semibold text-lg md:text-3xl">
            lingesh480500@gmail.com
          </p>
        </div>
        <div>
          <p className="font-medium text-sm md:text-md text-center px-4">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <div className="w-[90%] md:w-[70%] lg:w-[50%] mt-10">
          <form onSubmit={handleContact}>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex flex-col gap-2 w-full md:w-[48%]">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-14 border-0 border-b-2 border-blue-500 w-full focus:ring-0 focus:border-blue-500 outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[48%]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="h-14 border-0 border-b-2 border-blue-500 focus:ring-0 w-full focus:border-blue-500 outline-none placeholder-gray-400"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you want to tell me?"
                rows="4"
                className="border-0 border-b-2 border-blue-500 focus:ring-0 focus:border-blue-500 outline-none placeholder-gray-400 h-28"
                required
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-end items-center mt-6 w-full">
              <button className="text-lg font-medium text-white bg-blue-500 py-3 px-6 w-full md:w-auto rounded-full hover:bg-blue-600 transition duration-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
