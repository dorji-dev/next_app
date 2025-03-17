import { Slider } from "@/components/ui/slider";
import { formatDuration } from "@/lib/utils/misc";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const AudioSlider = () => {
  const [position, setPosition] = useState<number>(0);
  const { getPosition, duration, seek, playing } = useGlobalAudioPlayer();
  const frameRef = useRef<number>(undefined);

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
  }, [getPosition, duration]);

  return (
    <>
      <span className="min-w-[48px] text-center text-[12px] text-primary">
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
      <span className="min-w-[48px] text-center text-[12px]">
        {formatDuration(duration, duration > 3600 ? "hh:mm:ss" : "mm:ss")}
      </span>
    </>
  );
};

export default AudioSlider;
