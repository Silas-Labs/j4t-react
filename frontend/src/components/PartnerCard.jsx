import React from "react";

export const PartnerCard = ({ src }) => {
  return (
    <div className="avatar h-24 rounded-2xl overflow-hidden shadow-xl">
      <img src={src} className="w-auto h-full" />
    </div>
  );
};
