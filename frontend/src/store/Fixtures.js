import { create } from "zustand";
import { fetchFixtures } from "../services";
import { ApiErrors } from "../services";

export const useFixtures = create((set) => ({
  fixtures: [],
  error: "",
  loading: false,
  loadFixtures: async () => {
    try {
      set({ loading: true });
      const data = await fetchFixtures();
      set({ loading: false, fixtures: data });
      localStorage.setItem("fixtures", JSON.stringify(data));
    } catch (err) {
      ApiErrors(err);
      set({ loading: false });
    }
  },
}));
