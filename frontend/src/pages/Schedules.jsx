import React, { useEffect } from "react";

import {
  ScheduleFilter,
  ScheduleRow,
  ScoreCard,
  TeamCard,
} from "../components";
import "../styles/schedules.css";
import { useFixtures } from "../store";

function Schedules() {
  const FIVE_MINUTES = 5 * 60 * 1000;
  const { fixtures, lastUpdateTime, loadFixtures } = useFixtures();
  useEffect(() => {
    if (Date.now() - lastUpdateTime > FIVE_MINUTES) {
      loadFixtures();
      console.log("Last Updated: ", Date.now());
    }
  }, []);
  return (
    <div className="flex flex-col w-full h-screen justify-center pb-2">
      <div className="hero-schedule w-full h-screen ">
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
        <ScheduleRow />
      </div>
    </div>
  );
}

export default Schedules;
