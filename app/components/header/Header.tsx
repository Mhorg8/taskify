import Link from "next/link";
import React from "react";
import ActionView from "./ActionView";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="py-5 shadow-sm ">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-3xl md:text-4xl font-bold">
          Task<span className="text-red-400">Pro</span>
        </Link>

        {/* MENU */}
        <div>
          <Menu />
        </div>

        {/* ACTIONS */}
        <ActionView />
      </div>
    </div>
  );
};

export default Header;
