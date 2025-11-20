import React, { useState } from "react";
import { Box, Typography, useTheme, IconButton, Dialog } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";


const Container = ({
  children,
  title = "",
  hideHeader = false,
  height = "100vh",
  mb = 0,
  mt = 0,
  buttonProps = null,
  showFullScreen = false,
  sx = {},
  style = {},
}) => {
  const theme = useTheme();
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const handleFullScreen = () => setFullscreenOpen(prev => !prev);

  const content = (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.background.default}`, 
        height,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        p:3,
         ...sx,
      }}
      style={style}
    >
      {(!hideHeader || title) && (
        <Box
          sx={{
            bgcolor: theme.palette.background.paper, 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {typeof title === "string" ? (
            <Typography variant="h6" color="#ffffff" sx={{
              ...(title && { mb: 2 }) 
            }}>
              {title}
            </Typography>
          ) : (
            title
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {buttonProps}
            {showFullScreen && (
              <IconButton
                onClick={handleFullScreen}
                size="medium"
                sx={{ color: "white", ml: 1 }}
              >
                <FullscreenIcon sx={{ transform: "scale(1.5)" }} />
              </IconButton>
            )}
          </Box>
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "hidden",
          overflowX: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ mb, mt }}>{content}</Box>

      <Dialog
        open={fullscreenOpen}
        onClose={handleFullScreen}
        fullScreen
      >
        {content}
      </Dialog>
    </>
  );
};

export default Container;
