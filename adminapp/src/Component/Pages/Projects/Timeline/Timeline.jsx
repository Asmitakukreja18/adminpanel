import React from 'react';
import { Box, Typography, Chip, Divider, useTheme } from '@mui/material';
import {
  AttachMoney as AttachMoneyIcon,
  PhoneIphone as PhoneIphoneIcon,
  Storage as StorageIcon,
  CreditCard as CreditCardIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from '@mui/icons-material';

const timelineData = [
  {
    icon: <AttachMoneyIcon sx={{ color: '#9c27b0' }} />,
    title: '$8900, Design changes',
    date: '12 Dec 7:30 PM',
    description:
      'People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.',
    tags: [{ label: 'Design', color: '#9c27b0' }],
  },
  {
    icon: <PhoneIphoneIcon sx={{ color: '#03a9f4' }} />,
    title: 'New order #1832412',
    date: '21 Dec 11 PM',
    description:
      'People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.',
    tags: [
      { label: 'ORDER', color: '#03a9f4' },
      { label: '#1832', color: '#00bcd4' },
    ],
  },
  {
    icon: <StorageIcon sx={{ color: '#3f51b5' }} />,
    title: 'Server payments for April',
    date: '21 Dec 9:34 PM',
    description:
      'People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.',
    tags: [
      { label: 'Server', color: '#3f51b5' },
      { label: 'Payment', color: '#673ab7' },
    ],
  },
  {
    icon: <CreditCardIcon sx={{ color: '#ba68c8' }} />,
    title: 'New card added for order #4395133',
    date: '20 Dec 2:20 AM',
    description:
      'People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.',
    tags: [
      { label: 'CARD', color: '#ba68c8' },
      { label: '#439', color: '#ce93d8' },
    ],
  },
  {
    icon: <FavoriteIcon sx={{ color: '#f44336' }} />,
    title: 'Unlock packages for development',
    date: '18 Dec 4:54 AM',
    description:
      'People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.',
    tags: [{ label: 'Develop', color: '#f44336' }],
  },
  {
    icon: <MailIcon sx={{ color: '#9c27b0' }} />,
    title: 'New message unread',
    date: '16 Dec',
    description:
      'People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.',
    tags: [],
  },
];

const TimelineCard = ({ isDark }) => {
  const theme = useTheme();
  const bgColor = isDark ? '#2c2c34' : '#f9f9f9';
  const textColor = isDark ? '#fff' : '#000';

  return (
    <Box
      sx={{
        background: bgColor,
        color: textColor,
        p: 3,
        borderRadius: 3,
        flex: 1,
        mx: 1,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={3}>
        Timeline with dotted line
      </Typography>

      <Box
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 20,
            width: '2px',
            height: '100%',
            backgroundImage: 'linear-gradient(#aaa 40%, transparent 0)',
            backgroundSize: '1px 12px',
            backgroundRepeat: 'repeat-y',
          },
        }}
      >
        {timelineData.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 3, pl: 4 }}>
            <Box sx={{ position: 'relative', mr: 2, mt: 0.5 }}>{item.icon}</Box>
            <Box>
              <Typography fontWeight={600}>{item.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {item.date}
              </Typography>
              <Typography variant="body2" mt={1} mb={1}>
                {item.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {item.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag.label}
                    size="small"
                    sx={{ backgroundColor: tag.color, color: '#fff' }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function TimelinePage() {
  return (
    <Box sx={{ display: 'flex', gap: 2, px: 2, py: 4, flexWrap: 'wrap' }}>
      <TimelineCard isDark={false} />
      <TimelineCard isDark={true} />
    </Box>
  );
}
