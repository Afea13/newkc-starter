import React from 'react';
import Typography from '@mui/joy/Typography';
import Alert from '@mui/joy/Alert';
import { getMessageColor, getMessageIcon } from './messageUtils';

interface AlertMessageProps {
  message?: {
    summary?: string;
    type?: 'success' | 'warning' | 'error' | 'info';
  };
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message }) => {

  if (!message) return null;

  const parseSummary = (summary: string | undefined) => {
    if (!summary) return null;
    const items = summary.split('<br>').map((line, index) => (
      <li key={index}>
        <Typography level="body-sm" color={getMessageColor(message.type)}>
          {line}
        </Typography>
      </li>
    ));
    return (
      <ul style={{ textAlign: 'left', paddingLeft: '20px', margin: '0' }}>
        {items}
      </ul>
    );
  };

  return (
    <Alert
      key={message.summary}
      color={getMessageColor(message.type)}
      variant="plain"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '8px' }}>{getMessageIcon(message.type)}</div>
      {parseSummary(message.summary)}
    </Alert>
  );
};

export default AlertMessage;
