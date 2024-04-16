"use client";

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

export const Library = () => {
  const onClick = () => {};

  return (
    // Renders below the Sidebar's Home & Search label.
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
            {/* Library of songs */}
          <TbPlaylist className="text-neutral-400" size={25} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        {/* Can add new song via upload */}
        <AiOutlinePlus
          onClick={onClick}
          size={25}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};
