"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialIcons } from "@/constant";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex items-center mt-3 gap-3">
      {socialIcons.map((item) => {
        return (
          <TooltipProvider key={item.id}>
            <Tooltip>
              <TooltipTrigger className="hover:scale-110 hoverEffect">
                <Link href={item.href}>
                  <item.Icon size={28} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default SocialLinks;
