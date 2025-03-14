import React from "react";
import { LuUser } from "react-icons/lu";
import CustomCollaps from "./CustomCollaps";

const TaskView = () => {
  return (
    <div className="w-full min-h-[200px] h-full dark:bg-[#fff] bg-zinc-200 py-4 hover:scale-105 hover:shadow dark:hover:shadow-white hoverEffect">
      <div className="flex items-center justify-between w-full text-black dark:text-black  px-7">
        <h3 className="text-2xl font-semibold tracking-tight truncate flex-1">
          Create ui for login page
        </h3>
        <div className="text-lg flex items-center">
          <LuUser />
          <span>5</span>
        </div>
      </div>
      <CustomCollaps />
    </div>
  );
};

export default TaskView;
