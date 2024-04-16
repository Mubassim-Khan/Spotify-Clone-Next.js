import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  active,
}: SidebarItemProps) => {
  return (
    // Navigates between Home & Search and gives hover efect on active link 
    <Link
      href={href}
      className={twMerge(
        "w-full flex flex-row h-auto items-center gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        active && "text-white"
      )}>
      <Icon size={25} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};
