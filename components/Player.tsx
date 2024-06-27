"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLaodSongURL from "@/hooks/useLoadSongURL";
import usePlayer from "@/hooks/usePlayer";
import { PlayerContent } from "./PlayerContent";
import { useEffect, useState } from "react";

export const Player = () => {
  const [volume, setVolume] = useState(1);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [oldVolume, setOldVolume] = useState(1);

  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songURL = useLaodSongURL(song!);

  useEffect(() => {
    if (isShuffle) {
      player.shuffle(player.unShuffledIds);
    } else {
      player.resetShuffle(player.unShuffledIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShuffle]);

  if (!song || !songURL || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent
        key={songURL}
        volume={volume}
        setVolume={setVolume}
        oldVolume={oldVolume}
        setOldVolume={setOldVolume}
        isLoop={isLoop}
        setIsLoop={setIsLoop}
        isShuffle={isShuffle}
        setIsShuffle={setIsShuffle}
        song={song}
        songURL={songURL}
      />
    </div>
  );
};
