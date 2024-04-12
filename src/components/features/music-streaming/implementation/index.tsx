import { MUSIC_LIST } from "@/lib/constants/music-list";
import dynamic from "next/dynamic";

// 'use client' doesn't make the component fully client side rendered
// so need to disable pre-rendering since we are using local storage hook
const AudioCard = dynamic(() => import("./audio-card"), {
  ssr: false,
});

const MusicStreamingImplementation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[12px] sm:gap-x-[24px] gap-y-[36px]">
      {MUSIC_LIST.map((music) => (
        <AudioCard key={music.name} music={music} />
      ))}
    </div>
  );
};

export default MusicStreamingImplementation;
