"use client";

import { useEffect, useState } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AudioPlayer = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/audio/draksin-gyalmo.mp3");
    audio.load();
    setAudio(audio);
  }, []);

  return (
    <div className="flex items-center space-x-[20px] border rounded-full py-[6px] px-[8px] max-w-max">
      <div className="space-x-[4px]">
        <Button size="icon" variant="ghost">
          <TbPlayerTrackPrevFilled className="text-[18px]" />
        </Button>
        <Button size="icon" variant="ghost">
          <IoMdPlay className="text-[18px]" />
        </Button>
        <Button size="icon" variant="ghost">
          <TbPlayerTrackNextFilled className="text-[18px]" />
        </Button>
      </div>
      <div className="flex items-center bg-foreground/5 rounded-full p-[2px] space-x-[12px]">
        <Avatar className="border">
          <AvatarFallback>DJ</AvatarFallback>
        </Avatar>
        <div className="text-[10px]">
          <p className="font-medium">Battle symphony</p>
          <p className="">Linkin park</p>
        </div>
        <Button size="icon" variant="ghost">
          <BsThreeDots className="text-[18px]" />
        </Button>
      </div>
      <Button size="icon" variant="ghost">
        <HiSpeakerWave className="text-[18px]" />
      </Button>
    </div>
  );
};

export default AudioPlayer;
