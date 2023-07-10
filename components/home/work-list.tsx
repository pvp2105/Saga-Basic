import React, { Fragment } from "react";
import { Post } from "@/models";
import Image from "next/image";
import { Box, Divider, Chip, Stack, Typography } from "@mui/material";

export interface WorkListProps {
  item: Post;
}

export function WorkList({ item }: WorkListProps) {
  return (
    <Box>
      <Fragment key={item.id}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box width={{ xs: "100%", sm: "246px" }} flexShrink={0}>
            {/* //Item có flex-shrink lớn hơn sẽ co lại ít hơn khi không đủ không gian. */}
            <Image
              src={item.anhDaiDien}
              width={246}
              height={180}
              layout="responsive"
              alt="work thumbnail"
            />
          </Box>

          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.tieuDe}
            </Typography>

            <Stack direction="row" my={2}>
              <Chip
                color="secondary"
                label={new Date(item.ngayTao).getFullYear()}
                size="small"
              />

              {/* <Typography ml={3} color="GrayText">
                {item.tagList.join(", ")}
              </Typography> */}
            </Stack>

            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.tomTat}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 3 }} />
      </Fragment>
    </Box>
  );
}
