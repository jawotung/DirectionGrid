import { createTheme } from "@mui/material/styles";


const defaultTheme = createTheme();

export const brand = {
  50: "#E0F7F4",
  100: "#B3EEE5",
  200: "#80E3D5",
  300: "#4DD8C5",
  400: "#26CDB5",
  500: "#00AB97",
  600: "#00967F",
  700: "#007562",
  800: "#005544",
  900: "#003828",
};

export const gray = {
  50: "hsl(220, 35%, 97%)",
  100: "hsl(220, 30%, 94%)",
  200: "hsl(220, 20%, 88%)",
  300: "hsl(220, 20%, 80%)",
  400: "hsl(220, 20%, 65%)",
  500: "hsl(220, 20%, 42%)",
  600: "hsl(220, 20%, 35%)",
  700: "hsl(220, 20%, 25%)",
  800: "hsl(220, 30%, 6%)",
  900: "hsl(220, 35%, 3%)",
};

export const green = {
  50: "hsl(120, 80%, 98%)",
  100: "hsl(120, 75%, 94%)",
  200: "hsl(120, 75%, 87%)",
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  600: "hsl(120, 70%, 25%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)",
  900: "hsl(120, 87%, 6%)",
};

export const orange = {
  50: "hsl(45, 100%, 97%)",
  100: "hsl(45, 92%, 90%)",
  200: "hsl(45, 94%, 80%)",
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  600: "hsl(45, 91%, 25%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)",
  900: "hsl(45, 93%, 12%)",
};

export const red = {
  50: "hsl(0, 100%, 97%)",
  100: "hsl(0, 92%, 90%)",
  200: "hsl(0, 94%, 80%)",
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  600: "hsl(0, 91%, 25%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)",
  900: "hsl(0, 93%, 6%)",
};

export const createAppTheme = (mode = "dark") => {
  const customShadows = [...defaultTheme.shadows];

  customShadows[1] =
    mode === "dark"
      ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px"
      : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px";

  return createTheme({
    palette: {
      mode: mode == 'dark' ? "dark" : 'light',
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: "#fff",
      },
      secondary: {
        light: gray[200],
        main: gray[400],
        dark: gray[700],
        contrastText: "#fff",
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        contrastText: "#fff",
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        contrastText: "#fff",
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
        contrastText: "#fff",
      },
      grey: gray,
      background: {
        default: mode === "dark" ? "#1D2024" : "#f5f6fa", 
        paper: mode === "dark" ? "#212529" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#fff" : gray[800],
        secondary: mode === "dark" ? gray[400] : gray[600],
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      allVariants: {
        fontVariantNumeric: "tabular-nums",
      },
      fontSize: 12,
      h1: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: "1.75rem",
        lineHeight: 1.2,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1.125rem",
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: "1rem",
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 700,
      },
      body1: {
        fontSize: "0.75rem",
        fontWeight: 500,
      },
      body2: {
        fontSize: "0.75rem",
        fontWeight: 500,
      },
      caption: {
        fontSize: "0.6875rem",
        fontWeight: 400,
      },
      button: {
        fontSize: "0.75rem",
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 8,
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontVariantNumeric: "tabular-nums",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
};