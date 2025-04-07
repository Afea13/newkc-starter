import React from 'react';
import HPteallogo from '../../assets/img/HPteallogo.png';
import { Box, Stack } from '@mui/joy';

type LoginLayoutProps = {
  children: React.ReactNode;
};

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <Box paddingTop={{ xs: 4, sm: 6 }} paddingBottom={{ xs: 4, sm: 10 }}>
      <Stack alignItems="center">
        <Box paddingBottom={{ xs: 4, sm: 7 }}>
          <img src={HPteallogo} alt="hplogo" className="logo" width={280} />
        </Box>
        {/* Your layout content goes here */}
        {children}
      </Stack>
    </Box>
  );
};

export default LoginLayout;
