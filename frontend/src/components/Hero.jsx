import React from "react";
import newsgo from "../assets/newsgo.jpg"; // Ensure correct path

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${newsgo})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Covers both upper and lower parts evenly
        backgroundRepeat: "no-repeat",
        width: "100vw", // Full width
        height: "100vh", // Full screen height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative", // Allows natural flow without covering navbar
        padding: "20px",
      }}
    >
      <h2>Get the latest football stats and news</h2>
    </div>
  );
};

export default HeroSection;
