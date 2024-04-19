import { createStore } from "zustand/vanilla";

export type AudioPlayerInitState = {
  isPlayerInitialized: boolean;
};

export type AudioPlayerInitActions = {
  setIsPlayerInitialized: (init: boolean) => void;
};

export type AudioPlayerInitStore = AudioPlayerInitState &
  AudioPlayerInitActions;

const initialAudioPlayerState: AudioPlayerInitState = {
  isPlayerInitialized: false,
};

export const createAudioPlayerStore = (
  initialState: AudioPlayerInitState = initialAudioPlayerState
) => {
  return createStore<AudioPlayerInitStore>()((set) => ({
    ...initialState,
    setIsPlayerInitialized: (init) =>
      set(() => ({ isPlayerInitialized: init })),
  }));
};
