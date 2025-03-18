import React from "react";

export const PlayerStats = () => {
  return (
    <div className="w-full h-full flex flex-col bg-fern-green items-center">
      <span className=" text-white title p-2 self-start">Player Stats</span>
      <table className="table text-white w-2/3">
        {/* head */}
        <thead className="text-white">
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Club</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
      <div className="text-white flex flex-col justify-self-end mx-auto py-2">
        <span className="link !text-white">Assists -&gt;</span>
        <span className="link !text-white">Appearances -&gt;</span>
        <span className="link !text-white">Yellow Cards -&gt;</span>
      </div>
    </div>
  );
};
