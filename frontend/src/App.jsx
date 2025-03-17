import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fixtures from "./components/Fixtures";
import { Footer } from "./components/Footer";
import Partners from "./components/Partners";
import Schedules from "./components/Schedules";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedules" element={<Schedules />} />
        </Routes>
      </BrowserRouter>
      <Partners />
      <Footer />
    </>
  );
}

export default App;
