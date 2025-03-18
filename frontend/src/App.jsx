import React from "react";
import { Navbar } from "./components/Navbar";
import { Fixtures } from "./components/Fixtures";
import { Footer } from "./components/Footer";
import { Partners } from "./components/Partners";
import { Schedules } from "./components/Schedules";
import { News } from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router";
import { HeroSection } from "./components/Hero";
import { Clubs } from "./components/Clubs";
import Stats from "./components/Stats";
import FeaturedPlayer from "./components/FeaturedPlayer";
import LatestVideos from "./components/LatestVideos";
import PlayerStats from "./components/PlayerStats";
import ClubStats from "./components/ClubStats";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 pt-12">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/news" element={<News />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/stats" element={<ClubStats />} />
            <Route path="/players" element={<FeaturedPlayer />} />
          </Routes>
        </div>
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
