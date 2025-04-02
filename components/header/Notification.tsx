import { Notification as NotificationType } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  notif: NotificationType;
}

const Notification = ({ notif }: Props) => {
  return (
    <div
      className="flex w-full gap-2 justify-between items-center border-b border-b-zinc-500/30 last:border-b-0 dark:bg-zinc-200
     px-3 py-2 cursor-pointer hoverEffect dark:hover:bg-zinc-300/30 last:rounded-b-sm first:rounded-t-sm hover:bg-red-300 "
    >
      <div className="w-12 h-12 rounded-full relative">
        <Image
          alt={notif.message}
          fill
          sizes="fill"
          className="object-cover rounded-full "
          src={notif.thumnail !== null ? notif.thumnail : "/profile.jpg"}
        />
      </div>
      <div className="flex-1">
        <h5 className="font-semibold capitalize">{notif.senderName}</h5>
        <div className="flex justify-between items-center gap-2 text-sm">
          <p className="dark:text-zinc-300">{notif.message}</p>
          <p className="text-xs">{notif.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
