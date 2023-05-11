import { styled, TextField } from "@mui/material";
import { useState } from "react";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffa22d",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffa22d",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF",
    },
    "&:hover fieldset": {
      borderColor: "#EF9A53",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffa22d",
    },
  },
  input: {
    color: "#FFFFFF",
    "&:focus": {
      color: "#ffa22d",
    },
    "&:hover": {
      color: "#EF9A53",
    },
  },
  textArea : {
    color : '#FFFFFF',
    "&:hover" : {
      color: "#EF9A53",
    },
    "&:focus": {
      color: "#ffa22d",
    },
  }
});

const CustomField = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <CssTextField
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{margin : '0.3rem' , width : props.width}}
        multiline={props.multiline}
        {...props}
        
        rows={props.multiline && 4}
        InputLabelProps={{
          sx: {
            color: !hover ? "#FFFFFF" : "#EF9A53",
          },
        }}
      />
    </>
  );
};

export default CustomField;
