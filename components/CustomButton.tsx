import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  type?: "submit" | "button";
  children?: ReactNode;
  text: string;
  click?: () => void;
  className?: string;
  bgColor?: string;
  hover?: string;
  link?: boolean;
  path?: string;
}

const CustomButton = ({
  text,
  children,
  click,
  className,
  link,
  path,
  bgColor,
  hover,
  type,
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
        type={type}
        onClick={click}
        className={`${className}  dark:text-black dark:hover:bg-white/80 text-[#fff] px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-black/50 hoverEffect `}
      >
        {text}
        {children}
      </button>
    );
  }
};

export default CustomButton;
