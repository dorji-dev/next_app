"use client";

import { Song } from "@/lib/types/misc";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { lightGrayBlurData } from "@/lib/utils/rgb-data-url";
import Image from "next/image";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import ActionLoader from "@/components/loaders/action-loader";
import { useAudioPlayerInit } from "@/components/providers/audio-player-init-provider";
import PlayAnimation from "./play-animation";
import clsx from "clsx";

interface AudioCardProps {
  song: Song;
}

const AudioCard = ({ song: { name, artists, id, poster } }: AudioCardProps) => {
  const [audioId, setAudioId] = useLocalStorage<string | null>(
    "current_audio_id",
    null
  );
  const { isPlayerInitialized, setIsPlayerInitialized } = useAudioPlayerInit(
    (state) => state
  );
  const { playing, togglePlayPause, isLoading } = useGlobalAudioPlayer();

  const handlePlayPause = () => {
    if (isPlayerInitialized) {
      audioId === id ? togglePlayPause() : setAudioId(id);
    } else {
      setIsPlayerInitialized(true);
      setAudioId(id);
    }
  };

  return (
    <div className="space-y-[12px] scroll-mt-[80px]" id={id}>
      <div className="w-full h-0 pb-[100%] relative group  rounded-[10px] overflow-hidden">
        <Image
          src={poster}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={lightGrayBlurData}
          className="object-cover rounded-[10px] group-hover:scale-[1.1] transition-transform duration-500"
        />
        <button
          onClick={handlePlayPause}
          className={clsx(
            "absolute inset-0 flex flex-col justify-center items-center group-hover:bg-black/50 transition-all duration-500",
            id !== audioId && "opacity-0 group-hover:opacity-100",
            isLoading && id === audioId && "bg-black/80"
          )}
        >
          {id === audioId && isLoading ? (
            <ActionLoader />
          ) : (
            <span className="p-[10px] rounded-full bg-primary text-white">
              {id === audioId && playing ? (
                <IoMdPause className="text-[30px]" />
              ) : (
                <IoMdPlay className="text-[30px] relative left-[2px]" />
              )}
            </span>
          )}
          {id === audioId && playing && (
            <PlayAnimation className="absolute bottom-[4px] xxs:bottom-[16px]" />
          )}
        </button>
      </div>
      <div>
        <p>{name}</p>
        <p className="text-[12px] text-muted-foreground">
          {artists.map((artist, index) => (
            <span key={artist}>
              {artist + (index !== artists.length - 1 ? " & " : "")}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AudioCard;
