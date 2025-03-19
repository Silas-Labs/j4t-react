import React from "react";
import "../styles/stats.css";
import { ClubStats, PlayerStats, StatCard } from "../components";

function Stats({ season }) {
  season = "2024/25";
  return (
    <div className="flex flex-col min-h-screen w-full justify-center ">
      <div className="hero h-full w-full justify-start items-center pl-20 pt-20 text-white titles">
        <span className="text-white">Statistics</span>
      </div>
      <div className="p-2">
        <span className="text-lg font-bold">{season} Top Stats</span>
        <div className="grid grid-cols-4 place-items-center pb-2 ">
          <StatCard
            player_name="Leo Messo"
            player_image="https://www.thesportsdb.com/images/media/player/thumb/kpfsvp1725295651.jpg"
            tally="28"
            title="Goals"
          />
          <StatCard
            player_name="Bruno Fernandes"
            player_image="https://www.thesportsdb.com/images/media/player/thumb/1kfayc1700821747.jpg"
            tally="28"
            title="Assists"
          />
          <StatCard
            player_name="Andre Onana"
            player_image="https://www.thesportsdb.com/images/media/player/thumb/5vrqyp1558201522.jpg"
            tally="28"
            title="Saves"
          />
          <StatCard
            player_name="Alisson Becker"
            player_image="https://www.thesportsdb.com/images/media/player/thumb/hpcby21741323325.jpg"
            tally="28"
            title="Clean Sheets"
          />
        </div>
      </div>
      <PlayerStats />
      <ClubStats />
    </div>
  );
}

export default Stats;
