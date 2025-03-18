import React from "react";

const Video = ({ video, details }) => {
  return (
    <div className="flex flex-row w-full justify-evenly items-center ">
      <iframe
        src={video}
        width="360"
        height="200"
        allow="autoplay;encrypted-media"
      />
      <span className="h-full overflow-auto w-1/2">{details}</span>
    </div>
  );
};

export default Video;
