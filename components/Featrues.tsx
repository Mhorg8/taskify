"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
interface Feature {
  id: number;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Manage your time.",
    text: "You can add new tasks and set time to manage your time efficiently.",
  },
  {
    id: 2,
    title: "Track your progress.",
    text: "Monitor your task completion and see how much progress you are making.",
  },
  {
    id: 3,
    title: "Organize by priority.",
    text: "Set priorities for your tasks so you know what to focus on first.",
  },
  {
    id: 4,
    title: "Collaborate with others.",
    text: "Share tasks with teammates and collaborate on projects.",
  },
];

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
    <div className="bg-black text-white flex items-center justify-center overflow-hidden h-[300px]">
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
          <p className="text-lg">{features[currentIndex].text}</p>
        </motion.div>

        {/* Arrow buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[15%] text-white flex flex-col gap-5">
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
