import React from "react";

export const ScheduleFilter = ({ title }) => {
  return (
    <div className="dropdown dropdown-center p-2">
      <div tabIndex={0} role="button" className="btn m-1 p-2 rounded-lg ">
        {title}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-md bg-white/40 backdrop-blur-lg"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};
