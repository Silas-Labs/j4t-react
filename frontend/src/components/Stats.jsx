import React from "react";
import "../styles/stats.css";
import StatCard from "./StatCard";
const Stats = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center ">
      <div className="hero justify-end text-white mr-auto pl-20 titles">
        <span className="text-white">Statistics</span>
      </div>
      <StatCard
        player_name="Leo Messo"
        player_image="https://www.thesportsdb.com/images/media/player/thumb/kpfsvp1725295651.jpg"
        tally="28"
        title="Goals"
      />
    </div>
  );
};

export default Stats;
