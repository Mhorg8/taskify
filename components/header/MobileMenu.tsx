"use client";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { toggleSidebarStatus } from "@/lib/redux/theme";

const MobileMenu = () => {
  const animation = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  const dispatch = useAppDispatch();
  const sidebarStatus = useAppSelector((state) => state.theme.sidebarStatus);

  if (sidebarStatus) {
    return (
      <AnimatePresence>
        <motion.div
          exit={{ x: 200, opacity: 0 }}
          variants={animation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, stiffness: 110 }}
          className=" gap-3 absolute top-0 right-0 w-[70%] h-[100dvh] bg-gray z-50"
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <button
              onClick={() => dispatch(toggleSidebarStatus())}
              className="absolute top-10 right-10 cursor-pointer"
            >
              <IoCloseSharp size={28} />
            </button>
            <Menu customStyle="flex-col" />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
};

export default MobileMenu;
