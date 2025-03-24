import React from "react";
import { ClubCard } from "../components";
import ars from "../assets/teams/arsenal.png";

function Clubs() {
  return (
    <div className="flex flex-col items-center flex-1 py-2">
      <span className="titles">Clubs</span>
      <div>
        <ClubCard team_name={"Arsenal"} team_logo={ars} />
      </div>
    </div>
  );
}
export default Clubs;
