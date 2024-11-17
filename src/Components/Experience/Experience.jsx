import React from "react";
import Expcard from "./Expcard";
import BT from '../../images/BT.jpg'
import IG from '../../images/IG.png'
import sece from '../../images/sece.png'

const Experience = () => {

  const innovationGeeks = ["Developed responsive and dynamic web components for Mayuikai India using Next.js and Tailwind CSS, improving user experience and interface consistency." , "Collaborated with the team to design and deliver high-quality frontend features aligned with project requirements and business objectives."]
  const betterTomorrow = ["Developed and managed interactive web applications leveraging React.js and associated tools." , "Worked closely with multidisciplinary teams, including designers, product managers, and developers, to create and deliver top-notch solutions." , "Applied responsive design techniques to ensure consistent user experiences across devices and browsers." , "Contributed to code reviews, offering valuable insights to improve codebase quality and maintain best practices."]
  const studentMentor = ["Assisted students with learning new topics and solving problems." , "Provided guidance and support to help students improve their skills." , "Fostered a positive and supportive environment for student growth."]

  return (
    <div className="flex flex-col items-center mb-10" id="experience">
      <p className="font-semibold text-5xl md:text-7xl text-center mb-10">Work Experience</p>
      <div className="w-full flex justify-center mt-10">
        <div className="relative w-full md:w-[65%] flex flex-col items-center">
          <div className="absolute inset-y-0 left-1/2 w-[2px] bg-black transform -translate-x-1/2 z-0"></div>
          <div className="container mx-auto p-4 space-y-6 z-10">
            <div className="flex justify-start">
              <div className="bg-white p-6 rounded-lg max-w-md shadow-lg mr-10">
                <Expcard title="Frontend Developer" company="Innovation Geeks" duration="Nov 2023 - Mar 2024" image = {IG} content = {innovationGeeks}/>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-white p-6 rounded-lg max-w-md shadow-lg ml-10">
                <Expcard title="Full Stack Developer" company="Better Tomorrow" duration="Mar 2024 - July 2024" image = {BT} content = {betterTomorrow}/>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-6 rounded-lg max-w-md shadow-lg mr-10">
                <Expcard title="Student Mentor" company="Sri Eshwar College of Engineering" duration="Oct 2024 - Present" image = {sece} content = {studentMentor} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
