"use client";
import React, { DragEvent, useState } from "react";

const DropArea = () => {
  const [showView, setShowView] = useState(false);

  return (
    <div
      className={
        showView
          ? "bg-zinc-300 h-6 w-full opacity-100 transition-all duration-300 mt-3 rounded-xl px-3"
          : "opacity-0 hidden"
      }
      onDragEnter={() => setShowView(true)}
      onDragLeave={() => setShowView(false)}
      onDrop={(e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setShowView(false);
      }}
      onDragOver={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
    >
      Drop Here
    </div>
  );
};

export default DropArea;
