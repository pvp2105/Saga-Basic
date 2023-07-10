import { Card, CardContent, Divider, Typography, Stack } from "@mui/material";
import * as React from "react";
import { Post } from "@/models";
import { format } from "date-fns";

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  //format detailNews.ngayTao 2023-06-09T13:51:45.451883
  const dateTime = new Date(post.ngayTao);
  const dateString = dateTime.toLocaleDateString(); // lấy ngày dưới dạng chuỗi
  const timeString = dateTime.toLocaleTimeString(); // lấy giờ dưới dạng chuỗi
  const formattedDateTime = `${dateString} ${timeString}`; // kết hợp ngày và giờ
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.tieuDe}
        </Typography>

        <Stack direction="row" mb={2} alignItems="center">
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography variant="body1" my={2} sx={{ display: "flex" }}>
            {formattedDateTime}
          </Typography>
        </Stack>
        <Typography variant="body2">{post.tomTat}</Typography>
      </CardContent>
    </Card>
  );
}
