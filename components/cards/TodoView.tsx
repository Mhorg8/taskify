"use client";
import React, { useState } from "react";
import { LuCheck } from "react-icons/lu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Task {
  id: number;
  title: string;
}

interface Props {
  task: Task;
}

const TodoView = ({ task }: Props) => {
  const [inProgress, setInProgress] = useState<Task[]>([]);

  const { id, title } = task;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function onDrag(e: React.DragEvent) {
    e.preventDefault();
  }

  function dragEnd() {
    setInProgress((prev) => [...prev, task]);
  }

  return (
    <div
      onDrag={(e) => onDrag(e)}
      onDragEnd={() => dragEnd()}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-full h-[200px] mt-3 border border-zinc-200 flex flex-col items-start justify-between hover:bg-zinc-200/80 hoverEffect py-5 px-4"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className=" line-clamp-1 text-lg md:text-lg lg:text-2xl font-bold flex-1">
          {title}
        </h3>
        <button className="cursor-pointer">
          <LuCheck size={24} />
        </button>
      </div>
      <p className="mb-3 lg:mb-0  text-start line-clamp-2 text-sm md:text-base mt-1 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
        nesciunt esse cupiditate, quod rerum!
      </p>
      <div className="flex items-center justify-baseline w-full">
        <div className="flex-1 flex item-center justify-start relative">
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-red hover:scale-110 hoverEffect"></div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer bg-blue-500 -ml-4 hover:scale-110 hoverEffect"></div>
          <div className="w-8 h-8 lg:w-12 lg:h-12  rounded-full cursor-pointer bg-yellow -ml-4 hover:scale-110 hoverEffect"></div>
        </div>
        <p className="text-sm text-gray-600">12:00PM</p>
      </div>
    </div>
  );
};

export default TodoView;
