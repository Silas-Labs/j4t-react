import React from "react";

export const TeamCard = ({ name, team_logo }) => {
  return (
    <div className="avatar h-24 w-36 rounded-lg shadow-xl">
      <img src={team_logo} alt={name} className="w-full h-full" />
    </div>
  );
};
