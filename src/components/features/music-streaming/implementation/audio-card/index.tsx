"use client";

import { Music } from "@/lib/types/misc";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { lightGrayBlurData } from "@/lib/utils/rgb-data-url";
import Image from "next/image";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { cn } from "@/lib/utils";
import ActionLoader from "@/components/loaders/action-loader";
import { useCallback, useEffect, useState } from "react";
import { MUSIC_LIST } from "@/lib/constants/music-list";

interface AudioCardProps {
  music: Music;
}

const AudioCard = ({
  music: { name, artists, id, poster },
}: AudioCardProps) => {
  const [position, setPosition] = useState<number>(0);
  const [audioId, setAudioId] = useLocalStorage<string | null>(
    "current_audio_id",
    null
  );
  const {
    load,
    playing,
    togglePlayPause,
    getPosition,
    isLoading,
    duration,
    loop,
    looping,
    mute,
    muted,
    volume,
    setVolume,
    seek,
    isReady,
  } = useGlobalAudioPlayer();

  const positionValue = getPosition();

  useEffect(() => {
    getPosition && setPosition(getPosition());
  }, [positionValue, getPosition]);

  const handleAudioPlayPause = () => {
    const audioIndex = MUSIC_LIST.findIndex((music) => music.id === id);
    const nextAudioId = MUSIC_LIST[audioIndex + 1]?.id;
    if (id === audioId) {
      if (playing) {
        setPosition(getPosition());
      } else {
        if (getPosition() === 0) {
          load(`/assets/audio/${id}.mp3`, {
            html5: true,
            autoplay: true,
            initialMute: false,
            onend: () => onEndHandler(nextAudioId),
          });
        } else {
          seek(position);
        }
      }
      togglePlayPause();
    } else {
      load(`/assets/audio/${id}.mp3`, {
        html5: true,
        autoplay: true,
        initialMute: false,
        onend: () => onEndHandler(nextAudioId),
      });
      setAudioId(id);
    }
  };

  const onEndHandler = (nextAudioId: string) => {
    if (!nextAudioId) {
      return;
    }
    // audio index of next audio index for recursive handling
    const currentAudioIndex = MUSIC_LIST.findIndex(
      (music) => music.id === nextAudioId
    );
    const nextEndAudioId = MUSIC_LIST[currentAudioIndex + 1]?.id;
    load(`/assets/audio/${nextAudioId}.mp3`, {
      html5: true,
      autoplay: true,
      initialMute: false,
      onend: () => onEndHandler(nextEndAudioId),
    });
    setAudioId(nextAudioId);
  };

  return (
    <div className="space-y-[12px]">
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
          onClick={handleAudioPlayPause}
          className={cn(
            "absolute inset-0 flex justify-center items-center group-hover:bg-black/50 transition-all duration-500",
            id === audioId ? "" : "opacity-0 group-hover:opacity-100"
          )}
        >
          {isLoading ? (
            <ActionLoader />
          ) : (
            <span className=" p-[10px] rounded-full bg-foreground/20 border">
              {id === audioId && playing ? (
                <IoMdPause className="text-[34px] text-background/80" />
              ) : (
                <IoMdPlay className="text-[34px] text-background/80" />
              )}
            </span>
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
