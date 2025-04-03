"use client";
import React, { useEffect, useState } from "react";
import { LuMenu, LuCircleUserRound, LuChevronDown } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  toggleDarkmood,
  toggleNotificationModal,
  toggleProfileDropdowm,
  toggleSidebarStatus,
} from "@/lib/redux/theme";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import { notifications } from "@/constant";
import Notification from "./Notification";

const ActionView = () => {
  const darkmood = useAppSelector((state) => state.theme.darkmood);
  const dispatch = useAppDispatch();
  const { setTheme } = useTheme();
  const { data: session } = useSession();

  useEffect;
  const { notificationModalStatus, profileDropdown } = useAppSelector(
    (state) => state.theme
  );

  function handleLogout() {
    signOut();
  }

  return (
    <div className="flex items-center gap-3 relative">
      {session ? (
        // ts-ignore
        <div className="relative">
          <button
            className="flex items-center gap-1 cursor-pointer z-20"
            onClick={() => dispatch(toggleProfileDropdowm(!profileDropdown))}
          >
            <span>{session.user?.username}</span> <LuChevronDown />
          </button>

          {profileDropdown && (
            <ul className="absolute flex flex-col top-full right-0 w-[150px] bg-zinc-200 dark:bg-zinc-600/60 rounded-sm z-50 ">
              <Link
                className="p-2 hover:bg-zinc-400 hoverEffect cursor-pointer rounded-t-sm hover:rounded-t-sm"
                href="profile"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-start hover:bg-zinc-400 hoverEffect cursor-pointer rounded-b-sm hover:rounded-b-sm"
              >
                Logout
              </button>
            </ul>
          )}
        </div>
      ) : (
        <Link href="/register">
          <LuCircleUserRound size={24} />
        </Link>
      )}
      {/* notification */}
      <div className="relative">
        <button onClick={() => dispatch(toggleNotificationModal())}>
          <IoNotificationsOutline size={24} />
        </button>
        <span className="absolute top-full right-0 bg-red rounded-full p-1"></span>
      </div>
      {/* darkmood toggler */}
      <div className="flex items-center gap-2">
        <Switch
          onCheckedChange={() => {
            dispatch(toggleDarkmood(darkmood === "dark" ? "light" : "dark"));
            setTheme(darkmood === "dark" ? "dark" : "light");
          }}
        />
        <Label>{darkmood === "dark" ? "Light" : "Dark"}</Label>
      </div>
      {/* sidebar toggler */}
      <button
        onClick={() => dispatch(toggleSidebarStatus())}
        className="md:hidden cursor-pointer "
      >
        <LuMenu size={24} />
      </button>

      {notificationModalStatus && (
        <div className="min-w-[300px] max-w-[380x] absolute top-full mt-6 right-3/4 z-50 bg-white dark:bg-zinc-600 shadow-md rounded-sm">
          {notifications.map((notif) => {
            return <Notification key={notif.id} notif={notif} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ActionView;
