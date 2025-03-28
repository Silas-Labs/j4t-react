import React, { useEffect, useState } from "react";
import "../styles/players.css";
import { usePlayers } from "../store";

const Players = () => {
  const [search, setSearch] = useState("");
  const { players, loadPlayers, searchPlayer } = usePlayers();

  useEffect(() => {
    loadPlayers();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      searchPlayer(search || ""); // Ensure empty search resets list
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [search]);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-full h-1/3 hero-players flex items-center justify-start">
        <div className="flex-1 w-full flex justify-center">
          <span className="titles !text-white">Players</span>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search player..."
            className="input h-10 rounded-xl shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className=" w-full h-full">
        <table className="table">
          {/* head */}
          <thead className="relative">
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {players?.map((player) => (
              <tr key={player.id}>
                <td>
                  <span className="flex items-center">
                    <img
                      src={player.image_url}
                      className="rounded-2xl h-12 w-12"
                    />
                    {player.name}
                  </span>
                </td>
                <td>{player.position}</td>
                <td>{player.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Players;
