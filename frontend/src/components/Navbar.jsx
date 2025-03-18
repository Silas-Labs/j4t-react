import React from "react";
import "../styles/navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  let url = useLocation();
  return (
    <nav className="bg-gradient-to-b from-white/60 to-white/10 backdrop-blur-md flex flex-row w-screen shadow-lg mb-1 fixed top-0 left-0 z-100">
      {/* Logo Section */}
      <div className="flex items-center px-4">
        <img
          src="/src/assets/ligss.png"
          alt="Logo"
          className="h-12 w-auto max-w-[100px] object-contain"
        />
      </div>

      {/* Navigation Section */}
      <ul className="nav-links flex flex-row w-full justify-center gap-x-8 items-center ">
        <li>
          <Link to="/" className={url.pathname == "/" ? "nav-link-active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/clubs"
            className={url.pathname == "/clubs" ? "nav-link-active" : ""}
          >
            Clubs
          </Link>
        </li>
        <li>
          <Link
            to="/schedules"
            className={url.pathname == "/schedules" ? "nav-link-active" : ""}
          >
            Schedules
          </Link>
        </li>
        <li>
          <Link
            to="/stats"
            className={url.pathname == "/stats" ? "nav-link-active" : ""}
          >
            Stats
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className={url.pathname == "/news" ? "nav-link-active" : ""}
          >
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
};
