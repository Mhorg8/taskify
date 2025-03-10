"use client";

const MoblieTabs = () => {
  return (
    <div className="flex items-center justify-between lg:hidden h-full">
      <div className="cards__header-tab border-t-8 border-blue">Created</div>
      <div className="cards__header-tab border-t-8 border-red">In Progress</div>
      <div className="cards__header-tab border-t-8 border-yellow">Finished</div>
    </div>
  );
};

export default MoblieTabs;
