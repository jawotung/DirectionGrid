import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "./themePrimitives";


export default function AppTheme({ children, mode = 'dark' }) {
  const theme = React.useMemo(() => createAppTheme(mode == 'dark'? 'dark' : 'light'), [mode]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
