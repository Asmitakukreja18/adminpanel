import { Box } from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import Topbar from './Wizardtopbar';
import WizardForm from './Wizardform';

function Wizard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <WizardForm />
      </Box>
    </Box>
  );
}

export default  Wizard;
