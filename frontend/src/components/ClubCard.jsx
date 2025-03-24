import React from "react";

export const ClubCard = ({ team_logo, team_name }) => {
  return (
    <div className="avatar h-36 w-48 rounded-2xl shadow-xl border-0 ring ring-green-300">
      <div className="flex flex-col rounded-2xl w-full h-full border-0 bg-green-400 p-1">
        <img
          src={team_logo}
          width="24px"
          height="24px"
          className="self-start items-start"
        />
        <hr className="w-full mt-auto mb-2 border-t border-black self-end p-0" />
        {team_name}
      </div>
    </div>
  );
};
