import { create } from "zustand";

export const useClubs = create((set) => ({
  clubs: [],
  addClub: (club) => {
    set((state) => ({ clubs: [...state.clubs, club] }));
  },
}));
