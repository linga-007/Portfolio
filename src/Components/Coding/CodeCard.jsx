import React from "react";

const CodeCard = ({ logo, title, count, rating }) => {
  const handleCodingCard = () => {
    // Implement your logic here to handle the click event on the code card
    if (title === "Leetcode") {
      window.open("https://leetcode.com/lingeshwaran_07", "_blank");
    } else if (title === "Codechef") {
      window.open("https://www.codechef.com/users/linga_007", "_blank");
    } else if (title === "CodeForces") {
      window.open("https://codeforces.com/profile/linga_007", "_blank");
    } else if (title === "Coding Ninjas") {
      window.open(
        "https://www.naukri.com/code360/profile/8d212cb3-bc15-4e12-bed7-7faa6684be6b",
        "_blank"
      );
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-10 ">
        <div
          className="w-[300px] p-5 border rounded-lg shadow-lg flex flex-col gap-6 items-center bg-white hover:cursor-pointer"
          onClick={handleCodingCard}
        >
          <div className="flex items-center gap-6 mb-3 ">
            <img src={logo} alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <p className="text-lg text-gray-600 text-center font-semibold">
                Problems Solved
              </p>
              <p className="text-lg text-center font-semibold">
                {count}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-600 text-center font-semibold">
                Max Rating
              </p>
              <p className="text-lg  text-center font-semibold">
                {rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeCard;
