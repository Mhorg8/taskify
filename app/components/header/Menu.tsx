"use client";
import { HeaderLinks } from "@/app/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  customStyle?: string;
}

const Menu = ({ customStyle }: Props) => {
  const location = usePathname();

  return (
    <ul className={`${customStyle} flex items-center justify-center gap-4`}>
      {HeaderLinks.map((item) => (
        <Link
          className={`${
            item.link === location ? "underline" : ""
          } text-lg md:text-xl font-medium hover:underline hover:scale-110 hoverEffect`}
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
