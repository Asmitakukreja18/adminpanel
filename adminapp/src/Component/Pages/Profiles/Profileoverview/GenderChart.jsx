import { Paper, Typography, Stack, Radio, RadioGroup, FormControlLabel } from '@mui/material';

export default function GenderCard() {
  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>Gender</Typography>
      <RadioGroup row defaultValue="all">
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="men" control={<Radio />} label="Men" />
        <FormControlLabel value="women" control={<Radio />} label="Women" />
      </RadioGroup>
    </Paper>
  );
}
