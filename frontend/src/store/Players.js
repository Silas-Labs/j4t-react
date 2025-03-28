import { create } from "zustand";
import { ApiErrors, fetchPlayers } from "../services";

export const usePlayers = create((set, get) => ({
  players: [],
  loadPlayers: async () => {
    // set({ players: JSON.parse(localStorage.getItem("players")) });
    try {
      const data = await fetchPlayers();
      set({ players: data });
      localStorage.setItem("players", JSON.stringify(data));
    } catch (error) {
      ApiErrors(error);
    }
  },
  searchPlayer: (player) => {
    const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    if (!player.trim()) {
      set({ players: storedPlayers }); // ✅ Reset when search is empty
    } else {
      const searched = storedPlayers.filter((it) =>
        it.name.toLowerCase().includes(player.toLowerCase())
      );
      set({ players: searched });
    }
  },
}));
