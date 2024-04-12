"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious, MdOutlineClose } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { TfiLoop, TfiControlShuffle } from "react-icons/tfi";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useLocalStorage } from "@uidotdev/usehooks";
import { MUSIC_LIST } from "@/lib/constants/music-list";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ActionLoader from "@/components/loaders/action-loader";
import { AvatarImage } from "@radix-ui/react-avatar";
import AudioSlider from "./audio-slider";

const AudioPlayer = () => {
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
    stop,
  } = useGlobalAudioPlayer();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentMusicObject = MUSIC_LIST.find((music) => music.id === audioId);

  // update footer bottom margin based on whether the audio player needs to be shown
  useEffect(() => {
    const footerContainer = document.getElementById("site_footer");
    if (footerContainer) {
      footerContainer.style.marginBottom = currentMusicObject ? "80px" : "";
    }
  }, [currentMusicObject]);

  const handlePlayPause = () => {
    if (playing) {
      setPosition(getPosition());
      togglePlayPause();
    } else {
      if (getPosition() === 0) {
        const currentAudioIndex = MUSIC_LIST.findIndex(
          (music) => music.id === currentMusicObject?.id
        );
        const nextAudioId = MUSIC_LIST[currentAudioIndex + 1]?.id;
        load(`/assets/audio/${audioId}.mp3`, {
          html5: true,
          autoplay: true,
          initialMute: false,
          onend: () => onEndHandler(nextAudioId),
        });
        setPosition(0);
      } else {
        togglePlayPause();
      }
    }
  };

  const currentAudioIndex = MUSIC_LIST.findIndex(
    (music) => music.id === audioId
  );

  const previous = () => {
    const previousAudioId = MUSIC_LIST[currentAudioIndex - 1].id;
    const previousAudioIndex = MUSIC_LIST.findIndex(
      (music) => music.id === previousAudioId
    );
    const nextAudioId = MUSIC_LIST[previousAudioIndex + 1].id;
    load(`/assets/audio/${previousAudioId}.mp3`, {
      html5: true,
      autoplay: true,
      initialMute: false,
      onend: () => onEndHandler(nextAudioId),
    });
    setAudioId(previousAudioId);
  };

  const next = () => {
    const nextAudioId = MUSIC_LIST[currentAudioIndex + 1].id;
    const afterNextAudioId = MUSIC_LIST[currentAudioIndex + 2]?.id;
    load(`/assets/audio/${nextAudioId}.mp3`, {
      html5: true,
      autoplay: true,
      initialMute: false,
      onend: () => onEndHandler(afterNextAudioId),
    });
    setAudioId(nextAudioId);
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

  return currentMusicObject ? (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center justify-between space-x-[20px] border-t p-[16px]",
        "fixed w-[100%] bottom-[0px] mx-auto right-0 left-0 z-[99999] bg-background"
      )}
    >
      <div className="flex items-center rounded-[8px] space-x-[12px]">
        <Avatar className="border rounded-[8px]">
          <AvatarImage
            src={currentMusicObject.poster}
            className="object-cover"
          />
          <AvatarFallback className="rounded-[4px]"></AvatarFallback>
        </Avatar>
        <div className="text-[12px] pr-[6px] max-w-[100px]">
          <p className="font-medium truncate">{currentMusicObject.name}</p>
          <p className="text-[10px] text-muted-foreground truncate">
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
      </div>
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
            <TooltipContent>{playing ? "Pause" : "Play"}</TooltipContent>
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
                disabled={currentAudioIndex === MUSIC_LIST.length - 1}
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
            <TooltipContent>Loop</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <TfiControlShuffle className="text-[18px]" />
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
              <Button size="icon" variant="ghost">
                <HiSpeakerWave className="text-[18px]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Mute</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          min={50}
          className="w-[80px] h-[4px]"
        />
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
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
