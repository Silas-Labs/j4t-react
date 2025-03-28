import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, News, Schedules, Clubs, Stats, Count } from "./pages";
import { Navbar, Partners, Footer } from "./components";
import Players from "./pages/Players";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </div>
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
