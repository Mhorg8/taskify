"use client";
import React from "react";
import { LuMenu, LuCircleUserRound } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import { toggleSidebarStatus } from "@/app/lib/redux/theme";

const ActionView = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      <Link href="/">
        <LuCircleUserRound size={24} />
      </Link>

      <Link href="/">
        <IoNotificationsOutline size={24} />
      </Link>

      <button
        onClick={() => dispatch(toggleSidebarStatus())}
        className="md:hidden cursor-pointer "
      >
        <LuMenu size={24} />
      </button>
    </div>
  );
};

export default ActionView;
