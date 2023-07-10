import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "../styles/Home.module.css";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "./_app";
import { FeatureWorks, HeroSection, RecentPosts } from "@/components/home";
import { Seo } from "@/components/common";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: "NextJS Tutorials | Van Phu",
          description:
            "Step by step tutorials to build a full CRUD website using NextJS for beginners",
          url: "https://learn-nextjs-fawn.vercel.app/",
          thumbnailUrl:
            "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png",
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

export default Home;

Home.getLayout = (children) => {
  return <MainLayout>{children}</MainLayout>;
};

// Home.getLayout = (children) => {
//   return <Box sx={{ p: 5, background: "red" }}>{children}</Box>;
// };
