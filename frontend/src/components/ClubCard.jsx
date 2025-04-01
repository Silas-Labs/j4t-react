import React from "react";
import "../styles/clubs.css";

export const ClubCard = ({ team_logo, team_name }) => {
  return (
    <div className="avatar w-36 h-36 rounded-2xl shadow-xl border-0 ring ring-fern-green hover:bg-slate-200 hover:ring-2">
      <div className="flex flex-row rounded-2xl w-full h-full border-0 p-1">
        <img src={team_logo} className="team-badge" alt={team_name} />
        <span className="text-black">{team_name}</span>
      </div>
    </div>
  );
};
