import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { LuUserPlus } from "react-icons/lu";
import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  content: string;
  buttonClass?: string | null;
  contentClass?: string | null;
  click?: () => void;
}

const CustomTooltip = ({
  Icon,
  content,
  buttonClass,
  contentClass,
  click,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={click}
            className={
              buttonClass
                ? buttonClass
                : "p-2 flex items-center justify-center bg-black rounded-sm cursor-pointer text-white dark:bg-zinc-700 dark:text-white"
            }
          >
            <Icon size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent className="dark:bg-white bg-black">
          <p
            className={
              contentClass ? contentClass : "text-white dark:text-black"
            }
          >
            {content}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
