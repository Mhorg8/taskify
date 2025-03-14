import Image from "next/image";
import React from "react";

const UserProfileView = () => {
  return (
    <div className="flex items-start cursor-pointer  px-2 gap-2 w-full py-4 hover:bg-zinc-400/50  dark:hover:bg-zinc-600/60 border-b border-b-zinc-600/40 last:border-b-0 hoverEffect ">
      <div className=" w-16 h-16 md:w-20 md:h-20 relative">
        <Image
          src="/profile.jpg"
          alt=""
          fill
          sizes="fill"
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex-1 space-y-3 md:space-y-2">
        <h3 className="font-semibold md:text-xl">Mohammad</h3>
        <div className="flex items-center justify-between w-full">
          <p className="line-clamp-1 text-sm px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            quis!
          </p>
          <p className="text-sm">22:15</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
