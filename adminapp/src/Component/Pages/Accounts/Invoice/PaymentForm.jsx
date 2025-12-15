import { Card, TextField, Typography, Button, Checkbox, FormControlLabel, Grid } from '@mui/material';

export default function PaymentForm() {
  return (
    <Card sx={{ p: 3, width: '100%' }}>
      <Typography variant="h6">Payment method</Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={6}>
          <TextField fullWidth label="Card holder name" defaultValue="John Walden" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Billing address" defaultValue="Germany" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Zip code" defaultValue="6789123" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="City" defaultValue="Berlin" />
        </Grid>
      </Grid>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Invoice Address" sx={{ mt: 2 }} />
      <Button fullWidth variant="contained" sx={{ mt: 2 }} color="primary">
        Pay $67.00
      </Button>
    </Card>
  );
}
