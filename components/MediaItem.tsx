"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types_Song";
import Image from "next/image";

type MediaItemProps = {
  onClick?: (id: string) => void;
  data: Song;
};

export const MediaItem = ({ onClick, data }: MediaItemProps) => {
  const ImageURL = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

  return (
    <div
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
      onClick={handleClick}>
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={ImageURL || "images/liked.png"}
          fill
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};
