import React from 'react';
import Card from './Card';
import python from '../../images/python.svg'
import flask from '../../images/flask.svg'
import reactjs from '../../images/reactjs.svg'
import node from '../../images/node.svg'
import tailwindcss from '../../images/tailwindcss.svg'
import nextjs from '../../images/nextjs.svg'
import mongodb from '../../images/mongodb.svg'
import powerbi from '../../images/powerbi.svg'
import twilio from '../../images/twilio.svg'
import express from '../../images/express.svg'
import dialogflow from '../../images/dialogflow.svg'
import LMS from '../../images/LMS.jpg'
import ICH from '../../images/1CH.jpg'
import vibe from '../../images/SENTI.png'
import powerBI from '../../images/POWERBI.jpg'
import PDF from '../../images/PDF.jpg'
import dairy_care from '../../images/dairy_care.png'


const Projects = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center mt-20 gap-20 mb-20' id = "projects">
        <p className='font-semibold text-7xl'>Projects</p>
        <div className='w-full sm:w-[80%] grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-20 justify-items-center'>
          <div className='w-full'>
            <Card title = "Call Center Application" content = "The Call Center Management System, developed using React and Flutter, enhances client communication by integrating Twilio for seamless call initiation, monitoring, and recording. It enables agents to import contacts, export call logs, and access detailed analytics for performance insights. With real-time data tracking, the system optimizes and improves overall service quality in call centers." icons = {[ reactjs , node , mongodb,express, twilio]} image = {ICH}/>
          </div>
          <div className='w-full'>
            <Card title = "Dream PDF" content = "DreamPDF is an AI-driven PDF app developed with React and Flutter to enhance the reading experience. It integrates the BERT model for sentiment analysis and the RVC model for voice generation, enabling dynamic voice modulation based on text sentiment. Key features include emotional voice narration, entity recognition, and text analysis, creating a user-centric, interactive PDF experience." icons = {[python , reactjs , node , mongodb]} image = {PDF}/>
          </div>
          <div className='w-full'>
            <Card title = "Leave Management System" content = "A React-based Leave Management System (LMS) with Twilio integration for real-time WhatsApp leave updates, Excel export for reports and employee details, and role-specific dashboards (Employee, Manager, Admin) for managing leave requests. The system supports full-day and half-day leave and is deployed on a kiosk for convenient on-site access." icons = {[ reactjs , node , mongodb, express]} image = {LMS}/>
          </div>
          <div className='w-full'>
            <Card title = "Dairy Care" content = "A mobile app for dairy farm management offers features like video calls with veterinarians, ambulance services, and an AI-powered chatbot for real-time assistance. It enhances animal welfare and operational efficiency by providing timely support during critical situations. The app streamlines communication and service access, ensuring farmers have essential resources at their fingertips, especially in emergencies." icons = {[dialogflow, python , node , mongodb , flask  ]} image={dairy_care} />
          </div>
          <div className='w-full'>
            <Card title = "Cricket Data Insights" content = "Developed a PowerBI solution using DAX queries to analyze and visualize cricket data with interactive dashboards. It reveals trends, player performance, and match outcomes, allowing users to explore key metrics like batting averages and strike rates. Advanced DAX calculations offer deeper insights into player statistics and match results. Enhances data-driven decision-making and performance analysis for teams and analysts." icons = {[python , powerbi]} image = {powerBI}/>
          </div>
          <div className='w-full'>
            <Card title = "Vibe-Sense" content = "Developed a face recognition software using OpenCV to automatically capture faces and mark attendance, reducing faculty time. The system periodically scans and identifies faces, marking attendance without manual input. It also offers real-time monitoring and generates attendance reports for easy tracking. This automated solution streamlines attendance management, enhancing efficiency and accuracy in the process." icons = {[python , flask]} image = {vibe}/>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Projects;
