import { LuUser } from "react-icons/lu";
import CustomCollaps from "./CustomCollaps";
import { Task } from "@/types";
import TaskViewAction from "./TaskViewAction";

const TaskView = ({ task }: { task: Task }) => {
  return (
    <div className="w-full  h-fit dark:bg-zinc-500/80 bg-zinc-200 py-4 hover:scale-105 hover:shadow dark:hover:shadow-white hoverEffect">
      <div className=" px-7">
        <div className="flex items-center justify-between w-full text-black dark:text-white ">
          <h3 className="text-2xl font-semibold tracking-tight truncate flex-1">
            {task.task}
          </h3>
          <div className="text-lg flex items-center">
            <LuUser />
            <span>{task.users.length}</span>
          </div>
        </div>
        <h4 className="text-sm text-zinc-900 dark:text-white">{task.status}</h4>

        <div className="flex items-center justify-between">
          <div></div>
          <TaskViewAction taskId={task.id} />
        </div>
      </div>

      <CustomCollaps tasks={task.tasks} title={task.task} id={task.id} />
    </div>
  );
};

export default TaskView;
