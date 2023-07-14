import React, { useEffect } from "react";
import {
  Button,
  Container,
  Stack,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useAppSelector } from "@/stores/store";
import { useDispatch } from "react-redux";
import Link from "next/link";
// import avatar from "@/images/avatar.png";

export function HeroSection() {
  const { news } = useAppSelector((state) => state.newsReducer);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   async function getNews() {
  //     const res: ApiResponse<Post> = await fetchDataNews();
  //     if (res && res.data) {
  //       dispatch(myNews(res.data));
  //     }
  //     console.log(res);
  //   }
  //   getNews();
  // }, []);
  useEffect(() => {
    dispatch({ type: "FETCH_NEWS" });
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

              <Link href="/blog" passHref>
                <MuiLink sx={{ ml: 2, fontWeight: "medium" }}>
                  <Button variant="contained">Go to Blog Page</Button>
                </MuiLink>
              </Link>
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
