"use client";
import { LuPlus } from "react-icons/lu";
import StatusColumn from "./StatusColumn";
import TodoView from "./TodoView";
import { columns } from "@/constant";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleOpenNewTaskModal } from "@/lib/redux/theme";
import { toggleActiveTabChange } from "@/lib/redux/tasksSlice";
import { Task } from "@/types";

const MoblieTabs = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.tasks.activeTab);
  const tasks = useAppSelector((state) => state.tasks.tasks);

  function getArrayLength() {
    const array = columns.filter((item) => item.status === activeTab);

    return array.length;
  }

  return (
    <div className="lg:hidden h-full relative">
      <div className="flex items-start w-full">
        {columns.map((column) => {
          return (
            <div
              onClick={() => dispatch(toggleActiveTabChange(column.status))}
              key={column.id}
              className={`${
                getArrayLength() <= 1 ? "text-black" : "text-gray-500"
              } flex-1 text-center border-t-8 py-3 ${
                column.borderColor
              } cursor-pointer`}
            >
              {column.title}
            </div>
          );
        })}
      </div>
      {activeTab === "created" && (
        <div className="w-[96%] mx-auto h-[200px] mt-3 border border-dashed border-zinc-400 flex items-center justify-center hover:bg-zinc-200/80 hoverEffect">
          <button onClick={() => dispatch(toggleOpenNewTaskModal())}>
            <LuPlus size={38} cursor="pointer" />
          </button>
        </div>
      )}

      <div>
        {tasks
          .filter((item) => item.status === activeTab)
          .map((task) => {
            return <TodoView task={task} key={task.id} />;
          })}
      </div>
    </div>
  );
};

export default MoblieTabs;
