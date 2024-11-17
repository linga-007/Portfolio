import React from "react";

const Expcard = ({ title, company, duration, image, content }) => {
  return (
    <>
      <div className="w-fit h-fit">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-10">
            <div className="flex justify-center items-center">
              <img src={image} alt="logo" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-lg font-semibold ">{title}</p>
              <p className="text-md ">{duration}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <ul className="list-disc flex flex-col gap-3">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expcard;
