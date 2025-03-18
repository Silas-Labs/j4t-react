import React, { useEffect, useState } from "react";
import { Video } from "./VideoCard";
import "../styles/videos.css";
import api from "../services/apiAxios";

export const LatestVideos = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get();
        if (data) {
          setNews(data);
        } else {
          setNews(...data);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col p-2 bg-fern-green text-white">
      <span className="sub-titles pb-2 !text-white">LATEST VIDEOS</span>
      <Video
        video="https://www.youtube.com/embed/vsWLzHtGqpc"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam mollis, orci eget malesuada interdum, risus libero consequat mi, 
        fermentum pharetra nisl quam eu purus. Etiam porta vehicula eros, 
        at venenatis nibh semper pellentesque. Nunc sit amet ante quis arcu 
        placerat tempor. Aenean tincidunt porttitor varius."
      />
      <span className="mt-auto self-center link">More Videos -&gt;</span>
    </div>
  );
};
