import React from "react";

import { ScheduleFilter, ScoreCard, TeamCard } from "../components";
import "../styles/schedules.css";
import ars from "../assets/teams/arsenal.png";
import gor from "../assets/teams/gor.png";

function Schedules() {
  return (
    <div className="flex flex-col w-full h-full justify-center py-2">
      <div className="hero w-full h-auto object-contain">
        <span className="titles !text-white mr-auto pl-30">
          Schedules & Scores
        </span>
      </div>
      <div className="flex flex-row w-full justify-center">
        <ScheduleFilter title="FEB 23-28" />
        <ScheduleFilter title="All Competitions" />
        <ScheduleFilter title="All Clubs" />
      </div>
      <div className="flex flex-col w-full">
        <span>Wednesday Feb 25</span>
        <div className="flex flex-row w-full  items-center">
          <span>Final</span>
          <div className="flex flex-row justify-center items-center flex-1">
            <span>Gor Mahia</span>
            <TeamCard name="Gor Mahia" team_logo={gor} className="w-24" />
            <ScoreCard home={"0"} away={"2"} />
            <TeamCard name="Arsenal" team_logo={ars} className="w-24" />
            <span>Arsenal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedules;
