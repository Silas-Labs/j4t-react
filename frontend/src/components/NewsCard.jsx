import React from "react";

export const NewsCard = ({ image, details, team }) => {
  return (
    <div className="flex flex-col w-full items-start">
      <span className="">{"Arsenal"}</span>
      <div className="flex flex-row w-full justify-evenly items-center ">
        <img src={image} width={180} height="120" />
        <span className="h-full overflow-auto w-1/2">{details}</span>
      </div>
    </div>
  );
};
