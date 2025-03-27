import { create } from "zustand";
import { fetchClubs } from "../services";

export const useClubs = create((set) => ({
  clubs: [],
  addClub: (club) => {
    set((state) => ({ clubs: [...state.clubs, club] }));
  },
  fetchClubs: async () => {
    try {
      return await fetchClubs();
    } catch (error) {
      console.error(error);
    }
  },
}));
