import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { WorkList } from "./work-list";
import { useAppSelector } from "@/stores/store";

export function FeatureWorks() {
  const { news } = useAppSelector((state) => state.newsReducer);
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" fontWeight="bold">
          Featured Works
        </Typography>
        {news.slice(3, 6).map((item) => (
          <Box key={item.id} mt={2}>
            <WorkList item={item} />
          </Box>
        ))}
      </Container>
    </Box>
  );
}
