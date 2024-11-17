import React from 'react'

const Card = ({title , content , icons , image}) => {
  return (
    <>  
    <div className='w-full flex flex-col gap-10 justify-center items-center border border-2 p-2 rounded-lg '>
        <div className=''>
          <img src={image} alt="profile" className="w-full " />
          
        </div>
        <div className='flex flex-col gap-8  justify-center items-center'>
          <p className='text-[28px] font-semibold'>{title}</p>
          <div className='w-full flex justify-center items-center'>
          <p className='text-[17px]'>{content} </p>
          </div>
          <div className='flex flex-row gap-4'>
          {icons && icons.map((icon, index) => (
            <img key={index} src={icon} alt={`icon-${index}`} width={40} height={40}/>
          ))}
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Card