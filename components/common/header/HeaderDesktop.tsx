import { Container, Stack, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/stores/store";
import { myTitles } from "@/reducers/newsSlice";
import { ApiResponse, fetchDataDanhMuc } from "@/services/newsService";
import { Title } from "@/models";

export function HeaderDesktop() {
  const { titles } = useAppSelector((state) => state.newsReducer);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   async function getTitles() {
  //     let res: ApiResponse<Title> = await fetchDataDanhMuc();
  //     if (res && res.data) {
  //       dispatch(myTitles(res.data));
  //     }
  //     console.log(res);
  //   }
  //   getTitles();
  // }, []);
  useEffect(() => {
    dispatch({ type: "FETCH_TITLES" });
  }, []);

  const router = useRouter();
  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {titles.map((title) => (
            <Link key={title.id} href={title.id} passHref>
              <MuiLink
                sx={{ ml: 2, fontWeight: "medium" }}
                className={clsx({
                  active: router.pathname === title.id,
                })}
              >
                {title.tenDanhMuc}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
