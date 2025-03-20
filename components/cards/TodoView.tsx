"use client";
import React, { useState } from "react";
import {
  LuCheck,
  LuCheckCheck,
  LuChevronDown,
  LuChevronUp,
  LuTrash,
} from "react-icons/lu";
import { Task } from "@/types";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  changeToFinished,
  changeToInprogress,
  handleDeleteTask,
  setActiveTask,
} from "@/lib/redux/tasksSlice";

interface Props {
  item: Task;
}

const TodoView = ({ item }: Props) => {
  const { task, description, createdAt } = item;
  const [showCardMembers, setShowCardMembers] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleDragStart = () => {
    dispatch(setActiveTask(item));
    setShowCardMembers(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`border-r-2 ${
        item.status === "created"
          ? "border-r-red"
          : item.status === "inprogress"
          ? "border-r-blue-400"
          : "border-r-green-500"
      }  w-full h-[200px] mt-3 border border-zinc-200 flex flex-col items-start justify-between
       hover:bg-zinc-200/80 dark:hover:bg-zinc-200/10 hoverEffect py-5 px-4 cursor-grab relative`}
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="line-clamp-1 text-lg md:text-lg lg:text-2xl font-bold flex-1">
          {task}
        </h3>
        <>
          {item.status === "created" ? (
            <button
              className="cursor-pointer"
              onClick={() => dispatch(changeToInprogress(item.id))}
            >
              <LuCheck size={24} />
            </button>
          ) : item.status === "inprogress" ? (
            <button
              className="cursor-pointer"
              onClick={() => dispatch(changeToFinished(item.id))}
            >
              <LuCheckCheck size={24} />
            </button>
          ) : (
            <button
              className="cursor-pointer"
              onClick={() => dispatch(handleDeleteTask(item.id))}
            >
              <LuTrash size={24} />
            </button>
          )}
        </>
      </div>
      <p className="mb-3 lg:mb-0 text-start line-clamp-2 text-sm md:text-base mt-1 dark:text-zinc-300 text-gray-700">
        {description}
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-start relative">
          {/* Add colors or avatars for task owners */}
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-red hover:scale-110 hoverEffect"></div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-blue-500 -ml-4 hover:scale-110 hoverEffect"></div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-yellow -ml-4 hover:scale-110 hoverEffect"></div>
          <button
            className="mx-3 cursor-pointer"
            onClick={() => setShowCardMembers(!showCardMembers)}
          >
            {showCardMembers ? (
              <LuChevronUp size={20} />
            ) : (
              <LuChevronDown size={20} />
            )}
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-zinc-300">
          {createdAt.toString()}
        </p>
      </div>

      {/* card member list */}
      {showCardMembers && (
        <div className="absolute top-full left-5 bg-black/70 max-w-[330px] text-white h-fit min-w-60  flex flex-col items-center justify-between rounded-sm -mt-2 dark:bg-white dark:text-black z-10">
          <div className="flex items-start gap-2 justify-between w-full hover:bg-black/10 p-2">
            <div className="h-12 w-12 rounded-full bg-red"></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg">Mohammad</h4>
              <p className="truncate">mohammadalirezaie081@gmail.com</p>
            </div>
          </div>

          {/* adding new member button */}
          <button
            className="w-full mt-2 cursor-pointer py-2 dark:bg-zinc-300 bg-black/50 rounded-b-sm font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            Add new member
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoView;
