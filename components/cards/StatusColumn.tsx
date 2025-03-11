"use client";
import React, { DragEvent } from "react";
import { LuPlus } from "react-icons/lu";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { changeTaskStatus } from "@/lib/redux/tasksSlice";
import TodoView from "./TodoView";
import DropArea from "./DropArea";
import { Column } from "@/types";

interface Props {
  column: Column;
}

const StatusColumn = ({ column }: Props) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(changeTaskStatus(column.status)); // Update task status when dropped
  };

  return (
    <div
      className={`overflow-y-scroll overflow-x-hidden border-t-8  ${column.borderColor}  container h-full relative`}
      onDragOver={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3 className="text-2xl font-bold text-center">{column.title}</h3>
      {column.status === "created" ? (
        <div className="w-full h-[200px] mt-3 border border-dashed border-zinc-400 flex items-center justify-center hover:bg-zinc-200/80 hoverEffect">
          <LuPlus size={38} cursor="pointer" />
        </div>
      ) : null}
      {tasks
        .filter((item) => item.status.toLowerCase() === column.status)
        .map((task) => (
          <div className="w-full " key={task.id}>
            <TodoView task={task} />
            <DropArea />
          </div>
        ))}
    </div>
  );
};

export default StatusColumn;
