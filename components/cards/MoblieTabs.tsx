"use client";

import TodoView from "./TodoView";

const MoblieTabs = () => {
  return (
    <div className="lg:hidden h-full relative">
      <div className="flex items-center w-full">
        <div className="cards__header-tab border-t-8 border-blue">Created</div>
        <div className="cards__header-tab border-t-8 border-red">
          In Progress
        </div>
        <div className="cards__header-tab border-t-8 border-yellow">
          Finished
        </div>
      </div>
      <div>
        {/* <TodoView /> */}
      </div>
    </div>
  );
};

export default MoblieTabs;
