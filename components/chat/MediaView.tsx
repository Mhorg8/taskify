import Image from "next/image";
import React from "react";
import { LuDownload } from "react-icons/lu";

const MediaView = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
      <div className="col-span-1 w-full h-32 relative overflow-hidden ">
        <Image
          src="/profile.jpg"
          alt=""
          fill
          sizes="fill"
          className="hover:scale-105 hoverEffect object-cover"
        />

        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-500/40 p-2 rounded-full">
          <LuDownload size={24} />
        </button>
      </div>
    </div>
  );
};

export default MediaView;
