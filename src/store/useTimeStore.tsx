import { create } from "zustand";

type TimeStore = {
  currentTime: string;
  fetchTime: () => void;
};

export const useTimeStore = create<TimeStore>((set) => ({
  currentTime: new Date().toLocaleString(),
  fetchTime: () => {
    const localTime = new Date().toLocaleString(); 
    set({ currentTime: localTime });
  },
}));
