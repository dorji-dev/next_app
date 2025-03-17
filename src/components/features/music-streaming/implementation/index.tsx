import { SONG_LIST } from "@/lib/constants/song-list";
import { AudioCardWrapper } from "./audio-card-wrapper";

const MusicStreamingImplementation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[12px] sm:gap-x-[24px] gap-y-[36px]">
      {SONG_LIST.map((song) => (
        <AudioCardWrapper key={song.id} song={song} />
      ))}
    </div>
  );
};

export default MusicStreamingImplementation;
