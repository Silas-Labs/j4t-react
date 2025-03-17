import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex flex-row w-full">
      {/* Logo Section */}
      <div>
        <img
          src="/src/assets/ligss.png"
          alt="Logo"
          style={{ height: "50px", width: "auto", maxWidth: "100px" }}
        />
      </div>

      {/* Navigation Section */}
      <ul className=" flex flex-row w-full justify-center gap-x-8 items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/clubs">Clubs</a>
        </li>
        <li>
          <a href="/schedules">Schedules</a>
        </li>
        <li>
          <a href="/stats">Stats</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
