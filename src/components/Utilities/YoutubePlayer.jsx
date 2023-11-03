"use client";

import Youtube from "react-youtube";

const YoutubePlayer = ({ youtubeId }) => {
  const option = {
    width: "700rem",
    height: "500rem",
  };

  return (
    <div className="">
      <Youtube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
};

export default YoutubePlayer;
