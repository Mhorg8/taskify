"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserProfileView from "./UserProfileView";
import MediaView from "./MediaView";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<"users" | "media">("users");
  const tabs: ["media", "users"] = ["media", "users"];

  return (
    <div className="hidden md:block md:col-span-4 lg:col-span-3 h-full bg-zinc-300 dark:bg-zinc-600/30">
      {/* profile view */}
      <div className="bg-zinc-400 dark:bg-zinc-600/50 flex  flex-col items-center justify-center py-3">
        <div className="w-24 h-24 rounded-full bg-blue-500 cursor-pointer relative overflow-hidden">
          <Image
            src="/profile.jpg"
            fill
            sizes="fill"
            alt=""
            className="rounded-full object-cover hover:scale-110 hoverEffect "
          />
        </div>
        <h3 className="mt-3 text-xl font-semibold">Mohammad alirezaie</h3>
        <p className="text-sm text-zinc-900 dark:text-white">
          mohammadalirezaie081@gmail.com
        </p>
      </div>

      <div className="w-full flex items-center justify-between border-b border-b-zinc-600/40">
        {/* tabs */}
        {tabs.map((tab) => {
          return (
            <div
              key={tab}
              className={`${
                tab === activeTab
                  ? "bg-zinc-400/50 dark:bg-zinc-600/60"
                  : "bg-zinc-300 dark:bg-zinc-600/40"
              } flex-1 py-6 text-center cursor-pointer  dark:text-white`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>

      {/* media tab */}
      {activeTab === "media" && <MediaView />}

      {/* user tab */}
      {activeTab === "users" && (
        <div className="w-full ">
          <UserProfileView />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
