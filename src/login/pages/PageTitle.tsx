import { Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import theme from '../../theme';
type titleProps = {
  title: string;
};
const PageTitle = ({ title }: titleProps): JSX.Element => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <div>
        <Typography level={isMobile ? 'h4' : 'title-lg'} paddingBottom={2} paddingTop={1}>
          {title}
        </Typography>
      </div>
    </>
  );
};

export default PageTitle;
