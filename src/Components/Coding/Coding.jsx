import React from "react";
import CodeCard from "./CodeCard";
import leetcode from '../../images/leetcode.svg';
import codechef from '../../images/codechef.svg';
import codeforces from '../../images/codeforces.svg';
import codingninjas from '../../images/codingninjas.svg';

const Coding = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center mt-20 gap-16 mb-20"
        id="coding-profiles"
      >
        <p className="font-semibold text-7xl text-center ">Coding Profiles</p>
        <div className="flex justify-center items-center w-[60%] mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-10 px-5 sm:px-0">
          <CodeCard logo={leetcode} title="Leetcode" count="469" rating="1517" />
          <CodeCard logo={codechef} title="Codechef" count="421" rating="1160" />
          <CodeCard logo={codeforces} title="CodeForces" count="50" rating="574" />
          <CodeCard logo={codingninjas} title="Coding Ninjas" count="100" rating="1620" />
        </div>
      </div>
    </>
  );
};

export default Coding;
