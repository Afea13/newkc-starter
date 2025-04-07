import { Cancel, CheckCircle, InfoOutlined } from '@mui/icons-material';

export const getMessageColor = (
  type: 'success' | 'warning' | 'error' | 'info' | undefined
): 'danger' | 'neutral' | 'primary' | 'success' | 'warning' => {
  const colorMap: { [key: string]: 'danger' | 'neutral' | 'primary' | 'success' | 'warning' } = {
    success: 'success',
    warning: 'neutral',
    error: 'danger',
    info: 'neutral',
  };
  if (type === undefined) {
    return 'neutral';
  }
  return colorMap[type];
};

export const getMessageIcon = (
  type: 'success' | 'warning' | 'error' | 'info' | undefined
): JSX.Element | undefined => {
  const iconMap: { [key: string]: JSX.Element } = {
    success: <CheckCircle />,
    error: <Cancel />,
    info: <InfoOutlined />,
  };
  if (type === undefined) {
    return undefined;
  }
  return iconMap[type] || undefined;
};
