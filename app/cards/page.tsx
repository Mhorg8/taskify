import MoblieTabs from "@/components/cards/MoblieTabs";
import React from "react";
import { LuCheck, LuCheckCheck, LuPlus } from "react-icons/lu";

const CardsPage = () => {
  return (
    <div className="">
      <MoblieTabs />
      {/* large screen container */}
      <div className="hidden md:grid grid-cols-3">
        <div className=" border-t-8 border-blue-500 container">
          <h3 className="text-2xl font-bold text-center">Created</h3>
          {/* sample task view */}
          <div className="w-full h-[200px] mt-3 border border-dashed border-zinc-400 flex items-center justify-center hover:bg-zinc-200/80 hoverEffect">
            <LuPlus size={38} cursor="pointer" />
          </div>
          <div className="w-full h-[200px] mt-3 border border-zinc-200 flex flex-col items-start justify-between hover:bg-zinc-200/80 hoverEffect py-5 px-4">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl md:text-2xl font-bold flex-1">
                Create ui for cards page
              </h3>
              <button className="cursor-pointer">
                <LuCheck size={24} />
              </button>
            </div>
            <p className="text-start mt-1 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              soluta nesciunt esse cupiditate, quod rerum!
            </p>
            <div className="flex items-center justify-baseline w-full">
              <div className="flex-1 flex item-center justify-start relative">
                <div className="w-12 h-12 rounded-full bg-red hover:scale-110 hoverEffect"></div>
                <div className="w-12 h-12 rounded-full bg-blue-500 -ml-4 hover:scale-110 hoverEffect" ></div>
                <div className="w-12 h-12 rounded-full bg-yellow -ml-4 hover:scale-110 hoverEffect"></div>
              </div>
              <p>12:00PM</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center border-t-8 border-yellow container">
          <h3 className="text-2xl font-bold">In Progress</h3>
        </div>
        <div className="flex justify-center text-center border-t-8 border-red container">
          <h3 className="text-2xl font-bold">Finished</h3>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
