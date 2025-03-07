import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  click?: () => void;
  className?: string;
  bgColor?: string;
  hover?: string;
  link?: boolean;
  path?: string;
}

const CustomButton = ({
  children,
  click,
  className,
  link,
  path,
  bgColor,
  hover,
}: Props) => {
  if (link) {
    return (
      <Link
        href={path ? path : "/"}
        className={(cn(className, bgColor, hover), "")}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={click}
        style={{ backgroundColor: bgColor ? bgColor : "#000" }}
        className={
          (cn("dark:bg-white  text-white px-5 py-2 rounded-md font-semibold cursor-pointer" ),className)  
        }
      >
        {children}
      </button>
    );
  }
};

export default CustomButton;
