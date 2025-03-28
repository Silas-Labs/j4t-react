import { create } from "zustand";
import { fetchNews } from "../services";

export const useNews = create((set) => ({
  news: [],
  error: "",
  fetchNews: () => async () => {
    try {
      const response = await fetchNews();
      if (!response.ok) {
        throw new Error("Network error while fetching news");
      }
      set({ news: response });
    } catch (error) {
      set({ error: error.Error() });
    }
  },
}));
