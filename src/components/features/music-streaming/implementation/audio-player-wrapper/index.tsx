"use client";

import dynamic from "next/dynamic";

export const AudioPlayerWrapper = dynamic(
  () =>
    import("@/components/features/music-streaming/implementation/audio-player"),
  {
    ssr: false,
  }
);
