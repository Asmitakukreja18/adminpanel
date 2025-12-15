import { Box } from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import Topbar from './Datatabletopbar';
import DataTables from './Datatables';

function Datamain() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <DataTables />
      </Box>
    </Box>
  );
}
export default DataTables;