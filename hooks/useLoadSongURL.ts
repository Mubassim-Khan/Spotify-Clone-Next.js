import { Song } from "@/types/types_Song";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useLoadImage from "./useLoadImage";

const useLaodSongURL = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLaodSongURL;
