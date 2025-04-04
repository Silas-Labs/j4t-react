import React, { useEffect } from "react";
import { Player } from "./";
import { Api } from "../services";
import { usePlayers } from "../store";

export const FeaturedPlayer = () => {
  const { players, loadPlayers } = usePlayers();

  useEffect(() => {
    loadPlayers();
  }, []);

  return (
    <div className="w-full flex flex-col py-2 items-center font-bold">
      <span className="pb-2">Featured Players</span>
      <div className="w-full flex flex-row items-center justify-evenly">
        {players.map((it) => (
          <Player player={it.image} name={it.name} key={it.id} />
        ))}
      </div>
    </div>
  );
};
