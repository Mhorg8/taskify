"use client";
import MoblieTabs from "@/components/cards/MoblieTabs";
import TodoView from "@/components/cards/TodoView";
import React, { useState } from "react";

import StatusColumn from "@/components/cards/StatusColumn";
import { columns } from "@/constant";
import { useAppSelector } from "@/lib/redux/hooks";
import NewTaskModal from "@/components/cards/NewTaskModal";

const CardsPage = () => {
  const newTaskModalStatus = useAppSelector(
    (state) => state.theme.newTaskModal
  );

  return (
    <div className="h-[calc(100dvh-80px)] overflow-hidden relative">
      <MoblieTabs />
      {/* large screen container */}
      <div className="hidden lg:grid grid-cols-3 h-full">
        {columns.map((column) => {
          return <StatusColumn key={column.id} column={column} />;
        })}
      </div>

      {newTaskModalStatus && <NewTaskModal />}
    </div>
  );
};

export default CardsPage;
