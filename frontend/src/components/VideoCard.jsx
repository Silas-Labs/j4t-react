import React from "react";

export const Video = ({ video, details }) => {
  return (
    <div className="flex flex-row w-full justify-evenly items-center ">
      <iframe width="360" height="200" src={video} />
      <span className="h-full overflow-auto w-1/2">{details}</span>
    </div>
  );
};
