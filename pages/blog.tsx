import { MainLayout } from "@/components/layout";
import { Typography } from "@mui/material";
import React from "react";
import VideoHLS from "@/components/VideoM3U8/VideoHLS/VideoHLS";
import JWPlayerVideo from "@/components/VideoM3U8/JWPlayer/JWPlayer";
import JWPlayerVideo2 from "@/components/VideoM3U8/JWPlayer/Jwplayer2";
import { VideoPlayerJS } from "@/components/VideoM3U8/VideoJs/VideoJS";
import ReactPlayerVideo from "@/components/VideoM3U8/ReactPlayerVideo/ReactPlayer";

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  return (
    <div>
      <Typography>Blog Page</Typography>
      {/* <div style={{ display: "flex", marginBottom: "30px", gap: "30px" }}>
        <VideoHLS />
        <VideoPlayerJS
          hlsSrc="https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8"
          posterSrc="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
        />
      </div> */}
      <div style={{ display: "flex", marginBottom: "30px", gap: "30px" }}>
        <JWPlayerVideo />
        {/* <JWPlayerVideo2 /> */}
      </div>
      <div>
        {/* "Hydration failed because the initial UI does not match what was rendered on the server" sẽ xuất hiện.
         Điều này thường xảy ra khi có sự không đồng bộ giữa server-side rendering và client-side rendering, gây ra sự khác biệt trong DOM và trạng thái của các thành phần.*/}
        {/* <ReactPlayerVideo /> */}
      </div>
    </div>
  );
}

BlogPage.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};
