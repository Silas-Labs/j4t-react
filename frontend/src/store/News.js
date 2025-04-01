import { create } from "zustand";
import { ApiErrors, fetchNews } from "../services";

export const useNews = create((set) => ({
  news: [],
  loadNews: async () => {
    try {
      const data = await fetchNews();
      set({ news: data });
      localStorage.setItem("news", JSON.stringify(data));
    } catch (error) {
      ApiErrors(error);
      const storedNews = JSON.parse(localStorage.getItem("news")) || [];
      set({ news: storedNews });
    }
  },
}));
