import React from "react";
import { PartnerCard } from "./PartnerCard";

export const Partners = () => {
  const partners = import.meta.glob("../assets/partners/*.png", {
    eager: true,
  });
  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-3xl font-semibold">Partners</span>
      <div className="flex flex-row w-full justify-evenly gap-10 bg-fern-green pb-2">
        {Object.values(partners).map((it, key) => (
          <PartnerCard key={key + 1} src={it.default} />
        ))}
      </div>
    </div>
  );
};
