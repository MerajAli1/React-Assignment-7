import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingScreen() {
  return (
    <Box sx={{ display: 'flex' ,justifyContent:"center"}}>
      <img src="https://s3.scoopwhoop.com/anj/loading/594155876.gif" alt="" srcset="" />
    </Box>
  );
}