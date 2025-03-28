import { create } from "zustand";
import { ApiErrors, fetchPlayers } from "../services";

export const usePlayers = create((set) => ({
  players: [],
  loadPlayers: async () => {
    set({ players: JSON.parse(localStorage.getItem("players")) });
    try {
      const { data } = await fetchPlayers();
      set({ players: data });
      localStorage.setItem("players", JSON.stringify(data));
    } catch (error) {
      ApiErrors(error);
    }
  },
}));
