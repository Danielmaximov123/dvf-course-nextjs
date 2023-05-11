import { Button, IconButton, InputAdornment, styled, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
      color: "#ffa22d", // set value color to blue when focused
    },
    "&:hover": {
      color: "#EF9A53",
    },
  },
});

const CustomFieldWithShowPass = (props) => {
  const [hover, setHover] = useState(false);
  const [showPass, setShowPass] = useState({ password: false, confirm: false });

  return (
    <>
      <CssTextField
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{ margin: "0.3rem", width: props.width }}
        type={showPass.password ? "text" : "password"}
        {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
            <IconButton
              onClick={() =>
                showPass.password
                  ? setShowPass({ ...showPass, password: false })
                  : setShowPass({ ...showPass, password: true })
              }
              edge="end"
            >
              {!showPass.password ? (
                <VisibilityIcon sx={{color : !hover ? "#FFFFFF" : "#EF9A53" , "&:hover" : { color : "#EF9A53" }}} />
              ) : (
                <VisibilityOffIcon sx={{color : '#ffa22d'}} />
              )}
            </IconButton>
          </InputAdornment>
          ),
        }}
        InputLabelProps={{
          sx: {
            color: !hover ? "#FFFFFF" : "#EF9A53",
          },
        }}
      />
    </>
  );
};

export default CustomFieldWithShowPass;