"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious, MdOutlineClose } from "react-icons/md";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { TfiLoop, TfiControlShuffle } from "react-icons/tfi";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useLocalStorage } from "@uidotdev/usehooks";
import { SONG_LIST } from "@/lib/constants/song-list";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ActionLoader from "@/components/loaders/action-loader";
import { AvatarImage } from "@radix-ui/react-avatar";
import AudioSlider from "./audio-slider";
import { useAudioPlayerInit } from "@/components/providers/audio-player-init-provider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Route } from "next";

const AudioPlayer = () => {
  const [shuffle, setShuffle] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const pathName = usePathname();
  const [audioId, setAudioId] = useLocalStorage<string | null>(
    "current_audio_id",
    null
  );
  const [muted, setMuted] = useLocalStorage<boolean>("muted", false);
  const [audioVolume, setAudioVolume] = useLocalStorage<number>("volume", 1);
  const { isPlayerInitialized, setIsPlayerInitialized } = useAudioPlayerInit(
    (state) => state
  );
  const {
    load,
    playing,
    togglePlayPause,
    isLoading,
    loop,
    looping,
    mute,
    setVolume,
    stop,
  } = useGlobalAudioPlayer();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentMusicObject = SONG_LIST.find((song) => song.id === audioId);

  // update footer bottom margin based on whether the audio player needs to be shown
  useEffect(() => {
    const footerContainer = document.getElementById("site_footer");
    if (footerContainer) {
      footerContainer.style.marginBottom = currentMusicObject ? "80px" : "";
    }
  }, [currentMusicObject]);

  // update desktop explanation bottom margin if the audio player is initiated
  useEffect(() => {
    const desktopExplanation = document.getElementById("desktop_explanation");
    if (desktopExplanation && currentMusicObject) {
      desktopExplanation.setAttribute(
        "style",
        `height: ${window.innerHeight - 240}px`
      );
    }

    return () => {
      desktopExplanation?.removeAttribute("style");
    };
  }, [currentMusicObject, pathName]);

  useEffect(() => {
    const audioExists = SONG_LIST.find((song) => song.id === audioId)?.id;
    if (audioExists && isPlayerInitialized) {
      const songName = SONG_LIST.find((song) => song.id === audioId)?.name;
      if (songName) document.title = songName;
      load(`/assets/audio/${audioId}.mp3`, {
        autoplay: true,
        html5: true,
        initialMute: muted,
        onend: () => setAudioEnded(true),
        initialVolume: audioVolume,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioId, isPlayerInitialized, load]);

  useEffect(() => {
    audioEnded && onEndHandler();
    setAudioEnded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioEnded]);

  const handlePlayPause = () => {
    isPlayerInitialized ? togglePlayPause() : setIsPlayerInitialized(true);
  };

  const currentAudioIndex = SONG_LIST.findIndex((song) => song.id === audioId);

  const previous = () => {
    if (!isPlayerInitialized) setIsPlayerInitialized(true);
    let index = currentAudioIndex;
    if (shuffle) {
      index = Math.floor(Math.random() * SONG_LIST.length);
    } else {
      index = currentAudioIndex - 1;
    }
    const audioId = SONG_LIST.at(index)?.id;
    audioId && setAudioId(audioId);
  };

  const next = () => {
    if (!isPlayerInitialized) setIsPlayerInitialized(true);
    let index = currentAudioIndex;
    if (shuffle) {
      index = Math.floor(Math.random() * SONG_LIST.length);
    } else {
      index = currentAudioIndex + 1;
    }
    const audioId = SONG_LIST.at(index)?.id;
    audioId && setAudioId(audioId);
  };

  const onEndHandler = () => {
    if (!looping) {
      let index = currentAudioIndex;
      index = shuffle
        ? Math.floor(Math.random() * SONG_LIST.length)
        : currentAudioIndex < SONG_LIST.length - 1
        ? currentAudioIndex + 1
        : 0;
      const audioId = SONG_LIST.at(index)?.id;
      audioId && setAudioId(audioId);
    }
  };

  return currentMusicObject ? (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center justify-between space-x-[20px] border-t p-[16px]",
        "fixed w-[100%] bottom-[0px] mx-auto right-0 left-0 z-10 bg-background"
      )}
    >
      <Link
        href={`/features/music-streaming#${audioId}` as Route}
        className="flex items-center rounded-[8px] space-x-[12px] cursor-pointer group"
      >
        <Avatar className="border rounded-[8px]">
          <AvatarImage
            src={currentMusicObject.poster}
            className="object-cover"
          />
          <AvatarFallback className="rounded-[4px]"></AvatarFallback>
        </Avatar>
        <div className="text-[12px] pr-[6px] max-w-[100px]">
          <p className="font-medium truncate group-hover:underline">
            {currentMusicObject.name}
          </p>
          <p className="text-[10px] text-muted-foreground truncate group-hover:underline">
            {currentMusicObject.artists.map((artist, index) => (
              <span key={artist}>
                {artist +
                  (index !== currentMusicObject.artists.length - 1
                    ? " & "
                    : "")}
              </span>
            ))}
          </p>
        </div>
      </Link>
      <div className="space-x-[4px] flex items-center">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="hidden xxxs:flex"
                variant="ghost"
                onClick={previous}
                disabled={currentAudioIndex === 0}
              >
                <MdSkipPrevious className="text-[24px]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Previous</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" onClick={handlePlayPause}>
                {isLoading ? (
                  <ActionLoader />
                ) : playing ? (
                  <IoMdPause className="text-[18px]" />
                ) : (
                  <IoMdPlay className="text-[18px]" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isLoading ? "Loading" : playing ? "Pause" : "Play"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="hidden xxxs:flex"
                variant="ghost"
                onClick={next}
                disabled={currentAudioIndex === SONG_LIST.length - 1}
              >
                <MdSkipNext className="text-[24px]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Next</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <AudioSlider key={currentMusicObject.id} />

      <div className="space-x-[4px] hidden md:flex items-center">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => loop(!looping)}
              >
                <TfiLoop
                  className={cn("text-[18px]", looping && "text-primary")}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {looping ? "Looping" : "Loop current song"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShuffle(!shuffle)}
              >
                <TfiControlShuffle
                  className={cn("text-[18px]", shuffle && "text-primary")}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Shuffle</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="hidden md:flex items-center space-x-[8px]">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  mute(!muted);
                  setMuted(!muted);
                }}
              >
                {muted ? (
                  <MdVolumeOff className="text-[22px] text-foreground/50" />
                ) : (
                  <MdVolumeUp className="text-[22px]" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{muted ? "Unmute" : "Mute"}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Slider
          value={[audioVolume * 100]}
          max={100}
          step={1}
          onValueChange={([values]) => {
            setVolume(values / 100);
            setAudioVolume(values / 100);
            if (muted) {
              mute(false);
              setMuted(false);
            }
          }}
          className="w-[80px] h-[4px]"
        />
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setAudioId(null);
                stop();
              }}
            >
              <MdOutlineClose />
            </Button>
          </TooltipTrigger>
          <TooltipContent collisionPadding={28}>Close</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ) : null;
};

export default AudioPlayer;
