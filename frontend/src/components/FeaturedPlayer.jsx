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
          api.get("3/searchplayers.php?p=Lionel_Messi"),
          api.get("3/searchplayers.php?p=Danny_Welbeck"),
          api.get("3/searchplayers.php?p=Cristiano_Ronaldo"),
        ]);

        const data = response.map((res) => res.data.player[0]);

        if (data) {
          console.log(data);
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
    <div className="w-full flex flex-row items-center justify-evenly py-2">
      {player.map((it) => (
        <Player player={it.strThumb} name={it.strPlayer} key={it.idPlayer} />
      ))}
    </div>
  );
};
