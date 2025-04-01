import { create } from "zustand";
import { fetchFixtures } from "../services";
import { ApiErrors } from "../services";

export const useFixtures = create((set) => ({
  fixtures: [],
  error: {},
  lastUpdateTime: 0,
  loading: false,
  loadFixtures: async () => {
    try {
      set({ loading: true });
      const data = await fetchFixtures();
      set({ loading: false, fixtures: data });
      set({ lastUpdateTime: Date.now() });
      localStorage.setItem("fixtures", JSON.stringify(data));
    } catch (err) {
      const errorResponse = ApiErrors(err);
      console.log(errorResponse);
      set({ loading: false });
      set({ error: errorResponse });
    }
  },
}));
