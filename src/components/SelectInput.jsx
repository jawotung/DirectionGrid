// @ts-nocheck

import React, { useEffect } from "react";
import {
  Autocomplete,
  TextField,
  CircularProgress,
} from "@mui/material";

const SelectInput = ({
  label = "",
  name,
  value,
  options = [],
  error = false,
  size = "small",
  helperText = "",
  disabled = false,
  onChange,
  allowClear = true,
  square = false,
  sx = {},
  disableClearable = false,
  placeholder = "",
  default1stData = false,
}) => {
  const selectedOption =
    options.find((opt) => String(opt.value) === String(value)) || null;

  useEffect(() => {
    if (options.length > 0) {
      let newOption;
      if (default1stData) {
        newOption = options[0];
      } else {
        if (value === null || value === undefined || value === "") {
          newOption = options.find((opt) => String(opt.value) === String(value)) ?? null;
        }
      }
      if (newOption) {
        const event = {
          target: {
            name,
            value: newOption?.value ?? null,
            data: newOption,
          },
        };
        onChange?.(event);
      }
    }
  }, [options]);

  return (
    <Autocomplete
      fullWidth
      options={options}
      value={selectedOption}
      disableClearable={disableClearable}
      onChange={(_, newValue) => {
        const event = {
          target: {
            name,
            value: newValue?.value ?? null,
            data: newValue ?? null,
          },
        };
        onChange?.(event);
      }}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, val) => option.value === val.value}
      disabled={disabled}
      clearOnEscape={allowClear}
      size={size}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          label={label}
          name={name}
          error={!!error}
          helperText={error ? helperText : ""}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default SelectInput;
