import React from "react";
import { TeamCard, ScoreCard } from "./";

export const ScheduleRow = (row) => {
  return (
    <div className="flex flex-row w-full  items-center">
      <span>Final</span>
      <div className="flex flex-row justify-center items-center flex-1">
        <span>{row.home_team}</span>
        <TeamCard
          name={row.home_team}
          team_logo={row.home_team_logo}
          className="w-24"
        />
        <ScoreCard home={"0"} away={"2"} />
        <TeamCard
          name={row.away_team}
          team_logo={row.away_team_logo}
          className="w-24"
        />
        <span>{row.away_team}</span>
      </div>
    </div>
  );
};
