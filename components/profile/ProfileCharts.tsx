import axios from "axios";
import CustomChart from "./CustomChart";
import { auth } from "@/auth";
import { headers } from "next/headers";

const ProfileCharts = async () => {
  const session = await auth();

  const confiq = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (session?.user) {
    const userCards = await axios.post(
      "http://localhost:3000/api/getTasks",
      { id: session.user.id },
      confiq
    );
    console.log(userCards);
  }

  return (
    <div
      className="col-span-12 md:col-span-6 lg:col-span-9 w-full h-full bg-zinc-200
   dark:bg-zinc-600/70 flex items-start py-7 justify-start container"
    >
      <div>
        <CustomChart />
      </div>
    </div>
  );
};

export default ProfileCharts;
