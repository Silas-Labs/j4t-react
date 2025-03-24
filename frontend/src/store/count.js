import { create } from "zustand";

export const useCount = create((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () =>
    set(() => ({
      count: 0,
    })),
}));
