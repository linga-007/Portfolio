import Typewriter from "typewriter-effect";
import React from "react";
import linga from "../../images/linga.jpg";

const Intro = () => {
  const goToResume = () => {
    window.open(
      "https://drive.google.com/drive/folders/1sLGkBXCaXxrgOCaOXZHNHzLFQwWaDCSy",
      "_blank"
    );
  };

  return (
    <div
      className="w-full flex flex-col-reverse md:flex-row justify-between items-center mb-10 px-5 md:px-20"
      id="about"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-6 md:gap-10">
        <h1 className="text-3xl md:text-5xl text-center font-semibold">
          Hi, I am Lingeshwaran K V 👋
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold">
          <Typewriter
            options={{
              strings: [
                "An Open Source Contributor",
                "A Full Stack Developer",
                "A Data Science Enthusiast",
                "A Competitive Programmer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              pauseFor: 1000,
            }}
          />
        </h1>
        <p className="text-lg md:text-xl text-center w-[90%] md:w-[90%]">
        IITian passionate about Data Science and open-source contributions. Holder of a patent for an innovative idea, with experience in hackathons and tech collaborations. Eager to use data science to solve real-world problems and contribute to the tech community.
        </p>
        <button
          className="w-fit h-fit p-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition"
          onClick={goToResume}
        >
          My Resume
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10">
        <img
          src={linga}
          alt="Profile Pic"
          className="rounded-3xl w-[80%] md:w-[400px] h-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
