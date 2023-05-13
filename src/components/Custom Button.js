import { Button, styled } from "@mui/material";

export const CssButton = styled(Button)({
    color: "#ffa22d",
    border: "1px #ffa22d solid",
    backgroundColor: "transparent",
    margin: "0.5rem auto",
    transition: "0.4s",
    ":hover": {
      backgroundColor: "#ffa22d",
      border: "1px #ffa22d solid",
      color: "#FFFFFF",
    },
    ":disabled": {
      backgroundColor: "rgb(106 72 29 / 62%)",
      border: "0",
      color: "#ffffff5c",
    },
  });