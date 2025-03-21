import React from "react";

import "../styles/news.css";
import { NewsCard, SearchBox } from "../components";
import ars from "../assets/teams/arsenal.png";

function News() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="h-full w-full flex flex-col items-center justify-center hero-news">
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <span className="titles !text-white "> News</span>
          <SearchBox />
        </div>
      </div>
      <span>Latest News</span>
      <NewsCard
        image={ars}
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam mollis, orci eget malesuada interdum, risus libero consequat mi, 
        fermentum pharetra nisl quam eu purus. Etiam porta vehicula eros, 
        at venenatis nibh semper pellentesque. Nunc sit amet ante quis arcu 
        placerat tempor. Aenean tincidunt porttitor varius."
      />
    </div>
  );
}

export default News;
