import { Card, CardContent, Typography, Avatar, Stack } from '@mui/material';

export default function ProjectCard({ title, desc, date, participants }) {
  return (
    <Card sx={{ width: 280 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar>{title[0]}</Avatar>
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Typography sx={{ mt: 1 }}>{desc}</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          {participants} Participants • Due {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
