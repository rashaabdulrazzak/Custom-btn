import * as React from "react";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

const Mbutton = styled(Button)(({ theme }) => ({
  width: 300,
  backgroundColor: theme.palette.secondary.main,
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: theme.palette.success.main,
    boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.36)}`,
  },
  fontSize: 28,
  color: "#fff",
}));

export default function newButton({ text }) {
  return <Mbutton>{text}</Mbutton>;
}
