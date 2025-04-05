
import ProfileOverView from "@/components/profile/ProfileOverView";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleProfileDropdowm } from "@/lib/redux/theme";
import CustomChart from "@/components/profile/CustomChart";
import { useEffect } from "react";
import ProfileCharts from "@/components/profile/ProfileCharts";

const ProfilePage = () => {

  return (
    <div className="h-[calc(100dvh-80px)] w-full">
      <div className="w-full grid grid-cols-12 h-full">
        <ProfileOverView />
        <ProfileCharts />
      </div>
    </div>
  );
};

export default ProfilePage;
