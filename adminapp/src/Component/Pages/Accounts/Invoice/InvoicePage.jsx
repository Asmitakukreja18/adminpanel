import { Box } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './Invoicetopbar';
import PaymentForm from './PaymentForm';

export default function InvoicePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar title="Account/Invoice" />
        <Box sx={{ p: 3 }}>
          <PaymentForm />
        </Box>
      </Box>
    </Box>
  );
}
