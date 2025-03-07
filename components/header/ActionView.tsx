"use client";
import React from "react";
import { LuMenu, LuCircleUserRound } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleDarkmood, toggleSidebarStatus } from "@/lib/redux/theme";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ActionView = () => {
  const darkmood = useAppSelector((state) => state.theme.darkmood);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      <Link href="/register">
        <LuCircleUserRound size={24} />
      </Link>

      <div className="relative">
        <Link href="/">
          <IoNotificationsOutline size={24} />
        </Link>
        <span className="absolute top-full right-0 bg-red rounded-full p-1"></span>
      </div>
      <div className="flex items-center gap-2">
        <Switch onCheckedChange={() => dispatch(toggleDarkmood())} />
        <Label>{darkmood ? "Night" : "Dark"}</Label>
      </div>
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
