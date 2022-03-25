import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Images from "../../../../constants/images";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="" src={Images.DEFAULT_IMG} />
    </Stack>
  );
}
