import React from "react";
import { LuUser } from "react-icons/lu";
import CustomCollaps from "./CustomCollaps";
import { tempTasks } from "@/constant";
import { Task } from "@/types";

const TaskView = ({ task }: { task: Task }) => {
  return (
    <div className="w-full min-h-[200px] h-fit dark:bg-[#fff] bg-zinc-200 py-4 hover:scale-105 hover:shadow dark:hover:shadow-white hoverEffect">
      <div className=" px-7">
        <div className="flex items-center justify-between w-full text-black dark:text-black ">
          <h3 className="text-2xl font-semibold tracking-tight truncate flex-1">
            {task.task}
          </h3>
          <div className="text-lg flex items-center">
            <LuUser />
            <span>{task.users.length}</span>
          </div>
        </div>
        <h4 className="text-sm text-zinc-900">{task.status}</h4>
      </div>

      {/* <CustomCollaps tasks={tasks} title={task.task} id={task.id} />   */}
    </div>
  );
};

export default TaskView;
