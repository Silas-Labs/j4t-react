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
      const now = Date.now();
      set(() => ({
        loading: false,
        fixtures: data,
        lastUpdateTime: now,
        error: {
          success: true,
          message: `Last synced at: ${new Date(now)
            .getHours()
            .toString()
            .padStart(2, "0")}:${new Date(now)
            .getMinutes()
            .toString()
            .padStart(2, "0")}Hrs`,
        },
      }));
      localStorage.setItem("fixtures", JSON.stringify(data));
    } catch (err) {
      const { success, message } = ApiErrors(err);
      set({ loading: false, error: { success, message } });
    }
  },
}));
