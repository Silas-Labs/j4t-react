import React from "react";

export const NewsCard = ({ image, details, team }) => {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex flex-col flex-1 items-center  ">
        <span className="font-bold"> {team}</span>
        <img src={image} width={180} height="120" />
      </div>
      <div className=" flex-1 flex items-center">
        <span className="">{details}</span>
      </div>
    </div>
  );
};
