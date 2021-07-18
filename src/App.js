import React, { useState } from "react";
import { SearchBar, Video, VideoList } from "./components";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: "AIzaSyCDI2Fq_bvnwLfaSbYz6zcRTmwcoVgotak",
        q: searchTerm,
      },
    });
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly mt-2">
        <p className="text-white font-black text-5xl mb-2">MeTube</p>
        <SearchBar onFormSubmit={handleSubmit} />
      </div>
      <div>
        <Video video={selectedVideo} />
      </div>
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default App;
