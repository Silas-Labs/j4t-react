import React, { useEffect, useState } from "react";
import { Player } from "./PlayerCard";
import { Api } from "../services";

export const FeaturedPlayer = () => {
  const [player, setPlayer] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col py-2 items-center font-bold">
      <span className="pb-2">Featured Players</span>
      <div className="w-full flex flex-row items-center justify-evenly">
        {player.map((it) => (
          <Player player={it.strThumb} name={it.strPlayer} key={it.idPlayer} />
        ))}
      </div>
    </div>
  );
};
