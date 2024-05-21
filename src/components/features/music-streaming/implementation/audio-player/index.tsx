"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import {
  MdSkipNext,
  MdSkipPrevious,
  MdOutlineClose,
  MdArrowDropDown,
} from "react-icons/md";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CgController } from "react-icons/cg";
import { Button } from "@/components/ui/button";
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
import AudioLoop from "./audio-loop";
import AudioShuffle from "./audio-shuffle";
import AudioSound from "./audio-sound";
import clsx from "clsx";
import * as Accordion from "@radix-ui/react-accordion";

const AudioPlayer = () => {
  const [shuffle, setShuffle] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const [openMobileControls, setOpenMobileControls] = useState(false);
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
    if (footerContainer && currentMusicObject && containerRef.current) {
      footerContainer.style.marginBottom = "90px";
    } else {
      footerContainer?.removeAttribute("style");
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
      className={clsx(
        "fixed w-[100%] bottom-[0px] mx-auto right-0 left-0 z-20 bg-background"
      )}
    >
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="control">
          <Accordion.Trigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 right-0 mx-auto top-[-20px] md:hidden z-[1]"
              onClick={() => setOpenMobileControls(!openMobileControls)}
            >
              {openMobileControls ? (
                <MdArrowDropDown className="text-[24px]" />
              ) : (
                <CgController className="text-[16px]" />
              )}
            </Button>
          </Accordion.Trigger>
          <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-[12px] pb-[4px] pt-[24px] border-t md:hidden">
              <div className="flex space-x-[10px] items-center mb-[12px] sm:hidden">
                <AudioSlider key={currentMusicObject.id} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <AudioLoop
                    isLooping={looping}
                    onToggle={() => loop(!looping)}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    Loop
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[10px] text-muted-foreground">
                    Shuffle
                  </span>
                  <AudioShuffle
                    onShuffle={() => setShuffle(!shuffle)}
                    shuffle={shuffle}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <AudioSound
                  sliderClass="mr-[18px] w-[75%]"
                  toggleMute={() => {
                    mute(!muted);
                    setMuted(!muted);
                  }}
                  muted={muted}
                  audioVolume={audioVolume}
                  onSliderValueChange={([values]) => {
                    setVolume(values / 100);
                    setAudioVolume(values / 100);
                    if (muted) {
                      mute(false);
                      setMuted(false);
                    }
                  }}
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div
        className={clsx(
          "flex items-center justify-between space-x-[20px] p-[16px] relative md:border-t bg-background",
          !openMobileControls && "border-t"
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
                  aria-label="Previous song"
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
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={
                    isLoading ? "Loading" : playing ? "Pause" : "Play"
                  }
                  onClick={handlePlayPause}
                >
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
                  aria-label="Next song"
                >
                  <MdSkipNext className="text-[24px]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="sm:items-center justify-center sm:space-x-[8px] sm:grow hidden sm:flex">
          <AudioSlider key={currentMusicObject.id} />
        </div>

        <div className="space-x-[4px] hidden md:flex items-center">
          <AudioLoop isLooping={looping} onToggle={() => loop(!looping)} />
          <AudioShuffle
            onShuffle={() => setShuffle(!shuffle)}
            shuffle={shuffle}
          />
        </div>
        <div className="hidden md:flex items-center space-x-[8px]">
          <AudioSound
            toggleMute={() => {
              mute(!muted);
              setMuted(!muted);
            }}
            muted={muted}
            audioVolume={audioVolume}
            onSliderValueChange={([values]) => {
              setVolume(values / 100);
              setAudioVolume(values / 100);
              if (muted) {
                mute(false);
                setMuted(false);
              }
            }}
          />
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                aria-label="Close audio player"
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
    </div>
  ) : null;
};

export default AudioPlayer;
