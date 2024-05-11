import { Song } from "@/types/types_Song";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    // Can implement this condition for music player, if user is NOT SUBSCRIBED (but not willing to do so myself)
    
    // if (!subscription) {
    //   return subscribeModal.onOpen();
    // }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };
  return onPlay;
};

export default useOnPlay;
