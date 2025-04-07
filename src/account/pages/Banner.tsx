import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import { Typography, Link } from '@mui/joy';
import './bannerStyle.css';

import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import HealthPathwaysLogoSmall from '../assets/HubIcon.svg';
import HealthPathwaysLogo from '../assets/HPteallogo.svg';
import HPLogout from '../assets/LogoutFilled.svg';

interface BannerProps {
  url?: string;
}
const Banner = ({ url }: BannerProps): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [logo, setLogo] = useState(HealthPathwaysLogo);
  const [logoClass, setLogoClass] = useState('');

  useEffect(() => {
    if (matches) {
      setLogo(HealthPathwaysLogoSmall);
      setLogoClass('banner-logo-xs');
    } else {
      setLogo(HealthPathwaysLogo);
      setLogoClass('banner-logo');
    }
  }, [matches]);

  return (
    <Box className="banner-container">
      <Stack direction="row" justifyContent="center" alignItems="center" marginLeft={2}>
        <Link href="https://hub.healthpathwayscommunity.org" target="_blank">
          {<img src={logo} alt="hplogo" className={logoClass} />}
        </Link>

        <Typography level="h4" className="banner-text">
          Account
        </Typography>
      </Stack>

      {
        <>
          <Box className="banner-signout" marginRight={{ sm: 3 }}>
            <Button
              component="a"
              variant="plain"
              size="sm"
              className="banner-signout-button"
              href={url}
              startDecorator={
                <img src={HPLogout} alt="hplogo" className="logo" width={18} height={18} />
              }
            >
              {!matches && <Typography level="body-sm">Sign out</Typography>}
            </Button>
          </Box>
        </>
      }
    </Box>
  );
};

export default Banner;
