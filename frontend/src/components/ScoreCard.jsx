import React from "react";

export const ScoreCard = ({ home, away }) => {
  return (
    <div className="flex p-2 m-2 w-auto justify-between font-bold">
      <div className="card rounded-box grid grow place-items-center px-2">
        {home}
      </div>
      &nbsp;
      <div className="card rounded-box grid grow place-items-center px-2">
        {away}
      </div>
    </div>
  );
};
