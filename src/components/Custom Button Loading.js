import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

const CssLoadingButton = styled(LoadingButton)({
  color: "#ffa22d",
  border: "1px #ffa22d solid",
  backgroundColor: "transparent",
  margin: "0.3rem",
  padding: "0.569rem",
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

const CustomLoadingButton = (props) => {
  return (
    <>
      <CssLoadingButton
        {...props}
        sx={props.style}
        style={
          props.padding
          ? {
              width: props.width,
              fontSize: props.fontSize,
              padding: props.padding,
            }
          : { width: props.width, fontSize: props.fontSize }
        }
        size={props.size}
        onClick={props.onClick}
      >
        {!props.loading && props.value}
      </CssLoadingButton>
    </>
  );
};

export default CustomLoadingButton;