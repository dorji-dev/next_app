"use client";

import {
  AudioPlayerInitStore,
  createAudioPlayerStore,
} from "@/stores/audio-player-init-store";
import { createContext, useRef, useContext, PropsWithChildren } from "react";
import { type StoreApi, useStore } from "zustand";

export const AudioPlayerInitContext =
  createContext<StoreApi<AudioPlayerInitStore> | null>(null);

export const AudioPlayerInitProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreApi<AudioPlayerInitStore>>();
  if (!storeRef.current) {
    storeRef.current = createAudioPlayerStore();
  }

  return (
    <AudioPlayerInitContext.Provider value={storeRef.current}>
      {children}
    </AudioPlayerInitContext.Provider>
  );
};

export const useAudioPlayerInit = <T,>(
  selector: (store: AudioPlayerInitStore) => T
): T => {
  const audioPlayerInitContext = useContext(AudioPlayerInitContext);

  if (!audioPlayerInitContext) {
    throw new Error(
      `useAudioPlayerInit must be use within AudioPlayerInitProvider`
    );
  }

  return useStore(audioPlayerInitContext, selector);
};
