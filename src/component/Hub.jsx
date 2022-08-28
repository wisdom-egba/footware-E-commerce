import React from "react";
import Typed from "react-typed";

const Hub = () => {
  return (
    <div className=" flex text-white justify-between max-w-[1240px] mx-auto mt-auto"  >
      <div
        className="mx-w-[800px] mt-[1px] w-full h-screen m-auto flex flex-col justify-center text-center
      "
      >
        <p className=" p-2 font-bold text-[#E2703A]">
          UNPARALLELED LUXURY AND COMFORT
        </p>
        <h1 className=" md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
          Walk With Confidence
        </h1>
        <div className="flex justify-center ">
          <p className="md:text-4xl sm:text-[28px] sm:mt-[5px] text-xl font-bold text-[#E2703A]">
            fast and flawless delivery of{" "}
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-[15px] font-bold pl-2"
            strings={["Sneakers", "Office-Shoes", "Sandals", "etc..."]}
            typeSpeed={90}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-4xl sm:text-[14px] text-[14px] font-bold text-gray-500 p-2">Shoehub Nigeria is your number online store that provides you with quality shoes for men and accessories that match at affordable prices</p>
        <button className=" bottom-1 bg-[#E2703A] w-[150px] rounded-md text-black my-5 py-3 mx-auto cursor-pointer ">Get Started</button>
      </div>
    </div>
  );
};

export default Hub;
