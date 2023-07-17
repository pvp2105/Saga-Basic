import React from "react";
import ReactPlayer from "react-player";

const ReactPlayerVideo = () => {
  return (
    <div>
      <ReactPlayer
        url="https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8"
        controls={true}
        playing={true}
        // volume={1}
        width="640px"
        height="360px"
      />
    </div>
  );
};

export default ReactPlayerVideo;
