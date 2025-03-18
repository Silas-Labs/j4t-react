import React from "react";

export const Player = ({ player, name }) => {
  return (
    <div className="avatar w-36 rounded-2xl shadow-xl">
      <img
        src={player}
        alt={name}
        className="w-full h-full rounded-2xl shadow-sm"
      />
    </div>
  );
};
