"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { features } from "@/constant";

const animation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-black dark:bg-white dark:text-black text-white flex items-center justify-center overflow-hidden h-[300px]">
      <div className="w-full h-full flex flex-col items-center justify-center relative gap-3">
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
          className="h-[200px] text-center w-full flex items-center justify-center flex-col"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black">
            {features[currentIndex].title}
          </h2>
          <p className="text-lg max-w-[250px] md:w-full">
            {features[currentIndex].text}
          </p>
        </motion.div>

        {/* Arrow buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[15%] text-white dark:text-black flex flex-col gap-5">
          <button
            onClick={handlePrevious}
            className="hover:scale-125 hoverEffect cursor-pointer"
          >
            <IoIosArrowUp size={28} />
          </button>
          <button
            onClick={handleNext}
            className="hover:scale-125 hoverEffect cursor-pointer"
          >
            <IoIosArrowDown size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
