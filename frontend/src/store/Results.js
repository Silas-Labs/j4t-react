import { create } from "zustand";
import { ApiErrors, fetchResults } from "../services";

export const useResults = create((set) => ({
  results: [],
  loading: false,
  error: {},
  loadResults: async () => {
    try {
      set({ loading: true });
      const data = await fetchResults();
      set({ results: data });
      set({ loading: false });
    } catch (err) {
      const errResponse = ApiErrors(err);
      set({ loading: false });
      set({ error: errResponse });
    }
  },
}));
