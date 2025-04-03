"use client";
import ProfileOverView from "@/components/profile/ProfileOverView";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleProfileDropdowm } from "@/lib/redux/theme";
import { useEffect } from "react";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(toggleProfileDropdowm(false));
  });
  return (
    <div className="h-[calc(100dvh-80px)] w-full">
      <div className="w-full grid grid-cols-12 h-full">
        <ProfileOverView />
        <div className="col-span-12 md:col-span-6 lg:col-span-9 w-full h-full bg-zinc-200">
          s
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
