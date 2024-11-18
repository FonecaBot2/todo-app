import dayjs from "dayjs";
import { create } from "zustand";

type TimeStore = {
  currentTime: string;
  fetchTime: () => void;
};

export const useTimeStore = create<TimeStore>((set) => ({
  currentTime: dayjs().locale("es").format("dddd, D MMMM YYYY"),
  fetchTime: () => {
    const localTime = dayjs().locale("es").format("dddd, D MMMM YYYY");
    set({ currentTime: localTime });
  },
}));
