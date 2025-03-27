import { create } from "zustand";
import { fetchFixtures } from "../services";

export const useFixtures = create((set) => ({
  fixtures: [],
  error: "",
  fetchFixtures: async (state) => {
    try {
      const data = await fetchFixtures();
      set({ fixtures: data });
      localStorage.setItem("fixtures", JSON.stringify(state.fixtures));
    } catch (err) {
      set({ error: err.Error });
      set({ fixtures: localStorage.parse(localStorage.getItem("fixtures")) });
    }
  },
}));
