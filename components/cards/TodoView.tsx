"use client";
import React from "react";
import { LuCheck, LuCheckCheck, LuDelete, LuTrash } from "react-icons/lu";
import { Task } from "@/types";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setActiveTask } from "@/lib/redux/tasksSlice";

interface Props {
  task: Task;
}

const TodoView = ({ task }: Props) => {
  const { title, desc, time } = task;
  const dispatch = useAppDispatch();

  const handleDragStart = () => {
    dispatch(setActiveTask(task)); // Set the dragged task in the Redux state
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="w-full h-[200px] mt-3 border border-zinc-200 flex flex-col items-start justify-between hover:bg-zinc-200/80 hoverEffect py-5 px-4"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="line-clamp-1 text-lg md:text-lg lg:text-2xl font-bold flex-1">
          {title}
        </h3>
        <button className="cursor-pointer">
          {task.status === "created" ? (
            <LuCheck size={24} />
          ) : task.status === "inprogress" ? (
            <LuCheckCheck size={24} />
          ) : (
            <LuTrash size={24} />
          )}
        </button>
      </div>
      <p className="mb-3 lg:mb-0 text-start line-clamp-2 text-sm md:text-base mt-1 text-gray-700">
        {desc}
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-start relative">
          {/* Add colors or avatars for task owners */}
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-red hover:scale-110 hoverEffect"></div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-blue-500 -ml-4 hover:scale-110 hoverEffect"></div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-yellow -ml-4 hover:scale-110 hoverEffect"></div>
        </div>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
    </div>
  );
};

export default TodoView;
