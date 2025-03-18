import React from "react";
import newsgo from "../assets/newsgo.jpg"; // Ensure correct path
import { FeaturedPlayer, Fixtures, LatestVideos } from "../components";

function Home() {
  return (
    <>
      <div
        className="hero-section flex flex-col"
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
        <h2 className="titles">
          <span className="text-white">
            {" "}
            Get the latest football stats and news
          </span>
        </h2>
      </div>
      <Fixtures />
      <LatestVideos />
      <FeaturedPlayer />
    </>
  );
}
export default Home;
