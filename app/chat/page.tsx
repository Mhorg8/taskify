import Chat from "@/components/chat/Chat";
import Sidebar from "@/components/chat/Sidebar";
import React from "react";

const ChatPage = () => {
  return (
    <div className="h-[calc(100dvh-70px)] grid grid-cols-12">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default ChatPage;
