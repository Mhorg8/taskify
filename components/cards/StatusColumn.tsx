"use client";
import React, { DragEvent } from "react";
import { LuPlus } from "react-icons/lu";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { changeTaskStatus } from "@/lib/redux/tasksSlice";
import TodoView from "./TodoView";
import DropArea from "./DropArea";
import { Column, Task } from "@/types";
import { toggleOpenNewTaskModal } from "@/lib/redux/theme";
import axios from "axios";
import { toast } from "sonner";
import { updateCardStatus } from "@/hooks";

interface Props {
  column: Column;
  createTaskClassName?: string;
  tasks: Task[];
}

const StatusColumn = ({ column, createTaskClassName, tasks }: Props) => {
  const dispatch = useAppDispatch();
  const activeTask = useAppSelector((state) => state.tasks.draggedTask);

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (activeTask) {
      await updateCardStatus(column.id.toString(), activeTask.id.toString());
      dispatch(changeTaskStatus(column.status));
    }
  };

  return (
    <div
      className={`overflow-y-scroll overflow-x-hidden border-t-8  ${column.borderColor}  container h-full relative`}
      onDragOver={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
        {column.title}
      </h3>
      {column.status === "created" ? (
        <div
          className={`${createTaskClassName} w-full h-[200px] mt-3 border border-dashed border-zinc-400 flex items-center justify-center hover:bg-zinc-200/80 hoverEffect`}
        >
          <button onClick={() => dispatch(toggleOpenNewTaskModal())}>
            <LuPlus size={38} cursor="pointer" />
          </button>
        </div>
      ) : null}
      {tasks
        ? tasks
            .filter((item) => item.status.toLowerCase() === column.status)
            .map((task) => (
              <div className="w-full " key={task.id}>
                <TodoView item={task} />
                <DropArea />
              </div>
            ))
        : null}
    </div>
  );
};

export default StatusColumn;
