import React from "react";
import gor from "../assets/teams/gor.png";

export const ClubStatRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={gor} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Gor Mahia</div>
            <div className="text-sm opacity-50">Kenya</div>
          </div>
        </div>
      </td>
      <td>64</td>
    </tr>
  );
};
