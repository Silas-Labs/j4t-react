import { create } from "zustand";
import { ApiErrors, fetchClubs } from "../services";

export const useClubs = create((set) => ({
  clubs: [],
  error: {},
  loading: false,
  addClub: (club) => {
    set((state) => ({ clubs: [...state.clubs, club] }));
  },
  loadClubs: async () => {
    try {
      set({ loading: true });
      const data = await fetchClubs();
      set({ loading: false, clubs: data });
      set({ clubs: data });
      localStorage.setItem("clubs", JSON.stringify(data));
    } catch (error) {
      set({ loading: false });
      const errorResponse = ApiErrors(error);
      set({ error: errorResponse });
      set({ clubs: JSON.parse(localStorage.getItem("clubs")) || [] });
    }
  },
}));
