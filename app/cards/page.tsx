"use client";
import MoblieTabs from "@/components/cards/MoblieTabs";
import TodoView from "@/components/cards/TodoView";
import React, { useState } from "react";

import StatusColumn from "@/components/cards/StatusColumn";
import { columns } from "@/constant";


const CardsPage = () => {
  return (
    <div className="h-[calc(100dvh-80px)] overflow-hidden">
      <MoblieTabs />
      {/* large screen container */}
      <div className="hidden lg:grid grid-cols-3 h-full">
        {columns.map((column) => {
          return <StatusColumn key={column.id} column={column} />;
        })}
      </div>
    </div>
  );
};

export default CardsPage;
