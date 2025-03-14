import Sidebar from "@/components/chat/Sidebar";
import React from "react";

const ChatPage = () => {
  return (
    <div className="h-[calc(100dvh-70px)] grid grid-cols-12">
      <Sidebar />
      <div className="col-span-12 md:col-span-8 lg:col-span-9 h-full bg-zinc-200 dark:bg-zinc-600/20 ">
        chat view
      </div>
    </div>
  );
};

export default ChatPage;
