import { Slider } from "@/components/ui/slider";
import { formatDuration } from "@/lib/utils/misc";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const AudioSlider = () => {
  const [position, setPosition] = useState<number>(0);
  const { getPosition, duration, seek, playing } = useGlobalAudioPlayer();
  const frameRef = useRef<number>();

  useEffect(() => {
    getPosition && setPosition(getPosition());
  }, [getPosition]);

  useEffect(() => {
    const animate = () => {
      setPosition(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  return (
    <div className="sm:items-center justify-center sm:space-x-[8px] sm:grow hidden sm:flex">
      <span className="w-[48px]">
        {formatDuration(position, position > 3600 ? "hh:mm:ss" : "mm:ss")}
      </span>
      <Slider
        disabled={!playing}
        value={[position]}
        max={duration}
        step={1}
        onValueChange={([values]) => {
          setPosition(values);
          seek(values);
        }}
        className="w-[80%] h-[4px]"
      />
      <span className="w-[48px]">
        {formatDuration(duration, duration > 3600 ? "hh:mm:ss" : "mm:ss")}
      </span>
    </div>
  );
};

export default AudioSlider;
