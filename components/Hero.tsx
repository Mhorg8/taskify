import CustomButton from "./CustomButton";
import React from "react";

const Hero = () => {
  return (
    <div className="h-fit md:h-[calc(100dvh-80px)]">
      <div className="container flex items-center justify-center flex-col h-full w-fit py-5">
        <h1 className="text-4xl md:text-7xl font-black fadeIn delay-400 text-center">
          Start track your task's.
        </h1>
        <p className="text-center text-lg md:text-xl font-medium my-3 fadeIn delay-400">
          With &quot;taskpro&quot; you can track you hobbies and enjoy from you
          life.
        </p>
        <div className="fadeIn delay-1000">
          <CustomButton text=" Get Start" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
