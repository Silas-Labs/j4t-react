import React, { useEffect } from "react";

import {
  ClubFilter,
  CompetitionFilter,
  DateFilter,
  ScheduleRow,
  ScoreCard,
  TeamCard,
} from "../components";
import "../styles/schedules.css";
import { useClubs, useFixtures } from "../store";

function Schedules() {
  const FIVE_MINUTES = 5 * 60 * 1000;
  const { fixtures, lastUpdateTime, loadFixtures } = useFixtures();
  const { clubs, loadClubs } = useClubs();
  useEffect(() => {
    if (Date.now() - lastUpdateTime > FIVE_MINUTES) {
      loadFixtures();
      loadClubs();
      console.log("Last Schedules Updated: ", Date.now());
    }
  }, []);
  return (
    <div className="flex flex-col w-full h-screen justify-center pb-2">
      <div className="hero-schedule w-full h-screen ">
        <span className="titles !text-white mr-auto pl-30">
          Schedules & Scores
        </span>
      </div>
      <div className="flex flex-row w-full justify-center py-2 gap-x-2">
        <DateFilter title="FEB 23-28" list={clubs} />
        {/* <CompetitionFilter title="All Competitions" list={clubs} /> */}
        <ClubFilter title="All Clubs" list={clubs} />
      </div>
      <div className="flex flex-col w-full">
        <span>Wednesday Feb 25</span>
        <ScheduleRow />
      </div>
    </div>
  );
}

export default Schedules;
