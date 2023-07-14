import { MainLayout } from "@/components/layout";
import * as React from "react";
import VideoPlayer from "@/components/VideoHLS/VideoPlayer";
import { Typography } from "@mui/material";

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  return (
    <div>
      <Typography>Blog Page</Typography>
      <VideoPlayer />
    </div>
  );
}

BlogPage.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};
