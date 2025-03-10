"use client";
import MoblieTabs from "@/components/cards/MoblieTabs";
import TodoView from "@/components/cards/TodoView";
import React, { useState } from "react";
import { LuCheck, LuCheckCheck, LuPlus } from "react-icons/lu";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const CardsPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "mohammad hosein alirezaie" },
    { id: 2, title: "reza moradi abeda" },
    { id: 3, title: "mahdi karimi " },
    { id: 4, title: "fariba alirezaie" },
  ]);

  return (
    <div className="h-[calc(100dvh-80px)] overflow-hidden">
      <MoblieTabs />
      {/* large screen container */}
      <div className="hidden lg:grid grid-cols-3 h-full">
        <DndContext
          collisionDetection={closestCorners}
        >
          <div className="overflow-y-scroll overflow-x-hidden border-t-8 border-blue-500 container h-full relative">
            <h3 className="text-2xl font-bold text-center">Created</h3>
            {/* sample task view */}
            <div className="w-full h-[200px] mt-3 border border-dashed border-zinc-400 flex items-center justify-center hover:bg-zinc-200/80 hoverEffect">
              <LuPlus size={38} cursor="pointer" />
            </div>
            <div className="">
              <SortableContext
                items={tasks}
                strategy={verticalListSortingStrategy}
              >
                {tasks.map((task) => {
                  return <TodoView key={task.id} task={task} />;
                })}
              </SortableContext>
            </div>
          </div>
          <div className="flex justify-center text-center border-t-8 border-yellow container h-full ">
            <h3 className="text-2xl font-bold">In Progress</h3>
          </div>
          <div className="flex justify-center text-center border-t-8 border-red container h-full ">
            <h3 className="text-2xl font-bold">Finished</h3>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default CardsPage;
