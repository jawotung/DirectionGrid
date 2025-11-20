import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, Box } from '@mui/material';

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '50px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" sx={{ color: theme.palette.error.main }}>
        Page not found
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
};

export default NotFound;
