import { Box } from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import Topbar from './kanbantopbar';
import KanbanBoard from './Kanban';

function Kanban() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <KanbanBoard />
      </Box>
    </Box>
  );
}

export default Kanban;
