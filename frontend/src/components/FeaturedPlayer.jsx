import React, { useEffect, useState } from "react";
import { Player } from "./PlayerCard";
import api from "../services/apiAxios";

export const FeaturedPlayer = () => {
  const [player, setPlayer] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          api.get("3/searchplayers.php?p=Zlatan_Ibra"),
          api.get("3/searchplayers.php?p=Cristiano_Ronaldo"),
          api.get("3/searchplayers.php?p=Wayne_Rooney"),
          api.get("3/searchplayers.php?p=Giggs"),
        ]);

        const data = response.map((res) => res.data.player[0]);

        if (data) {
          setPlayer(data);
        } else {
          console.error("Player not found");
          setError("Player not found");
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
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
