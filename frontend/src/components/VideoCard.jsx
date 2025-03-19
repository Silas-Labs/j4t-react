import React from "react";

export const Video = ({ video, details }) => {
  return (
    <div className="flex flex-row w-full justify-evenly items-center ">
      <iframe src={video} width="360" height="200" />
      <span className="h-full overflow-auto w-1/2">{details}</span>
    </div>
  );
};
