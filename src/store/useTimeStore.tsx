import { create } from "zustand";

type TimeStore = {
  currentTime: string;
  fetchTime: () => void;
};

export const useTimeStore = create<TimeStore>((set) => ({
  currentTime: "",
  fetchTime: async () => {
    try {
      const response = await fetch(
        "http://worldtimeapi.org/api/timezone/Europe/London",
      );
      const data = await response.json();
      set({ currentTime: data.datetime });
    } catch (error) {
      console.error("Error fetching time:", error);
    }
  },
}));
