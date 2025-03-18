import React from "react";
import { ClubStatRow } from "./ClubStatRow";

export const ClubStats = () => {
  return (
    <div className="flex flex-col items-center">
      <table className="table w-1/2">
        {/* head */}
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <ClubStatRow />
        </tbody>
      </table>
    </div>
  );
};
