import React, { useEffect } from "react";
import JWPlayer from "@jwplayer/jwplayer-react";
//"@jwplayer/jwplayer-react" là một thư viện chính thức do JWPlayer cung cấp để tích hợp JWPlayer vào ứng dụng React.

function JWPlayerVideo() {
  const myPlaylist = [
    {
      file: "https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/A03_4960.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "English",
          kind: "captions",
          default: true,
        },
      ],
    },
    {
      file: "https://qig.vn/Images/quangich202320nam.mp4#t=2.3",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/b038563096e653b80af71j.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "Spanish",
          kind: "captions",
          default: false,
        },
      ],
    },
  ];
  return (
    <div style={{ width: "630px", height: "340px" }}>
      <JWPlayer
        file="https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8"
        library="https://cdn.jwplayer.com/libraries/T5EQoSVW.js"
        playlist={myPlaylist}
      />
    </div>
  );
}

export default JWPlayerVideo;
