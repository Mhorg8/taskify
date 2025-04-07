"use client";
import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Checkbox } from "./ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleAddNewTask, toogleOpenTaskView } from "@/lib/redux/theme";
import { AnimatePresence, motion } from "framer-motion";
import { Task } from "@/types";

interface CustomCollapsProps {
  tasks: Task[];
  title: string;
  id: number | string;
}

const CustomCollaps: React.FC<CustomCollapsProps> = ({ tasks, title, id }) => {
  const taskViewIsOpen = useAppSelector((state) => state.theme.taskViewIsOpen);
  const dispatch = useAppDispatch();

  function openDropdown(id: number) {
    if (id === taskViewIsOpen) {
      dispatch(toogleOpenTaskView(null));
    } else {
      dispatch(toogleOpenTaskView(id));
    }
  }

  return (
    <div className="px-7 mt-5 text-black">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-lg font-medium">Total task ({tasks.length})</p>
        <button
          onClick={() => dispatch(toggleAddNewTask(true))}
          type="button"
          className="px-3 py-1 hover:bg-stone-300 hoverEffect"
        >
          New
        </button>
      </div>
      <div className="flex items-center justify-between w-full border border-zinc-600 p-2">
        <p className="text-lg ">{title}</p>
        <button
          type="button"
          onClick={() => openDropdown(id as number)}
          aria-expanded={taskViewIsOpen === id}
        >
          {taskViewIsOpen === id ? <LuChevronUp /> : <LuChevronDown />}
        </button>
      </div>

      <AnimatePresence>
        {taskViewIsOpen === id && (
          <motion.ul
            initial={{ display: "none", opacity: 0 }}
            animate={{ display: "block", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ display: "none", opacity: 0 }}
            className="mt-3 space-y-2"
          >
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between w-full border border-zinc-600 p-2 hover:bg-zinc-300 dark:hover:bg-white/80"
              >
                <p className="text-lg ">{task.task}</p>
                <Checkbox className="bg-white p-2" />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCollaps;
