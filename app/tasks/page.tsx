import TaskView from "@/components/TaskView";
import { tempTasks } from "@/constant";
import React from "react";

const TaskPage = () => {
  return (
    <div className="w-full h-full">
      {/* hero section */}
      <div className="w-full h-[100dvh]  md:h-[calc(100dvh-70px)] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          Assign task to each project you have.
        </h2>
        <p className="text-xl mt-6">
          Let&apos;s work together by assigning tasks to each project. This will
          help us better manage our projects and support the team as a whole.
        </p>
      </div>

      {/* cards list */}
      <div className="px-10">
        <h3 className="mb-10 text-4xl font-bold ">Card's list</h3>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tempTasks.map((task) => (
            <TaskView key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
