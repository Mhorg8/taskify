import React from "react";
import { LuSend } from "react-icons/lu";
import { IoIosMore, IoIosAttach } from "react-icons/io";
const Chat = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 h-full bg-zinc-200 dark:bg-zinc-600/20 flex items-center justify-center ">
      <div className="bg-[#fff] w-[80%] h-[85dvh] rounded-xl flex flex-col shadow-sm">
        <div className="flex-1 mb-5 px-5 pt-5 flex flex-col-reverse gap-3">
          {/* is sender true */}
          <div className="flex items-center justify-start w-full gap-2">
            <div className="w-14 h-14 rounded-full bg-red "></div>
            <div className="bg-stone-200 min-w-[100px] px-3 py-2 rounded-sm">
              <div className="flex items-center w-full justify-between">
                <h5 className="font-semibold capitalize text-end">mohammad</h5>
                <IoIosMore cursor="pointer" />
              </div>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                quo?
              </p>
              <p className="text-xs text-end">20:10</p>
            </div>
          </div>
          {/* is sender false */}
          <div className="flex items-center justify-end w-full gap-2">
            <div className="w-14 h-14 rounded-full bg-red order-2"></div>
            <div className="bg-stone-200 min-w-[100px] px-3 py-2 rounded-sm">
              <div className="flex items-center w-full justify-between">
                <IoIosMore cursor="pointer" />
                <h5 className="font-semibold capitalize text-end">mohammad</h5>
              </div>
              <p className="text-sm text-end">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                quo?
              </p>
              <p className="text-xs">20:10</p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Message"
            className="bg-zinc-300 w-full py-3 px-4 rounded-b-xl"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-1 space-x-2">
            <button className="hover:bg-red/60 hover:text-white p-2.5 text-black rounded-full hover:scale-110 hoverEffect">
              <IoIosAttach size={20} cursor={"pointer"} />
            </button>
            <button className=" bg-red p-2.5 text-white rounded-full hover:scale-110 hoverEffect">
              <LuSend size={20} cursor={"pointer"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
