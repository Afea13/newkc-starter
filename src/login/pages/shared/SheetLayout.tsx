import React from 'react';

import {  Sheet } from '@mui/joy';

type LoginLayoutProps = {
  children: React.ReactNode;
  maxWidth?: number;
};

const SheetLayout: React.FC<LoginLayoutProps> = ({ children,maxWidth=472  }) => {
  return (
    <Sheet
    variant="plain"
    sx={{
      backgroundColor: 'white',
      boxShadow:
        ' 0px 6px 12px -2px rgba(21, 21, 21, 0.08), 0px 2px 8px -2px rgba(21, 21, 21, 0.08)',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 6,
      paddingRight: 6,
      borderRadius: '6px',
      maxWidth: {maxWidth},
      minWidth: 370,
    }}
  >
    {children}
    </Sheet>
  );
};

export default SheetLayout;
