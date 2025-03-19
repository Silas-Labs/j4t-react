import React from "react";
import "../styles/stats.css";

export const StatCard = ({ title, tally, player_image, player_name }) => {
  return (
    <div className="card bg-base-100 w-42 shadow-lg shadow-slate-300 flex flex-col items-center p-2">
      <figure>
        <img
          src={player_image}
          alt={player_name}
          className="player-photo w-full"
          title={player_name}
        />
      </figure>
      <div className="card-body py-0 gap-y-0 items-center">
        <h2 className="card-title text-sm">{title}</h2>
        <p>{tally}</p>
      </div>
    </div>
  );
};
