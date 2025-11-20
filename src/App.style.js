export const AppStyles = (theme) => {
  const trackColor =
    theme.palette.mode === "dark" ? "#111111" : "#f1f1f1";
  const thumbColor =
    theme.palette.mode === "dark" ? "#4b4b4b" : "#c1c1c1";
  const hoverColor =
    theme.palette.mode === "dark" ? "#1a1a1a" : "#a8a8a8";

  return {
    "*": {
      scrollbarWidth: "thin",
      scrollbarColor: `${thumbColor} ${trackColor}`,
    },
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-track": {
      background: trackColor,
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      background: thumbColor,
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: hoverColor,
    },
    "::-webkit-scrollbar-button": {
      display: "none !important",
      width: 0,
      height: 0,
    },
  };
};
