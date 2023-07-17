import { FC, useEffect, useRef } from "react";
import { Box, BoxProps } from "@mantine/core";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

interface VideoPlayerProps extends BoxProps {
  posterSrc: string;
  hlsSrc: string;
  options?: Player["options"];
}
export const VideoPlayerJS: FC<VideoPlayerProps> = ({
  hlsSrc,
  posterSrc,
  options,
  ...props
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, {
        controls: true,
        fluid: true,
        sources: [{ src: hlsSrc, type: "application/x-mpegURL" }],
        poster: posterSrc,
        ...options,
      });
    }
  }, [hlsSrc, options, posterSrc]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <Box data-vjs-player {...props} style={{ width: "630px", height: "320px" }}>
      <Box ref={videoRef} />
    </Box>
  );
};
