// @ts-nocheck
import React from "react";
import TextField from "@mui/material/TextField";
import ToastService from "../utils/toast";

const NumberInput = ({
  label = "",
  name,
  value,
  onChange = {},
  error = false,
  helperText = "",
  disabled = false,
  size = "small",   
  maxAmount = 9999999999,
  sx = {},
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || /^\d+$/.test(newValue)) {
      if (onChange) onChange(e);
    }
  };

  return (
    <TextField
      size={size}
      label={label}
      disabled={disabled}
      name={name}
      type="number"
      fullWidth
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={helperText}
      sx={sx}
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
      }}
    />
  );
};

export default NumberInput;
