import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";
import { PostCard } from "./post-card";
import { useAppSelector } from "@/stores/store";

export function RecentPosts() {
  const { news } = useAppSelector((state) => state.newsReducer);

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>

          <Link passHref href="/blog">
            <Typography
              sx={{
                display: { xs: "none", md: "inline" },
              }}
            >
              View all
            </Typography>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}
        >
          {news.slice(1, 3).map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
