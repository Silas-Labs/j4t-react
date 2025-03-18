import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="w-screen bg-footer flex flex-row justify-around pb-2">
      <div className="sub-titles flex flex-col items-center w-full">
        <span className="sub-titles">Quick Links</span>
        <Link className="h3 quick-links" to="/scores">
          Scores
        </Link>
        <Link className="h3 pl-4 quick-links" to="/players">
          Players
        </Link>
        <Link className="h3 pl-4 quick-links" to="/schedules">
          Schedules
        </Link>
      </div>
      <div className="sub-titles flex flex-col items-center w-full">
        <span>Contacts</span>
        <span>
          <a
            href="https://maps.app.goo.gl/8SJCsTHK4ByykUpG7"
            className="quick-links h3"
          >
            📍Kisumu-Kenya
          </a>
        </span>
      </div>
      <div className="sub-titles flex flex-col items-center w-full">
        <span>Social Media</span>
        <span className="quick-links h3">X</span>
        <span className="quick-links h3">Facebook</span>
        <span className="quick-links h3">Instagram</span>
      </div>
    </div>
  );
};
