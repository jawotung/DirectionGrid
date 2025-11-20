// @ts-nocheck
import React from "react";
import TextField from "@mui/material/TextField";
import ToastService from "../utils/toast";

const TextInput = ({
  name,
  value,
  onChange,
  error = false,
  helperText = "",
  disabled = false,
  size = "small",   
  sx = {},
}) => {
  const handleChange = (e) => {
    if (onChange) onChange(e);
  };


  return (
    <TextField
      size={size}
      disabled={disabled}
      name={name}
      fullWidth
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={helperText}
      sx={sx}
    />
  );
};

export default TextInput;
