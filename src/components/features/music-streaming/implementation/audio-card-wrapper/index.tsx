"use client";

import dynamic from "next/dynamic";

export const AudioCardWrapper = dynamic(() => import("../audio-card"), {
  ssr: false,
});
