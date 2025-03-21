import React from "react";

export const SearchBox = () => {
  return (
    <div className="flex flex-row items-center input border-0 h-7 rounded-lg ">
      <input type="search" required placeholder="Search" />
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
    </div>
  );
};
