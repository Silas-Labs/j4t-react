import { create } from "zustand";
import { Api } from "../services";

export const usePlayers = create((set) => ({
  players: [],
  fetchPlayers: async () => {
    try {
      const { data } = await Api.get("/players");
      // console.log(data);
      //set({ players: data });
    } catch (error) {
      console.error("Players Fetch Error: ", error);
    }
  },
}));
