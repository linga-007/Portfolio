import React from 'react'
import python from '../../images/python.svg'
import c from '../../images/c.svg'
import cpp from '../../images/cpp.svg'
import r from '../../images/r.svg'
import flask from '../../images/flask.svg'
import html from '../../images/html.svg'
import express from '../../images/express.svg'
import javascript from '../../images/javascript.svg'
import reactjs from '../../images/reactjs.svg'
import node from '../../images/node.svg'
import tailwindcss from '../../images/tailwindcss.svg'
import nextjs from '../../images/nextjs.svg'
import mysql from '../../images/mysql.svg'
import mongodb from '../../images/mongodb.svg'
import powerbi from '../../images/powerbi.svg'



const Skills = () => {
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center mt-20 gap-20 mb-10' id='skills'>
      <p className='font-semibold text-7xl'>Skills</p>
      <div className="w-[70%] hit-fit p-2 h-fit grid grid-cols-5 gap-4 gap-y-16 justify-items-center items-center">
        <img src={python} width={100} height={100}></img>
        <img src={c} width={80} height={80}></img>
        <img src={cpp} width={100} height={100}></img>
        <img src={r} width={100} height={100}></img>
        <img src={flask} width={100} height={100}></img>
        <img src={html} width={100} height={100}></img>
        <img src={javascript} width={100} height={100}></img>
        <img src={reactjs} width={100} height={100}></img>
        <img src={express} width={100} height={100}></img>
        <img src={node} width={100} height={100}></img>
        <img src={tailwindcss} width={100} height={100}></img>
        <img src={nextjs} width={100} height={100}></img>
        <img src={mysql} width={100} height={100}></img>
        <img src={mongodb} width={100} height={100}></img>
        <img src={powerbi} width={100} height={100} ></img>
        
      </div>
       
    </div>
    </>
  )
}

export default Skills