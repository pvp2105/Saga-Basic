import React, { useEffect } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { ApiResponse, fetchDataNews } from "@/services/newsService";
import { useAppSelector } from "@/stores/store";
import { useDispatch } from "react-redux";
import { myNews } from "@/reducers/newsSlice";
import avatar from "@/images/avatar.png";
import { Post } from "@/models";

export function HeroSection() {
  const { news } = useAppSelector((state) => state.newsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    async function getNews() {
      let res: ApiResponse<Post> = await fetchDataNews();
      if (res && res.data) {
        dispatch(myNews(res.data));
      }
      console.log(res);
    }
    getNews();
  }, []);

  return (
    <Box component="section" pt={18} pb={9}>
      <Container>
        {news.slice(0, 1).map((item) => (
          <Stack
            // spacing={5}
            direction="row"
            alignItems="flex-start"
            key={item.id}
          >
            {/* spacing: gap trong css */}
            <Box mx={4}>
              <Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
                {item.tieuDe} <br />
                {item.nguoiTao}
              </Typography>

              <Typography mb={5}>{item.tomTat}</Typography>

              <Button variant="contained" size="large">
                Download Resume
              </Button>
            </Box>

            <Box
              sx={{
                minWidth: "300px",
                boxShadow: "-5px 13px",
                color: "secondary.light",
                borderRadius: "50%",
              }}
            >
              <Image
                src={item.anhDaiDien}
                width={200}
                height={200}
                layout="responsive"
                alt="avatar"
              />
              {/* <img src={item.anhDaiDien} alt="avatar" /> */}
            </Box>
          </Stack>
        ))}
      </Container>
    </Box>
  );
}

// section
//  container
//    flex-container (Stack)
//      flex-item (Box trai)
//          h1, p, button
//      flex-item (Box phai) > img
