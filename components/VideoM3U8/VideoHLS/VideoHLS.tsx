import React, { useEffect, memo } from "react";
import Hls from "hls.js";

function VideoHLS() {
  useEffect(() => {
    const video = document.getElementById("video") as HTMLVideoElement;

    if (Hls.isSupported()) {
      const hls = new Hls({
        // Tùy chọn và cấu hình Hls.js
        maxBufferSize: 10 * 1000 * 1000, // Đặt kích thước tối đa của bộ đệm (giá trị tính bằng byte)
        maxBufferLength: 10, // Đặt số đoạn tối đa được giữ trong bộ đệm
        enableWorker: true, // Kích hoạt việc sử dụng worker để xử lý một số công việc nền
      });
      hls.loadSource(
        "https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8"
      );
      hls.attachMedia(video);
      video.play();
    }
  }, []);

  return (
    <video
      id="video"
      controls
      className="video-player"
      style={{ width: "620px", height: "300px" }}
    ></video>
  );
}

export default memo(VideoHLS);
