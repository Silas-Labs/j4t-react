import React from "react";

const StatCard = ({ title, tally, player_image, player_name }) => {
  return (
    <div className="card bg-base-100 w-42 shadow-sm">
      <figure>
        <img src={player_image} alt={player_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{tally}</p>
      </div>
    </div>
  );
};

export default StatCard;
