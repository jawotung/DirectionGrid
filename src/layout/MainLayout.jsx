import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useState, useEffect, createContext, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppTheme from "../theme/AppTheme";
import {
  useColorScheme,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  FormControlLabel,
  Switch,
  alpha,
  Backdrop,
  CircularProgress,
  GlobalStyles,
} from "@mui/material";
import { gray } from '../theme/themePrimitives';
import { AppStyles } from '../App.style';

const ThemeContext = createContext({
  themeMode: 'dark',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const MainLayout = ({ children }) => {
  const { mode, setMode } = useColorScheme();
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("themeMode");
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) {
      setThemeMode(savedTheme);
      if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
        setMode(savedTheme);
      } else {
        setMode('light');
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setThemeMode(defaultTheme);
      setMode(defaultTheme);
      localStorage.setItem('themeMode', defaultTheme);
    }
  }, [setMode]);

  useEffect(() => {
      setLoading(false);
  }, []); 

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    setMode(newTheme);
    localStorage.setItem('themeMode', newTheme);
  };

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setDesktopOpen(!desktopOpen);
    }

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  };

  const drawerWidth = desktopOpen ? 250 : 0;

  const handleThemeSwitch = (event) => {
    const newMode = event.target.checked ? 'dark' : 'light';
    setThemeMode(newMode);
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <AppTheme mode={themeMode === 'dark' || themeMode === 'light' ? themeMode : 'light'}>
        <CssBaseline enableColorScheme />
        <GlobalStyles styles={AppStyles} />
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 16px",
                zIndex: 1200,
                borderColor: "divider",
              }}
            >

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'between', gap: 5}}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={themeMode === 'dark'}
                      onChange={handleThemeSwitch}
                      icon={<LightModeIcon sx={{ fontSize: 18, color: "#FFD700", }} />}
                      checkedIcon={<DarkModeIcon sx={{ fontSize: 18, color: gray[100] }} />}
                      sx={{
                          transform: "scale(1.3)",
                          '& .MuiSwitch-thumb': {
                            backgroundColor: themeMode === 'light' ? "#FFD700" : gray[100],
                          },
                          '& .MuiSwitch-switchBase': {
                            '&:hover': {
                              backgroundColor: themeMode === 'light'
                                ? alpha("#FFD700", 0.15)
                                : alpha(gray[100], 0.1),
                            },
                          },
                          '& .MuiSwitch-track': {
                            backgroundColor:
                              themeMode === 'light'
                                ? alpha("#FFD700", 0.5)
                                : alpha(gray[500], 0.4),
                          },
                      }}
                    />
                  }
                  label=''
                />
              </Box>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {loading ? (
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={loading}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              ) : (
                <Stack
                  sx={{
                    width: "100%",
                    px: isMobile ? 2 : 3,
                    boxSizing: "border-box",
                    flexGrow: 1,
                  }}
                >
                  {children}
                </Stack>
              )}
            </Box>
          </Box>
        </Box>
      </AppTheme>
    </ThemeContext.Provider>
  );
};

export default MainLayout;