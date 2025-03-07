"use client";
import { HeaderLinks } from "@/app/constant";
import Link from "next/link";

import React from "react";

const Menu = () => {
  const location = window.location.pathname;

  return (
    <ul className="flex items-center justify-center gap-3">
      {HeaderLinks.map((item) => (
        <Link
          className={`${
            item.link === location ? "underline" : ""
          } text-lg md:text-xl font-medium hover:underline `}
          key={item.id}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
