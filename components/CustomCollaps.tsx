"use client";
import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { CardTask, Task } from "@/types";

interface CustomCollapsProps {
  tasks: CardTask[];
  id: string;
  title: string;
}

const CustomCollaps: React.FC<CustomCollapsProps> = ({ tasks, title, id }) => {
  const taskViewIsOpen = useAppSelector((state) => state.theme.taskViewIsOpen);

  return (
    <div className="px-7 mt-5 text-black">
      <AnimatePresence>
        {taskViewIsOpen === id.toString() && (
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
                className="flex items-center justify-between w-full border dark:bg-zinc-700 dark:text-white border-zinc-600 p-2 hover:bg-zinc-300 dark:hover:bg-white/80"
              >
                <p className="text-lg ">{task.task}</p>
                <Checkbox className="bg-[#fff] dark:bg-white p-2 " />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCollaps;
